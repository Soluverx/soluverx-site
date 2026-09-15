import { useEffect } from 'react'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ScrollReveal from '../../components/ScrollReveal/ScrollReveal'

import Hero from '../../sections/Hero/Hero'
import Problems from '../../sections/Problems/Problems'
import Inclusion from '../../sections/Inclusion/Inclusion'
import Solutions from '../../sections/Solutions/Solutions'
import Process from '../../sections/Process/Process'
import Differentials from '../../sections/Differentials/Differentials'
import About from '../../sections/About/About'
import FAQ from '../../sections/FAQ/FAQ'
import Contact from '../../sections/Contact/Contact'

const homeUrl = 'https://www.soluverx.com.br/'
const homeTitle = 'Soluverx | Software sob medida para necessidades reais'
const homeDescription =
  'Empresa de software especializada em desenvolvimento de software sob medida, dashboards empresariais, automação de processos e integração de sistemas.'

function Home() {
  useEffect(() => {
    const setMetaContent = (selector: string, content: string) => {
      const meta = document.querySelector<HTMLMetaElement>(selector)
      if (meta) meta.content = content
    }

    document.title = homeTitle
    setMetaContent('meta[name="description"]', homeDescription)
    setMetaContent('meta[property="og:url"]', homeUrl)
    setMetaContent('meta[property="og:title"]', homeTitle)
    setMetaContent(
      'meta[property="og:description"]',
      'Software sob medida, dashboards empresariais, automação de processos e integração de sistemas a partir da necessidade real de cada empresa.',
    )
    setMetaContent('meta[name="twitter:title"]', homeTitle)
    setMetaContent(
      'meta[name="twitter:description"]',
      'Software sob medida, dashboards empresariais, automação de processos e integração de sistemas para empresas.',
    )

    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const structuredData = document.querySelector<HTMLScriptElement>(
      'script[type="application/ld+json"]',
    )

    if (canonical) canonical.href = homeUrl

    if (structuredData) {
      structuredData.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Soluverx',
        url: homeUrl,
        logo: 'https://www.soluverx.com.br/social/logo-soluverx.png',
        description: homeDescription,
      })
    }

    if (window.location.hash) {
      const targetId = window.location.hash.slice(1)

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const target = document.getElementById(targetId)

          if (target) {
            target.scrollIntoView({ behavior: 'auto', block: 'start' })
          }
        })
      })
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }, [])

  return (
    <>
      <ScrollReveal />
      <Header />

      <main>
        <Hero />
        <Problems />
        <Inclusion />
        <Solutions />
        <Process />
        <Differentials />
        <About />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default Home
