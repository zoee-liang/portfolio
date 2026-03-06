import { useState } from 'react'
import { NavLink, Link, useLocation, useNavigate } from 'react-router-dom'

const navLinks = [
  { label: 'About', to: '/', hash: '#about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Skills', to: '/skills' },
  { label: 'Projects', to: '/projects' },
  { label: 'Contact', to: '/contact' },
]

function NavItem({ link, className, onClick }) {
  const location = useLocation()
  const navigate = useNavigate()

  if (link.hash) {
    const isActive = location.pathname === '/' && location.hash === link.hash
    return (
      <a
        href={link.to + link.hash}
        className={typeof className === 'function' ? className({ isActive }) : className}
        onClick={(e) => {
          e.preventDefault()
          if (location.pathname === '/') {
            document.querySelector(link.hash)?.scrollIntoView({ behavior: 'smooth' })
          } else {
            navigate(link.to + link.hash)
          }
          onClick?.()
        }}
      >
        {link.label}
        {isActive && (
          <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />
        )}
      </a>
    )
  }

  return (
    <NavLink
      to={link.to}
      className={className}
      onClick={onClick}
    >
      {({ isActive }) => (
        <>
          {link.label}
          {isActive && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600 rounded-full" />
          )}
        </>
      )}
    </NavLink>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-gray-900 font-semibold text-lg tracking-tight">
          Zoe Liang
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavItem
              key={link.label}
              link={link}
              className={({ isActive }) =>
                `text-sm transition-colors relative pb-1 ${
                  isActive
                    ? 'text-indigo-600 font-medium'
                    : 'text-gray-500 hover:text-gray-900'
                }`
              }
            />
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-gray-500 hover:text-gray-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavItem
              key={link.label}
              link={link}
              className={({ isActive }) =>
                `text-sm ${isActive ? 'text-indigo-600 font-medium' : 'text-gray-500'}`
              }
              onClick={() => setMenuOpen(false)}
            />
          ))}
        </div>
      )}
    </header>
  )
}
