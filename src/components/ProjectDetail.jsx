import { useParams, Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { projects, projectDetails } from '../data/content'
import { SquigglyDivider } from './Doodles'
import { ArchitectureDiagram, CiCdDiagram, DbtPipelineDiagram, ToolingDiagram } from './ProjectDiagrams'

// Parses [[url|text]] into highlighted Link elements (internal or external)
function RichText({ text }) {
  const parts = text.split(/\[\[([^\]]+)\]\]/g)
  return parts.map((part, i) => {
    if (i % 2 === 0) return part
    const [url, label] = part.split('|')
    if (url.startsWith('http')) {
      return (
        <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="highlight hover-squiggly font-medium text-gray-900">
          {label}
        </a>
      )
    }
    return (
      <Link key={i} to={url} className="highlight hover-squiggly font-medium text-gray-900">
        {label}
      </Link>
    )
  })
}

// Calculate reading time from all text content in a project detail
function getReadingTime(detail) {
  if (!detail) return 0
  let text = ''
  const extractText = (val) => {
    if (typeof val === 'string') text += ' ' + val
    else if (Array.isArray(val)) val.forEach(extractText)
    else if (val && typeof val === 'object') Object.values(val).forEach(extractText)
  }
  extractText(detail)
  const words = text.trim().split(/\s+/).length
  return Math.max(1, Math.round(words / 200))
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

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-gray-400 text-xs px-2 py-0.5 border border-gray-200 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {detail && (
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-6">
            {detail.date && <span>{detail.date}</span>}
            {detail.date && <span>&middot;</span>}
            <span>{getReadingTime(detail)} min read</span>
          </div>
        )}

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

            {/* Decisions & Tradeoffs */}
            {detail.decisions && (
              <Section title="Decisions & Tradeoffs" delay={100}>
                <div className="space-y-10">
                  {detail.decisions.items.map((item, i) => (
                    <div key={i}>
                      <h4 className="font-hand text-lg font-medium text-gray-800 mb-4">{item.title}</h4>
                      <div className="space-y-4">
                        {item.paragraphs.map((p, j) => (
                          <p key={j} className="text-gray-500 text-base leading-relaxed">{p.includes('[[') ? <RichText text={p} /> : p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* Results & Impact */}
            {detail.results && (
              <Section title="Results & Impact" delay={100}>
                <div className="space-y-10">
                  {detail.results.items.map((item, i) => (
                    <div key={i}>
                      <h4 className="font-hand text-lg font-medium text-gray-800 mb-4">{item.title}</h4>
                      <div className="space-y-4">
                        {item.paragraphs.map((p, j) => (
                          <p key={j} className="text-gray-500 text-base leading-relaxed">{p.includes('[[') ? <RichText text={p} /> : p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* What's Next */}
            {detail.whatsNext && (
              <Section title="What's Next" delay={100}>
                <p className="text-gray-500 text-base leading-relaxed mb-8">{detail.whatsNext.intro}</p>
                <div className="space-y-10">
                  {detail.whatsNext.items.map((item, i) => (
                    <div key={i}>
                      <h4 className="font-hand text-lg font-medium text-gray-800 mb-4">{item.title}</h4>
                      <div className="space-y-4">
                        {item.paragraphs.map((p, j) => (
                          <p key={j} className="text-gray-500 text-base leading-relaxed">{p.includes('[[') ? <RichText text={p} /> : p}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
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
