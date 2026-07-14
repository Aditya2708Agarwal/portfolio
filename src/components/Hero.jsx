import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const roles = ['Fullstack Developer', 'CS Student', 'Competitive Programmer']

export default function Hero() {
  const year = new Date().getFullYear()
  const roleRef = useRef(null)
  const indexRef = useRef(0)
  const charIndexRef = useRef(0)
  const deletingRef = useRef(false)
  const timeoutRef = useRef(null)

  useEffect(() => {
    const type = () => {
      const current = roles[indexRef.current]
      if (!roleRef.current) return

      if (!deletingRef.current) {
        roleRef.current.textContent = current.slice(0, charIndexRef.current + 1)
        charIndexRef.current++
        if (charIndexRef.current === current.length) {
          deletingRef.current = true
          timeoutRef.current = setTimeout(type, 2000)
          return
        }
      } else {
        roleRef.current.textContent = current.slice(0, charIndexRef.current - 1)
        charIndexRef.current--
        if (charIndexRef.current === 0) {
          deletingRef.current = false
          indexRef.current = (indexRef.current + 1) % roles.length
        }
      }
      timeoutRef.current = setTimeout(type, deletingRef.current ? 40 : 70)
    }
    timeoutRef.current = setTimeout(type, 500)
    return () => clearTimeout(timeoutRef.current)
  }, [])

  const scrollDown = () =>
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero" id="home">
      {/* Decorative sparks */}
      <span className="hero__spark hero__spark--1" aria-hidden="true">✦</span>
      <span className="hero__spark hero__spark--2" aria-hidden="true">⚡</span>
      <span className="hero__spark hero__spark--3" aria-hidden="true">✦</span>

      <div className="hero__inner">
        {/* Top bar */}
        <motion.div
          className="hero__topbar"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <span className="hero__topbar-tag">
            <span className="hero__available-dot" />
            Available for work
          </span>
          <span className="hero__topbar-since">/CREATING SINCE 2023</span>
        </motion.div>

        {/* Big display headline */}
        <div className="hero__headline-wrap">
          <motion.h1
            className="hero__headline heading-display"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Aditya<br />Agarwal
          </motion.h1>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="hero__bottombar"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <span className="hero__copyright">©{year}</span>

          <div className="hero__tagline">
            <span className="hero__tagline-prefix">I am a </span>
            <span className="hero__tagline-typed" ref={roleRef} style={{ fontWeight: 600, color: 'var(--black)' }} />
            <p style={{ marginTop: '0.25rem', fontSize: '0.8rem' }}>Building real-time, scalable web applications</p>
          </div>

          <div className="hero__actions">
            <a
              href="#work"
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); document.querySelector('#work')?.scrollIntoView({ behavior: 'smooth' }) }}
            >
              View Work ↗
            </a>
            <button className="hero__scroll" onClick={scrollDown} aria-label="Scroll">
              <motion.svg
                width="20" height="20" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="1.5"
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </motion.svg>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
