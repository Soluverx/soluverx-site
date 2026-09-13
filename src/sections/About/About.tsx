import { useEffect, useRef } from 'react'
import './About.css'

const pillars = [
  {
    number: '01',
    title: 'Sob medida',
    text: 'Cada projeto parte da realidade da operação, não de uma solução pronta.',
  },
  {
    number: '02',
    title: 'Clareza no processo',
    text: 'Decisões, limites e próximos passos são explicados ao longo do projeto.',
  },
  {
    number: '03',
    title: 'Desenvolvimento próximo',
    text: 'O contato acontece de forma direta, do entendimento inicial até a entrega.',
  },
]

function About() {
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add('about--visible')
          observer.disconnect()
        }
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(section)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="about" id="sobre" ref={sectionRef}>
      <div className="about__container">
        <div className="about__mobile-trust">
          <span className="about__eyebrow">Quem conduz o projeto</span>
          <h2>Você fala diretamente com quem entende e desenvolve a solução.</h2>
          <p>
            Na Soluverx, o contato é direto do entendimento inicial à entrega.
            Isso reduz ruído, facilita decisões e mantém o projeto próximo da
            necessidade real do negócio.
          </p>
        </div>
        <header className="about__header">
          <span className="about__eyebrow">Sobre a Soluverx</span>

          <h2 className="about__title">
            Soluções digitais pensadas a partir de problemas reais.
          </h2>

          <div className="about__copy">
            <p>
              A Soluverx nasceu com uma proposta simples: entender dificuldades
              reais de negócios e transformar essas necessidades em soluções
              digitais claras, úteis e sob medida.
            </p>

            <p>
              O foco não é desenvolver software por desenvolver. Primeiro vêm o
              problema, o contexto e o que realmente precisa melhorar. A
              tecnologia entra quando faz sentido.
            </p>
          </div>
        </header>

        <div className="about__pillars">
          {pillars.map((pillar) => (
            <article className="about__pillar" key={pillar.number}>
              <span className="about__pillar-number">{pillar.number}</span>

              <div>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="about__founder">
          <div className="about__founder-image-wrap">
            <img
              src="/about/eric-rodrigues.webp"
              alt="Eric Rodrigues Campos"
              className="about__founder-image"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="about__founder-copy">
            <span className="about__founder-kicker">Responsável pela Soluverx</span>

            <strong>Eric Rodrigues Campos</strong>
            <span>Engenharia de Software</span>
          </div>

          <div className="about__founder-detail" aria-hidden="true">
            <span />
          </div>
        </div>

        <div className="about__mobile-values" aria-label="Como a Soluverx trabalha">
          <span>Contato direto</span>
          <span>Desenvolvimento sob medida</span>
          <span>Clareza no processo</span>
        </div>
      </div>
    </section>
  )
}

export default About
