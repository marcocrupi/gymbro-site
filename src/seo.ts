import type { Lang } from './i18n/context'

type SeoContent = { title: string; description: string }

const SEO_BY_LANG: Record<Lang, SeoContent> = {
  it: {
    title: 'GymBroTools – La tua app fitness completa',
    description:
      "App per atleti e trainer: piani di allenamento, statistiche dei progressi e strumenti come timer, cronometro e contatore set.",
  },
  en: {
    title: 'GymBroTools – Your complete fitness app',
    description:
      'App for athletes and trainers: workout plans, progress stats, and tools like timer, stopwatch and set counter.',
  },
  es: {
    title: 'GymBroTools – Tu app de fitness completa',
    description:
      'App para atletas y entrenadores: planes de entrenamiento, estadísticas de progreso y herramientas como temporizador, cronómetro y contador de series.',
  },
  de: {
    title: 'GymBroTools – Deine komplette Fitness-App',
    description:
      'App für Athleten und Trainer: Trainingspläne, Fortschrittsstatistiken sowie Tools wie Timer, Stoppuhr und Satz-Zähler.',
  },
  fr: {
    title: 'GymBroTools – Votre application fitness complète',
    description:
      "Application pour athlètes et coachs : plans d’entraînement, statistiques de progression et outils comme minuteur, chronomètre et compteur de séries.",
  },
  pt: {
    title: 'GymBroTools – Seu app fitness completo',
    description:
      'App para atletas e treinadores: planos de treino, estatísticas de progresso e ferramentas como temporizador, cronômetro e contador de séries.',
  },
}

const OG_LOCALE_BY_LANG: Record<Lang, string> = {
  it: 'it_IT',
  en: 'en_US',
  es: 'es_ES',
  de: 'de_DE',
  fr: 'fr_FR',
  pt: 'pt_PT',
}

function upsertMeta(selector: string, create: () => HTMLMetaElement) {
  let el = document.head.querySelector<HTMLMetaElement>(selector)
  if (!el) {
    el = create()
    document.head.appendChild(el)
  }
  return el
}

export function applySeo(lang: Lang) {
  if (typeof document === 'undefined') return

  const seo = SEO_BY_LANG[lang] ?? SEO_BY_LANG.it
  const ogLocale = OG_LOCALE_BY_LANG[lang] ?? 'en_US'

  document.title = seo.title

  const desc = upsertMeta('meta[name="description"]', () => {
    const m = document.createElement('meta')
    m.setAttribute('name', 'description')
    return m
  })
  desc.setAttribute('content', seo.description)

  const ogTitle = upsertMeta('meta[property="og:title"]', () => {
    const m = document.createElement('meta')
    m.setAttribute('property', 'og:title')
    return m
  })
  ogTitle.setAttribute('content', seo.title)

  const ogDesc = upsertMeta('meta[property="og:description"]', () => {
    const m = document.createElement('meta')
    m.setAttribute('property', 'og:description')
    return m
  })
  ogDesc.setAttribute('content', seo.description)

  const ogLocaleMeta = upsertMeta('meta[property="og:locale"]', () => {
    const m = document.createElement('meta')
    m.setAttribute('property', 'og:locale')
    return m
  })
  ogLocaleMeta.setAttribute('content', ogLocale)

  const ogImage = upsertMeta('meta[property="og:image"]', () => {
    const m = document.createElement('meta')
    m.setAttribute('property', 'og:image')
    return m
  })
  ogImage.setAttribute('content', '/logo512px.png')

  const twCard = upsertMeta('meta[name="twitter:card"]', () => {
    const m = document.createElement('meta')
    m.setAttribute('name', 'twitter:card')
    return m
  })
  twCard.setAttribute('content', 'summary_large_image')

  const twTitle = upsertMeta('meta[name="twitter:title"]', () => {
    const m = document.createElement('meta')
    m.setAttribute('name', 'twitter:title')
    return m
  })
  twTitle.setAttribute('content', seo.title)

  const twDesc = upsertMeta('meta[name="twitter:description"]', () => {
    const m = document.createElement('meta')
    m.setAttribute('name', 'twitter:description')
    return m
  })
  twDesc.setAttribute('content', seo.description)

  const twImage = upsertMeta('meta[name="twitter:image"]', () => {
    const m = document.createElement('meta')
    m.setAttribute('name', 'twitter:image')
    return m
  })
  twImage.setAttribute('content', '/logo512px.png')

  // Update JSON-LD Organization logo (if present) to absolute URL for reliability
  try {
    const origin = window.location.origin
    const logoAbs = origin + '/logo512px.png'
    const scripts = Array.from(document.querySelectorAll('script[type="application/ld+json"]'))
    scripts.forEach((s) => {
      try {
        const data = JSON.parse(s.textContent || 'null')
        if (data && typeof data === 'object' && data['@type'] === 'Organization') {
          data.logo = logoAbs
          if (!data.url) data.url = origin + '/'
          s.textContent = JSON.stringify(data)
        }
      } catch { /* ignore parse errors */ }
    })
  } catch { /* ignore envs without window */ }
}

export { SEO_BY_LANG }
