import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'

const navLinks = [
  { label: 'About',        href: '#about' },
  { label: 'Education',    href: '#education' },
  { label: 'Experience',   href: '#experience' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#work' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact',      href: '#contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="navbar-wrap">
      <motion.header
        className={`navbar-pill ${scrolled ? 'navbar-pill--scrolled' : ''}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Logo */}
        <a href="#home" className="navbar-pill__logo">
          Dev<span>.</span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar-pill__nav">
          {navLinks.map((l) => (
            <a key={l.label} href={l.href} className="navbar-pill__link" onClick={(e) => go(e, l.href)}>
              {l.label}
            </a>
          ))}
        </nav>

        {/* Hire CTA */}
        <a href="#contact" className="navbar-pill__cta" onClick={(e) => go(e, '#contact')}>
          Hire Me
        </a>

        {/* Burger */}
        <button
          className={`navbar-pill__burger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-drawer"
            initial={{ opacity: 0, y: -16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.97 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                className="navbar-drawer__link"
                onClick={(e) => go(e, l.href)}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
