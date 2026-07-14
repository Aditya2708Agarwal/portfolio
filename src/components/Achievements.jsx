import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Achievements.css'

const achievements = [
  {
    title: 'Smart India Hackathon',
    event: 'National Level Hackathon — Top Team',
    desc: 'Selected as top team from ABES Engineering College to represent the institution in the prestigious SIH national round.',
    icon: '⚡',
    color: '#E8274B',
  },
  {
    title: '500+ Solved DSA Problems',
    event: 'Competitive Programming',
    desc: 'Solved over 500 algorithmic challenges. LeetCode Peak Rating: 1612 | CodeChef Peak Rating: 1409.',
    icon: '🏆',
    color: '#111110',
  },
  {
    title: 'React & Next.js Certificate',
    event: 'GeeksforGeeks Certification',
    desc: 'Earned professional certification verifying fullstack capabilities across modern React and Next.js frameworks.',
    icon: '📜',
    color: '#E8274B',
  },
  {
    title: 'Node.js Backend Certification',
    event: 'Udemy Professional Course',
    desc: 'Mastered production REST APIs, Express servers, MongoDB integrations, and scalable session handlers.',
    icon: '☁️',
    color: '#111110',
  },
  {
    title: '15+ Hackathons Completed',
    event: 'Hackathons & Contests',
    desc: 'Participated in more than 15 national and college-level hackathons. Built production-ready prototypes within 24 to 36 hours.',
    icon: '🚀',
    color: '#E8274B',
  },
]

export default function Achievements() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section achievements" id="achievements" ref={ref}>
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          Achievements
        </motion.span>
        <motion.h2
          className="heading-lg achievements__heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          Awards & <span className="text-gradient">Certifications</span>
        </motion.h2>

        <div className="achievements__grid">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              className="achievement-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              style={{ '--ach-color': item.color }}
            >
              <div className="achievement-card__icon-wrap">
                <span className="achievement-card__icon">{item.icon}</span>
              </div>
              <div className="achievement-card__content">
                <h3 className="achievement-card__title">{item.title}</h3>
                <p className="achievement-card__event">{item.event}</p>
                <p className="achievement-card__desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
