import { useLanguage } from '../context/LanguageContext'
import { siteConfig } from '../siteConfig'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl items-center justify-center px-6 py-8 text-center">
        <p className="text-sm text-text-muted">
          © {year} {siteConfig.name}. {t.footer.rights}
        </p>
      </div>
    </footer>
  )
}
