import { Code2, GraduationCap, ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { siteConfig } from '../siteConfig'
import type { ServiceItem } from '../content'

function ServiceCard({
  icon,
  title,
  tag,
  items,
  accentClass,
  footer,
  delay,
}: {
  icon: React.ReactNode
  title: string
  tag: string
  items: ServiceItem[]
  accentClass: string
  footer?: React.ReactNode
  delay: number
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${accentClass}`}>{icon}</span>
          <div>
            <h3 className="text-xl font-bold text-text">{title}</h3>
            <p className="text-xs font-medium uppercase tracking-wide text-text-muted">{tag}</p>
          </div>
        </div>

        <ul className="mt-6 flex-1 space-y-4">
          {items.map((item) => (
            <li key={item.title} className="border-t border-border pt-4 first:border-t-0 first:pt-0">
              <p className="font-semibold text-text">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-text-muted">{item.description}</p>
            </li>
          ))}
        </ul>

        {footer ? <div className="mt-6 border-t border-border pt-5">{footer}</div> : null}
      </div>
    </Reveal>
  )
}

export function Services() {
  const { t } = useLanguage()

  return (
    <Section id="services" title={t.services.title} subtitle={t.services.subtitle}>
      <div className="grid gap-6 lg:grid-cols-2">
        <ServiceCard
          icon={<Code2 size={20} className="text-accent" />}
          title={t.services.dev.title}
          tag={t.services.dev.tag}
          items={t.services.dev.items}
          accentClass="bg-accent/10"
          delay={0}
        />
        <ServiceCard
          icon={<GraduationCap size={20} className="text-accent-teach" />}
          title={t.services.teach.title}
          tag={t.services.teach.tag}
          items={t.services.teach.items}
          accentClass="bg-accent-teach/10"
          delay={0.1}
          footer={
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-text-muted">{t.services.teach.priceNote}</p>
              <a
                href={siteConfig.profiRu}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 whitespace-nowrap text-sm font-semibold text-accent-teach"
              >
                {t.services.teach.priceLinkLabel}
                <ExternalLink size={14} />
              </a>
            </div>
          }
        />
      </div>
    </Section>
  )
}
