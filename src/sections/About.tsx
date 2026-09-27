import { useLanguage } from '../context/LanguageContext'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import avatar from '../assets/avatar.jpg'

function Avatar() {
  return (
    <div className="relative h-28 w-28 shrink-0">
      <svg
        aria-hidden
        width="112"
        height="112"
        viewBox="0 0 112 112"
        className="absolute inset-0"
      >
        <defs>
          <linearGradient id="avatar-ring-gradient" x1="0" y1="0" x2="112" y2="112" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="var(--accent)" />
            <stop offset="100%" stopColor="var(--accent-2)" />
          </linearGradient>
        </defs>
        <circle cx="56" cy="56" r="54" stroke="url(#avatar-ring-gradient)" strokeWidth="2" strokeOpacity="0.5" fill="none" />
      </svg>
      <img
        src={avatar}
        alt="Алексей Белоусов"
        className="absolute inset-1 h-[104px] w-[104px] rounded-full border-2 border-surface object-cover"
      />
    </div>
  )
}

export function About() {
  const { t } = useLanguage()

  return (
    <Section id="about" title={t.about.title}>
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        <Reveal className="shrink-0">
          <Avatar />
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
