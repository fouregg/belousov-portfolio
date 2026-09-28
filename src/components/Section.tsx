import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export type SiteVariant = 'dev' | 'teach'

export function Section({
  id,
  title,
  subtitle,
  eyebrow,
  variant = 'dev',
  children,
}: {
  id: string
  title: string
  subtitle?: string
  eyebrow?: string
  variant?: SiteVariant
  children: ReactNode
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-20 px-6 py-20 sm:py-28">
      <Reveal className="mb-12 max-w-2xl">
        {eyebrow ? (
          variant === 'dev' ? (
            <p className="mb-3 font-mono-brand text-sm text-accent">{`// ${eyebrow}`}</p>
          ) : (
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-accent-teach">{eyebrow}</p>
          )
        ) : null}
        <h2
          className={
            variant === 'dev'
              ? 'text-3xl font-extrabold tracking-tight text-text sm:text-4xl'
              : 'font-serif text-3xl font-semibold tracking-tight text-text sm:text-5xl'
          }
        >
          {title}
        </h2>
        {subtitle ? <p className="mt-3 text-base text-text-muted sm:text-lg">{subtitle}</p> : null}
      </Reveal>
      {children}
    </section>
  )
}
