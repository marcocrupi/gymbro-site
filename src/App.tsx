import { Link, Route, Routes, useLocation } from 'react-router-dom'
import Landing from './pages/Landing'
import Privacy from './pages/Privacy'
import PrivacyEn from './pages/Privacy.en'
import PrivacyEs from './pages/Privacy.es'
import PrivacyFr from './pages/Privacy.fr'
import PrivacyPt from './pages/Privacy.pt'
import PrivacyDe from './pages/Privacy.de'
import PrivacyWebsite from './pages/PrivacyWebsite'
import PrivacyWebsiteEn from './pages/PrivacyWebsite.en'
import PrivacyWebsiteEs from './pages/PrivacyWebsite.es'
import PrivacyWebsitePt from './pages/PrivacyWebsite.pt'
import PrivacyWebsiteFr from './pages/PrivacyWebsite.fr'
import PrivacyWebsiteDe from './pages/PrivacyWebsite.de'
import Terms from './pages/Terms'
import TermsEn from './pages/Terms.en'
import TermsFr from './pages/Terms.fr'
import TermsEs from './pages/Terms.es'
import TermsPt from './pages/Terms.pt'
import TermsDe from './pages/Terms.de'
import './index.css'
import logo from './assets/images/logo.png'
import { useI18n } from './i18n/useI18n'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import { applySeo } from './seo'

const ACADEMY_URL = "https://blog.gymbrotools.com/"

function App() {
  const { lang } = useI18n()
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    applySeo(lang)
  }, [lang])

  // Chiudi il menu quando cambia la route
  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <div className={"app-root" + (isHome ? " home-bg" : "")}>
      <header className="site-header">
        <div className="container header-inner">
          <Link to="/" className="brand" aria-label="GymBroTools Home">
            <img src={logo} alt="GymBroTools" className="brand-logo" />
          </Link>
          {/* Desktop nav */}
          <nav className="nav nav-desktop" aria-label="Global">
            <a
              href={ACADEMY_URL}
              className="nav-link nav-link-academy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="nav-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
              </svg>
              Academy
            </a>
          </nav>
          {/* Hamburger button for mobile */}
          <button
            className="hamburger-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
            aria-expanded={menuOpen}
          >
            <span className={`hamburger-icon ${menuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
        {/* Mobile menu */}
        <nav className={`nav-mobile ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
          <a
            href={ACADEMY_URL}
            className="nav-mobile-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="nav-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
            </svg>
            Academy
          </a>
        </nav>
      </header>
      <main className={"site-main"}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route
            path="/privacy-website"
            element={
              lang === 'en' ? <PrivacyWebsiteEn />
              : lang === 'es' ? <PrivacyWebsiteEs />
              : lang === 'fr' ? <PrivacyWebsiteFr />
              : lang === 'pt' ? <PrivacyWebsitePt />
              : lang === 'de' ? <PrivacyWebsiteDe />
              : <PrivacyWebsite />
            }
          />
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
          <Route
            path="/terms"
            element={
              lang === 'en' ? <TermsEn />
              : lang === 'pt' ? <TermsPt />
              : lang === 'es' ? <TermsEs />
              : lang === 'fr' ? <TermsFr />
              : lang === 'de' ? <TermsDe />
              : <Terms />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
