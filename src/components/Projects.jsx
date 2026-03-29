import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { projects, projectDetails } from '../data/content'
import { SquigglyDivider, ChatbotDoodle, ContextLayersDoodle, CiCdDoodle, SpeedometerDoodle } from './Doodles'

const projectDoodles = {
  'AI Data Chatbot': ChatbotDoodle,
  'Context Engineering': ContextLayersDoodle,
  'CI/CD Data Pipeline': CiCdDoodle,
  'Snowflake Optimization': SpeedometerDoodle,
}

function ProjectCard({ project, index }) {
  const [ref, inView] = useInView()
  const Doodle = projectDoodles[project.title]

  return (
    <div
      ref={ref}
      className={`project-card sketch-border p-6 flex flex-col relative overflow-hidden cursor-pencil
        transition-all duration-700
        ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Background illustration */}
      {Doodle && (
        <div className={`project-doodle absolute top-3 right-3 w-28 h-20 text-gray-900 pointer-events-none animate-doodle-${(index % 3) + 1}`}>
          <Doodle className="w-full h-full" />
        </div>
      )}

      {/* Number */}
      <span className="text-gray-200 text-xs font-mono mb-3">#{String(index + 1).padStart(2, '0')}</span>

      <h3 className="text-base font-semibold text-gray-900 mb-2 relative z-10">
        <Link to={`/projects/${project.slug}`} className="hover-squiggly">
          {project.title}
        </Link>
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed mb-5 flex-1 relative z-10">
        {project.description}
      </p>

      {/* Tags with stagger animation */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((tag, i) => (
          <span
            key={tag}
            className={`text-gray-400 text-xs px-2 py-0.5 border border-gray-200 rounded
              ${inView ? 'tag-stagger' : 'opacity-0'}`}
            style={{ animationDelay: inView ? `${(index * 100) + (i * 60) + 300}ms` : '0ms' }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Outcome with hover highlight */}
      <div className="outcome-bar flex items-start gap-2 text-sm text-emerald-700 border border-emerald-200 rounded px-3 py-2 bg-emerald-50/60">
        <span className="shrink-0">&#10003;</span>
        <span className="leading-relaxed">{project.outcome}</span>
      </div>

      <div className="flex items-center gap-4 mt-4 relative z-10">
        <Link
          to={`/projects/${project.slug}`}
          className="hover-squiggly text-sm text-gray-900 font-medium"
        >
          Read more &rarr;
        </Link>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover-squiggly text-sm text-gray-400 font-medium"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section className="pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-hand text-3xl font-medium text-gray-900 mb-4">
          <span className="squiggly-underline">Featured Work</span>
        </h2>
        <p className="text-gray-500 text-sm mb-12">Hover over a card to peek at the doodle, or click "Read more" for an in-depth look.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <SquigglyDivider className="w-full h-3 text-gray-200 mt-16" />
      </div>
    </section>
  )
}
