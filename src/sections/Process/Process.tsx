import { motion, useReducedMotion } from 'motion/react'
import './Process.css'

const steps = [
  {
    number: '01',
    title: 'Entendimento',
    description:
      'Primeiro buscamos entender o problema, o contexto e o que realmente precisa ser resolvido.',
  },
  {
    number: '02',
    title: 'Planejamento',
    description:
      'Organizamos requisitos, prioridades, escopo e a melhor forma de estruturar a solução.',
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description:
      'A solução começa a ser construída de forma organizada, com foco no que foi definido.',
  },
  {
    number: '04',
    title: 'Testes',
    description:
      'Validamos funcionamento, fluxos e detalhes importantes antes da entrega.',
  },
  {
    number: '05',
    title: 'Entrega',
    description:
      'A solução é disponibilizada com orientações claras e espaço para ajustes necessários.',
  },
]

function Process() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="process" id="processo">
      <div className="process__container">
        <motion.div
          className="process__header"
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
          <span className="process__eyebrow">
            Como trabalhamos
          </span>

          <h2 className="process__title">
            Primeiro entendemos. Depois desenvolvemos.
          </h2>

          <p className="process__intro">
            Cada projeto passa por etapas claras para reduzir improvisos,
            alinhar expectativas e manter o desenvolvimento organizado.
          </p>
        </motion.div>

        <motion.div
          className="process__timeline"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.18,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.13,
                delayChildren: reduceMotion ? 0 : 0.08,
              },
            },
          }}
        >
          <motion.div
            className="process__line-progress"
            variants={{
              hidden: reduceMotion
                ? { scaleX: 1 }
                : { scaleX: 0 },
              visible: {
                scaleX: 1,
                transition: {
                  duration: reduceMotion ? 0 : 0.95,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            aria-hidden="true"
          />

          {steps.map((step) => (
            <motion.article
              className="process-step"
              key={step.number}
              variants={{
                hidden: reduceMotion
                  ? {
                      opacity: 1,
                      y: 0,
                    }
                  : {
                      opacity: 0,
                      y: 28,
                    },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: reduceMotion ? 0 : 0.58,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <motion.div
                className="process-step__marker"
                variants={{
                  hidden: reduceMotion
                    ? { scale: 1 }
                    : { scale: 0.82 },
                  visible: {
                    scale: 1,
                    transition: {
                      duration: reduceMotion ? 0 : 0.45,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                <span>{step.number}</span>
              </motion.div>

              <div className="process-step__content">
                <h3 className="process-step__title">
                  {step.title}
                </h3>

                <p className="process-step__description">
                  {step.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Process