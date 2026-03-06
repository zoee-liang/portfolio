import { useInView } from '../hooks/useInView'
import { about } from '../data/content'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" ref={ref} className="pt-4 pb-24 scroll-mt-20">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">About Me</h2>
        <div className="max-w-3xl space-y-5">
          {about.map((paragraph, i) => (
            <p
              key={i}
              className={`text-gray-600 text-lg leading-relaxed transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
