import { useLanguage } from '../context/LanguageContext'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'

export function About() {
  const { t } = useLanguage()

  return (
    <Section id="about" title={t.about.title}>
      <div className="max-w-3xl space-y-5">
        {t.about.paragraphs.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <p className="text-base leading-relaxed text-text-muted sm:text-lg">{p}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
