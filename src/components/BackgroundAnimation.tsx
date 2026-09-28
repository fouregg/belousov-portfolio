import type { SiteVariant } from './Section'

export function BackgroundAnimation({ variant = 'dev' }: { variant?: SiteVariant }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden ${variant === 'teach' ? 'bg-teach' : ''}`}
    >
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />
    </div>
  )
}
