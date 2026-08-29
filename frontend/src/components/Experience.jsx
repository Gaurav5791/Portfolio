export default function Experience() {
  const experiences = [
    {
      type: 'education',
      title: 'Bachelor of Technology (AI & Data Science)',
      company: 'CGC University, Mohali',
      period: '2024 - 2028',
      description: 'Currently pursuing B.Tech in AI & Data Science with a CGPA of 8.53. Focused on machine learning, computer vision, and full-stack development.',
      highlights: ['CGPA: 8.53', 'Relevant Coursework', 'Active in Projects']
    },
    {
      type: 'project',
      title: 'RapidAid - Emergency Ambulance Dispatch',
      company: 'Personal Project',
      period: '2024',
      description: 'Developed a full-stack web application for emergency ambulance dispatch with real-time location tracking using Google Maps API.',
      highlights: ['Google Maps Integration', 'Real-time Tracking', 'Full Stack Development']
    },
    {
      type: 'project',
      title: 'VidyaMitra - AI Career Recommendation',
      company: 'Personal Project',
      period: '2023 - 2024',
      description: 'Built an AI-powered platform that analyzes resumes and GitHub profiles to provide personalized career recommendations and skill-gap analysis.',
      highlights: ['NLP & ML', 'PDF Processing', 'Career Recommendations']
    },
    {
      type: 'project',
      title: 'CourseReg - Course Management',
      company: 'Personal Project',
      period: '2023',
      description: 'Created a comprehensive course registration system with role-based access control, JWT authentication, and complex approval workflows.',
      highlights: ['JWT Authentication', 'Spring Boot', 'Database Design']
    },
    {
      type: 'achievement',
      title: 'IBM Agentic AI App Developer Program',
      company: 'IBM SkillsBuild',
      period: '2024',
      description: 'Participant in the IBM Agentic AI App Developer Program, learning cutting-edge AI application development techniques.',
      highlights: ['AI/ML Training', 'Industry Mentorship', 'Certification']
    }
  ]

  const typeConfig = {
    education: {
      icon: '🎓',
      color: 'cyan',
      borderColor: 'border-cyan-400'
    },
    project: {
      icon: '💻',
      color: 'pink',
      borderColor: 'border-pink-400'
    },
    achievement: {
      icon: '⭐',
      color: 'purple',
      borderColor: 'border-purple-400'
    }
  }

  const colorClasses = {
    cyan: 'text-cyan-400',
    pink: 'text-pink-400',
    purple: 'text-purple-400'
  }

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-3xl opacity-10"></div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-5xl md:text-6xl font-black text-center mb-16 tracking-widest" 
            style={{color: '#00ffff', textShadow: '0 0 20px rgba(0,255,255,0.8)'}}>
          &gt; EXPERIENCE_TIMELINE
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, idx) => {
            const config = typeConfig[exp.type]
            return (
              <div
                key={idx}
                className={`relative md:ml-12 border-l-4 ${config.borderColor} pl-8 md:pl-12 pb-8 md:pb-0 group`}
              >
                {/* Timeline dot */}
                <div className={`absolute -left-4 md:-left-6 top-0 w-8 h-8 md:w-10 md:h-10 bg-black border-4 ${config.borderColor} flex items-center justify-center text-lg font-black ${colorClasses[config.color]}`}>
                  {config.icon}
                </div>

                {/* Content Card */}
                <div className="bg-black border-2 border-cyan-500/30 hover:border-cyan-400 p-6 transition-all duration-300"
                     style={{boxShadow: 'inset 0 0 20px rgba(0,255,255,0.1)'}}>
                  
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                    <div>
                      <h3 className={`text-2xl font-black tracking-wider mb-2 ${colorClasses[config.color]}`}>
                        {exp.title}
                      </h3>
                      <p className="text-cyan-300 font-mono text-sm">
                        {exp.company}
                      </p>
                    </div>
                    <div className={`text-sm font-bold ${colorClasses[config.color]} uppercase tracking-widest whitespace-nowrap`}>
                      [ {exp.period} ]
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4 font-light">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, hIdx) => (
                      <span key={hIdx} className={`text-xs px-3 py-1 bg-${config.color}-500/20 text-${config.color}-300 border border-${config.color}-400/50 font-mono`}>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}