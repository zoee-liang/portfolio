import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Experience />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  )
}
