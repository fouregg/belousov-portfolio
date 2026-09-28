import { useEffect, useState, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ArrowLeftRight } from 'lucide-react'
import { Controls } from './Controls'
import type { SiteVariant } from './Section'

export interface NavLink {
  to: string
  label: string
}

export function SiteHeader({
  variant,
  brand,
  links,
  cta,
  switchTo,
}: {
  variant: SiteVariant
  brand: ReactNode
  links: NavLink[]
  cta: NavLink
  switchTo: NavLink
}) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const ctaClass =
    variant === 'dev'
      ? 'bg-accent text-white rounded-lg'
      : 'bg-accent-teach text-on-teach rounded-full'
  const hoverText = variant === 'dev' ? 'hover:text-accent' : 'hover:text-accent-teach'

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled ? 'border-b border-border bg-bg/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center gap-6 px-6 py-4">
        <Link to="/" className="shrink-0">
          {brand}
        </Link>

        <nav className="mr-auto hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium text-text-muted transition-colors ${hoverText}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <Link
            to={switchTo.to}
            className="hidden items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-text-muted transition-colors hover:text-text md:inline-flex"
          >
            <ArrowLeftRight size={13} />
            {switchTo.label}
          </Link>
          <Controls />
          <Link
            to={cta.to}
            className={`hidden px-4 py-1.5 text-sm font-semibold transition-opacity hover:opacity-90 sm:block ${ctaClass}`}
          >
            {cta.label}
          </Link>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-full border border-border p-2 text-text-muted lg:hidden"
            aria-label="Menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <nav className="flex flex-col gap-1 border-t border-border bg-bg px-6 py-4 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-2 py-2 text-sm font-medium text-text-muted hover:bg-surface hover:text-text"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to={switchTo.to}
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-text-muted hover:bg-surface hover:text-text"
          >
            <ArrowLeftRight size={14} />
            {switchTo.label}
          </Link>
          <Link
            to={cta.to}
            onClick={() => setMenuOpen(false)}
            className={`mt-2 px-3 py-2 text-center text-sm font-semibold ${ctaClass}`}
          >
            {cta.label}
          </Link>
        </nav>
      ) : null}
    </header>
  )
}
