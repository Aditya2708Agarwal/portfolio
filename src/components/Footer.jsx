import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">Dev<span className="footer__logo-accent">.</span></span>
          <p className="footer__tagline">
            Building the future, one commit at a time.
          </p>
        </div>

        <nav className="footer__nav">
          {[
            { label: 'About', href: '#about' },
            { label: 'Education', href: '#education' },
            { label: 'Skills', href: '#skills' },
            { label: 'Projects', href: '#work' },
            { label: 'Achievements', href: '#achievements' },
            { label: 'Contact', href: '#contact' },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="footer__link"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="footer__bottom">
          <p className="footer__copy">© {year} Aditya Agarwal. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  )
}
