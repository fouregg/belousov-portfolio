import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '../../context/LanguageContext'
import { Section } from '../../components/Section'
import { Reveal } from '../../components/Reveal'
import { projectGradients, projectIconColors, projectIcons } from '../../lib/projectVisuals'
import type { Project } from '../../content'

function ProjectCard({ project, index, linkLabel }: { project: Project; index: number; linkLabel: string }) {
  const Icon = projectIcons[index % projectIcons.length]

  return (
    <Link
      to={`/dev/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-surface transition-all hover:-translate-y-1 hover:border-accent/60"
    >
      {project.images?.[0] ? (
        <div className="h-32 overflow-hidden">
          <img
            src={project.images[0]}
            alt=""
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className={`flex h-32 items-center justify-center bg-gradient-to-br ${projectGradients[index % projectGradients.length]}`}>
          <Icon size={40} className={projectIconColors[index % projectIconColors.length]} strokeWidth={1.5} />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-bold text-text">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-surface-2 px-2 py-0.5 font-mono-brand text-xs text-text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
          {linkLabel}
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  )
}

export function DevProjects() {
  const { t } = useLanguage()
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  return (
    <Section id="projects" title={t.dev.projects.title} subtitle={t.dev.projects.subtitle} eyebrow="04 cases">
      <div
        ref={scrollerRef}
        className="-mx-6 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-6 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {t.dev.projects.items.map((project, i) => (
          <Reveal
            key={project.slug}
            delay={i * 0.08}
            className="w-[80%] shrink-0 snap-start sm:w-[55%] lg:w-[420px]"
          >
            <ProjectCard project={project} index={i} linkLabel={t.dev.projects.linkLabel} />
          </Reveal>
        ))}
      </div>

      <div className="mt-6 flex justify-end gap-2">
        <button
          onClick={() => scroll(-1)}
          className="rounded-full border border-border p-2 text-text-muted transition-colors hover:text-text"
          aria-label="Previous"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={() => scroll(1)}
          className="rounded-full border border-border p-2 text-text-muted transition-colors hover:text-text"
          aria-label="Next"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </Section>
  )
}
