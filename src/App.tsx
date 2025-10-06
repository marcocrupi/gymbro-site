import { Link, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Privacy from './pages/Privacy'
import './index.css'

function App() {
  return (
    <div className="app-root">
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand">GymBroTools</Link>
          <nav className="nav">
            <Link to="/privacy" className="nav-link">Privacy</Link>
            <a className="btn btn-primary" href="#playstore-link">Scarica</a>
          </nav>
        </div>
      </header>

      <main className="site-main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <span>© {new Date().getFullYear()} GymBroTools</span>
          <nav className="footer-nav">
            <Link to="/privacy" className="nav-link">Privacy</Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
