import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { content, type Content, type Lang } from '../content'

interface LanguageContextValue {
  lang: Lang
  toggleLang: () => void
  t: Content
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'portfolio-lang'

function getInitialLang(): Lang {
  if (typeof window === 'undefined') return 'ru'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  if (stored === 'ru' || stored === 'en') return stored
  return navigator.language?.toLowerCase().startsWith('ru') ? 'ru' : 'ru'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(getInitialLang)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      toggleLang: () => setLang((prev) => (prev === 'ru' ? 'en' : 'ru')),
      t: content[lang],
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
