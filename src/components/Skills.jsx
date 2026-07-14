import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './Skills.css'

const skillCategories = [
  {
    category: 'Languages',
    icon: '{ }',
    skills: ['JavaScript', 'TypeScript', 'Java'],
  },
  {
    category: 'Frontend',
    icon: '⬡',
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    category: 'Backend',
    icon: '⚡',
    skills: ['Node.js', 'Express.js', 'Socket.IO', 'REST APIs'],
  },
  {
    category: 'Database & Tools',
    icon: '🔧',
    skills: ['PostgreSQL', 'MongoDB', 'Supabase', 'Git', 'GitHub', 'Postman', 'Docker', 'Vite'],
  },
]

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section skills" id="skills" ref={ref}>
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          Skills
        </motion.span>
        <motion.h2
          className="heading-lg skills__heading"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1, duration: 0.7 }}
        >
          My Technical <span className="text-gradient">Expertise</span>
        </motion.h2>

        <div className="skills__grid">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              className="skills__card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: ci * 0.12, duration: 0.7 }}
            >
              <div className="skills__card-header">
                <span className="skills__card-icon">{cat.icon}</span>
                <h3 className="skills__card-title">{cat.category}</h3>
              </div>
              <div className="skills__tags">
                {cat.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: ci * 0.12 + si * 0.06 + 0.3, duration: 0.4 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
