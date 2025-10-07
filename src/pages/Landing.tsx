import { Link } from "react-router-dom";
import splash from "../assets/images/gymbrosplashscreen.jpg";
import { useI18n } from "../i18n/useI18n";

const PLAY_STORE_PLACEHOLDER = "#playstore-link";

export default function Landing() {
  const { t } = useI18n()
  return (
    <div className="landing">
      <section className="hero container">
        <div className="hero-content">
          <h1 className="hero-title">{t('landing.title')}</h1>
          <p className="hero-subtitle">{t('landing.subtitle')}</p>
          <div className="cta-buttons">
            <a
              href={PLAY_STORE_PLACEHOLDER}
              className="btn btn-primary"
              aria-disabled
            >
              {t('landing.cta.download')}
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
                src={splash}
                alt={t('landing.image.alt')}
              />
            </div>
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
