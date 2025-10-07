import { createContext } from 'react'

export type Lang = 'it' | 'en' | 'es' | 'fr' | 'pt' | 'de'

export type I18nContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  t: (key: string) => string
  supported: readonly Lang[]
}

export const I18nContext = createContext<I18nContextValue | null>(null)

