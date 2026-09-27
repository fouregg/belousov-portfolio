import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
      <Reveal className="mb-12 max-w-2xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-text sm:text-4xl">{title}</h2>
        {subtitle ? <p className="mt-3 text-base text-text-muted sm:text-lg">{subtitle}</p> : null}
      </Reveal>
      {children}
    </section>
  )
}
