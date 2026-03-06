export default function Footer() {
  return (
    <footer id="contact" className="py-12 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-3">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <p className="text-gray-900 font-semibold">Get in touch</p>
          <a
            href="mailto:yiliang0619@gmail.com"
            className="text-gray-500 hover:text-indigo-600 transition-colors text-sm"
          >
            yiliang0619@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/zoee-liang/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-indigo-600 transition-colors text-sm"
          >
            linkedin.com/in/zoee-liang
          </a>
        </div>
        <p className="text-gray-400 text-xs">
          MS, Business Statistics · University of Maryland
          <span className="mx-2 text-gray-300">|</span>
          BA, International Business · SISU
        </p>
      </div>
    </footer>
  )
}
