import Header from './components/Header/Header'
import Hero from './sections/Hero/Hero'
import Problems from './sections/Problems/Problems'
import Solutions from './sections/Solutions/Solutions'

function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Problems />
        <Solutions />
      </main>
    </>
  )
}

export default App