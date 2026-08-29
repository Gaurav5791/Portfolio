import { useState, useEffect } from 'react'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible(window.pageYOffset > 300)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-40 w-12 h-12 bg-black border border-cyan-400 text-cyan-400 flex items-center justify-center hover:bg-cyan-500 hover:text-black transition-all duration-300 transform hover:scale-110 font-bold text-lg"
          style={{
            boxShadow: '0 0 15px rgba(0,255,255,0.6)',
            animation: 'fadeInScale 0.3s ease-out'
          }}
          title="Back to top"
        >
          ↑
        </button>
      )}

      <style>{`
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.7);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </>
  )
}