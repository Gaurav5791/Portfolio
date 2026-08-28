import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'

function App() {
  return (
    <div className="bg-gray-900 text-white">
      <nav className="bg-gray-900 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Portfolio</h1>
          <div className="space-x-6">
            <a href="#hero" className="hover:text-blue-400 transition">Home</a>
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
          </div>
        </div>
      </nav>
      
      <Hero />
      <About />
      <Projects />
    </div>
  )
}

export default App