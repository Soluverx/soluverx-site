import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <a href="#inicio" className="header__logo">
          SOLUVERX
        </a>

        <nav className="header__nav" aria-label="Navegação principal">
          <a href="#solucoes">Soluções</a>
          <a href="#processo">Como trabalhamos</a>
          <a href="#sobre">Sobre</a>
          <a href="#faq">FAQ</a>
        </nav>

        <a href="#contato" className="header__cta">
          Fale conosco
        </a>
      </div>
    </header>
  )
}

export default Header