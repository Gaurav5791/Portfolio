import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { fetchPortfolioData } from '../api/api'

export default function Hero() {
  const [personalInfo, setPersonalInfo] = useState(null)
  const [displayedText, setDisplayedText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)

  const typingTexts = [
    'Full Stack Developer',
    'AI & Data Science Enthusiast',
    'Problem Solver',
  ]

  useEffect(() => {
    fetchPortfolioData().then(data => {
      setPersonalInfo(data)
    })
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentText = typingTexts[textIndex]
      if (charIndex < currentText.length) {
        setDisplayedText(currentText.substring(0, charIndex + 1))
        setCharIndex(charIndex + 1)
      } else {
        setTimeout(() => {
          setTextIndex((textIndex + 1) % typingTexts.length)
          setCharIndex(0)
          setDisplayedText('')
        }, 2000)
      }
    }, 100)

    return () => clearTimeout(timer)
  }, [charIndex, textIndex])

  return (
    <section className="min-h-screen bg-black flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 -translate-x-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-20"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-black tracking-widest mb-4" style={{
          color: '#00ffff',
          textShadow: '0 0 20px rgba(0,255,255,0.8), 0 0 40px rgba(0,255,255,0.4)'
        }}>
          &gt; {personalInfo?.name || 'GAURAV'}
        </h1>

        {/* Typing Effect */}
        <div className="text-2xl md:text-4xl font-bold mb-8 h-16 flex items-center justify-center">
          <span className="text-pink-400" style={{textShadow: '0 0 20px rgba(255,0,127,0.6)'}}>
            {displayedText}
            <span className="animate-pulse">|</span>
          </span>
        </div>

        {/* Bio */}
        <p className="text-cyan-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          {personalInfo?.bio || 'Building innovative solutions with React, Django, and cutting-edge technologies.'}
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-6 justify-center flex-wrap mb-12">
          <a href="#projects" className="px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-bold uppercase tracking-widest transition-all duration-300 transform hover:scale-105"
             style={{boxShadow: '0 0 20px rgba(0,255,255,0.8)'}}>
            &gt; VIEW_WORK
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-pink-400 text-pink-400 hover:bg-pink-500/20 font-bold uppercase tracking-widest transition-all duration-300"
             style={{boxShadow: '0 0 20px rgba(255,0,127,0.3)'}}>
            &gt; GET_IN_TOUCH
          </a>
        </div>

        {/* Social Links with Real Icons */}
        <div className="flex gap-6 justify-center mb-16">
          <a href="https://github.com/Gaurav5791" target="_blank" rel="noopener noreferrer"
             className="w-12 h-12 border-2 border-cyan-400 text-cyan-400 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all"
             style={{boxShadow: '0 0 10px rgba(0,255,255,0.5)'}}>
            <FaGithub size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
             className="w-12 h-12 border-2 border-cyan-400 text-cyan-400 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all"
             style={{boxShadow: '0 0 10px rgba(0,255,255,0.5)'}}>
            <FaLinkedin size={24} />
          </a>
          <a href="mailto:gauravgtp614@gmail.com"
             className="w-12 h-12 border-2 border-cyan-400 text-cyan-400 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all"
             style={{boxShadow: '0 0 10px rgba(0,255,255,0.5)'}}>
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <p className="text-cyan-400 font-mono text-sm">[ SCROLL_DOWN ]</p>
          <p className="text-2xl">↓</p>
        </div>
      </div>
    </section>
  )
}