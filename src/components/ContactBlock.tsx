import { Mail, Send, ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { Section, type SiteVariant } from './Section'
import { Reveal } from './Reveal'
import { siteConfig } from '../siteConfig'

export function ContactBlock({
  variant,
  title,
  subtitle,
  eyebrow,
  showProfi = false,
}: {
  variant: SiteVariant
  title: string
  subtitle: string
  eyebrow?: string
  showProfi?: boolean
}) {
  const { t } = useLanguage()
  const accentText = variant === 'dev' ? 'text-accent' : 'text-accent-teach'
  const accentBg = variant === 'dev' ? 'bg-accent/10' : 'bg-accent-teach/10'
  const radius = variant === 'dev' ? 'rounded-xl' : 'rounded-3xl'

  const channels = [
    { icon: <Send size={20} />, label: t.common.telegramLabel, value: 'Telegram', href: siteConfig.telegram },
    { icon: <Mail size={20} />, label: t.common.emailLabel, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  ]

  return (
    <Section id="contact" title={title} subtitle={subtitle} eyebrow={eyebrow} variant={variant}>
      <div className="grid gap-4 sm:grid-cols-2">
        {channels.map((channel, i) => (
          <Reveal key={channel.label} delay={i * 0.06}>
            <a
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className={`flex h-full flex-col items-start gap-3 border border-border bg-surface p-6 transition-transform hover:-translate-y-1 ${radius}`}
            >
              <span className={`flex h-11 w-11 items-center justify-center rounded-xl ${accentBg} ${accentText}`}>
                {channel.icon}
              </span>
              <div>
                <p className="text-sm font-medium text-text-muted">{channel.label}</p>
                <p className="break-all font-semibold text-text">{channel.value}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      {showProfi ? (
        <Reveal delay={0.2} className="mt-6">
          <a
            href={siteConfig.profiRu}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1.5 text-sm font-semibold ${accentText}`}
          >
            {t.common.profiLabel}
            <ExternalLink size={14} />
          </a>
        </Reveal>
      ) : null}
    </Section>
  )
}
