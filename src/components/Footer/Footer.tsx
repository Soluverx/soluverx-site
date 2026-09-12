import soluverxLogo from '../../assets/brand/soluverx-logo-transparent.webp'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a
              href="#inicio"
              className="footer__logo"
              aria-label="Soluverx - Início"
            >
              <img
                src={soluverxLogo}
                alt="Soluverx"
                className="footer__logo-image"
                width="330"
                height="109"
                loading="lazy"
              />
            </a>

            <p className="footer__tagline">
              Soluções digitais pensadas a partir de problemas reais.
            </p>
          </div>

          <div className="footer__navigation">
            <div className="footer__column">
              <span className="footer__label">Navegação</span>

              <a href="#solucoes">Soluções</a>
              <a href="#processo">Como trabalhamos</a>
              <a href="#sobre">Sobre</a>
              <a href="#faq">FAQ</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {currentYear} Soluverx. Todos os direitos reservados.
          </p>

          <a
            href="#privacidade"
            className="footer__privacy"
            aria-label="Política de Privacidade"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
