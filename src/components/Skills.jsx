import { useInView } from '../hooks/useInView'
import { skills } from '../data/content'

export default function Skills() {
  const [ref, inView] = useInView()

  return (
    <section className="pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-16">Skills</h2>

        <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`bg-gray-50 rounded-xl p-5 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="bg-white border border-gray-200 text-gray-700 text-sm px-3 py-1.5 rounded-lg shadow-sm hover:border-indigo-300 hover:text-indigo-700 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
