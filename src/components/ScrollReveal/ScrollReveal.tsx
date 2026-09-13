import { useLayoutEffect } from 'react'
import './ScrollReveal.css'

function ScrollReveal() {
  useLayoutEffect(() => {
    const root = document.documentElement
    const selector = '[data-reveal], [data-reveal-stagger]'
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>(selector),
    )

    if (elements.length === 0) {
      return
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-revealed'))
      return
    }

    root.classList.add('reveal-ready')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          const element = entry.target as HTMLElement

          requestAnimationFrame(() => {
            element.classList.add('is-revealed')
          })

          observer.unobserve(element)
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -22% 0px',
      },
    )

    let frameOne = 0
    let frameTwo = 0

    frameOne = requestAnimationFrame(() => {
      frameTwo = requestAnimationFrame(() => {
        elements.forEach((element) => observer.observe(element))
      })
    })

    return () => {
      cancelAnimationFrame(frameOne)
      cancelAnimationFrame(frameTwo)
      observer.disconnect()
      root.classList.remove('reveal-ready')
    }
  }, [])

  return null
}

export default ScrollReveal
