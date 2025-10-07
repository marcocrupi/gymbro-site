import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { I18nContext, type I18nContextValue, type Lang } from './context'
import { useI18n } from './useI18n'

const SUPPORTED_LANGS: Lang[] = ['it', 'en', 'es', 'fr', 'pt', 'de']
const DEFAULT_LANG: Lang = 'en'
const STORAGE_KEY = 'gymbro.lang'

type Dict = Record<string, string>
type Translations = Record<Lang, Dict>

const translations: Translations = {
  en: {
    'app.name': 'GymBroTools',
    'landing.title': 'GymBroTools',
    'landing.subtitle':
      'The suite for athletes and trainers: workout plans, session tracking, exercise database with images, progress stats, plus utilities like timer, stopwatch and set counter. Works offline too, with safe sync when you are back online.',
    'landing.cta.download': 'Get it on Google Play',
    'landing.link.privacy': 'Privacy Policy',
    'landing.link.terms': 'Terms & Conditions',
    'landing.image.alt': 'GymBroTools preview',
    'header.language': 'Language',
    'footer.link.websitePrivacy': 'Website Privacy & Cookies',
    'footer.link.appPrivacy': 'App Privacy',
    'footer.link.terms': 'Terms & Conditions',
  },
  it: {
    'app.name': 'GymBroTools',
    'landing.title': 'GymBroTools',
    'landing.subtitle':
      'La suite per atleti e trainer: piani di allenamento, gestione sessioni, database esercizi con immagini, statistiche dei progressi e strumenti come timer, cronometro e contatore set. Funziona anche offline con sincronizzazione sicura quando sei connesso.',
    'landing.cta.download': 'Scarica su Google Play',
    'landing.link.privacy': 'Privacy policy',
    'landing.link.terms': 'Termini e Condizioni',
    'landing.image.alt': 'Anteprima GymBroTools',
    'header.language': 'Lingua',
    'footer.link.websitePrivacy': 'Privacy & Cookie (sito)',
    'footer.link.appPrivacy': 'Privacy dell’app',
    'footer.link.terms': 'Termini e Condizioni',
  },
  es: {
    'app.name': 'GymBroTools',
    'landing.title': 'GymBroTools',
    'landing.subtitle':
      'La suite para atletas y entrenadores: planes de entrenamiento, seguimiento de sesiones, base de datos de ejercicios con imágenes, estadísticas de progreso y herramientas como temporizador, cronómetro y contador de series. También funciona sin conexión con sincronización segura cuando vuelves a estar en línea.',
    'landing.cta.download': 'Descargar en Google Play',
    'landing.link.privacy': 'Política de privacidad',
    'landing.link.terms': 'Términos y Condiciones',
    'landing.image.alt': 'Vista previa de GymBroTools',
    'header.language': 'Idioma',
    'footer.link.websitePrivacy': 'Privacidad y cookies (sitio)',
    'footer.link.appPrivacy': 'Privacidad de la app',
    'footer.link.terms': 'Términos y Condiciones',
  },
  fr: {
    'app.name': 'GymBroTools',
    'landing.title': 'GymBroTools',
    'landing.subtitle':
      "La suite pour athlètes et entraîneurs : plans d'entraînement, suivi des séances, base d'exercices avec images, statistiques de progression et outils comme minuteur, chronomètre et compteur de séries. Fonctionne aussi hors ligne avec une synchronisation sécurisée lorsque vous êtes connecté.",
    'landing.cta.download': 'Télécharger sur Google Play',
    'landing.link.privacy': 'Politique de confidentialité',
    'landing.link.terms': 'Termes et Conditions',
    'landing.image.alt': 'Aperçu de GymBroTools',
    'header.language': 'Langue',
    'footer.link.websitePrivacy': 'Confidentialité & cookies (site)',
    'footer.link.appPrivacy': "Confidentialité de l’app",
    'footer.link.terms': 'Termes et Conditions',
  },
  pt: {
    'app.name': 'GymBroTools',
    'landing.title': 'GymBroTools',
    'landing.subtitle':
      'A suite para atletas e treinadores: planos de treino, registo de sessões, base de dados de exercícios com imagens, estatísticas de progresso e ferramentas como temporizador, cronómetro e contador de séries. Funciona também offline com sincronização segura quando estiver ligado.',
    'landing.cta.download': 'Baixar na Google Play',
    'landing.link.privacy': 'Política de Privacidade',
    'landing.link.terms': 'Termos e Condições',
    'landing.image.alt': 'Pré-visualização do GymBroTools',
    'header.language': 'Idioma',
    'footer.link.websitePrivacy': 'Privacidade e cookies (site)',
    'footer.link.appPrivacy': 'Privacidade da app',
    'footer.link.terms': 'Termos e Condições',
  },
  de: {
    'app.name': 'GymBroTools',
    'landing.title': 'GymBroTools',
    'landing.subtitle':
      'Die Suite für Athleten und Trainer: Trainingspläne, Sitzungsverwaltung, Übungsdatenbank mit Bildern, Fortschrittsstatistiken sowie Tools wie Timer, Stoppuhr und Satz-Zähler. Funktioniert auch offline mit sicherer Synchronisierung, sobald du wieder online bist.',
    'landing.cta.download': 'Bei Google Play herunterladen',
    'landing.link.privacy': 'Datenschutzerklärung',
    'landing.link.terms': 'Allgemeine Geschäftsbedingungen',
    'landing.image.alt': 'GymBroTools Vorschau',
    'header.language': 'Sprache',
    'footer.link.websitePrivacy': 'Datenschutz & Cookies (Website)',
    'footer.link.appPrivacy': 'App-Datenschutz',
    'footer.link.terms': 'Allgemeine Geschäftsbedingungen',
  },
}

function normalize(candidate: string): Lang | null {
  const lc = candidate.toLowerCase()
  const base = (lc.split('-')[0] ?? lc) as Lang
  if (SUPPORTED_LANGS.includes(lc as Lang)) return lc as Lang
  if (SUPPORTED_LANGS.includes(base)) return base
  return null
}

function detectBrowserLanguage(): Lang {
  if (typeof window !== 'undefined') {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY)
      if (stored && normalize(stored)) return normalize(stored) || DEFAULT_LANG
    } catch { /* ignore unavailability of localStorage (privacy mode) */ }

    const nav = navigator as Navigator & { userLanguage?: string; browserLanguage?: string }
    const list: string[] = Array.isArray(nav.languages) && nav.languages.length > 0
      ? [...nav.languages]
      : [nav.language, nav.userLanguage, nav.browserLanguage].filter((v): v is string => typeof v === 'string')
    for (const cand of list) {
      const n = cand && normalize(String(cand))
      if (n) return n
    }
  }
  return DEFAULT_LANG
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => detectBrowserLanguage())

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    try { window.localStorage.setItem(STORAGE_KEY, l) } catch { /* ignore persistence errors */ }
  }, [])

  useEffect(() => {
    try {
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('lang', lang)
        document.documentElement.setAttribute('dir', 'ltr')
      }
    } catch { /* ignore environment without document */ }
  }, [lang])

  const t = useCallback(
    (key: string) => {
      const dict = translations[lang] || translations[DEFAULT_LANG]
      return dict[key] ?? translations[DEFAULT_LANG][key] ?? key
    },
    [lang]
  )

  const value = useMemo<I18nContextValue>(() => ({ lang, setLang, t, supported: SUPPORTED_LANGS }), [lang, setLang, t])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function LangSwitcher() {
  const { lang, setLang, supported, t } = useI18n()
  const [open, setOpen] = useState(false)
  const btnRef = useRef<HTMLButtonElement | null>(null)
  const popRef = useRef<HTMLUListElement | null>(null)

  const labels: Record<Lang, string> = {
    it: 'Italiano',
    en: 'English',
    es: 'Español',
    fr: 'Français',
    pt: 'Português',
    de: 'Deutsch',
  }

  const flagData: Record<Lang, string> = {
    // Simple, lightweight SVGs as data URIs (aspect 3:2)
    it: `data:image/svg+xml;utf8,${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2"><rect width="1" height="2" x="0" fill="#009246"/><rect width="1" height="2" x="1" fill="#ffffff"/><rect width="1" height="2" x="2" fill="#ce2b37"/></svg>'
    )}`,
    fr: `data:image/svg+xml;utf8,${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2"><rect width="1" height="2" x="0" fill="#0055A4"/><rect width="1" height="2" x="1" fill="#ffffff"/><rect width="1" height="2" x="2" fill="#EF4135"/></svg>'
    )}`,
    es: `data:image/svg+xml;utf8,${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2"><rect width="3" height="2" fill="#AA151B"/><rect width="3" height="1" y="0.5" fill="#F1BF00"/></svg>'
    )}`,
    de: `data:image/svg+xml;utf8,${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2"><rect width="3" height="2" fill="#000000"/><rect width="3" height="1.333" y="0.666" fill="#DD0000"/><rect width="3" height="0.666" y="1.333" fill="#FFCE00"/></svg>'
    )}`,
    pt: `data:image/svg+xml;utf8,${encodeURIComponent(
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2"><rect width="1.2" height="2" x="0" fill="#006600"/><rect width="1.8" height="2" x="1.2" fill="#FF0000"/></svg>'
    )}`,
    en: `data:image/svg+xml;utf8,${encodeURIComponent(
      // Simplified Union Jack
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2">\
        <rect width="3" height="2" fill="#012169"/>\
        <path d="M0,0 L3,2 M3,0 L0,2" stroke="#fff" stroke-width="0.3"/>\
        <path d="M0,0 L3,2 M3,0 L0,2" stroke="#C8102E" stroke-width="0.15"/>\
        <path d="M1.5,0 V2 M0,1 H3" stroke="#fff" stroke-width="0.5"/>\
        <path d="M1.5,0 V2 M0,1 H3" stroke="#C8102E" stroke-width="0.3"/>\
      </svg>'
    )}`,
  }

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (!open) return
      const t = e.target as Node
      if (btnRef.current?.contains(t)) return
      if (popRef.current?.contains(t)) return
      setOpen(false)
    }
    document.addEventListener('mousedown', onDocClick)
    return () => document.removeEventListener('mousedown', onDocClick)
  }, [open])

  const pick = (code: Lang) => {
    setLang(code)
    setOpen(false)
  }

  return (
    <div className="lang-switcher">
      <button
        ref={btnRef}
        type="button"
        className="lang-button"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('header.language')}
        onClick={() => setOpen((v) => !v)}
      >
        <img className="flag" src={flagData[lang]} alt="" aria-hidden />
        <span className="lang-label">{labels[lang]}</span>
        <svg className="caret" width="12" height="12" viewBox="0 0 24 24" aria-hidden>
          <path fill="currentColor" d="M7 10l5 5 5-5z" />
        </svg>
      </button>
      {open && (
        <ul className="lang-menu" role="listbox" ref={popRef} aria-label={t('header.language')}>
          {supported.map((code) => (
            <li key={code} role="option" aria-selected={code === lang}>
              <button type="button" className="lang-option" onClick={() => pick(code)}>
                <img className="flag" src={flagData[code]} alt="" aria-hidden />
                <span className="lang-label">{labels[code]}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export type { Lang }
