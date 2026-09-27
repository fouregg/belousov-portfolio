import { useLanguage } from '../context/LanguageContext'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import type { TimelineItem } from '../content'

function TimelineList({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-8 border-l border-border pl-6">
      {items.map((item, i) => (
        <Reveal key={item.title + item.period} delay={i * 0.06}>
          <li className="relative">
            <span className="absolute -left-[27px] top-1 h-2.5 w-2.5 rounded-full bg-accent" />
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">{item.period}</p>
            <p className="mt-1 font-bold text-text">{item.title}</p>
            <p className="mt-1 text-sm text-text-muted">{item.place}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  )
}

export function Timeline() {
  const { t } = useLanguage()

  return (
    <Section id="experience" title={t.timeline.title}>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-text-muted">
            {t.timeline.experienceLabel}
          </h3>
          <TimelineList items={t.timeline.experience} />
        </div>
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-text-muted">
            {t.timeline.educationLabel}
          </h3>
          <TimelineList items={t.timeline.education} />
        </div>
      </div>
    </Section>
  )
}
