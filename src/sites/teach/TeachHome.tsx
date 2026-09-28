import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Backpack,
  Briefcase,
  Check,
  CircleCheckBig,
  Code2,
  Cpu,
  ExternalLink,
  FileText,
  Gamepad2,
  GraduationCap,
  Heart,
  Quote,
  Star,
  TrendingUp,
} from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { Section } from '../../components/Section'
import { Reveal } from '../../components/Reveal'
import { TimelineBlock } from '../../components/TimelineBlock'
import { ContactBlock } from '../../components/ContactBlock'
import { siteConfig } from '../../siteConfig'
import avatar from '../../assets/avatar.jpg'

const audienceIcons = [Backpack, GraduationCap, Briefcase]
const subjectIcons = [Cpu, Code2, Gamepad2, FileText]
const approachIcons = [Heart, Briefcase, CircleCheckBig, TrendingUp]

function TeachHero() {
  const { t, lang } = useLanguage()
  const hero = t.teach.hero

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="teach-dots pointer-events-none absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-16 pt-14 sm:pt-20 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-teach/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent-teach">
            {hero.kicker}
          </span>

          <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-5xl lg:text-6xl">
            {hero.title} <em className="text-accent-teach">{hero.highlight}</em>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">{hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={siteConfig.telegram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent-teach px-6 py-3 text-sm font-semibold text-on-teach shadow-lg shadow-accent-teach/25 transition-transform hover:-translate-y-0.5"
            >
              {hero.ctaPrimary}
              <ArrowRight size={16} />
            </a>
            <Link
              to="/teach#reviews"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-sm font-semibold text-text transition-transform hover:-translate-y-0.5"
            >
              {hero.ctaSecondary}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
          className="relative mx-auto w-64 sm:w-80"
        >
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[42%_58%_55%_45%/48%_42%_58%_52%] bg-accent-teach/20"
          />
          <img
            src={avatar}
            alt={siteConfig.name}
            className="relative aspect-square w-full rounded-full border-4 border-surface object-cover shadow-2xl"
          />
          <a
            href={siteConfig.profiRu}
            target="_blank"
            rel="noreferrer"
            className="absolute -bottom-3 -left-4 flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-3 shadow-xl sm:-left-10"
          >
            <Star size={20} className="fill-accent-teach text-accent-teach" />
            <div className="leading-tight">
              <p className="font-bold text-text">{siteConfig.rating.value.toLocaleString(lang)}</p>
              <p className="text-xs text-text-muted">{hero.ratingLabel}</p>
            </div>
          </a>
        </motion.div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-8">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {t.teach.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={0.2 + i * 0.06}>
              <div className="h-full rounded-3xl border border-border bg-surface p-5">
                <p className="font-serif text-3xl font-semibold text-accent-teach sm:text-4xl">{stat.value}</p>
                <p className="mt-1 text-sm text-text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Audiences() {
  const { t } = useLanguage()
  const data = t.teach.audiences

  return (
    <Section id="audiences" title={data.title} subtitle={data.subtitle} variant="teach">
      <div className="grid gap-5 lg:grid-cols-3">
        {data.items.map((item, i) => {
          const Icon = audienceIcons[i % audienceIcons.length]
          return (
            <Reveal key={item.title} delay={i * 0.08} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-border bg-surface p-7 transition-transform hover:-translate-y-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-teach/15 text-accent-teach">
                  <Icon size={22} />
                </span>
                <h3 className="mt-5 font-serif text-2xl font-semibold text-text">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.description}</p>
                <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-text">
                      <Check size={16} className="mt-0.5 shrink-0 text-accent-teach" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

function Subjects() {
  const { t } = useLanguage()
  const data = t.teach.subjects

  return (
    <Section id="subjects" title={data.title} subtitle={data.subtitle} variant="teach">
      <div className="grid gap-5 sm:grid-cols-2">
        {data.items.map((item, i) => {
          const Icon = subjectIcons[i % subjectIcons.length]
          return (
            <Reveal key={item.title} delay={i * 0.06} className="h-full">
              <div className="flex h-full gap-5 rounded-3xl border border-border bg-surface p-7">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-accent-teach text-on-teach">
                  <Icon size={22} />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-text">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.description}</p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

function Approach() {
  const { t } = useLanguage()
  const data = t.teach.approach

  return (
    <Section id="approach" title={data.title} subtitle={data.subtitle} variant="teach">
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
        {data.items.map((item, i) => {
          const Icon = approachIcons[i % approachIcons.length]
          return (
            <Reveal key={item.title} delay={i * 0.06}>
              <div className="flex gap-4">
                <Icon size={26} className="mt-1 shrink-0 text-accent-teach" strokeWidth={1.75} />
                <div>
                  <h3 className="font-serif text-xl font-semibold text-text">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted sm:text-base">{item.description}</p>
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

function Stars() {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, star) => (
        <Star key={star} size={14} className="fill-accent-teach text-accent-teach" />
      ))}
    </div>
  )
}

function Testimonials() {
  const { t } = useLanguage()
  const data = t.teach.testimonials
  const [featured, ...rest] = data.items

  return (
    <Section id="reviews" title={data.title} subtitle={data.subtitle} variant="teach">
      <Reveal>
        <figure className="relative overflow-hidden rounded-3xl bg-accent-teach p-8 text-on-teach sm:p-10">
          <Quote size={80} className="absolute -right-2 -top-2 opacity-15" />
          <blockquote className="relative font-serif text-lg leading-relaxed sm:text-2xl">«{featured.text}»</blockquote>
          <figcaption className="relative mt-6 text-sm font-semibold opacity-80">
            {featured.name} · {featured.service} · {featured.date}
          </figcaption>
        </figure>
      </Reveal>

      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {rest.map((item, i) => (
          <Reveal key={item.name + item.date} delay={i * 0.06} className="h-full">
            <figure className="flex h-full flex-col rounded-3xl border border-border bg-surface p-6">
              <Stars />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">«{item.text}»</blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="font-semibold text-text">{item.name}</p>
                <p className="text-xs text-text-muted">
                  {item.service} · {item.date}
                </p>
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
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent-teach"
        >
          {data.linkLabel}
          <ExternalLink size={14} />
        </a>
      </Reveal>
    </Section>
  )
}

function TeachAbout() {
  const { t } = useLanguage()

  return (
    <Section id="about" title={t.teach.about.title} variant="teach">
      <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <Reveal>
          <img
            src={avatar}
            alt={siteConfig.name}
            className="aspect-[4/5] w-full max-w-xs rounded-[2rem] border border-border object-cover shadow-xl"
          />
        </Reveal>
        <div className="space-y-5">
          {t.teach.about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <p className="text-base leading-relaxed text-text-muted sm:text-lg">{p}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Process() {
  const { t } = useLanguage()
  const data = t.teach.process

  return (
    <Section id="process" title={data.title} subtitle={data.formatNote} variant="teach">
      <ol className="relative grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div aria-hidden className="absolute left-6 right-6 top-6 hidden h-px bg-border lg:block" />
        {data.steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 0.08}>
            <li className="relative">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent-teach bg-bg font-serif text-xl font-semibold text-accent-teach">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold text-text">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}

export function TeachHome() {
  const { t } = useLanguage()

  return (
    <>
      <TeachHero />
      <Audiences />
      <Subjects />
      <Approach />
      <Testimonials />
      <TeachAbout />
      <Process />
      <TimelineBlock data={t.teach.timeline} variant="teach" />
      <ContactBlock
        variant="teach"
        title={t.teach.contact.title}
        subtitle={t.teach.contact.subtitle}
        showProfi
      />
    </>
  )
}
