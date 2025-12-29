import { Link } from "react-router-dom";
import { useI18n } from "../i18n/useI18n";
import { useEffect, useMemo, useState } from "react";
import googlePlayIcon from "../assets/icons/google-play-icon.png";
import appleIcon from "../assets/icons/apple-icon.png";
import telegramIcon from "../assets/icons/telegram-icon.png";
// Language-specific screenshots: IT uses "screen ita", all others use "screen eng"
import it001 from "../assets/images/screen ita/screen001.png";
import it002 from "../assets/images/screen ita/screen002.png";
import it003 from "../assets/images/screen ita/screen003.png";
import it004 from "../assets/images/screen ita/screen004.png";
import it005 from "../assets/images/screen ita/screen005.png";
import it006 from "../assets/images/screen ita/screen006.png";
import en001 from "../assets/images/screen eng/screen001.png";
import en002 from "../assets/images/screen eng/screen002.png";
import en003 from "../assets/images/screen eng/screen003.png";
import en004 from "../assets/images/screen eng/screen004.png";
import en005 from "../assets/images/screen eng/screen005.png";
import en006 from "../assets/images/screen eng/screen006.png";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.gymbrotools.app";
const TELEGRAM_URL = "https://t.me/GymBroTools";

export default function Landing() {
  const { t, lang } = useI18n()
  const screenshotsIt = useMemo(() => [it001, it002, it003, it004, it005, it006], [])
  const screenshotsEn = useMemo(() => [en001, en002, en003, en004, en005, en006], [])
  const screenshots = useMemo(() => (lang === 'it' ? screenshotsIt : screenshotsEn), [lang, screenshotsIt, screenshotsEn])
  const [index, setIndex] = useState(0)
  useEffect(() => { setIndex(0) }, [lang])
  const prev = () => setIndex(i => (i - 1 + screenshots.length) % screenshots.length)
  const next = () => setIndex(i => (i + 1) % screenshots.length)
  return (
    <div className="landing">
      <section className="hero container">
        <div className="hero-content">
          <h1 className="hero-title">{t('landing.title')}</h1>
          <p className="hero-subtitle">{t('landing.subtitle')}</p>
          <div className="cta-store-buttons">
            <a
              href={PLAY_STORE_URL}
              className="btn btn-store btn-google"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={googlePlayIcon} alt="" className="store-icon" aria-hidden="true" />
              <span>{t('landing.cta.googlePlay')}</span>
            </a>
            <button
              type="button"
              className="btn btn-store btn-apple disabled"
              disabled
              title={t('landing.cta.comingSoon')}
            >
              <img src={appleIcon} alt="" className="store-icon" aria-hidden="true" />
              <span>{t('landing.cta.appStore')}</span>
            </button>
          </div>
          <div className="cta-secondary">
            <a
              href={TELEGRAM_URL}
              className="btn btn-ghost btn-telegram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={telegramIcon} alt="" className="btn-icon" aria-hidden="true" />
              {t('landing.link.telegram')}
            </a>
            <Link to="/privacy" className="btn btn-ghost">
              {t('landing.link.privacy')}
            </Link>
            <Link to="/terms" className="btn btn-ghost">
              {t('landing.link.terms')}
            </Link>
          </div>
          {/* <ul className="feature-chips">
            <li className="chip">Piani di allenamento</li>
            <li className="chip">Statistiche</li>
            <li className="chip chip-green">Timer & Cronometro</li>
            <li className="chip">Offline‑first</li>
            <li className="chip">Multilingua</li>
          </ul> */}
        </div>
        <div className="hero-media">
          <div className="device-frame">
            <div className="screen-placeholder">
              <img
                className="screen-img"
                src={screenshots[index]}
                alt={`${t('landing.image.alt')} ${index + 1}/${screenshots.length}`}
              />
              <div className="carousel-nav" aria-hidden={false}>
                <button
                  type="button"
                  className="carousel-btn"
                  onClick={prev}
                  aria-label="Schermata precedente"
                >
                  {/* Left arrow */}
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                  </svg>
                </button>
                <button
                  type="button"
                  className="carousel-btn"
                  onClick={next}
                  aria-label="Schermata successiva"
                >
                  {/* Right arrow */}
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M8.59 16.59 10 18l6-6-6-6-1.41 1.41L12.17 12z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-secondary-mobile">
          <a
            href={TELEGRAM_URL}
            className="btn btn-ghost btn-telegram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={telegramIcon} alt="" className="btn-icon" aria-hidden="true" />
            {t('landing.link.telegram')}
          </a>
          <div className="cta-secondary-mobile-row">
            <Link to="/privacy" className="btn btn-ghost">
              {t('landing.link.privacy')}
            </Link>
            <Link to="/terms" className="btn btn-ghost">
              {t('landing.link.terms')}
            </Link>
          </div>
        </div>
      </section>

      {/* <section className="container features">
        <div className="grid">
          <article className="card">
            <h3>Gestione allenamenti</h3>
            <p>
              Piani gerarchici completi e tracking delle sessioni con set e
              ripetizioni.
            </p>
          </article>
          <article className="card">
            <h3>Timer & Cronometro</h3>
            <p>
              Esecuzione in background con notifiche, preset personali e
              modalità fullscreen.
            </p>
          </article>
          <article className="card">
            <h3>Database esercizi</h3>
            <p>
              Immagini, categorie e ricerca; crea anche esercizi personalizzati.
            </p>
          </article>
          <article className="card">
            <h3>Statistiche & progressi</h3>
            <p>
              Grafici interattivi, overview per categorie e stima 1RM
              (Brzycki/Epley).
            </p>
          </article>
          <article className="card">
            <h3>Offline‑first</h3>
            <p>
              Funziona senza rete; sincronizza in modo incrementale quando torni
              online.
            </p>
          </article>
          <article className="card">
            <h3>Per trainer</h3>
            <p>
              Assegna piani ai clienti e gestisci il percorso di allenamento con
              facilità.
            </p>
          </article>
        </div>
      </section> */}
    </div>
  );
}
