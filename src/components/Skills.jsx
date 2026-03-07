import { useInView } from '../hooks/useInView'
import { skills } from '../data/content'
import { DatabaseIcon, GearIcon, ChartIcon, ShieldIcon, BrainIcon, CodeIcon, SquigglyDivider } from './Doodles'

const categoryIcons = {
  'Data Platform & Warehousing': DatabaseIcon,
  'Orchestration & Build Tools': GearIcon,
  'Business Intelligence & Semantic Layer': ChartIcon,
  'Data Quality & Observability': ShieldIcon,
  'AI / LLM Engineering': BrainIcon,
  'Programming': CodeIcon,
}

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section className="pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-hand text-3xl font-medium text-gray-900 mb-12">
          <span className="squiggly-underline">Skills</span>
        </h2>

        <div ref={ref} className="space-y-8">
          {skills.map((group, i) => {
            const Icon = categoryIcons[group.category]
            return (
              <div
                key={group.category}
                className={`transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-2 mb-3">
                  {Icon && <Icon className={`w-4 h-4 text-gray-300 animate-doodle-${(i % 3) + 1}`} />}
                  <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest">
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="sketch-border text-gray-700 text-sm px-3 py-1.5 cursor-pencil transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <SquigglyDivider className="w-full h-3 text-gray-200 mt-16" />
      </div>
    </section>
  )
}
