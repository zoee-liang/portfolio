import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply blur-3xl opacity-60 animate-blob" />
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply blur-3xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute top-1/2 right-16 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply blur-3xl opacity-40 animate-blob animation-delay-4000" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 py-24">
        <p className="text-indigo-600 font-semibold text-sm tracking-widest uppercase mb-4 animate-fade-in-up">
          Hi, I'm
        </p>
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-4 animate-fade-in-up animation-delay-100">
          Zoe Liang
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-400 font-medium mb-8 animate-fade-in-up animation-delay-200">
          Senior Data Platform Engineer
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mb-10 animate-fade-in-up animation-delay-300">
          I build reliable, scalable data platforms that power analytics, product insights, and
          AI-driven tooling. With 6+ years across the modern data stack, I specialize in turning
          complex pipelines into trusted, well-governed systems that cross-functional teams
          depend on.
        </p>

        <div className="flex flex-wrap items-center gap-4 animate-fade-in-up animation-delay-400">
          <Link
            to="/projects"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
          >
            View My Work
          </Link>
          <a
            href="https://www.linkedin.com/in/zoee-liang/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors border border-gray-200 px-5 py-3 rounded-lg text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="mailto:yiliang0619@gmail.com"
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors border border-gray-200 px-5 py-3 rounded-lg text-sm font-medium"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </div>
      </div>
    </section>
  )
}
