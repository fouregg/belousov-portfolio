import { Star, ExternalLink, Quote } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { siteConfig } from '../siteConfig'

export function Testimonials() {
  const { t } = useLanguage()

  return (
    <Section id="reviews" title={t.testimonials.title} subtitle={t.testimonials.subtitle}>
      <div className="grid gap-5 sm:grid-cols-2">
        {t.testimonials.items.map((item, i) => (
          <Reveal key={item.name + item.date} delay={i * 0.06}>
            <figure className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6">
              <Quote size={22} className="text-accent/50" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">"{item.text}"</blockquote>
              <figcaption className="mt-5 flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="font-semibold text-text">{item.name}</p>
                  <p className="text-xs text-text-muted">
                    {item.service} · {item.date}
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star key={star} size={13} className="fill-accent-teach text-accent-teach" />
                  ))}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.2} className="mt-8">
        <a
          href={siteConfig.profiRu}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
        >
          {t.testimonials.linkLabel}
          <ExternalLink size={14} />
        </a>
      </Reveal>
    </Section>
  )
}
