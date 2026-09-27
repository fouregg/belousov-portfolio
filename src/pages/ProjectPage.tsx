import { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { ArrowLeft, Check, ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { Reveal } from '../components/Reveal'
import { projectGradients, projectIconColors, projectIcons } from '../lib/projectVisuals'

export function ProjectPage() {
  const { slug } = useParams()
  const { t } = useLanguage()

  const index = t.projects.items.findIndex((p) => p.slug === slug)
  const project = index >= 0 ? t.projects.items[index] : undefined

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [slug])

  if (!project) {
    return <Navigate to="/" replace />
  }

  const Icon = projectIcons[index % projectIcons.length]

  return (
    <article className="mx-auto max-w-3xl px-6 py-16 sm:py-24">
      <Reveal>
        <a
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-muted transition-colors hover:text-text"
        >
          <ArrowLeft size={16} />
          {t.projects.backLabel}
        </a>
      </Reveal>

      <Reveal delay={0.05}>
        {project.images?.[0] ? (
          <div className="mt-6 h-56 overflow-hidden rounded-2xl sm:h-72">
            <img src={project.images[0]} alt={project.title} className="h-full w-full object-cover" />
          </div>
        ) : (
          <div
            className={`mt-6 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br ${
              projectGradients[index % projectGradients.length]
            }`}
          >
            <Icon size={52} className={projectIconColors[index % projectIconColors.length]} strokeWidth={1.5} />
          </div>
        )}
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="mt-8 text-3xl font-extrabold tracking-tight text-text sm:text-4xl">{project.title}</h1>
        <p className="mt-4 text-base leading-relaxed text-text-muted sm:text-lg">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
          >
            {project.linkLabel}
            <ExternalLink size={16} />
          </a>
        ) : null}
      </Reveal>

      {project.images && project.images.length > 1 ? (
        <Reveal delay={0.12} className="mt-6 grid grid-cols-2 gap-3">
          {project.images.slice(1).map((src, i) => (
            <div key={i} className="h-40 overflow-hidden rounded-xl">
              <img src={src} alt="" className="h-full w-full object-cover" />
            </div>
          ))}
        </Reveal>
      ) : null}

      <Reveal delay={0.15}>
        <h2 className="mt-12 text-sm font-bold uppercase tracking-wide text-text-muted">{t.projects.detailsTitle}</h2>
        <ul className="mt-4 space-y-3">
          {project.details.map((detail) => (
            <li key={detail} className="flex items-start gap-3">
              <Check size={16} className="mt-1 shrink-0 text-accent-2" />
              <span className="text-sm leading-relaxed text-text-muted sm:text-base">{detail}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </article>
  )
}
