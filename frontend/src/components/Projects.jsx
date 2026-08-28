import { useState, useEffect } from 'react'
import { fetchPortfolioItems } from '../api/api'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPortfolioItems().then(data => {
      setProjects(Array.isArray(data) ? data : [])
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div className="text-center py-20">Loading projects...</div>
  }

  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">My Projects</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => (
            <div key={project.id} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition shadow-lg">
              {project.image && (
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex gap-2 mb-4">
                  {project.technologies?.split(',').map((tech, i) => (
                    <span key={i} className="text-xs bg-blue-600 text-white px-2 py-1 rounded">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
                <a href={project.link} className="text-blue-400 hover:text-blue-300 font-semibold">
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}