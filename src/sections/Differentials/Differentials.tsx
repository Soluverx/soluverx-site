import { motion, useReducedMotion } from 'motion/react'
import './Differentials.css'

const differentials = [
  {
    title: 'Contato direto',
    description:
      'Você conversa diretamente com quem está analisando e desenvolvendo a solução.',
  },
  {
    title: 'Análise antes de prometer',
    description:
      'Primeiro entendemos o cenário, os limites e a viabilidade antes de assumir qualquer compromisso.',
  },
  {
    title: 'Solução sob medida',
    description:
      'Cada projeto parte da necessidade real do negócio, sem tentar encaixar o problema em uma solução genérica.',
  },
  {
    title: 'Organização',
    description:
      'Requisitos, etapas e decisões são estruturados para manter o projeto claro do início ao fim.',
  },
  {
    title: 'Transparência',
    description:
      'Escopo, andamento, limitações e próximos passos são tratados com clareza durante o desenvolvimento.',
  },
  {
    title: 'Capacidade controlada',
    description:
      'A quantidade de projetos é limitada para preservar acompanhamento, qualidade e responsabilidade nas entregas.',
  },
]

function Differentials() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="differentials" id="diferenciais">
      <div className="differentials__container">
        <motion.div
          className="differentials__header"
          initial={
            reduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 28 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.35,
          }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="differentials__eyebrow">
            Por que trabalhar conosco
          </span>

          <h2 className="differentials__title">
            Desenvolvimento com clareza do início ao fim.
          </h2>

          <p className="differentials__intro">
            Mais do que desenvolver software, buscamos conduzir cada projeto
            com proximidade, organização e responsabilidade.
          </p>
        </motion.div>

        <motion.div
          className="differentials__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.09,
                delayChildren: reduceMotion ? 0 : 0.05,
              },
            },
          }}
        >
          {differentials.map((differential, index) => (
            <motion.article
              className="differential-card"
              key={differential.title}
              variants={{
                hidden: reduceMotion
                  ? { opacity: 1, y: 0 }
                  : {
                      opacity: 0,
                      y: 24,
                    },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: reduceMotion ? 0 : 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <span className="differential-card__number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <div className="differential-card__content">
                <h3 className="differential-card__title">
                  {differential.title}
                </h3>

                <p className="differential-card__description">
                  {differential.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Differentials