import { useParams, Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { projects, projectDetails } from '../data/content'
import { SquigglyDivider } from './Doodles'
import { ArchitectureDiagram, CiCdDiagram, DbtPipelineDiagram, ToolingDiagram, ContextLayersDiagram, MetadataFieldsTable, MetadataReasoningDiagram, EmbeddingExampleDiagram, ContextLifecycleDiagram, ContextFrameworkDiagram, CiCdEnvironmentsDiagram, CiCdBeforeDiagram, CiCdAfterDiagram, CiCdJobsDiagram, SnowflakeApproachDiagram } from './ProjectDiagrams'

// Parses [[url|text]] into Links and `code` into inline code elements
function RichText({ text }) {
  const parts = text.split(/(\[\[[^\]]+\]\]|`[^`]+`|_[^_]+_)/g)
  return parts.map((part, i) => {
    if (part.startsWith('[[') && part.endsWith(']]')) {
      const inner = part.slice(2, -2)
      const [url, label] = inner.split('|')
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
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={i} className="text-gray-700 bg-gray-100 px-1.5 py-0.5 rounded text-sm font-mono">{part.slice(1, -1)}</code>
    }
    if (part.startsWith('_') && part.endsWith('_')) {
      return <em key={i}>{part.slice(1, -1)}</em>
    }
    return part
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
  'context-engineering-architecture': ContextLayersDiagram,
  'context-engineering-metadataFramework': MetadataFieldsTable,
  'context-engineering-metadataReasoning': MetadataReasoningDiagram,
  'context-engineering-vectorIndexing': EmbeddingExampleDiagram,
  'context-engineering-cicd': ContextLifecycleDiagram,
  'context-engineering-contextFramework': ContextFrameworkDiagram,
  'cicd-data-pipeline-architecture': CiCdEnvironmentsDiagram,
  'cicd-data-pipeline-before': CiCdBeforeDiagram,
  'cicd-data-pipeline-after': CiCdAfterDiagram,
  'cicd-data-pipeline-jobs': CiCdJobsDiagram,
  'snowflake-optimization-approach': SnowflakeApproachDiagram,
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
                  <p key={i} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
                ))}
              </div>
              {(() => {
                const Diagram = diagramComponents[`${slug}-contextFramework`]
                return Diagram ? (
                  <figure className="my-8">
                    <Diagram />
                    <figcaption className="text-center text-xs text-gray-400 mt-3 italic">
                      Mapping the Knowledge / Tools / Memory framework to implementation
                    </figcaption>
                  </figure>
                ) : null
              })()}
            </Section>

            {/* Architecture */}
            {detail.architecture && (
              <Section title="Architecture" delay={100}>
                <div className="space-y-4 mb-6">
                  {detail.architecture.description.map((p, i) => (
                    <p key={i} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
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

            {/* Problem */}
            {detail.problem && (
              <Section title={detail.problem.title} delay={100}>
                <div className="space-y-4 mb-8">
                  {detail.problem.description.map((p, i) => (
                    <p key={i} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
                  ))}
                </div>
                {detail.problem.items && (
                  <div className="space-y-6">
                    {detail.problem.items.map((item, i) => (
                      <div key={i}>
                        <h4 className="font-hand text-lg font-medium text-gray-800 mb-3">{item.title}</h4>
                        <div className="space-y-4">
                          {item.paragraphs.map((p, j) => (
                            <p key={j} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Section>
            )}

            {/* Deployment Pipeline (before/after) */}
            {detail.deploymentPipeline && (
              <Section title={detail.deploymentPipeline.title} delay={100}>
                {/* Before */}
                <div className="mb-10">
                  <h4 className="font-hand text-lg font-medium text-gray-800 mb-4">{detail.deploymentPipeline.before.title}</h4>
                  <div className="space-y-4 mb-6">
                    {detail.deploymentPipeline.before.description.map((p, i) => (
                      <p key={i} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
                    ))}
                  </div>
                  {(() => {
                    const Diagram = diagramComponents[`${slug}-before`]
                    return Diagram ? (
                      <figure className="my-8">
                        <Diagram />
                        <figcaption className="text-center text-xs text-gray-400 mt-3 italic">
                          Before: direct-to-production workflow
                        </figcaption>
                      </figure>
                    ) : null
                  })()}
                </div>

                {/* After */}
                <div>
                  <h4 className="font-hand text-lg font-medium text-gray-800 mb-4">{detail.deploymentPipeline.after.title}</h4>
                  <div className="space-y-4 mb-4">
                    {detail.deploymentPipeline.after.description.map((p, i) => (
                      <p key={i} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
                    ))}
                  </div>
                  {detail.deploymentPipeline.after.steps && (
                    <ol className="space-y-2 mb-6 pl-1">
                      {detail.deploymentPipeline.after.steps.map((step, i) => (
                        <li key={i} className="flex gap-3 text-sm text-gray-500 leading-relaxed">
                          <span className="text-gray-300 font-mono text-xs mt-0.5 shrink-0">{i + 1}.</span>
                          <span><RichText text={step} /></span>
                        </li>
                      ))}
                    </ol>
                  )}
                  {detail.deploymentPipeline.after.summary && (
                    <p className="text-gray-500 text-base leading-relaxed mb-6"><RichText text={detail.deploymentPipeline.after.summary} /></p>
                  )}
                  {(() => {
                    const Diagram = diagramComponents[`${slug}-after`]
                    return Diagram ? (
                      <figure className="my-8">
                        <Diagram />
                        <figcaption className="text-center text-xs text-gray-400 mt-3 italic">
                          After: QA-gated weekly release workflow
                        </figcaption>
                      </figure>
                    ) : null
                  })()}
                </div>
              </Section>
            )}

            {/* Zero-Copy Cloning */}
            {detail.zeroCopyCloning && (
              <Section title={detail.zeroCopyCloning.title} delay={100}>
                <div className="space-y-4">
                  {detail.zeroCopyCloning.description.map((p, i) => (
                    <p key={i} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
                  ))}
                </div>
              </Section>
            )}

            {/* Job Configuration */}
            {detail.jobConfiguration && (
              <Section title={detail.jobConfiguration.title} delay={100}>
                {(() => {
                  const Diagram = diagramComponents[`${slug}-jobs`]
                  return Diagram ? (
                    <figure className="my-8">
                      <Diagram />
                      <figcaption className="text-center text-xs text-gray-400 mt-3 italic">
                        Production and QA job schedules
                      </figcaption>
                    </figure>
                  ) : null
                })()}
              </Section>
            )}

            {/* Optimization Approach (phased) */}
            {detail.optimizationApproach && (
              <Section title={detail.optimizationApproach.title} delay={100}>
                <div className="space-y-4 mb-6">
                  {detail.optimizationApproach.description.map((p, i) => (
                    <p key={i} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
                  ))}
                </div>
                {(() => {
                  const Diagram = diagramComponents[`${slug}-approach`]
                  return Diagram ? (
                    <figure className="my-8">
                      <Diagram />
                      <figcaption className="text-center text-xs text-gray-400 mt-3 italic">
                        Three-phase optimization approach
                      </figcaption>
                    </figure>
                  ) : null
                })()}
                {detail.optimizationApproach.phases && (
                  <div className="space-y-10 mt-8">
                    {detail.optimizationApproach.phases.map((phase, i) => (
                      <div key={i}>
                        <h4 className="font-hand text-lg font-medium text-gray-800 mb-4">{phase.title}</h4>
                        <ul className="space-y-3">
                          {phase.items.map((item, j) => (
                            <li key={j} className="flex gap-2.5 text-sm text-gray-500 leading-relaxed">
                              <span className="text-gray-300 mt-0.5 shrink-0">-</span>
                              <span><RichText text={item} /></span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </Section>
            )}

            {/* Metadata Framework */}
            {detail.metadataFramework && (
              <Section title={detail.metadataFramework.title} delay={100}>
                <div className="space-y-4 mb-6">
                  {detail.metadataFramework.description.map((p, i) => (
                    <p key={i} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
                  ))}
                </div>
                {(() => {
                  const Table = diagramComponents[`${slug}-metadataFramework`]
                  return Table ? (
                    <figure className="my-8">
                      <Table />
                      <figcaption className="text-center text-xs text-gray-400 mt-3 italic">
                        Every metadata field serves as operational instructions for the AI
                      </figcaption>
                    </figure>
                  ) : null
                })()}
                {(() => {
                  const Reasoning = diagramComponents[`${slug}-metadataReasoning`]
                  return Reasoning ? (
                    <figure className="my-8">
                      <Reasoning />
                      <figcaption className="text-center text-xs text-gray-400 mt-3 italic">
                        How enriched metadata maps to the LLM's reasoning pipeline
                      </figcaption>
                    </figure>
                  ) : null
                })()}
              </Section>
            )}

            {/* Vector Store Indexing */}
            {detail.vectorIndexing && (
              <Section title={detail.vectorIndexing.title} delay={100}>
                <div className="space-y-4 mb-6">
                  {detail.vectorIndexing.description.map((p, i) => (
                    <p key={i} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
                  ))}
                </div>
                {(() => {
                  const Diagram = diagramComponents[`${slug}-vectorIndexing`]
                  return Diagram ? (
                    <figure className="my-8">
                      <Diagram />
                      {detail.vectorIndexing.caption && (
                        <figcaption className="text-center text-xs text-gray-400 mt-3 italic">
                          {detail.vectorIndexing.caption}
                        </figcaption>
                      )}
                    </figure>
                  ) : null
                })()}
              </Section>
            )}

            {/* Agentic Retrieval */}
            {detail.agenticRetrieval && (
              <Section title={detail.agenticRetrieval.title} delay={100}>
                <div className="space-y-4">
                  {detail.agenticRetrieval.description.map((p, i) => (
                    <p key={i} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
                  ))}
                </div>
              </Section>
            )}

            {/* CI/CD */}
            {detail.cicd && (
              <Section title={detail.cicd.title || "CI/CD Pipeline"} delay={100}>
                <div className="space-y-4 mb-6">
                  {detail.cicd.description.map((p, i) => (
                    <p key={i} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
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
                    <p key={i} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
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
                    <p key={i} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
                  ))}
                </div>
              </Section>
            )}

            {/* Tooling & Infrastructure */}
            {detail.tooling && (
              <Section title="Tooling & Infrastructure" delay={100}>
                <div className="space-y-4 mb-6">
                  {detail.tooling.description.map((p, i) => (
                    <p key={i} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
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

            {/* Context Framework */}
            {detail.contextFramework && (
              <Section title={detail.contextFramework.title} delay={100}>
                <div className="space-y-4">
                  {detail.contextFramework.description.map((p, i) => (
                    <p key={i} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
                  ))}
                </div>
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
                          <p key={j} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
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
                          <p key={j} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Section>
            )}

            {/* Lessons */}
            {detail.lessons && (
              <Section title={detail.lessons.title} delay={100}>
                <div className="space-y-10">
                  {detail.lessons.items.map((item, i) => (
                    <div key={i}>
                      <h4 className="font-hand text-lg font-medium text-gray-800 mb-4">{item.title}</h4>
                      <div className="space-y-4">
                        {item.paragraphs.map((p, j) => (
                          <p key={j} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
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
                          <p key={j} className="text-gray-500 text-base leading-relaxed"><RichText text={p} /></p>
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
