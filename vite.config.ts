import react from '@vitejs/plugin-react'
import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { defineConfig, type Plugin } from 'vite'
import {
  servicePagesMetadata,
  type ServiceMetadata,
} from './src/config/serviceMetadata.ts'

const siteUrl = 'https://www.soluverx.com.br'

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
}

function replaceMeta(
  html: string,
  attribute: 'name' | 'property',
  key: string,
  value: string,
) {
  const pattern = new RegExp(
    `<meta\\s+${attribute}="${key}"\\s+content="[^"]*"\\s*\\/?>`,
    'i',
  )

  return html.replace(
    pattern,
    `<meta ${attribute}="${key}" content="${escapeHtml(value)}" />`,
  )
}

function applyServiceMetadata(html: string, metadata: ServiceMetadata) {
  const url = `${siteUrl}${metadata.path}`
  const socialDescription = metadata.socialDescription ?? metadata.description
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: metadata.serviceName,
    serviceType: metadata.serviceName,
    url,
    description: metadata.description,
    areaServed: 'BR',
    provider: {
      '@type': 'Organization',
      name: 'Soluverx',
      url: `${siteUrl}/`,
    },
  }

  let result = html
    .replace(
      /<title>[\s\S]*?<\/title>/i,
      `<title>${escapeHtml(metadata.title)}</title>`,
    )
    .replace(
      /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
      `<link rel="canonical" href="${url}" />`,
    )
    .replace(
      /<script type="application\/ld\+json">[\s\S]*?<\/script>/i,
      `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`,
    )

  result = replaceMeta(result, 'name', 'description', metadata.description)
  result = replaceMeta(result, 'property', 'og:url', url)
  result = replaceMeta(result, 'property', 'og:title', metadata.title)
  result = replaceMeta(result, 'property', 'og:description', socialDescription)
  result = replaceMeta(
    result,
    'property',
    'og:image:alt',
    `${metadata.serviceName} | Soluverx`,
  )
  result = replaceMeta(result, 'name', 'twitter:title', metadata.title)
  result = replaceMeta(
    result,
    'name',
    'twitter:description',
    socialDescription,
  )
  result = replaceMeta(
    result,
    'name',
    'twitter:image:alt',
    `${metadata.serviceName} | Soluverx`,
  )

  return result
}

function solutionRouteHtml(): Plugin {
  return {
    name: 'soluverx-solution-route-html',
    enforce: 'post',
    configureServer(server) {
      server.middlewares.use(async (request, response, next) => {
        const path = request.url?.split('?')[0].replace(/\/$/, '') || '/'
        const metadata = servicePagesMetadata.find((page) => page.path === path)

        if (!metadata) {
          next()
          return
        }

        try {
          const template = await readFile(
            resolve(server.config.root, 'index.html'),
            'utf8',
          )
          const html = await server.transformIndexHtml(path, template)

          response.statusCode = 200
          response.setHeader('Content-Type', 'text/html; charset=utf-8')
          response.end(html)
        } catch (error) {
          next(error)
        }
      })
    },
    transformIndexHtml(html, context) {
      const path = context.path.replace(/\/$/, '') || '/'
      const metadata = servicePagesMetadata.find((page) => page.path === path)

      return metadata ? applyServiceMetadata(html, metadata) : html
    },
    generateBundle(_options, bundle) {
      const indexHtml = bundle['index.html']

      if (!indexHtml || indexHtml.type !== 'asset') return

      const source = String(indexHtml.source)

      servicePagesMetadata.forEach((metadata) => {
        this.emitFile({
          type: 'asset',
          fileName: `${metadata.path.slice(1)}/index.html`,
          source: applyServiceMetadata(source, metadata),
        })
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), solutionRouteHtml()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        privacy: 'privacy.html',
      },
    },
  },
})
