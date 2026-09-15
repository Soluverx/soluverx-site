import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

import Home from './pages/Home/Home'
import Privacy from './pages/Privacy/Privacy'
import DevelopmentSoftware from './pages/DevelopmentSoftware/DevelopmentSoftware'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacidade" element={<Privacy />} />
        <Route
          path="/desenvolvimento-de-software"
          element={<DevelopmentSoftware />}
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
