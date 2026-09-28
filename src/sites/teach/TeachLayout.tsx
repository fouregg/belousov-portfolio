import { Outlet } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'
import { BackgroundAnimation } from '../../components/BackgroundAnimation'
import { SiteHeader } from '../../components/SiteHeader'
import { SiteFooter } from '../../components/SiteFooter'
import { SiteMeta } from '../../components/SiteMeta'
import { siteConfig } from '../../siteConfig'

export function TeachLayout() {
  const { t } = useLanguage()
  const nav = t.teach.nav

  return (
    <div className="min-h-screen text-text">
      <SiteMeta meta={t.teach.meta} />
      <BackgroundAnimation variant="teach" />
      <SiteHeader
        variant="teach"
        brand={<span className="font-serif text-lg font-semibold italic text-text">{siteConfig.name}</span>}
        links={[
          { to: '/teach#subjects', label: nav.subjects },
          { to: '/teach#approach', label: nav.approach },
          { to: '/teach#reviews', label: nav.reviews },
          { to: '/teach#about', label: nav.about },
        ]}
        cta={{ to: '/teach#contact', label: nav.cta }}
        switchTo={{ to: '/dev', label: t.teach.switchLabel }}
      />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
