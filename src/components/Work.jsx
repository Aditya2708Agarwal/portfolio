import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import './Work.css'

// ─────────────────────────────────────────────
//  Drop your project screenshots into:
//    public/projects/project1.png
//    public/projects/project2.png
//    public/projects/project3.png
//    public/projects/project4.png
// ─────────────────────────────────────────────
const projects = [
  {
    title: 'AI-Powered Fitness Tracker',
    subtitle: 'Gemini API & Supabase Tracker',
    description:
      'Integrated Google Gemini API to automatically calculate macronutrients from natural language food inputs. Implemented Supabase authentication and PostgreSQL for secure, scalable user data and meal history storage. Developed interactive UI visualizations including charts and progress bars to monitor daily fitness goals.',
    tags: ['React', 'Gemini API', 'Supabase', 'PostgreSQL', 'shadcn/ui'],
    github: 'https://github.com/Aditya2708Agarwal',
    live: 'https://github.com/Aditya2708Agarwal',
    color: '#E8274B',
    image: '/projects/project1.png',
  },
  {
    title: 'OneConnect Chat Application',
    subtitle: 'Bidirectional Real-time Chat',
    description:
      'Built a real-time chat system using Socket.IO for instant bidirectional communication between users. Designed RESTful APIs for user authentication, message persistence, and conversation management. Implemented modular React architecture with custom hooks for scalable state and socket event handling.',
    tags: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO'],
    github: 'https://github.com/Aditya2708Agarwal',
    live: 'https://github.com/Aditya2708Agarwal',
    color: '#FF6B86',
    image: '/projects/project2.png',
  },
  {
    title: 'Study Room — Focus Sessions',
    subtitle: 'Collaborative Pomodoro Rooms',
    description:
      'Developed real-time collaborative study rooms and live chat using Socket.IO with JWT-based authentication. Built room management, authentication, and session tracking REST APIs with Express.js and MongoDB. Designed a fully responsive UI with React, TailwindCSS, and shadcn/ui with persistent Pomodoro study timers.',
    tags: ['React', 'Vite', 'TailwindCSS', 'shadcn/ui', 'Socket.IO', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    github: 'https://github.com/Aditya2708Agarwal',
    live: 'https://github.com/Aditya2708Agarwal',
    color: '#E8274B',
    image: '/projects/project3.png',
  },
  {
    title: 'Weather App',
    subtitle: 'React Weather Dashboard',
    description:
      'A responsive weather application that delivers real-time weather forecasts and details using external APIs. Features interactive search and beautiful weather-based themes.',
    tags: ['React', 'Weather API', 'Netlify'],
    github: 'https://github.com/Aditya2708Agarwal',
    live: 'https://weatherapp-aditya.netlify.app/',
    color: '#FF6B86',
    image: '/projects/project4.png',
  },
]

function ProjectCard({ proj, index, inView }) {
  const [imgError, setImgError] = useState(false)
  const isEven = index % 2 === 0

  return (
    <motion.article
      className={`project-card ${isEven ? 'project-card--even' : 'project-card--odd'}`}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{ '--proj-color': proj.color }}
    >
      {/* Screenshot */}
      <div className="project-card__image-wrap">
        {!imgError ? (
          <img
            src={proj.image}
            alt={`${proj.title} screenshot`}
            className="project-card__image"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="project-card__image-placeholder">
            <div className="project-card__placeholder-inner">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.4">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>Drop screenshot in<br/><code>public/projects/project{index + 1}.png</code></span>
            </div>
          </div>
        )}
        <div className="project-card__image-overlay" />
      </div>

      {/* Info */}
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__index">0{index + 1}</span>
          <div className="project-card__links">
            <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label="GitHub">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href={proj.live} target="_blank" rel="noopener noreferrer" className="project-card__link" aria-label="Live demo">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
            </a>
          </div>
        </div>

        <h3 className="project-card__title">{proj.title}</h3>
        <p className="project-card__subtitle">{proj.subtitle}</p>
        <p className="project-card__desc">{proj.description}</p>

        <div className="project-card__tags">
          {proj.tags.map((t) => (
            <span key={t} className="project-card__tag">{t}</span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}

export default function Work() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section className="section work" id="work" ref={ref}>
      <div className="container">
        <motion.span
          className="section-label"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
        >
          Projects
        </motion.span>
        <div className="work__header">
          <motion.h2
            className="heading-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Selected <span className="text-gradient">Work</span>
          </motion.h2>
          <motion.a
            href="https://github.com/Aditya2708Agarwal"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline work__all-btn"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            All on GitHub
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
          </motion.a>
        </div>

        <div className="work__grid">
          {projects.map((proj, i) => (
            <ProjectCard key={proj.title} proj={proj} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
