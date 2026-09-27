import { useLanguage } from '../context/LanguageContext'
import { siteConfig } from '../siteConfig'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-8 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-text-muted">
          © {year} {siteConfig.name}. {t.footer.rights}
        </p>
        <p className="text-xs text-text-muted">{t.footer.builtWith}</p>
      </div>
    </footer>
  )
}
