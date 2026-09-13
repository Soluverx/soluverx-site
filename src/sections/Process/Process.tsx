import { useEffect, useRef } from 'react'
import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Você conta o problema',
    text: 'Você explica o que está dando trabalho hoje. Não precisa saber o nome da solução, a tecnologia ou chegar com um escopo pronto.',
  },
  {
    number: '02',
    title: 'Entendemos o contexto',
    text: 'Conversamos sobre como o processo funciona hoje, onde estão as dificuldades e o que você gostaria de melhorar.',
  },
  {
    number: '03',
    title: 'Avaliamos o que faz sentido',
    text: 'Antes de propor qualquer desenvolvimento, analisamos se a tecnologia realmente pode ajudar e qual tipo de solução faz mais sentido.',
  },
  {
    number: '04',
    title: 'Organizamos a proposta',
    text: 'Se houver um caminho viável, definimos o que será feito, prioridades, limites e próximos passos.',
  },
  {
    number: '05',
    title: 'Desenvolvemos e validamos',
    text: 'A solução é construída por etapas, com validações ao longo do caminho para evitar desenvolver algo distante da necessidade real.',
  },
  {
    number: '06',
    title: 'Entregamos e orientamos',
    text: 'Na entrega, você entende o que foi desenvolvido e quais caminhos existem caso faça sentido continuar evoluindo.',
  },
]


const mobileSteps = [
  {
    number: '01',
    title: 'Você conta o problema',
    text: 'Não precisa chegar sabendo qual tecnologia precisa.',
  },
  {
    number: '02',
    title: 'Entendemos e desenhamos o caminho',
    text: 'Avaliamos o contexto e organizamos o que realmente faz sentido construir.',
  },
  {
    number: '03',
    title: 'Construímos e entregamos',
    text: 'Desenvolvimento próximo, validação e orientação na entrega.',
  },
]

function Process() {
  const journeyRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const journey = journeyRef.current

    if (!journey) {
      return
    }

    const items = Array.from(
      journey.querySelectorAll<HTMLElement>('.process__step'),
    )

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('process__step--visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.42,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="process" id="processo">
      <div className="process__container">
        <header className="process__header">
          <span className="process__eyebrow">Como trabalhamos</span>

          <h2 className="process__title">
            O que acontece quando você fala com a Soluverx?
          </h2>

          <p className="process__intro">
            Você não precisa chegar com uma solução pronta. O processo começa
            entendendo o problema e só avança quando existe clareza sobre o que
            realmente faz sentido construir.
          </p>
        </header>

        <div className="process__mobile">
          {mobileSteps.map((step) => (
            <article className="process__mobile-step" key={step.number}>
              <span>{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}

          <div className="process__mobile-closing">
            <span>Clareza antes de complexidade.</span>
            <a href="#contato">Quero conversar <span aria-hidden="true">→</span></a>
          </div>
        </div>

        <div className="process__journey" ref={journeyRef}>
          <div className="process__axis-base" aria-hidden="true" />

          {steps.map((step, index) => (
            <article
              className={`process__step ${
                index % 2 === 0
                  ? 'process__step--left'
                  : 'process__step--right'
              }`}
              key={step.number}
            >
              <span className="process__segment" aria-hidden="true" />

              <div className="process__step-content">
                <span className="process__number">{step.number}</span>

                <div className="process__copy">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>

              <span className="process__node" aria-hidden="true">
                <span />
              </span>
            </article>
          ))}
        </div>

        <div className="process__closing">
          <span className="process__closing-kicker">
            Clareza antes de complexidade
          </span>

          <a className="process__closing-link" href="#contato">
            Quer entender se vale a pena conversar sobre isso?
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Process
