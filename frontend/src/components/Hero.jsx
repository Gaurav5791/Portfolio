import { useState, useEffect } from 'react'

export default function Hero() {
  const [text, setText] = useState('')
  const fullText = "Full Stack Developer | Python | React | Django"
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText(fullText.slice(0, index + 1))
        setIndex(index + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [index, fullText])

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
          Hi, I'm Gaurav
        </h1>
        
        <p className="text-2xl md:text-3xl text-blue-400 mb-8 h-16 font-mono">
          {text}
          <span className="animate-pulse">|</span>
        </p>

        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
          Building dynamic, scalable web applications with modern technologies
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition">
            View My Work
          </button>
          <button className="px-8 py-3 border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg font-semibold transition">
            Contact Me
          </button>
        </div>
      </div>
    </section>
  )
}