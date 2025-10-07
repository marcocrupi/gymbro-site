import { Link, Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Privacy from './pages/Privacy'
import PrivacyEn from './pages/Privacy.en'
import PrivacyEs from './pages/Privacy.es'
import PrivacyFr from './pages/Privacy.fr'
import PrivacyPt from './pages/Privacy.pt'
import PrivacyDe from './pages/Privacy.de'
import Terms from './pages/Terms'
import './index.css'
import { LangSwitcher } from './i18n'
import logo from './assets/images/logo.png'
import { useI18n } from './i18n/useI18n'

function App() {
  const { lang } = useI18n()
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
          <Route
            path="/privacy"
            element={
              lang === 'en' ? <PrivacyEn />
              : lang === 'es' ? <PrivacyEs />
              : lang === 'fr' ? <PrivacyFr />
              : lang === 'pt' ? <PrivacyPt />
              : lang === 'de' ? <PrivacyDe />
              : <Privacy />
            }
          />
          <Route path="/terms" element={<Terms />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
