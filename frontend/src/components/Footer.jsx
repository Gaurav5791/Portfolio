import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Gaurav5791',
      icon: <FaGithub size={24} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: <FaLinkedin size={24} />,
    },
    {
      name: 'Email',
      url: 'mailto:gauravgtp614@gmail.com',
      icon: <FaEnvelope size={24} />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com',
      icon: <FaTwitter size={24} />,
    },
  ]

  return (
    <footer className="bg-black border-t-2 border-cyan-500/30 py-12 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black tracking-widest mb-4" style={{color: '#00ffff', textShadow: '0 0 10px rgba(0,255,255,0.8)'}}>
              &gt; GAURAV_
            </h3>
            <p className="text-cyan-300 font-light text-sm leading-relaxed">
              AI & Data Science Undergraduate building the future of web applications with cutting-edge technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-pink-400 font-bold mb-4 uppercase tracking-widest text-sm">&gt; QUICK_LINKS</h4>
            <div className="space-y-2">
              <a href="#hero" className="text-cyan-300 hover:text-cyan-400 text-sm font-mono transition block">[ HOME ]</a>
              <a href="#about" className="text-cyan-300 hover:text-cyan-400 text-sm font-mono transition block">[ ABOUT ]</a>
              <a href="#skills" className="text-cyan-300 hover:text-cyan-400 text-sm font-mono transition block">[ SKILLS ]</a>
              <a href="#projects" className="text-cyan-300 hover:text-cyan-400 text-sm font-mono transition block">[ PROJECTS ]</a>
              <a href="#contact" className="text-cyan-300 hover:text-cyan-400 text-sm font-mono transition block">[ CONTACT ]</a>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-pink-400 font-bold mb-4 uppercase tracking-widest text-sm">&gt; CONNECT</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={social.name}
                  className="w-10 h-10 bg-cyan-500/20 border border-cyan-400 text-cyan-400 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all duration-300"
                  style={{ boxShadow: '0 0 10px rgba(0,255,255,0.3)' }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-500/30 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-cyan-400 text-sm font-mono mb-4 md:mb-0">
            &copy; {currentYear} GAURAV. ALL RIGHTS RESERVED.
          </p>
          <p className="text-cyan-300 text-xs font-mono">
            &gt; BUILT WITH REACT + DJANGO + TAILWIND CSS
          </p>
        </div>

        {/* Status Bar */}
        <div className="mt-8 pt-8 border-t border-cyan-500/30 text-center">
          <p className="text-cyan-400 text-xs font-mono">
            [ SYSTEM OPERATIONAL ] [ LAST UPDATE: {new Date().toLocaleDateString()} ] ✦
          </p>
        </div>
      </div>
    </footer>
  )
}