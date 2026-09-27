import { Mail, Send, MessageCircle, ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { siteConfig } from '../siteConfig'

export function Contact() {
  const { t } = useLanguage()

  const channels = [
    { icon: <Mail size={20} />, label: t.contact.emailLabel, value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { icon: <Send size={20} />, label: t.contact.telegramLabel, value: 'Telegram', href: siteConfig.telegram },
    { icon: <MessageCircle size={20} />, label: t.contact.whatsappLabel, value: 'WhatsApp', href: siteConfig.whatsapp },
  ]

  return (
    <Section id="contact" title={t.contact.title} subtitle={t.contact.subtitle}>
      <div className="grid gap-4 sm:grid-cols-3">
        {channels.map((channel, i) => (
          <Reveal key={channel.label} delay={i * 0.06}>
            <a
              href={channel.href}
              target={channel.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="flex h-full flex-col items-start gap-3 rounded-2xl border border-border bg-surface p-6 transition-transform hover:-translate-y-1"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                {channel.icon}
              </span>
              <div>
                <p className="text-sm font-medium text-text-muted">{channel.label}</p>
                <p className="font-semibold text-text">{channel.value}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-6">
        <a
          href={siteConfig.profiRu}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
        >
          {t.contact.profiLabel}
          <ExternalLink size={14} />
        </a>
      </Reveal>
    </Section>
  )
}
