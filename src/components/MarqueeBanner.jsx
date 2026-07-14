import './MarqueeBanner.css'

const items = [
  'React.js', 'Next.js', 'Node.js', 'Socket.IO', 'Express.js', 'PostgreSQL', 'MongoDB',
  'Supabase', 'TypeScript', 'JavaScript', 'Java', 'Tailwind CSS', 'Git', 'Docker', 'Vite'
]

export default function MarqueeBanner() {
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        <div className="marquee-content">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-dot" />
              {item}
            </span>
          ))}
        </div>
        <div className="marquee-content" aria-hidden="true">
          {[...items, ...items].map((item, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
