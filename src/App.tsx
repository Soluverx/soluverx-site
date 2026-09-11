import Header from './components/Header/Header'
import Hero from './sections/Hero/Hero'
import Problems from './sections/Problems/Problems'
import Solutions from './sections/Solutions/Solutions'
import Process from './sections/Process/Process'
import Differentials from './sections/Differentials/Differentials'
import About from './sections/About/About'
import FAQ from './sections/FAQ/FAQ'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Problems />
        <Solutions />
        <Process />
        <Differentials />
        <About />
        <FAQ />
      </main>
    </>
  )
}

export default App