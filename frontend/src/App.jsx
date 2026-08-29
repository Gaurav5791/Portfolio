import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  useEffect(() => {
    // Observe elements for scroll animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('scroll-animate-up')
        }
      })
    }, observerOptions)

    // Observe all elements with data-animate attribute
    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="bg-black/80 backdrop-blur-sm sticky top-0 z-50 border-b-2 border-cyan-500/30" 
           style={{boxShadow: '0 0 20px rgba(0,255,255,0.2)'}}>
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#hero" className="text-2xl font-black tracking-widest cursor-pointer hover:scale-105 transition" style={{color: '#00ffff', textShadow: '0 0 10px rgba(0,255,255,0.8)'}}>
            &gt; GAURAV_
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 font-mono font-bold">
            <a href="#hero" className="text-cyan-400 hover:text-pink-400 transition cursor-pointer">HOME</a>
            <a href="#about" className="text-cyan-400 hover:text-pink-400 transition cursor-pointer">ABOUT</a>
            <a href="#skills" className="text-cyan-400 hover:text-pink-400 transition cursor-pointer">SKILLS</a>
            <a href="#experience" className="text-cyan-400 hover:text-pink-400 transition cursor-pointer">EXPERIENCE</a>
            <a href="#projects" className="text-cyan-400 hover:text-pink-400 transition cursor-pointer">WORK</a>
            <a href="#contact" className="text-cyan-400 hover:text-pink-400 transition cursor-pointer">CONTACT</a>
          </div>

          {/* Resume Download Button */}
          <a href="https://drive.google.com/file/d/1SclCKpfJOhgYpx94GtUtvwrxJ_STH3D7/view" 
             target="_blank" 
             rel="noopener noreferrer"
             className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm rounded-none uppercase tracking-widest transition-all duration-300"
             style={{boxShadow: '0 0 15px rgba(0,255,255,0.6)'}}>
            Resume
          </a>
        </div>
      </nav>

      {/* Main Content Sections */}
      <div id="hero">
        <Hero />
      </div>

      <div id="about" data-animate>
        <About />
      </div>

      <div id="skills" data-animate>
        <Skills />
      </div>

      <div id="experience" data-animate>
        <Experience />
      </div>

      <div id="projects" data-animate>
        <Projects />
      </div>

      <div id="contact" data-animate>
        <Contact />
      </div>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
    </div>
  )
}

export default App