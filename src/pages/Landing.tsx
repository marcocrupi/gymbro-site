import { Link } from "react-router-dom";
import { useI18n } from "../i18n/useI18n";
import { useState, useMemo } from "react";
import screen001 from "../assets/images/screen001.png";
import screen002 from "../assets/images/screen002.png";
import screen003 from "../assets/images/screen003.png";
import screen004 from "../assets/images/screen004.png";
import screen005 from "../assets/images/screen005.png";
import screen006 from "../assets/images/screen006.png";

const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.gymbrotools.app";

export default function Landing() {
  const { t } = useI18n()
  const screenshots = useMemo(() => [
    screen001,
    screen002,
    screen003,
    screen004,
    screen005,
    screen006,
  ], [])
  const [index, setIndex] = useState(0)
  const prev = () => setIndex(i => (i - 1 + screenshots.length) % screenshots.length)
  const next = () => setIndex(i => (i + 1) % screenshots.length)
  return (
    <div className="landing">
      <section className="hero container">
        <div className="hero-content">
          <h1 className="hero-title">{t('landing.title')}</h1>
          <p className="hero-subtitle">{t('landing.subtitle')}</p>
          <div className="cta-primary">
            <a
              href={PLAY_STORE_URL}
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('landing.cta.download')}
            </a>
          </div>
          <div className="cta-secondary">
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
          <Link to="/privacy" className="btn btn-ghost">
            {t('landing.link.privacy')}
          </Link>
          <Link to="/terms" className="btn btn-ghost">
            {t('landing.link.terms')}
          </Link>
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
