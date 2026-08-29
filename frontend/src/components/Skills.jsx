export default function Skills() {
  const skillCategories = [
    {
      category: 'Languages',
      color: 'cyan',
      skills: ['Python', 'Java', 'JavaScript', 'C++', 'C', 'SQL']
    },
    {
      category: 'Frameworks & Libraries',
      color: 'pink',
      skills: ['Django', 'React', 'Flask', 'Spring Boot', 'NumPy', 'Pandas', 'Matplotlib']
    },
    {
      category: 'Databases',
      color: 'purple',
      skills: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB']
    },
    {
      category: 'Tools & Platforms',
      color: 'cyan',
      skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Docker', 'Linux']
    },
    {
      category: 'AI/ML & Data Science',
      color: 'pink',
      skills: ['Machine Learning', 'Computer Vision', 'NLP', 'Data Analysis', 'PDF Processing']
    },
    {
      category: 'Other Skills',
      color: 'purple',
      skills: ['REST APIs', 'JWT Authentication', 'Responsive Design', 'System Design', 'Problem Solving']
    }
  ]

  const colorMap = {
    cyan: {
      border: 'border-cyan-400/50',
      bg: 'bg-cyan-500/20',
      text: 'text-cyan-300',
      hover: 'hover:bg-cyan-500/40',
      shadow: 'rgba(0,255,255,0.3)'
    },
    pink: {
      border: 'border-pink-400/50',
      bg: 'bg-pink-500/20',
      text: 'text-pink-300',
      hover: 'hover:bg-pink-500/40',
      shadow: 'rgba(255,0,127,0.3)'
    },
    purple: {
      border: 'border-purple-400/50',
      bg: 'bg-purple-500/20',
      text: 'text-purple-300',
      hover: 'hover:bg-purple-500/40',
      shadow: 'rgba(168,85,247,0.3)'
    }
  }

  return (
    <section className="py-20 bg-black border-t-2 border-b-2 border-cyan-500/30 relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(0,255,255,0.05)_25%,rgba(0,255,255,0.05)_26%,transparent_27%,transparent_74%,rgba(0,255,255,0.05)_75%,rgba(0,255,255,0.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-16 tracking-widest" 
            style={{color: '#00ffff', textShadow: '0 0 20px rgba(0,255,255,0.8)'}}>
          &gt; SKILLS_MATRIX
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => {
            const colors = colorMap[category.color]
            return (
              <div
                key={idx}
                className={`border-2 ${colors.border} bg-black/50 p-6 hover:scale-105 transition-all duration-300`}
                style={{boxShadow: `inset 0 0 20px ${colors.shadow}`}}
              >
                <h3 className={`text-lg font-black mb-4 uppercase tracking-widest ${colors.text}`}>
                  &gt; {category.category}
                </h3>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="flex items-center gap-3">
                      <div className={`w-2 h-2 ${colors.bg} rounded-full`}></div>
                      <span className={`${colors.text} text-sm font-mono`}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Fun Stats */}
        <div className="mt-16 pt-12 border-t border-cyan-500/30 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-4xl font-black text-cyan-400 mb-2">200+</p>
            <p className="text-cyan-300 text-sm font-mono">DSA Problems Solved</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-pink-400 mb-2">3+</p>
            <p className="text-pink-300 text-sm font-mono">Full Stack Projects</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-black text-purple-400 mb-2">10+</p>
            <p className="text-purple-300 text-sm font-mono">Certifications Earned</p>
          </div>
        </div>
      </div>
    </section>
  )
}