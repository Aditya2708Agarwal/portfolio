import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Education.css'

const education = [
  {
    degree: 'B.Tech in Computer Science',
    institution: 'ABES Engineering College',
    location: 'Ghaziabad, India',
    year: '2023 – 2027',
    grade: 'Pursuing',
    highlights: ['Data Structures & Algorithms', 'Database Systems', 'Object Oriented Programming', 'Web Engineering'],
    icon: '🎓',
  },
  {
    degree: 'Class 12th (Intermediate)',
    institution: 'CBSE Board',
    location: 'India',
    year: '2023 Completed',
    grade: 'Percentage: 93%',
    highlights: ['Physics', 'Chemistry', 'Mathematics', 'Computer Science'],
    icon: '📚',
  },
  {
    degree: 'Class 10th (High School)',
    institution: 'CBSE Board',
    location: 'India',
    year: '2021 Completed',
    grade: 'Percentage: 85%',
    highlights: ['Science', 'Mathematics', 'English', 'Social Studies'],
    icon: '🏫',
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

export default function Education() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section education" id="education" ref={ref}>
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Education
        </motion.span>
        <motion.h2
          className="heading-lg education__heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          Academic <span className="text-gradient">Background</span>
        </motion.h2>

        <div className="education__timeline">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              className="education__card"
              custom={i}
              variants={cardVariant}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div className="education__card-left">
                <div className="education__icon">{edu.icon}</div>
                {i < education.length - 1 && <div className="education__line" />}
              </div>
              <div className="education__card-body">
                <div className="education__card-header">
                  <div>
                    <h3 className="education__degree">{edu.degree}</h3>
                    <p className="education__institution">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>
                      {edu.institution} — {edu.location}
                    </p>
                  </div>
                  <div className="education__meta">
                    <span className="education__year">{edu.year}</span>
                    <span className="education__grade">{edu.grade}</span>
                  </div>
                </div>
                <div className="education__subjects">
                  {edu.highlights.map((s) => (
                    <span key={s} className="education__subject">{s}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
