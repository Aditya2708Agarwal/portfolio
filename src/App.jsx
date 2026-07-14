import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Skills from './components/Skills'
import Work from './components/Work'
import Achievements from './components/Achievements'
import MarqueeBanner from './components/MarqueeBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const cursorRef = useRef(null)

  useEffect(() => {
    // Smooth scroll with Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    // Cursor glow follow
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`
        cursorRef.current.style.top = `${e.clientY}px`
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      lenis.destroy()
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor-glow" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Work />
        <MarqueeBanner />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
