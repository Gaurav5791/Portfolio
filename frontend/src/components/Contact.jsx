import { useState } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const socialProfiles = [
    {
      title: 'GitHub',
      description: 'Check out my code and projects',
      url: 'https://github.com/Gaurav5791',
      icon: <FaGithub size={32} />
    },
    {
      title: 'LinkedIn',
      description: 'Connect with me professionally',
      url: 'https://linkedin.com',
      icon: <FaLinkedin size={32} />
    },
    {
      title: 'Email',
      description: 'gauravgtp614@gmail.com',
      url: 'mailto:gauravgtp614@gmail.com',
      icon: <FaEnvelope size={32} />
    },
    {
      title: 'Phone',
      description: '+91-6284697513',
      url: 'tel:+916284697513',
      icon: <FaPhone size={32} />
    }
  ]

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-16 tracking-widest" 
            style={{color: '#ff007f', textShadow: '0 0 20px rgba(255,0,127,0.8)'}}>
          &gt; GET_IN_TOUCH
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-0 group-hover:opacity-20 transition duration-300 rounded-none" 
                 style={{boxShadow: '0 0 30px rgba(0,255,255,0.5)'}}></div>
            <div className="relative bg-black border-2 border-cyan-500/30 p-8">
              {submitted ? (
                <div className="text-center py-8">
                  <p className="text-cyan-400 font-mono text-lg">[ MESSAGE SENT SUCCESSFULLY ]</p>
                  <p className="text-cyan-300 mt-2">Thank you for reaching out!</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="text-pink-400 text-sm font-bold uppercase tracking-widest block mb-2">
                      &gt; NAME
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-cyan-400/50 text-cyan-300 px-4 py-2 font-mono text-sm focus:outline-none focus:border-cyan-400 transition"
                      style={{boxShadow: 'inset 0 0 10px rgba(0,255,255,0.1)'}}
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="text-pink-400 text-sm font-bold uppercase tracking-widest block mb-2">
                      &gt; EMAIL
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black border border-cyan-400/50 text-cyan-300 px-4 py-2 font-mono text-sm focus:outline-none focus:border-cyan-400 transition"
                      style={{boxShadow: 'inset 0 0 10px rgba(0,255,255,0.1)'}}
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label className="text-pink-400 text-sm font-bold uppercase tracking-widest block mb-2">
                      &gt; MESSAGE
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full bg-black border border-cyan-400/50 text-cyan-300 px-4 py-2 font-mono text-sm focus:outline-none focus:border-cyan-400 transition resize-none"
                      style={{boxShadow: 'inset 0 0 10px rgba(0,255,255,0.1)'}}
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-3 uppercase tracking-widest transition-all duration-300 transform hover:scale-105"
                    style={{boxShadow: '0 0 20px rgba(0,255,255,0.8)'}}
                  >
                    &gt; SEND_MESSAGE
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-pink-400 mb-8 tracking-wider">
              Or Connect With Me Here:
            </h3>

            {socialProfiles.map((profile, idx) => (
              <a
                key={idx}
                href={profile.url}
                target={profile.url.startsWith('http') ? '_blank' : '_self'}
                rel={profile.url.startsWith('http') ? 'noopener noreferrer' : ''}
                className="group block bg-black border-2 border-cyan-500/30 hover:border-cyan-400 p-6 transition-all duration-300"
                style={{boxShadow: 'inset 0 0 20px rgba(0,255,255,0.1)'}}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl text-cyan-400 group-hover:text-pink-400 transition">
                    {profile.icon}
                  </div>
                  <div>
                    <h4 className="text-cyan-400 font-bold uppercase tracking-widest mb-1 group-hover:text-pink-400 transition">
                      {profile.title}
                    </h4>
                    <p className="text-cyan-300 text-sm font-light">
                      {profile.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}