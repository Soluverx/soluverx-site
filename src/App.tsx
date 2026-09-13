import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ScrollReveal from './components/ScrollReveal/ScrollReveal'

import Hero from './sections/Hero/Hero'
import Problems from './sections/Problems/Problems'
import Inclusion from './sections/Inclusion/Inclusion'
import Solutions from './sections/Solutions/Solutions'
import Process from './sections/Process/Process'
import Differentials from './sections/Differentials/Differentials'
import About from './sections/About/About'
import FAQ from './sections/FAQ/FAQ'
import Contact from './sections/Contact/Contact'
import Privacy from './pages/Privacy/Privacy'

function App() {
  const normalizedPath = window.location.pathname.replace(/\/+$/, '') || '/'
  const isPrivacyPage = normalizedPath === '/privacidade'

  if (isPrivacyPage) {
    return <Privacy />
  }

  return (
    <>
      <ScrollReveal />
      <Header />

      <main>
        <Hero />
        <Problems />
        <Inclusion />
        <Solutions />
        <Process />
        <Differentials />
        <About />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App
