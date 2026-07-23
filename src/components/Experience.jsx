import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Experience.css'

const experience = [
  {
    role: 'Web Developer',
    company: 'inAmigos Foundation',
    period: 'June 2026 – July 2026',
    summary:
      'inAmigos Foundation is a non-profit supporting underprivileged children and stray animals',
    points: [
      'Contributed to and improved the foundation’s website, building new features to support its outreach efforts',
      'Collaborated on frontend enhancements to improve usability and presentation of the foundation’s mission and programs',
    ],
    icon: '💼',
  },
]

const cardVariant = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Experience() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section experience" id="experience" ref={ref}>
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Experience
        </motion.span>
        <motion.h2
          className="heading-lg experience__heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          Professional <span className="text-gradient">Experience</span>
        </motion.h2>

        <div className="experience__timeline">
          {experience.map((item, i) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              className="experience__card"
              custom={i}
              variants={cardVariant}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="experience__card-left">
                <div className="experience__icon">{item.icon}</div>
                {i < experience.length - 1 && <div className="experience__line" />}
              </div>
              <div className="experience__card-body">
                <div className="experience__card-header">
                  <div>
                    <h3 className="experience__role">{item.role}</h3>
                    <p className="experience__company">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l8-4 8 4v14M9 21v-5h6v5M9 11h.01M9 15h.01M13 11h.01M13 15h.01M17 11h.01M17 15h.01"/></svg>
                      {item.company}
                    </p>
                  </div>
                  <div className="experience__meta">
                    <span className="experience__period">{item.period}</span>
                  </div>
                </div>

                <p className="experience__summary">{item.summary}</p>

                <ul className="experience__points">
                  {item.points.map((point) => (
                    <li key={point} className="experience__point">
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}