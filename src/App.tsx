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
import { LangSwitcher } from './i18n'
import logo from './assets/images/logo.png'
import { useI18n } from './i18n/useI18n'
import Footer from './components/Footer'

function App() {
  const { lang } = useI18n()
  const location = useLocation()
  const isHome = location.pathname === '/'
  return (
    <div className={"app-root" + (isHome ? " home-bg" : "")}>
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
