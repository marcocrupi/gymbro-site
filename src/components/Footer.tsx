import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/useI18n'

export default function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <span aria-hidden>©</span> 2025–{year} GymBroTools by Marco Crupi
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <a className="nav-link" href="mailto:marcocrupi@hotmail.it">{t('footer.link.contact')}</a>
          <span className="footer-separator" aria-hidden="true">|</span>
          <Link className="nav-link" to="/privacy-website">{t('footer.link.websitePrivacy')}</Link>
        </nav>
      </div>
    </footer>
  )
}
