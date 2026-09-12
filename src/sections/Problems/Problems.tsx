import { motion, useReducedMotion } from 'motion/react'
import './Problems.css'

const problems = [
  {
    title: 'Processos manuais',
    description:
      'Tarefas repetitivas consomem tempo e aumentam a chance de erro no dia a dia.',
  },
  {
    title: 'Informações espalhadas',
    description:
      'Dados ficam divididos entre planilhas, mensagens, sistemas e anotações diferentes.',
  },
  {
    title: 'Retrabalho',
    description:
      'A mesma informação precisa ser digitada, conferida ou organizada várias vezes.',
  },
  {
    title: 'Falta de visibilidade',
    description:
      'Sem uma visão clara dos dados, decisões importantes ficam mais lentas e difíceis.',
  },
  {
    title: 'Ferramentas inadequadas',
    description:
      'Nem sempre uma solução pronta acompanha a forma como cada negócio realmente funciona.',
  },
  {
    title: 'Dificuldade para escalar',
    description:
      'Processos que funcionam no início podem se tornar lentos, confusos e difíceis de manter conforme o negócio cresce.',
  },
]

function Problems() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="problems" id="problemas">
      <div className="problems__container">
        <motion.div
          className="problems__header"
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
          <span className="problems__eyebrow">Problemas reais</span>

          <h2 className="problems__title">
            Nem todo problema precisa de mais uma planilha.
          </h2>

          <p className="problems__intro">
            Quando processos começam a depender de controles manuais,
            informações espalhadas e tarefas repetitivas, a tecnologia pode
            ajudar a organizar o trabalho de forma mais simples e eficiente.
          </p>
        </motion.div>

        <motion.div
          className="problems__grid"
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
                delayChildren: reduceMotion ? 0 : 0.04,
              },
            },
          }}
        >
          {problems.map((problem, index) => (
            <motion.article
              className="problem-card"
              key={problem.title}
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
              <span className="problem-card__number">
                {String(index + 1).padStart(2, '0')}
              </span>

              <h3 className="problem-card__title">
                {problem.title}
              </h3>

              <p className="problem-card__description">
                {problem.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Problems