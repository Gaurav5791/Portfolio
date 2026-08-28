import { useState, useEffect } from 'react'
import { fetchAbout } from '../api/api'

export default function About() {
  const [about, setAbout] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchAbout().then(data => {
      setAbout(data)
      setLoading(false)
    })
  }, [])

  if (loading) {
    return <div className="text-center py-20">Loading...</div>
  }

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {about?.image && (
            <div className="flex justify-center">
              <img 
                src={about.image} 
                alt="Profile" 
                className="w-64 h-64 rounded-lg object-cover shadow-lg"
              />
            </div>
          )}
          
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">{about?.title}</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {about?.bio}
            </p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-blue-400 font-semibold mb-2">Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {about?.skills?.split(',').map((skill, i) => (
                    <span key={i} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm">
                      {skill.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}