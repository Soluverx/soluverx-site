import { motion, useReducedMotion } from 'motion/react'
import './Solutions.css'

const solutions = [
  {
    title: 'Sistemas sob medida',
    description:
      'Soluções desenvolvidas a partir da necessidade real do negócio, sem depender de processos engessados.',
  },
  {
    title: 'Dashboards',
    description:
      'Painéis claros para acompanhar indicadores, dados importantes e o que está acontecendo no negócio.',
  },
  {
    title: 'Automações',
    description:
      'Redução de tarefas repetitivas por meio de fluxos automatizados e processos mais eficientes.',
  },
  {
    title: 'Integrações',
    description:
      'Conexão entre sistemas, ferramentas e fontes de dados que hoje funcionam de forma separada.',
  },
  {
    title: 'Ferramentas internas',
    description:
      'Aplicações criadas para organizar operações, controles, equipes e rotinas específicas.',
  },
  {
    title: 'MVPs',
    description:
      'Versões iniciais de produtos digitais para validar ideias com estrutura, clareza e menor risco.',
  },
]

function Solutions() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="solutions" id="solucoes">
      <div className="solutions__container">
        <motion.div
          className="solutions__header"
          initial={
            reduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 28 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="solutions__eyebrow">Soluções</span>

          <h2 className="solutions__title">
            Quando o problema é específico, a solução também pode ser.
          </h2>

          <p className="solutions__intro">
            Desenvolvemos soluções digitais pensadas para a realidade de cada
            projeto, buscando simplificar processos, organizar informações e
            gerar mais clareza para o negócio.
          </p>
        </motion.div>

        <motion.div
          className="solutions__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.09,
              },
            },
          }}
        >
          {solutions.map((solution, index) => (
            <motion.article
              className="solution-card"
              key={solution.title}
              variants={{
                hidden: reduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 24 },
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
              <div className="solution-card__top">
                <span className="solution-card__number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="solution-card__arrow" aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className="solution-card__content">
                <h3 className="solution-card__title">
                  {solution.title}
                </h3>

                <p className="solution-card__description">
                  {solution.description}
                </p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="solutions__footer"
          initial={
            reduceMotion
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: reduceMotion ? 0 : 0.55,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="solutions__footer-text">
            Tem uma necessidade específica e não encontrou uma solução pronta
            que realmente resolva?
          </p>

          <a href="#contato" className="solutions__cta">
            Conte sua necessidade
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Solutions