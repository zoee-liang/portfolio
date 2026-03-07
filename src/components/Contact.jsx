import { useInView } from '../hooks/useInView'
import { EnvelopeDoodle, CoffeeChatDoodle, PaperPlaneDoodle, SquigglyDivider } from './Doodles'

export default function Contact() {
  const [ref, inView] = useInView()

  return (
    <section className="pt-28 pb-24 relative overflow-hidden">
      {/* Floating paper plane */}
      <PaperPlaneDoodle className="absolute top-20 right-12 w-20 text-gray-900 opacity-[0.07] animate-float hidden md:block" />

      <div className="max-w-3xl mx-auto px-6">
        <h2 className="font-hand text-3xl font-medium text-gray-900 mb-4">
          <span className="squiggly-underline">Get in Touch</span>
        </h2>
        <p className="text-gray-400 text-sm mb-12">Let's connect over data, AI, or just a good conversation.</p>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Email card */}
          <a
            href="mailto:yiliang0619@gmail.com"
            className={`contact-link-card sketch-border p-6 flex flex-col items-start gap-4 cursor-pencil
              transition-all duration-700
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="contact-icon">
              <EnvelopeDoodle className="w-24 h-18 text-gray-900 opacity-20 animate-doodle-1" />
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">Email</div>
              <div className="hover-squiggly text-gray-900 font-medium">yiliang0619@gmail.com</div>
            </div>
          </a>

          {/* LinkedIn card */}
          <a
            href="https://www.linkedin.com/in/zoee-liang/"
            target="_blank"
            rel="noopener noreferrer"
            className={`contact-link-card sketch-border p-6 flex flex-col items-start gap-4 cursor-pencil
              transition-all duration-700
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '100ms' }}
          >
            <div className="contact-icon">
              <CoffeeChatDoodle className="w-20 h-18 text-gray-900 opacity-20 animate-doodle-2" />
            </div>
            <div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mb-1">LinkedIn</div>
              <div className="hover-squiggly text-gray-900 font-medium">linkedin.com/in/zoee-liang</div>
            </div>
          </a>
        </div>

        {/* Hand-written style note */}
        <div
          className={`max-w-md mx-auto text-center transition-all duration-700 delay-200
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <p className="text-gray-400 text-sm leading-relaxed italic">
            Just say hi! I'm always down for a good chat about data, tech, life, or whatever's on your mind. :)
          </p>
          <svg className="mx-auto mt-4 w-16 h-4 text-gray-200 animate-doodle-3" viewBox="0 0 80 12" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
            <path d="M5 8 Q20 2, 40 6 Q60 10, 75 4" />
          </svg>
        </div>

        <SquigglyDivider className="w-full h-3 text-gray-200 mt-16" />
      </div>
    </section>
  )
}
