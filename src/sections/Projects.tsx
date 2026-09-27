import { Bot, Brain, Code2, ExternalLink } from 'lucide-react'
import { useLanguage } from '../context/LanguageContext'
import { Section } from '../components/Section'
import { Reveal } from '../components/Reveal'
import type { Project } from '../content'

const icons = [Brain, Bot, Code2]
const gradients = [
  'from-[var(--accent)]/25 to-[var(--accent)]/5',
  'from-[var(--accent-2)]/25 to-[var(--accent-2)]/5',
  'from-[var(--accent-teach)]/25 to-[var(--accent-teach)]/5',
]
const iconColors = ['text-accent', 'text-accent-2', 'text-accent-teach']

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Icon = icons[index % icons.length]

  return (
    <Reveal delay={index * 0.08} className="h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface">
        <div className={`flex h-32 items-center justify-center bg-gradient-to-br ${gradients[index % gradients.length]}`}>
          <Icon size={40} className={iconColors[index % iconColors.length]} strokeWidth={1.5} />
        </div>
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

          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent"
            >
              {project.linkLabel}
              <ExternalLink size={14} />
            </a>
          ) : null}
        </div>
      </div>
    </Reveal>
  )
}

export function Projects() {
  const { t } = useLanguage()

  return (
    <Section id="projects" title={t.projects.title} subtitle={t.projects.subtitle}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {t.projects.items.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  )
}
