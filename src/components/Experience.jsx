import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { experience } from '../data/content'
import { SquigglyDivider, DatabaseIcon, PipelineIcon, ChartIcon, TerminalIcon } from './Doodles'

const companyIcons = {
  Understood: DatabaseIcon,
  Hightouch: PipelineIcon,
  Wellthy: ChartIcon,
  'Whitaker Brothers Inc': TerminalIcon,
}

function ExperienceCard({ job, index, isLast }) {
  const [ref, inView] = useInView()
  const [open, setOpen] = useState(false)
  const Icon = companyIcons[job.company]

  return (
    <div
      ref={ref}
      className={`relative md:pl-24 transition-all duration-700 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Year label */}
      <div className="absolute left-0 top-6 hidden md:flex w-14 justify-end">
        <span className="text-xs font-bold text-gray-400">{job.year}</span>
      </div>

      {/* Timeline dot — hand-drawn circle */}
      <svg className="absolute left-[4.5rem] top-[1.35rem] w-3 h-3 hidden md:block" viewBox="0 0 12 12" fill="none">
        <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" className="text-gray-300" />
        <circle cx="6" cy="6" r="2" fill="currentColor" className="text-gray-300" />
      </svg>

      {/* Timeline line — dashed/hand-drawn style */}
      {!isLast && (
        <div className="absolute left-[4.85rem] top-8 bottom-0 hidden md:block">
          <svg className="w-px h-full text-gray-200" preserveAspectRatio="none">
            <line x1="0.5" y1="0" x2="0.5" y2="100%" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
          </svg>
        </div>
      )}

      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left sketch-border p-5 transition-all duration-200 cursor-pencil"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <span className={`text-gray-400 mt-1 transition-transform duration-200 text-sm ${open ? 'rotate-90' : ''}`}>
              &#9656;
            </span>
            {Icon && <Icon className={`w-5 h-5 text-gray-300 mt-0.5 shrink-0 animate-doodle-${(index % 3) + 1}`} />}
            <div>
              <h3 className="text-base font-semibold text-gray-900">{job.company}</h3>
              {job.titleYears ? (
                <div className="mt-1 space-y-0.5">
                  {job.titles.map((title, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      {i > 0 && <span className="text-gray-300 text-xs">&#8593;</span>}
                      <span className="text-gray-600">{title}</span>
                      <span className="text-gray-300 text-xs">{job.titleYears[i]}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-gray-600 text-sm mt-0.5">
                  {job.titles.length > 1 ? job.titles.join(' → ') : job.titles[0]}
                </div>
              )}
            </div>
          </div>
          <div className="text-right text-sm text-gray-400 shrink-0">
            <div>{job.period}</div>
            <div>{job.location}</div>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-3 ml-6">
          {job.stack.map((tech) => (
            <span
              key={tech}
              className="text-gray-400 text-xs px-2 py-0.5 border border-gray-200 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </button>

      <div className={`notion-toggle-content ${open ? 'open' : ''}`}>
        <div>
          <ul className="space-y-2 pt-4 pb-2 pl-9">
            {job.bullets.map((bullet, j) => (
              <li key={j} className="flex gap-2.5 text-sm text-gray-500 leading-relaxed">
                <span className="text-gray-300 mt-0.5 shrink-0">-</span>
                {bullet}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-hand text-3xl font-medium text-gray-900">
            <span className="squiggly-underline">Work Experience</span>
          </h2>
          <a
            href="/zoe-liang-resume.pdf"
            download
            className="hover-squiggly text-sm font-medium text-gray-900 py-1"
          >
            Download Resume ↓
          </a>
        </div>

        <div className="relative space-y-6">
          {experience.map((job, i) => (
            <ExperienceCard
              key={job.company}
              job={job}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>

        <SquigglyDivider className="w-full h-3 text-gray-200 mt-16" />
      </div>
    </section>
  )
}
