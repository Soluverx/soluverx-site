import { useEffect, useState } from 'react'
import soluverxLogo from '../../assets/brand/soluverx-logo-transparent.png'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function closeMenu() {
    setIsMenuOpen(false)
  }

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        closeMenu()
      }
    }

    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEscape)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMenuOpen])

  return (
    <>
      <header className="header">
        <div className="header__container">
          <a
            href="#inicio"
            className="header__logo"
            onClick={closeMenu}
            aria-label="Soluverx - Início"
          >
            <img
              src={soluverxLogo}
              alt="Soluverx"
              className="header__logo-image"
            />
          </a>

          <nav
            id="main-navigation"
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
            aria-controls="main-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      {isMenuOpen && (
        <button
          className="header__overlay"
          type="button"
          aria-label="Fechar menu"
          onClick={closeMenu}
        />
      )}
    </>
  )
}

export default Header