import { Moon, Sun } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { useTheme } from '../context/ThemeContext'

export function Controls() {
  const { lang, toggleLang } = useLanguage()
  const { theme, toggleTheme } = useTheme()

  return (
    <>
      <button
        onClick={toggleLang}
        className="rounded-full border border-border bg-bg/60 px-3 py-1.5 text-xs font-semibold text-text-muted backdrop-blur transition-colors hover:text-text"
        aria-label="Toggle language"
      >
        {lang === 'ru' ? 'EN' : 'RU'}
      </button>
      <button
        onClick={toggleTheme}
        className="rounded-full border border-border bg-bg/60 p-2 text-text-muted backdrop-blur transition-colors hover:text-text"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    </>
  )
}
