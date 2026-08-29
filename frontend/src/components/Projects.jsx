import { useState, useEffect } from 'react'
import { fetchPortfolioItems } from '../api/api'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [filteredProjects, setFilteredProjects] = useState([])

  useEffect(() => {
    fetchPortfolioItems().then(data => {
      setProjects(Array.isArray(data) ? data : [])
      setFilteredProjects(Array.isArray(data) ? data : [])
      setLoading(false)
    })
  }, [])

  // Get all unique technologies
  const getAllTechnologies = () => {
    const techs = new Set()
    projects.forEach(project => {
      project.technologies?.split(',').forEach(tech => {
        techs.add(tech.trim())
      })
    })
    return ['All', ...Array.from(techs).sort()]
  }

  // Filter projects by technology
  const handleFilter = (tech) => {
    setSelectedFilter(tech)
    if (tech === 'All') {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(
        projects.filter(project =>
          project.technologies?.toLowerCase().includes(tech.toLowerCase())
        )
      )
    }
  }

  if (loading) {
    return <div className="text-center py-20 text-cyan-400 font-mono">[ LOADING PROJECTS ]</div>
  }

  const technologies = getAllTechnologies()

  if (projects.length === 0) {
    return (
      <section className="py-20 bg-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-black text-center mb-16 tracking-widest" 
              style={{color: '#ff007f', textShadow: '0 0 20px rgba(255,0,127,0.8)'}}>
            &gt; PROJECTS
          </h2>
          <p className="text-cyan-400 font-mono text-lg">[ NO PROJECTS LOADED YET ]</p>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Neon Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-8 tracking-widest" 
            style={{color: '#ff007f', textShadow: '0 0 20px rgba(255,0,127,0.8)'}}>
          &gt; PROJECTS
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 pb-8 border-b border-cyan-500/30">
          {technologies.map((tech) => (
            <button
              key={tech}
              onClick={() => handleFilter(tech)}
              className={`px-4 py-2 font-mono text-sm uppercase tracking-widest transition-all duration-300 ${
                selectedFilter === tech
                  ? 'bg-cyan-500 text-black border-cyan-500'
                  : 'border-2 border-cyan-500/30 text-cyan-400 hover:border-cyan-400'
              }`}
              style={{
                boxShadow: selectedFilter === tech ? '0 0 20px rgba(0,255,255,0.8)' : 'none'
              }}
            >
              {tech}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div key={project.id} 
                 className="group relative bg-black border-2 border-cyan-500/30 hover:border-cyan-400 transition-all duration-300 scroll-animate-up"
                 style={{boxShadow: 'inset 0 0 20px rgba(0,255,255,0.1)'}}>
              
              {/* Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/0 to-pink-500/0 group-hover:from-cyan-500/20 group-hover:via-transparent group-hover:to-pink-500/20 transition duration-300 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative p-6">
                {/* Project Header */}
                <div className="mb-4 pb-4 border-b border-cyan-500/30">
                  <h3 className="text-xl font-black text-cyan-400 mb-2 tracking-wide group-hover:text-pink-400 transition">
                    &gt; {project.title}
                  </h3>
                  <p className="text-xs text-cyan-500/70 font-mono">[Project #{idx + 1}]</p>
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 font-light">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-pink-400 text-xs font-bold mb-2 uppercase tracking-widest">[ STACK ]</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies?.split(',').map((tech, i) => (
                      <span key={i} className="text-xs bg-pink-500/20 text-pink-300 px-2 py-1 border border-pink-500/50 font-mono cursor-pointer hover:bg-pink-500/40 transition"
                            onClick={() => handleFilter(tech.trim())}>
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer"
                       className="text-cyan-400 hover:text-pink-400 font-mono text-sm uppercase tracking-widest transition"
                       style={{textShadow: '0 0 10px rgba(0,255,255,0.5)'}}>
                      &gt; LIVE
                    </a>
                  )}
                  {project.github_link && (
                    <a href={project.github_link} target="_blank" rel="noopener noreferrer"
                       className="text-cyan-400 hover:text-pink-400 font-mono text-sm uppercase tracking-widest transition"
                       style={{textShadow: '0 0 10px rgba(0,255,255,0.5)'}}>
                      &gt; GITHUB
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-cyan-400 font-mono">[ NO PROJECTS FOUND FOR SELECTED FILTER ]</p>
          </div>
        )}
      </div>
    </section>
  )
}