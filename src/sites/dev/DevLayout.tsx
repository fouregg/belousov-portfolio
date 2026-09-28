import { Outlet } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { BackgroundAnimation } from '../../components/BackgroundAnimation'
import { SiteHeader } from '../../components/SiteHeader'
import { SiteFooter } from '../../components/SiteFooter'
import { SiteMeta } from '../../components/SiteMeta'

export function DevLayout() {
  const { t } = useLanguage()
  const nav = t.dev.nav

  return (
    <div className="min-h-screen text-text">
      <SiteMeta meta={t.dev.meta} />
      <BackgroundAnimation variant="dev" />
      <SiteHeader
        variant="dev"
        brand={
          <span className="font-mono-brand text-sm font-semibold text-text">
            <span className="text-accent-2">belousov</span>
            <span className="text-text-muted">@dev:~$</span>
          </span>
        }
        links={[
          { to: '/dev#about', label: nav.about },
          { to: '/dev#services', label: nav.services },
          { to: '/dev#projects', label: nav.projects },
          { to: '/dev#experience', label: nav.experience },
        ]}
        cta={{ to: '/dev#contact', label: nav.cta }}
        switchTo={{ to: '/teach', label: t.dev.switchLabel }}
      />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
