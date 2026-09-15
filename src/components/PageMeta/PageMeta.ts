import { useEffect } from 'react'
import type { ServiceMetadata } from '../../config/serviceMetadata'

const siteUrl = 'https://www.soluverx.com.br'

export function usePageMeta({
  title,
  description,
  path,
  serviceName,
  socialDescription = description,
}: ServiceMetadata) {
  useEffect(() => {
    const url = `${siteUrl}${path}`
    const setMeta = (selector: string, content: string) => {
      const element = document.querySelector<HTMLMetaElement>(selector)
      if (element) element.content = content
    }

    document.title = title
    setMeta('meta[name="description"]', description)
    setMeta('meta[property="og:url"]', url)
    setMeta('meta[property="og:title"]', title)
    setMeta('meta[property="og:description"]', socialDescription)
    setMeta('meta[property="og:image:alt"]', `${serviceName} | Soluverx`)
    setMeta('meta[name="twitter:title"]', title)
    setMeta('meta[name="twitter:description"]', socialDescription)
    setMeta('meta[name="twitter:image:alt"]', `${serviceName} | Soluverx`)

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (canonical) canonical.href = url

    const structuredData = document.querySelector<HTMLScriptElement>(
      'script[type="application/ld+json"]',
    )
    if (structuredData) {
      structuredData.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: serviceName,
        serviceType: serviceName,
        url,
        description,
        areaServed: 'BR',
        provider: {
          '@type': 'Organization',
          name: 'Soluverx',
          url: `${siteUrl}/`,
        },
      })
    }

    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [description, path, serviceName, socialDescription, title])
}
