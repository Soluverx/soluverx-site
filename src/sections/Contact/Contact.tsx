import './Contact.css'

function Contact() {
  const whatsappUrl =
    'https://wa.me/5533998551827?text=Olá,%20vim%20pelo%20site%20da%20Soluverx%20e%20gostaria%20de%20falar%20sobre%20um%20projeto.'

  return (
    <section
      className="contact"
      id="contato"
      aria-labelledby="contact-title"
    >
      <div className="contact__container">
        <div className="contact__content">
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
        </div>

        <form
          className="contact__form"
          aria-label="Formulário de contato"
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
          </div>

          <button className="contact__submit" type="submit">
            Enviar mensagem
          </button>

          <p className="contact__note">
            O envio automático do formulário será conectado na etapa de
            integração do site.
          </p>
        </form>
      </div>
    </section>
  )
}

export default Contact