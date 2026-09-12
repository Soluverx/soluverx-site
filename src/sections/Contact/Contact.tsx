import { useForm, ValidationError } from '@formspree/react'
import { motion, useReducedMotion } from 'motion/react'
import './Contact.css'

function Contact() {
  const [state, handleSubmit] = useForm('mwlkzzvr')
  const reduceMotion = useReducedMotion()

  const whatsappUrl =
    'https://wa.me/5533998551827?text=Olá,%20vim%20pelo%20site%20da%20Soluverx%20e%20gostaria%20de%20falar%20sobre%20um%20projeto.'

  return (
    <section
      className="contact"
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="contact__container">
        <motion.div
          className="contact__content"
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
          <span className="contact__eyebrow">Contato</span>

          <h2 className="contact__title" id="contact-title">
            Conte o que você precisa resolver.
          </h2>

          <p className="contact__intro">
            Explique sua necessidade, dificuldade ou ideia. A partir disso,
            analisamos o cenário e avaliamos a melhor forma de ajudar.
          </p>

          <div className="contact__direct">
            <span className="contact__direct-label">
              Prefere falar direto?
            </span>

            <a
              className="contact__whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.form
          className="contact__form"
          aria-label="Formulário de contato"
          onSubmit={handleSubmit}
          initial={
            reduceMotion
              ? { opacity: 1, x: 0 }
              : { opacity: 0, x: 28 }
          }
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            delay: reduceMotion ? 0 : 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="contact__field">
            <label htmlFor="name">Nome</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="Seu nome"
              autoComplete="name"
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="company">Empresa ou negócio</label>

            <input
              id="company"
              name="company"
              type="text"
              placeholder="Nome da empresa"
              autoComplete="organization"
            />
          </div>

          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="email">E-mail</label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="voce@empresa.com"
                autoComplete="email"
                required
              />

              <ValidationError
                prefix="E-mail"
                field="email"
                errors={state.errors}
              />
            </div>

            <div className="contact__field">
              <label htmlFor="whatsapp">WhatsApp</label>

              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                placeholder="(00) 00000-0000"
                autoComplete="tel"
              />
            </div>
          </div>

          <div className="contact__field">
            <label htmlFor="message">
              O que você precisa resolver?
            </label>

            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Conte um pouco sobre o problema, processo ou ideia..."
              required
            />

            <ValidationError
              prefix="Mensagem"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            className="contact__submit"
            type="submit"
            disabled={state.submitting}
          >
            {state.submitting ? 'Enviando...' : 'Enviar mensagem'}
          </button>

          {state.succeeded && (
            <p className="contact__success" role="status">
              Mensagem enviada com sucesso. Em breve entraremos em contato.
            </p>
          )}

          {!state.succeeded && state.errors && (
            <ValidationError errors={state.errors} />
          )}
        </motion.form>
      </div>
    </section>
  )
}

export default Contact