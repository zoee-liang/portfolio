import { useInView } from '../hooks/useInView'
import { projects } from '../data/content'

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`group bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex flex-col
        transition-all duration-700 hover:shadow-lg hover:border-indigo-100 hover:-translate-y-1
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-200">
        {project.title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-indigo-50 text-indigo-600 text-xs px-2.5 py-1 rounded-full font-medium group-hover:bg-indigo-100 transition-colors duration-200"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-start gap-2 bg-emerald-50 border border-emerald-100 rounded-lg px-3 py-2.5 group-hover:bg-emerald-100 transition-colors duration-200">
        <span className="text-emerald-500 mt-px shrink-0">✓</span>
        <span className="text-emerald-700 text-xs font-medium leading-relaxed">
          {project.outcome}
        </span>
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 mt-4 text-sm text-gray-500 hover:text-indigo-600 transition-colors"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View on GitHub
        </a>
      )}
    </div>
  )
}

export default function Projects() {
  return (
    <section className="pt-28 pb-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-16">Featured Work</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
