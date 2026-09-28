import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { Controls } from '../components/Controls'
import { SiteMeta } from '../components/SiteMeta'
import avatar from '../assets/avatar.jpg'

type Side = 'dev' | 'teach'

const codeTop = ['from fastapi import FastAPI', 'app = FastAPI()', '@app.get("/health")', 'async def health() -> dict:']
const codeBottom = ['await broker.publish(event)', 'SELECT * FROM integrations', 'docker compose up -d']

// Glyphs sit in the top and bottom bands so they never cover the title and button.
const teachGlyphs = [
  { text: 'if', top: '14%', left: '10%' },
  { text: 'for i in range', top: '18%', left: '42%' },
  { text: 'f(x)', top: '11%', left: '78%' },
  { text: 'x²', top: '76%', left: '14%' },
  { text: 'print("Hello")', top: '84%', left: '36%' },
  { text: 'π', top: '74%', left: '80%' },
  { text: '0 1 1 0', top: '90%', left: '70%' },
]

function DevBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-surface-2" />
      <div className="dev-grid absolute inset-0" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 30% 40%, color-mix(in srgb, var(--accent) 30%, transparent), transparent), radial-gradient(40% 40% at 80% 85%, color-mix(in srgb, var(--accent-2) 22%, transparent), transparent)',
        }}
      />
      <div className="absolute inset-x-8 top-24 hidden space-y-3 font-mono-brand text-sm text-text-muted/40 sm:block">
        {codeTop.map((line, i) => (
          <p key={line} style={{ paddingLeft: `${i * 1.5}rem` }}>
            {line}
          </p>
        ))}
      </div>
      <div className="absolute bottom-10 right-8 space-y-3 text-right font-mono-brand text-xs text-text-muted/40 sm:text-sm">
        {codeBottom.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </div>
    </>
  )
}

function TeachBackdrop() {
  return (
    <>
      <div className="absolute inset-0 bg-bg-soft" />
      <div className="teach-dots absolute inset-0" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 50% at 70% 40%, color-mix(in srgb, var(--accent-teach) 30%, transparent), transparent), radial-gradient(40% 40% at 20% 85%, color-mix(in srgb, var(--accent) 16%, transparent), transparent)',
        }}
      />
      {teachGlyphs.map((glyph) => (
        <span
          key={glyph.text}
          className="absolute whitespace-nowrap font-serif text-xl italic text-accent-teach/30 sm:text-3xl"
          style={{ top: glyph.top, left: glyph.left }}
        >
          {glyph.text}
        </span>
      ))}
    </>
  )
}

function Panel({
  side,
  hovered,
  onHover,
  index,
  label,
  tagline,
  cta,
}: {
  side: Side
  hovered: Side | null
  onHover: (side: Side | null) => void
  index: string
  label: string
  tagline: string
  cta: string
}) {
  const active = hovered === side
  const dimmed = hovered !== null && !active
  const isDev = side === 'dev'

  return (
    <motion.div
      initial={{ opacity: 0, x: isDev ? -60 : 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: isDev ? 0 : 0.1 }}
      className="relative min-h-0 min-w-0 overflow-hidden transition-[flex-grow] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
      style={{ flexGrow: active ? 1.5 : 1, flexBasis: 0 }}
    >
      <Link
        to={`/${side}`}
        onMouseEnter={() => onHover(side)}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover(side)}
        onBlur={() => onHover(null)}
        className="group absolute inset-0 block outline-none"
        aria-label={`${label} — ${tagline}`}
      >
        <div
          className={`absolute inset-0 transition-transform duration-[1200ms] ease-out ${active ? 'scale-105' : 'scale-100'}`}
        >
          {isDev ? <DevBackdrop /> : <TeachBackdrop />}
        </div>

        <div
          className={`relative flex h-full flex-col items-center justify-center px-6 pt-16 text-center transition-opacity duration-500 md:pt-0 ${
            dimmed ? 'opacity-50' : 'opacity-100'
          }`}
        >
          <span
            className={
              isDev
                ? 'font-mono-brand text-sm text-accent'
                : 'text-sm font-semibold uppercase tracking-widest text-accent-teach'
            }
          >
            {isDev ? `// ${index}` : index}
          </span>
          <h2
            className={`mt-3 text-[clamp(2.25rem,4.4vw,4.5rem)] leading-tight tracking-tight text-text transition-transform duration-700 ${
              isDev ? 'font-extrabold' : 'font-serif font-semibold italic'
            } ${active ? 'scale-105' : ''}`}
          >
            {label}
          </h2>
          <p className="mt-4 max-w-xs text-sm text-text-muted sm:text-base">{tagline}</p>

          <span
            className={`mt-8 inline-block -skew-x-12 px-8 py-3 shadow-lg transition-all duration-500 ${
              isDev ? 'bg-accent text-white shadow-accent/30' : 'bg-accent-teach text-on-teach shadow-accent-teach/30'
            } ${
              active ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            } [@media(hover:none)]:translate-y-0 [@media(hover:none)]:opacity-100`}
          >
            <span className="inline-flex skew-x-12 items-center gap-2 text-sm font-semibold">
              {cta}
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  )
}

export function Landing() {
  const { t } = useLanguage()
  const [hovered, setHovered] = useState<Side | null>(null)

  return (
    <div className="relative flex h-[100svh] flex-col overflow-hidden bg-bg text-text md:flex-row">
      <SiteMeta meta={t.meta} />

      <Panel
        side="dev"
        hovered={hovered}
        onHover={setHovered}
        index="01"
        label={t.landing.dev.label}
        tagline={t.landing.dev.tagline}
        cta={t.landing.dev.cta}
      />
      <div aria-hidden className="relative z-10 h-px w-full shrink-0 bg-border md:h-full md:w-px" />
      <Panel
        side="teach"
        hovered={hovered}
        onHover={setHovered}
        index="02"
        label={t.landing.teach.label}
        tagline={t.landing.teach.tagline}
        cta={t.landing.teach.cta}
      />

      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-4 px-5 py-4 sm:px-8"
      >
        <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-border bg-bg/70 py-1 pl-1 pr-4 backdrop-blur">
          <img src={avatar} alt="" className="h-9 w-9 rounded-full object-cover" />
          <div className="text-left leading-tight">
            <p className="text-sm font-bold text-text">{t.landing.name}</p>
            <p className="text-xs text-text-muted">{t.landing.hint}</p>
          </div>
        </div>
        <div className="pointer-events-auto flex items-center gap-2">
          <Controls />
        </div>
      </motion.div>
    </div>
  )
}
