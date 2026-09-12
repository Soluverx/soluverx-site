import { motion, useReducedMotion } from 'motion/react'
import './About.css'

const panelItems = [
  {
    number: '01',
    title: 'Desenvolvimento independente',
    description:
      'Estrutura enxuta, contato direto e decisões tomadas com proximidade durante o projeto.',
  },
  {
    number: '02',
    title: 'Software sob medida',
    description:
      'A solução parte da necessidade do negócio, e não de um produto pronto tentando servir para todos.',
  },
  {
    number: '03',
    title: 'Crescimento responsável',
    description:
      'A capacidade de atendimento cresce junto com a estrutura, evitando promessas além do que pode ser entregue.',
  },
]

function About() {
  const reduceMotion = useReducedMotion()

  return (
    <section className="about" id="sobre">
      <div className="about__container">
        <motion.div
          className="about__content"
          initial={
            reduceMotion
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: -28 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="about__eyebrow">Sobre a Soluverx</span>

          <h2 className="about__title">
            Tecnologia com proximidade, método e responsabilidade.
          </h2>

          <div className="about__text">
            <p>
              A Soluverx nasceu com a proposta de desenvolver soluções digitais
              sob medida para empresas que precisam organizar processos,
              integrar informações e resolver necessidades que ferramentas
              genéricas nem sempre atendem bem.
            </p>

            <p>
              Cada projeto começa pelo entendimento do problema. A partir disso,
              estruturamos a necessidade, definimos prioridades e desenvolvemos
              a solução de forma organizada e transparente.
            </p>

            <p>
              O crescimento é conduzido de forma responsável, com capacidade
              controlada de projetos e foco em qualidade, clareza e contato
              direto durante todo o desenvolvimento.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="about__panel"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.11,
              },
            },
          }}
        >
          {panelItems.map((item) => (
            <motion.div
              className="about__panel-item"
              key={item.number}
              variants={{
                hidden: reduceMotion
                  ? { opacity: 1, x: 0 }
                  : { opacity: 0, x: 24 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: {
                    duration: reduceMotion ? 0 : 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  },
                },
              }}
            >
              <span className="about__panel-label">
                {item.number}
              </span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About