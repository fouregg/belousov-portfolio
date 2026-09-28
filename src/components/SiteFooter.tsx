import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { siteConfig } from '../siteConfig'

export function SiteFooter() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-center sm:flex-row">
        <p className="text-sm text-text-muted">
          © {year} {siteConfig.name}. {t.common.rights}
        </p>
        <Link to="/" className="text-sm font-medium text-text-muted transition-colors hover:text-text">
          {t.common.home}
        </Link>
      </div>
    </footer>
  )
}
