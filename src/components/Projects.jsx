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
