import { useInView } from '../hooks/useInView'
import { about } from '../data/content'
import { SquigglyDivider, TeaCupDoodle, BookDoodle, LeafDoodle } from './Doodles'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" ref={ref} className="pt-4 pb-28 scroll-mt-20">
      <div className="max-w-3xl mx-auto px-6">
        <SquigglyDivider className="w-full h-3 text-gray-200 mb-12" />
        <h2 className="font-hand text-3xl font-medium text-gray-900 mb-10">
          <span className="squiggly-underline">About Me</span>
        </h2>

        <div className="flex flex-col md:flex-row gap-10">
          {/* Photo + doodles column */}
          <div
            className={`shrink-0 w-56 mx-auto md:mx-0 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <div className="sketch-border p-2">
              <img
                src="/zoe-photo.jpeg"
                alt="Zoe Liang"
                className="w-full"
              />
            </div>

            {/* Doodle trail below photo */}
            <div className="hidden md:block relative h-[580px] mt-4">
              {/* Winding dotted path that draws itself */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 224 580"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M112 10
                     C 40 40, 30 80, 80 110
                     C 130 140, 190 150, 160 190
                     C 130 230, 40 220, 60 260
                     C 80 300, 180 290, 150 330
                     C 120 370, 50 360, 80 400
                     C 110 440, 180 430, 140 470
                     C 100 510, 40 510, 90 550"
                  stroke="#d1d5db"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className={`draw-path ${inView ? 'visible' : ''}`}
                  style={{ '--path-length': 1300 }}
                />
                {/* Arrow tip at the end */}
                <path
                  d="M84 544 L90 556 L96 544"
                  stroke="#d1d5db"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  className={`draw-arrow ${inView ? 'visible' : ''}`}
                />
              </svg>

              {/* Doodles positioned along the path */}
              <div className="absolute top-6 left-2 animate-doodle-1">
                <TeaCupDoodle className="w-16 h-14 text-gray-900 opacity-[0.14]" />
              </div>

              {/* Small sparkle accent */}
              <svg className="absolute top-[100px] right-8 w-5 h-5 text-gray-300 animate-doodle-2" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1">
                <path d="M10 2 L11 8 L17 10 L11 12 L10 18 L9 12 L3 10 L9 8Z" />
              </svg>

              <div className="absolute top-[155px] right-2 animate-doodle-2">
                <BookDoodle className="w-14 h-12 text-gray-900 opacity-[0.12]" />
              </div>

              {/* Small dots cluster */}
              <svg className="absolute top-[240px] left-4 w-8 h-8 text-gray-300 animate-doodle-3" viewBox="0 0 30 30" fill="currentColor">
                <circle cx="8" cy="8" r="1.5" opacity="0.3" />
                <circle cx="16" cy="12" r="1" opacity="0.25" />
                <circle cx="22" cy="6" r="1.5" opacity="0.2" />
                <circle cx="12" cy="20" r="1" opacity="0.3" />
              </svg>

              <div className="absolute top-[270px] left-10 animate-doodle-3">
                <LeafDoodle className="w-11 h-11 text-gray-900 opacity-[0.12]" />
              </div>

              {/* Cloud */}
              <svg className="absolute top-[420px] left-2 w-18 h-12 text-gray-900 opacity-[0.10] animate-doodle-3" viewBox="0 0 64 36" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
                <path d="M16 28 Q4 28, 4 20 Q4 12, 14 12 Q14 4, 24 4 Q32 0, 40 6 Q48 2, 54 8 Q62 10, 60 20 Q60 28, 48 28 Z" />
              </svg>

              {/* Sunflower */}
              <svg className="absolute top-[490px] right-6 w-14 h-14 text-gray-900 opacity-[0.11] animate-doodle-1" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                {/* Petals */}
                <ellipse cx="24" cy="10" rx="4" ry="7" opacity="0.6" />
                <ellipse cx="34" cy="14" rx="4" ry="7" transform="rotate(45 34 14)" opacity="0.6" />
                <ellipse cx="38" cy="24" rx="4" ry="7" transform="rotate(90 38 24)" opacity="0.6" />
                <ellipse cx="34" cy="34" rx="4" ry="7" transform="rotate(135 34 34)" opacity="0.6" />
                <ellipse cx="24" cy="38" rx="4" ry="7" opacity="0.6" />
                <ellipse cx="14" cy="34" rx="4" ry="7" transform="rotate(45 14 34)" opacity="0.6" />
                <ellipse cx="10" cy="24" rx="4" ry="7" transform="rotate(90 10 24)" opacity="0.6" />
                <ellipse cx="14" cy="14" rx="4" ry="7" transform="rotate(135 14 14)" opacity="0.6" />
                {/* Center */}
                <circle cx="24" cy="24" r="6" fill="currentColor" fillOpacity="0.08" />
                {/* Stem */}
                <path d="M24 42 L24 48" />
              </svg>

              {/* Small squiggle accent */}
              <svg className="absolute top-[350px] right-10 w-10 h-6 text-gray-300 animate-doodle-1" viewBox="0 0 40 16" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
                <path d="M2 8 Q8 2, 14 8 Q20 14, 26 8 Q32 2, 38 8" />
              </svg>
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6">
            {about.map((paragraph, i) => (
              <p
                key={i}
                className={`text-gray-500 text-lg leading-relaxed transition-all duration-700 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: `${(i + 1) * 120}ms` }}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
