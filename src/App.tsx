import { Link, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import './index.css'
import { LangSwitcher } from './i18n'
import logo from './assets/images/logo.png'

function App() {
  return (
    <div className="app-root">
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="GymBroTools Home">
            <img src={logo} alt="GymBroTools" className="brand-logo" />
          </Link>
          <nav className="nav" aria-label="Global">
            <LangSwitcher />
          </nav>
        </div>
      </header>
      <main className="site-main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
