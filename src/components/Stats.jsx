import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { SketchyBarChart } from './Doodles'

const stats = [
  { value: 6, suffix: '+', label: 'Years in Data' },
  { value: 60, suffix: '%', label: 'Faster Pipelines', prefix: '~' },
  { value: 50, suffix: '%', label: 'Manual Reporting Time Saved', prefix: '~' },
  { value: 4, suffix: '', label: 'Data Stacks Built' },
]

function Counter({ value, prefix = '', suffix = '', active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const steps = 40
    const duration = 1200
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(timer)
  }, [active, value])

  return <span>{prefix}{count}{suffix}</span>
}

export default function Stats() {
  const [ref, inView] = useInView()

  return (
    <section ref={ref} className="relative py-16">
      {/* Background doodle */}
      <SketchyBarChart className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 text-gray-900 opacity-[0.06] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="font-hand text-4xl font-semibold text-gray-900 mb-1">
                <Counter {...stat} active={inView} />
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
