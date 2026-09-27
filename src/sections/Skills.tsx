import { useLanguage } from '../context/LanguageContext'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'

export function Skills() {
  const { t } = useLanguage()

  return (
    <Section id="skills" title={t.skills.title}>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.skills.groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border border-border bg-surface p-5">
              <p className="text-sm font-bold uppercase tracking-wide text-accent">{group.title}</p>
              <ul className="mt-3 space-y-1.5">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
