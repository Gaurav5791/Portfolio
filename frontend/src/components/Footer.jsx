import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaGithub size={20} />, url: 'https://github.com/Gaurav5791', label: 'GitHub' },
    { icon: <FaLinkedin size={20} />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaEnvelope size={20} />, url: 'mailto:gauravgtp614@gmail.com', label: 'Email' },
    { icon: <FaTwitter size={20} />, url: 'https://twitter.com', label: 'Twitter' }
  ]

  const quickLinks = [
    { label: 'HOME', href: '#hero' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SKILLS', href: '#skills' },
    { label: 'WORK', href: '#projects' },
    { label: 'CONTACT', href: '#contact' }
  ]

  return (
    <footer className="bg-black border-t border-cyan-500/30 relative">
      {/* Minimal background glow */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl -translate-x-1/2"></div>
      </div>

      {/* Main Footer Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8 py-12 md:py-16">
        
        {/* 3-Column Grid - Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 mb-10">
          
          {/* LEFT: Brand Section */}
          <div className="flex flex-col gap-3">
            <h3 
              className="text-3xl md:text-4xl font-black tracking-widest" 
              style={{
                color: '#00ffff',
                textShadow: '0 0 20px rgba(0,255,255,0.8)'
              }}
            >
              &gt; GAURAV_
            </h3>
            <p className="text-cyan-300 text-sm font-light">
              Full Stack Developer • AI & Data Science
            </p>
          </div>

          {/* CENTER: Quick Links */}
          <div className="flex flex-col gap-4">
            <p className="text-cyan-400 font-bold uppercase text-xs tracking-widest">
              QUICK LINKS
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-cyan-300 hover:text-cyan-400 text-xs font-mono transition duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT: Social Icons */}
          <div className="flex flex-col gap-4">
            <p className="text-cyan-400 font-bold uppercase text-xs tracking-widest">
              CONNECT
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.label}
                  className="w-12 h-12 bg-black border border-cyan-400 text-cyan-400 flex items-center justify-center hover:bg-cyan-500 hover:text-black hover:-translate-y-1 transition-all duration-300"
                  style={{
                    boxShadow: '0 0 12px rgba(0,255,255,0.4)'
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="border-t border-cyan-500/20 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono">
          <p className="text-cyan-400/70">
            © {currentYear} Gaurav. All rights reserved.
          </p>
          <p className="text-cyan-400/70 flex items-center gap-2">
            SYSTEM STATUS: <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full inline-block"></span> ONLINE
          </p>
        </div>
      </div>
    </footer>
  )
}