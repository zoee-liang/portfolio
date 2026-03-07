import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'

const stats = [
  { value: 6, suffix: '+', label: 'Years in Data' },
  { value: 60, suffix: '%', label: 'Faster Pipelines', prefix: '~' },
  { value: 50, suffix: '%', label: 'Reporting Time Saved', prefix: '~' },
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
    <section ref={ref} className="pt-4 pb-16 border-y border-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="text-4xl font-bold text-indigo-600 mb-1 tabular-nums">
                <Counter {...stat} active={inView} />
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
