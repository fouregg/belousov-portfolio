import { useLanguage } from '../context/LanguageContext'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'

function Monogram() {
  return (
    <svg width="112" height="112" viewBox="0 0 112 112" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="monogram-gradient" x1="0" y1="0" x2="112" y2="112" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--accent)" />
          <stop offset="100%" stopColor="var(--accent-2)" />
        </linearGradient>
      </defs>
      <circle cx="56" cy="56" r="54" stroke="url(#monogram-gradient)" strokeWidth="2" strokeOpacity="0.35" />
      <circle cx="56" cy="56" r="46" fill="url(#monogram-gradient)" fillOpacity="0.14" />
      <text
        x="56"
        y="56"
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="'JetBrains Mono', ui-monospace, monospace"
        fontSize="34"
        fontWeight="700"
        fill="url(#monogram-gradient)"
      >
        АБ
      </text>
    </svg>
  )
}

export function About() {
  const { t } = useLanguage()

  return (
    <Section id="about" title={t.about.title}>
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        <Reveal className="shrink-0">
          <Monogram />
        </Reveal>
        <div className="max-w-3xl space-y-5">
          {t.about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-text-muted sm:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
