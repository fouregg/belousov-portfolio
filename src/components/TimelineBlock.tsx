import { Section, type SiteVariant } from './Section'
import { Reveal } from './Reveal'
import type { TimelineContent, TimelineItem } from '../content'

function TimelineList({ items, variant }: { items: TimelineItem[]; variant: SiteVariant }) {
  const dot = variant === 'dev' ? 'bg-accent' : 'bg-accent-teach'
  const period = variant === 'dev' ? 'font-mono-brand text-accent' : 'font-semibold uppercase tracking-wide text-accent-teach'

  return (
    <ol className="relative space-y-8 border-l border-border pl-6">
      {items.map((item, i) => (
        <Reveal key={item.title + item.period} delay={i * 0.06}>
          <li className="relative">
            <span className={`absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full ${dot}`} />
            <p className={`text-xs ${period}`}>{item.period}</p>
            <p className="mt-1 font-bold text-text">{item.title}</p>
            <p className="mt-1 text-sm text-text-muted">{item.place}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  )
}

export function TimelineBlock({
  data,
  variant,
  eyebrow,
}: {
  data: TimelineContent
  variant: SiteVariant
  eyebrow?: string
}) {
  return (
    <Section id="experience" title={data.title} eyebrow={eyebrow} variant={variant}>
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-text-muted">{data.experienceLabel}</h3>
          <TimelineList items={data.experience} variant={variant} />
        </div>
        <div>
          <h3 className="mb-6 text-sm font-bold uppercase tracking-wide text-text-muted">{data.educationLabel}</h3>
          <TimelineList items={data.education} variant={variant} />
        </div>
      </div>
    </Section>
  )
}
