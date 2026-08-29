import { useState, useEffect } from 'react'
import { fetchPortfolioData } from '../api/api'

export default function About() {
  const [personalInfo, setPersonalInfo] = useState(null)

  useEffect(() => {
    fetchPortfolioData().then(data => {
      setPersonalInfo(data)
    })
  }, [])

  return (
    <section className="py-20 bg-black border-t-2 border-b-2 border-cyan-500/30 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-16 tracking-widest" 
            style={{color: '#00ffff', textShadow: '0 0 20px rgba(0,255,255,0.8)'}}>
          &gt; ABOUT_ME
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-cyan-300 text-lg leading-relaxed mb-6 font-light">
              {personalInfo?.bio || 'I am a passionate Full Stack Developer and AI & Data Science enthusiast with a strong foundation in building scalable web applications.'}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-cyan-300 font-light">
                  Experienced in Django, React, and modern web technologies
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-cyan-300 font-light">
                  Strong problem-solving skills with 200+ DSA problems solved
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-cyan-300 font-light">
                  Passionate about AI, Machine Learning, and Data Science
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-cyan-300 font-light">
                  Always learning and exploring new technologies
                </p>
              </div>
            </div>

            {personalInfo?.resume && (
              <a href={personalInfo.resume} download className="inline-block px-6 py-3 bg-pink-500 hover:bg-pink-400 text-black font-bold uppercase tracking-widest transition-all"
                 style={{boxShadow: '0 0 15px rgba(255,0,127,0.6)'}}>
                &gt; DOWNLOAD_RESUME
              </a>
            )}
          </div>

          {/* Right Content - Contact Info */}
          <div className="space-y-6">
            <div className="bg-black border-2 border-cyan-500/30 p-6"
                 style={{boxShadow: 'inset 0 0 20px rgba(0,255,255,0.1)'}}>
              <p className="text-pink-400 font-bold uppercase tracking-widest text-sm mb-4">
                &gt; CONTACT_INFO
              </p>
              <div className="space-y-3 font-mono text-sm">
                <p className="text-cyan-300">
                  <span className="text-pink-400">Email:</span> {personalInfo?.email || 'gauravgtp614@gmail.com'}
                </p>
                <p className="text-cyan-300">
                  <span className="text-pink-400">Phone:</span> {personalInfo?.phone || '+91-6284697513'}
                </p>
                <p className="text-cyan-300">
                  <span className="text-pink-400">Location:</span> Ludhiana, Punjab, India
                </p>
              </div>
            </div>

            <div className="bg-black border-2 border-pink-500/30 p-6"
                 style={{boxShadow: 'inset 0 0 20px rgba(255,0,127,0.1)'}}>
              <p className="text-cyan-400 font-bold uppercase tracking-widest text-sm mb-4">
                &gt; QUICK_STATS
              </p>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-cyan-300">DSA Problems Solved:</span>
                  <span className="text-pink-400 font-bold">200+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-300">Projects Completed:</span>
                  <span className="text-pink-400 font-bold">5+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-cyan-300">Years Learning:</span>
                  <span className="text-pink-400 font-bold">2+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}