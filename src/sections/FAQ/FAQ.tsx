import { useState } from 'react'
import './FAQ.css'

type FAQItem = {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'Posso entrar em contato mesmo sem saber exatamente o que preciso?',
    answer:
      'Sim. Você pode explicar o problema, a tarefa ou o processo que está dando trabalho. A partir disso, a Soluverx ajuda a entender se existe uma solução digital que faça sentido.',
  },
  {
    question: 'Meu problema precisa ser grande para valer a pena conversar?',
    answer:
      'Não. Às vezes a necessidade é pontual, como automatizar uma tarefa, organizar uma informação ou conectar duas ferramentas. O importante é avaliar se existe ganho real em resolver aquilo.',
  },
  {
    question: 'A Soluverx trabalha só com sistemas completos?',
    answer:
      'Não. Dependendo da necessidade, a solução pode ser uma automação, dashboard, integração, ferramenta interna, MVP ou algo mais completo.',
  },
  {
    question: 'Vocês conseguem integrar com sistemas que eu já uso?',
    answer:
      'Em alguns casos, sim. Isso depende de como o sistema disponibiliza os dados, por exemplo por API, exportação, relatórios ou outros meios de integração.',
  },
  {
    question: 'Como funciona o orçamento?',
    answer:
      'Primeiro é preciso entender o problema, o escopo e o nível de complexidade. Só depois faz sentido organizar uma proposta.',
  },
  {
    question: 'Posso começar com uma versão menor?',
    answer:
      'Sim. Quando fizer sentido, o projeto pode começar com uma primeira versão mais simples e evoluir depois.',
  },
  {
    question: 'Quanto tempo leva um projeto?',
    answer:
      'Depende do escopo e da complexidade. Projetos pequenos podem ser mais rápidos, enquanto soluções maiores exigem mais etapas de análise, desenvolvimento e validação.',
  },
  {
    question: 'Como é o contato durante o projeto?',
    answer:
      'O contato é direto e o andamento é acompanhado com clareza sobre decisões, mudanças e próximos passos.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="faq" id="faq">
      <div className="faq__container">
        <header className="faq__header" data-reveal="up">
          <span className="faq__eyebrow">Perguntas frequentes</span>

          <h2 className="faq__title">Dúvidas antes de começar?</h2>
        </header>

        <div className="faq__list" data-reveal-stagger>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            const answerId = `faq-answer-${index}`
            const questionId = `faq-question-${index}`

            return (
              <article
                className={`faq__item${isOpen ? ' faq__item--open' : ''}`}
                key={item.question}
              >
                <button
                  className="faq__question"
                  id={questionId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() =>
                    setOpenIndex((current) => (current === index ? null : index))
                  }
                >
                  <span className="faq__number">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <span className="faq__question-text">{item.question}</span>

                  <span className="faq__toggle" aria-hidden="true">
                    <span />
                    <span />
                  </span>
                </button>

                <div
                  className="faq__answer-wrap"
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!isOpen}
                >
                  <div className="faq__answer">
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
