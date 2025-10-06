import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import './index.css'

function App() {
  return (
    <div className="app-root">
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/termini" element={<Terms />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
