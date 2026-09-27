import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import { projectGradients, projectIconColors, projectIcons } from '../lib/projectVisuals'
import type { Project } from '../content'

function ProjectCard({ project, index, linkLabel }: { project: Project; index: number; linkLabel: string }) {
  const Icon = projectIcons[index % projectIcons.length]

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <Link
        to={`/projects/${project.slug}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-transform hover:-translate-y-1"
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
                className="rounded-full border border-border px-2.5 py-0.5 text-xs font-medium text-text-muted"
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
    </Reveal>
  )
}

export function Projects() {
  const { t } = useLanguage()

  return (
    <Section id="projects" title={t.projects.title} subtitle={t.projects.subtitle}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} linkLabel={t.projects.linkLabel} />
        ))}
      </div>
    </Section>
  )
}
