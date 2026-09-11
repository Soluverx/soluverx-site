import { useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header__container">
        <a
          href="#inicio"
          className="header__logo"
          onClick={closeMenu}
        >
          SOLUVERX
        </a>

        <nav
          className={`header__nav ${
            isMenuOpen ? 'header__nav--open' : ''
          }`}
          aria-label="Navegação principal"
        >
          <a href="#solucoes" onClick={closeMenu}>
            Soluções
          </a>

          <a href="#processo" onClick={closeMenu}>
            Como trabalhamos
          </a>

          <a href="#sobre" onClick={closeMenu}>
            Sobre
          </a>

          <a href="#faq" onClick={closeMenu}>
            FAQ
          </a>

          <a
            href="#contato"
            className="header__mobile-cta"
            onClick={closeMenu}
          >
            Fale conosco
          </a>
        </nav>

        <a href="#contato" className="header__cta">
          Fale conosco
        </a>

        <button
          className={`header__menu-button ${
            isMenuOpen ? 'header__menu-button--open' : ''
          }`}
          type="button"
          aria-label={
            isMenuOpen
              ? 'Fechar menu de navegação'
              : 'Abrir menu de navegação'
          }
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Header