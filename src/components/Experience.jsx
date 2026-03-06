import { useInView } from '../hooks/useInView'
import { experience } from '../data/content'

function ExperienceCard({ job, index }) {
  const [ref, inView] = useInView()

  return (
    <div
      ref={ref}
      className={`relative md:pl-28 transition-all duration-700 ${
        inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Year label */}
      <div className="absolute left-0 top-5 hidden md:flex w-16 justify-end">
        <span className="text-sm font-bold text-indigo-500">{job.year}</span>
      </div>

      {/* Timeline dot */}
      <div className="absolute left-20 top-6 w-2.5 h-2.5 rounded-full bg-indigo-500 -translate-x-[5px] hidden md:block ring-4 ring-white" />

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-indigo-100 hover:shadow-md transition-all duration-300">
        <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{job.company}</h3>
            {job.titleYears ? (
              <div className="mt-1 space-y-0.5">
                {job.titles.map((title, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm">
                    {i > 0 && <span className="text-gray-300 text-xs">↑</span>}
                    <span className="text-indigo-600 font-medium">{title}</span>
                    <span className="text-gray-400 text-xs">{job.titleYears[i]}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-indigo-600 font-medium text-sm mt-0.5">
                {job.titles.length > 1 ? job.titles.join(' → ') : job.titles[0]}
              </div>
            )}
          </div>
          <div className="text-right text-sm text-gray-400 shrink-0">
            <div>{job.period}</div>
            <div>{job.location}</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {job.stack.map((tech) => (
            <span
              key={tech}
              className="bg-gray-100 text-gray-500 text-xs px-2.5 py-1 rounded-full hover:bg-indigo-50 hover:text-indigo-600 transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        <ul className="space-y-2">
          {job.bullets.map((bullet, j) => (
            <li key={j} className="flex gap-2.5 text-sm text-gray-600 leading-relaxed">
              <span className="text-indigo-400 mt-0.5 shrink-0">▸</span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="pt-28 pb-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Work Experience</h2>
          <a
            href="/zoe-liang-resume.pdf"
            download
            className="flex items-center gap-2 text-sm font-medium text-indigo-600 border border-indigo-200 px-4 py-2 rounded-lg hover:bg-indigo-50 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
        </div>

        <div className="relative">
          {/* Timeline line shifted right to align with dots */}
          <div className="absolute left-20 top-2 bottom-2 w-px bg-gray-200 hidden md:block" />
          <div className="space-y-8">
            {experience.map((job, i) => (
              <ExperienceCard key={i} job={job} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
