import { motion } from 'framer-motion'
import { Star, ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { siteConfig } from '../siteConfig'

function OrbitDecoration() {
  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 400 400"
      className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[130%] w-[130%] -translate-x-1/2 -translate-y-1/2 opacity-70"
      animate={{ rotate: 360 }}
      transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}
    >
      <circle cx="200" cy="200" r="170" stroke="var(--border)" strokeWidth="1" fill="none" />
      <circle cx="200" cy="200" r="130" stroke="var(--border)" strokeWidth="1" fill="none" strokeDasharray="4 8" />
      <circle cx="370" cy="200" r="6" fill="var(--accent)" />
      <circle cx="30" cy="200" r="5" fill="var(--accent-2)" />
      <circle cx="200" cy="70" r="4" fill="var(--accent-teach)" />
      <circle cx="290" cy="320" r="4" fill="var(--accent)" />
    </motion.svg>
  )
}

export function Hero() {
  const { t } = useLanguage()

  return (
    <section id="top" className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(60% 50% at 15% 10%, color-mix(in srgb, var(--accent) 18%, transparent), transparent), radial-gradient(50% 40% at 85% 20%, color-mix(in srgb, var(--accent-2) 14%, transparent), transparent)',
        }}
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-16 sm:pt-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
            {t.hero.kicker}
          </span>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-text sm:text-5xl">{t.hero.title}</h1>
          <p className="mt-2 text-lg font-semibold text-text-muted sm:text-xl">{t.hero.highlight}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">{t.hero.subtitle}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
            >
              {t.hero.ctaDev}
              <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-text transition-transform hover:-translate-y-0.5"
            >
              {t.hero.ctaTeach}
            </a>
          </div>

          <a
            href={siteConfig.profiRu}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 text-sm text-text-muted transition-colors hover:text-text"
          >
            <span className="flex items-center gap-1 font-semibold text-text">
              <Star size={15} className="fill-accent-teach text-accent-teach" />
              {siteConfig.rating.value}
            </span>
            {t.hero.ratingLabel}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: 'easeOut' }}
          className="relative justify-self-center lg:justify-self-end"
        >
          <OrbitDecoration />
          <div className="w-full max-w-sm rounded-2xl border border-border bg-surface p-5 shadow-xl shadow-black/5">
            <div className="mb-4 flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-red-400/70" />
              <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
              <span className="h-3 w-3 rounded-full bg-green-400/70" />
            </div>
            <div className="space-y-2 font-mono-brand text-sm">
              {t.hero.terminalLines.map((line, i) => (
                <p key={i} className={line.startsWith('$') ? 'text-accent-2' : 'text-text-muted'}>
                  {line}
                </p>
              ))}
              <span className="inline-block h-4 w-2 animate-pulse bg-accent align-middle" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
