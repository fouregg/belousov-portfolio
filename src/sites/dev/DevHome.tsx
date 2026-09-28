import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Award, Bot, Boxes, Code2, Database, Gauge, SearchCode } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { Section } from '../../components/Section'
import { Reveal } from '../../components/Reveal'
import { TimelineBlock } from '../../components/TimelineBlock'
import { ContactBlock } from '../../components/ContactBlock'
import { siteConfig } from '../../siteConfig'
import { DevProjects } from './DevProjects'
import avatar from '../../assets/avatar.jpg'

const serviceIcons = [Code2, Bot, Database, Boxes, Gauge, SearchCode]

function Terminal({ lines }: { lines: string[] }) {
  return (
    <div className="w-full max-w-md overflow-hidden rounded-xl border border-border bg-surface shadow-2xl shadow-accent/10">
      <div className="flex items-center gap-1.5 border-b border-border bg-surface-2 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-red-400/70" />
        <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
        <span className="h-3 w-3 rounded-full bg-green-400/70" />
        <span className="ml-3 font-mono-brand text-xs text-text-muted">~/belousov</span>
      </div>
      <div className="space-y-2 p-5 font-mono-brand text-sm">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.18 }}
            className={line.startsWith('$') ? 'text-accent-2' : 'text-text-muted'}
          >
            {line}
          </motion.p>
        ))}
        <span className="inline-block h-4 w-2 animate-pulse bg-accent align-middle" />
      </div>
    </div>
  )
}

function DevHero() {
  const { t } = useLanguage()
  const hero = t.dev.hero

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="dev-grid pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-1 font-mono-brand text-xs text-accent">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-2" />
            {hero.kicker}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">{hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-transform hover:-translate-y-0.5"
            >
              {hero.ctaPrimary}
              <ArrowRight size={16} />
            </a>
            <Link
              to="/dev#projects"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm font-semibold text-text transition-transform hover:-translate-y-0.5"
            >
              {hero.ctaSecondary}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="justify-self-center lg:justify-self-end"
        >
          <Terminal lines={hero.terminalLines} />
        </motion.div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid grid-cols-2 overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4" style={{ gap: 1 }}>
          {t.dev.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.2 + i * 0.06} className="bg-surface p-5">
              <p className="font-mono-brand text-2xl font-semibold text-text sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function DevAbout() {
  const { t } = useLanguage()

  return (
    <Section id="about" title={t.dev.about.title} eyebrow="01 about">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start">
        <Reveal className="shrink-0">
          <img
            src={avatar}
            alt={siteConfig.name}
            className="h-28 w-28 rounded-xl border border-border object-cover shadow-lg shadow-accent/10"
          />
        </Reveal>
        <div className="max-w-3xl space-y-5">
          {t.dev.about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-text-muted sm:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

function DevServices() {
  const { t } = useLanguage()
  const services = t.dev.services

  return (
    <Section id="services" title={services.title} subtitle={services.subtitle} eyebrow="02 services">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((item, i) => {
          const Icon = serviceIcons[i % serviceIcons.length]
          return (
            <Reveal key={item.title} delay={i * 0.05} className="h-full">
              <div className="group h-full rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent/60">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon size={20} />
                </span>
                <h3 className="mt-5 font-bold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.description}</p>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

function DevProcess() {
  const { t } = useLanguage()
  const process = t.dev.process

  return (
    <Section id="process" title={process.title} subtitle={process.subtitle} eyebrow="03 process">
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {process.steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.08} className="h-full">
            <li className="relative h-full rounded-xl border border-border bg-surface p-6">
              <span className="font-mono-brand text-sm text-accent-2">{`step_${i + 1}`}</span>
              <h3 className="mt-3 font-bold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}

function DevSkills() {
  const { t } = useLanguage()

  return (
    <Section id="skills" title={t.dev.skills.title} eyebrow="05 stack">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.dev.skills.groups.map((group, i) => (
          <Reveal key={group.title} delay={i * 0.06}>
            <div className="h-full rounded-xl border border-border bg-surface p-5">
              <p className="font-mono-brand text-sm font-semibold text-accent">{group.title}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span key={item} className="rounded-md bg-surface-2 px-2 py-1 font-mono-brand text-xs text-text-muted">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function DevAchievements() {
  const { t } = useLanguage()

  return (
    <Section id="achievements" title={t.dev.achievements.title} eyebrow="07 achievements">
      <div className="grid gap-3 sm:grid-cols-2">
        {t.dev.achievements.items.map((item, i) => (
          <Reveal key={item} delay={i * 0.05}>
            <div className="flex items-start gap-3 rounded-xl border border-border bg-surface p-4">
              <Award size={18} className="mt-0.5 shrink-0 text-accent-2" />
              <p className="text-sm leading-relaxed text-text-muted">{item}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

export function DevHome() {
  const { t } = useLanguage()

  return (
    <>
      <DevHero />
      <DevAbout />
      <DevServices />
      <DevProcess />
      <DevProjects />
      <DevSkills />
      <TimelineBlock data={t.dev.timeline} variant="dev" eyebrow="06 experience" />
      <DevAchievements />
      <ContactBlock variant="dev" title={t.dev.contact.title} subtitle={t.dev.contact.subtitle} eyebrow="08 contact" />
    </>
  )
}
