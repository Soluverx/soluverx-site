import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#inicio" className="footer__logo">
              SOLUVERX
            </a>

            <p className="footer__tagline">
              Software sob medida para necessidades reais.
            </p>
          </div>

          <div className="footer__navigation">
            <div className="footer__column">
              <span className="footer__label">Navegação</span>

              <a href="#solucoes">Soluções</a>
              <a href="#processo">Como trabalhamos</a>
              <a href="#sobre">Sobre</a>
              <a href="#faq">FAQ</a>
              <a href="#contato">Contato</a>
            </div>

            <div className="footer__column">
              <span className="footer__label">Contato</span>

              <a
                href="https://wa.me/5533998551827?text=Olá,%20vim%20pelo%20site%20da%20Soluverx%20e%20gostaria%20de%20falar%20sobre%20um%20projeto."
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>

              <span className="footer__coming-soon">
                soluverx.com.br
              </span>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {currentYear} Soluverx. Todos os direitos reservados.
          </p>

          <p className="footer__signature">
            Tecnologia com clareza, método e responsabilidade.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer