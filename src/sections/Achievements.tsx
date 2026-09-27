import { Award } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'

export function Achievements() {
  const { t } = useLanguage()

  return (
    <Section id="achievements" title={t.achievements.title}>
      <div className="grid gap-3 sm:grid-cols-2">
        {t.achievements.items.map((item, i) => (
          <Reveal key={item} delay={i * 0.05}>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
              <Award size={18} className="mt-0.5 shrink-0 text-accent-teach" />
              <p className="text-sm leading-relaxed text-text-muted">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
