import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const [imgError, setImgError] = useState(false)

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 15
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -15
    setTilt({ x, y })
  }

  return (
    <section className="section about" id="about" ref={ref}>
      <div className="container about__container">
        <motion.div
          className="about__text"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.span className="section-label" custom={0} variants={fadeUp}>About Me</motion.span>
          <motion.h2 className="heading-lg about__heading" custom={1} variants={fadeUp}>
            Building real-time, <span className="text-gradient">scalable web systems</span>
          </motion.h2>
          <motion.p className="about__body" custom={2} variants={fadeUp}>
            I am a Fullstack Developer and CS student with hands-on experience building real-time, 
            scalable web applications using modern JavaScript technologies.
          </motion.p>
          <motion.p className="about__body" custom={3} variants={fadeUp}>
            I specialize in React.js, Next.js, Node.js, and Socket.IO. In addition, I have a strong 
            Data Structures and Algorithms foundation with 500+ problems solved across competitive programming platforms like LeetCode and CodeChef.
          </motion.p>
          <motion.div className="about__chips" custom={4} variants={fadeUp}>
            {['React.js', 'Next.js', 'Node.js', 'Socket.IO', 'PostgreSQL', 'MongoDB', 'Supabase', 'TypeScript'].map((tag) => (
              <span key={tag} className="about__chip">{tag}</span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="about__image-wrapper"
          initial={{ opacity: 0, x: 60 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          style={{
            transform: `perspective(800px) rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
            transition: tilt.x === 0 ? 'transform 0.5s ease' : 'none',
          }}
        >
          <div className="about__image-card">
            <div className="about__avatar">
              {!imgError ? (
                <img 
                  src="/about-photo.jpg" 
                  alt="Aditya Agarwal" 
                  className="about__avatar-img"
                  onError={() => setImgError(true)}
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }}
                />
              ) : (
                <div className="about__avatar-inner">AA</div>
              )}
            </div>
            <div className="about__card-info">
              <span className="about__card-name">Aditya Agarwal</span>
              <span className="about__card-role">Fullstack Developer</span>
              <div className="about__card-location">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
                Ghaziabad, India
              </div>
              {imgError && (
                <span style={{ fontSize: '0.65rem', color: 'var(--text-muted)', display: 'block', marginTop: '0.5rem' }}>
                  Add photo to <code>public/about-photo.jpg</code>
                </span>
              )}
            </div>
          </div>
          <div className="about__image-badge about__image-badge--tl">
            <span>🚀</span> Open to work
          </div>
          <div className="about__image-badge about__image-badge--br">
            <span>💻</span> MERN & Next.js
          </div>
        </motion.div>
      </div>
    </section>
  )
}
