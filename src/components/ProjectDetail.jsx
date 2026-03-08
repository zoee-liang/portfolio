import { useParams, Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { projects, projectDetails } from '../data/content'
import { SquigglyDivider } from './Doodles'
import { ArchitectureDiagram, CiCdDiagram, DbtPipelineDiagram, ToolingDiagram } from './ProjectDiagrams'

// Parses [[url|text]] into highlighted Link elements
function RichText({ text }) {
  const parts = text.split(/\[\[([^\]]+)\]\]/g)
  return parts.map((part, i) => {
    if (i % 2 === 0) return part
    const [url, label] = part.split('|')
    return (
      <Link key={i} to={url} className="highlight hover-squiggly font-medium text-gray-900">
        {label}
      </Link>
    )
  })
}

const diagramComponents = {
  'ai-data-chatbot-architecture': ArchitectureDiagram,
  'ai-data-chatbot-cicd': CiCdDiagram,
  'ai-data-chatbot-dbtPipeline': DbtPipelineDiagram,
  'ai-data-chatbot-tooling': ToolingDiagram,
}

function Section({ title, children, delay = 0 }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`mb-16 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <h3 className="font-hand text-2xl font-medium text-gray-900 mb-6">
        <span className="squiggly-underline">{title}</span>
      </h3>
      {children}
    </div>
  )
}

function ComingSoon({ project }) {
  const [ref, inView] = useInView()
  return (
    <div
      ref={ref}
      className={`text-center py-20 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <p className="font-hand text-2xl text-gray-300 mb-4">Coming soon!</p>
      <p className="text-gray-400 text-sm max-w-md mx-auto leading-relaxed">
        I'm still putting together the details for this project. Check back soon for the full write-up with architecture diagrams and technical deep-dives.
      </p>
    </div>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  const detail = projectDetails[slug]

  if (!project) {
    return (
      <div className="pt-28 pb-24 text-center">
        <h1 className="font-hand text-6xl font-medium text-gray-900 mb-4">404</h1>
        <p className="text-gray-500 text-lg mb-8">Project not found.</p>
        <Link to="/projects" className="hover-squiggly text-gray-900 font-medium">
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <section className="pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* Back link */}
        <Link
          to="/projects"
          className="hover-squiggly text-sm text-gray-400 font-medium inline-block mb-8"
        >
          &larr; Back to Projects
        </Link>

        {/* Header */}
        <h2 className="font-hand text-4xl md:text-5xl font-medium text-gray-900 mb-4">
          <span className="squiggly-underline">{project.title}</span>
        </h2>

        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-gray-400 text-xs px-2 py-0.5 border border-gray-200 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="outcome-bar flex items-start gap-2 text-sm text-emerald-700 border border-emerald-200 rounded px-3 py-2 bg-emerald-50/60 mb-12">
          <span className="shrink-0">&#10003;</span>
          <span className="leading-relaxed">{project.outcome}</span>
        </div>

        <SquigglyDivider className="w-full h-3 text-gray-200 mb-12" />

        {!detail ? (
          <ComingSoon project={project} />
        ) : (
          <>
            {/* Overview */}
            <Section title="Overview">
              <div className="space-y-4">
                {detail.overview.map((p, i) => (
                  <p key={i} className="text-gray-500 text-base leading-relaxed">{p.includes('[[') ? <RichText text={p} /> : p}</p>
                ))}
              </div>
            </Section>

            {/* Architecture */}
            {detail.architecture && (
              <Section title="Architecture" delay={100}>
                <div className="space-y-4 mb-6">
                  {detail.architecture.description.map((p, i) => (
                    <p key={i} className="text-gray-500 text-base leading-relaxed">{p.includes('[[') ? <RichText text={p} /> : p}</p>
                  ))}
                </div>
                {(() => {
                  const Diagram = diagramComponents[`${slug}-architecture`]
                  return Diagram ? (
                    <figure className="my-8">
                      <Diagram />
                      {detail.architecture.caption && (
                        <figcaption className="text-center text-xs text-gray-400 mt-3 italic">
                          {detail.architecture.caption}
                        </figcaption>
                      )}
                    </figure>
                  ) : null
                })()}
              </Section>
            )}

            {/* CI/CD */}
            {detail.cicd && (
              <Section title="CI/CD Pipeline" delay={100}>
                <div className="space-y-4 mb-6">
                  {detail.cicd.description.map((p, i) => (
                    <p key={i} className="text-gray-500 text-base leading-relaxed">{p.includes('[[') ? <RichText text={p} /> : p}</p>
                  ))}
                </div>
                {(() => {
                  const Diagram = diagramComponents[`${slug}-cicd`]
                  return Diagram ? (
                    <figure className="my-8">
                      <Diagram />
                      {detail.cicd.caption && (
                        <figcaption className="text-center text-xs text-gray-400 mt-3 italic">
                          {detail.cicd.caption}
                        </figcaption>
                      )}
                    </figure>
                  ) : null
                })()}
              </Section>
            )}

            {/* dbt Pipeline */}
            {detail.dbtPipeline && (
              <Section title="dbt Repo CI/CD Pipeline" delay={100}>
                <div className="space-y-4 mb-6">
                  {detail.dbtPipeline.description.map((p, i) => (
                    <p key={i} className="text-gray-500 text-base leading-relaxed">{p.includes('[[') ? <RichText text={p} /> : p}</p>
                  ))}
                </div>
                {(() => {
                  const Diagram = diagramComponents[`${slug}-dbtPipeline`]
                  return Diagram ? (
                    <figure className="my-8">
                      <Diagram />
                      {detail.dbtPipeline.caption && (
                        <figcaption className="text-center text-xs text-gray-400 mt-3 italic">
                          {detail.dbtPipeline.caption}
                        </figcaption>
                      )}
                    </figure>
                  ) : null
                })()}
              </Section>
            )}

            {/* Infrastructure Optimization */}
            {detail.infrastructure && (
              <Section title="Infrastructure Optimization" delay={100}>
                <div className="space-y-4">
                  {detail.infrastructure.description.map((p, i) => (
                    <p key={i} className="text-gray-500 text-base leading-relaxed">{p.includes('[[') ? <RichText text={p} /> : p}</p>
                  ))}
                </div>
              </Section>
            )}

            {/* Tooling & Infrastructure */}
            {detail.tooling && (
              <Section title="Tooling & Infrastructure" delay={100}>
                <div className="space-y-4 mb-6">
                  {detail.tooling.description.map((p, i) => (
                    <p key={i} className="text-gray-500 text-base leading-relaxed">{p.includes('[[') ? <RichText text={p} /> : p}</p>
                  ))}
                </div>
                {(() => {
                  const Diagram = diagramComponents[`${slug}-tooling`]
                  return Diagram ? (
                    <figure className="my-8">
                      <Diagram />
                    </figure>
                  ) : null
                })()}
              </Section>
            )}

            {/* Tech Stack */}
            {detail.stack && (
              <Section title="Technology Stack" delay={100}>
                <div className="flex flex-wrap gap-2">
                  {detail.stack.map((tech) => (
                    <span
                      key={tech}
                      className="sketch-border text-gray-700 text-sm px-3 py-1.5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Section>
            )}

            {/* GitHub link */}
            {project.link && (
              <div className="mt-8">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-squiggly text-gray-900 font-medium"
                >
                  View on GitHub &rarr;
                </a>
              </div>
            )}
          </>
        )}

        <SquigglyDivider className="w-full h-3 text-gray-200 mt-16" />
      </div>
    </section>
  )
}
