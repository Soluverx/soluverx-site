import { useState } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import './FAQ.css'

const questions = [
  {
    question: 'Que tipos de software a Soluverx desenvolve?',
    answer:
      'Desenvolvemos sistemas sob medida, dashboards, automações, integrações, ferramentas internas e MVPs, sempre partindo da necessidade real de cada projeto.',
  },
  {
    question: 'A Soluverx aceita qualquer tipo de projeto?',
    answer:
      'Cada demanda é analisada antes de qualquer compromisso. Avaliamos necessidade, complexidade, prazo, viabilidade e capacidade de atendimento antes de confirmar o projeto.',
  },
  {
    question: 'Quanto custa desenvolver um sistema?',
    answer:
      'O valor depende do escopo, da complexidade, das integrações necessárias e do tempo de desenvolvimento. Por isso, o orçamento é definido somente após entendermos melhor a necessidade.',
  },
  {
    question: 'Quanto tempo leva para desenvolver uma solução?',
    answer:
      'O prazo varia de acordo com o tamanho e a complexidade do projeto. Depois da etapa de entendimento e planejamento, conseguimos estimar o desenvolvimento com mais segurança.',
  },
  {
    question: 'Vocês trabalham com pequenas empresas?',
    answer:
      'Sim. A Soluverx atende empresas e negócios que precisam organizar processos, reduzir tarefas manuais, integrar informações ou criar soluções específicas para sua operação.',
  },
  {
    question: 'É possível integrar com sistemas que já utilizamos?',
    answer:
      'Em muitos casos, sim. A possibilidade depende de como o sistema atual disponibiliza os dados, por exemplo por API, arquivos, relatórios ou outros meios de integração.',
  },
  {
    question: 'Posso entrar em contato mesmo sem saber exatamente o que preciso?',
    answer:
      'Sim. Você pode explicar o problema, a dificuldade ou o processo que gostaria de melhorar. A partir disso, ajudamos a entender se uma solução de software faz sentido.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const reduceMotion = useReducedMotion()

  function toggleQuestion(index: number) {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? null : index,
    )
  }

  return (
    <section className="faq" id="faq">
      <div className="faq__container">
        <motion.div
          className="faq__header"
          initial={
            reduceMotion
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: -24 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="faq__eyebrow">
            Perguntas frequentes
          </span>

          <h2 className="faq__title">
            Dúvidas antes de começar um projeto?
          </h2>

          <p className="faq__intro">
            Algumas respostas para ajudar a entender como funciona o primeiro
            contato e o desenvolvimento de uma solução com a Soluverx.
          </p>
        </motion.div>

        <motion.div
          className="faq__list"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: reduceMotion ? 0 : 0.07,
              },
            },
          }}
        >
          {questions.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <motion.article
                className={`faq-item ${
                  isOpen ? 'faq-item--open' : ''
                }`}
                key={item.question}
                variants={{
                  hidden: reduceMotion
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: reduceMotion ? 0 : 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                <button
                  className="faq-item__button"
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                >
                  <span className="faq-item__question">
                    {item.question}
                  </span>

                  <span
                    className="faq-item__icon"
                    aria-hidden="true"
                  >
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div className="faq-item__answer">
                  <div className="faq-item__answer-inner">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ