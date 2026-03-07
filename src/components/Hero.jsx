import { Link } from 'react-router-dom'
import { DataPipeline, SqlSnippet, ScatterPlot } from './Doodles'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background doodle accents */}
      <div className="absolute inset-0 pointer-events-none">
        <DataPipeline className="absolute top-32 right-8 w-80 text-gray-900 opacity-[0.07] hidden lg:block animate-doodle-2" />
        <SqlSnippet className="absolute bottom-40 right-16 w-36 text-gray-900 opacity-[0.06] hidden lg:block animate-doodle-3" />
        <ScatterPlot className="absolute top-1/2 right-1/3 w-28 text-gray-900 opacity-[0.05] hidden lg:block animate-doodle-1" />
      </div>

      <div className="relative max-w-3xl mx-auto px-6 py-24">
        <p className="text-gray-400 text-sm tracking-widest mb-6 animate-fade-in-up">
          Hi there! 👋 I'm
        </p>
        <h1 className="font-hand text-5xl md:text-7xl font-medium text-gray-900 leading-tight mb-6 animate-fade-in-up animation-delay-100">
          <span className="squiggly-underline">Zoe Liang</span>
        </h1>
        <h2 className="font-hand text-xl md:text-2xl text-gray-400 font-normal mb-10 animate-fade-in-up animation-delay-200">
          Senior Data Platform Engineer
        </h2>
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl mb-12 animate-fade-in-up animation-delay-300">
          I build data platforms that power analytics, product insights, and
          AI-driven tooling. With <span className="highlight">6+ years</span> across the modern data stack, I specialize in turning
          complex pipelines into well-governed systems that cross-functional teams
          depend on.
        </p>

        <div className="flex flex-wrap items-center gap-5 animate-fade-in-up animation-delay-400">
          <Link
            to="/projects"
            className="bg-gray-900 text-white px-6 py-3 rounded font-medium hover:bg-gray-800 transition-colors"
          >
            View My Work
          </Link>
          <a
            href="https://www.linkedin.com/in/zoee-liang/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-squiggly text-gray-900 font-medium py-3"
          >
            LinkedIn
          </a>
          <a
            href="mailto:yiliang0619@gmail.com"
            className="hover-squiggly text-gray-900 font-medium py-3"
          >
            Email
          </a>
        </div>
      </div>

      {/* Doodle accent — small hand-drawn arrow */}
      <svg className="absolute bottom-12 left-1/2 -translate-x-1/2 w-6 h-12 text-gray-300 animate-fade-in-up animation-delay-400" viewBox="0 0 24 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2 L12 40 M6 34 L12 42 L18 34" />
      </svg>
    </section>
  )
}
