import Header from './components/Header/Header'
import Hero from './sections/Hero/Hero'
import Problems from './sections/Problems/Problems'
import Solutions from './sections/Solutions/Solutions'
import Process from './sections/Process/Process'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Problems />
        <Solutions />
        <Process />
      </main>
    </>
  )
}

export default App