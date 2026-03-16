import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) {
      document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -10% 0px' }
    )

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    const page = document.querySelector('.page')
    const handleScroll = () => {
      if (!page) return
      const scrollTop = window.scrollY
      const maxScroll = document.body.scrollHeight - window.innerHeight
      const progress = maxScroll > 0 ? scrollTop / maxScroll : 0
      page.style.setProperty('--scroll-progress', progress.toString())
      page.style.setProperty('--scroll-y', `${scrollTop}`)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="page">
      <div className="grain" aria-hidden="true"></div>
      <div className="accent-layer" aria-hidden="true">
        <span className="accent-orb orb-one"></span>
        <span className="accent-orb orb-two"></span>
        <span className="accent-orb orb-three"></span>
      </div>
      <header className="nav">
        <div className="logo">Drew Floyd</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="/resume.html">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="section hero" id="about">
        <div className="hero-card reveal" style={{ '--delay': '0ms' }}>
          <p className="section-title">Southern California</p>
          <div className="impact">
            <div className="impact-slab" aria-hidden="true"></div>
            <h1 className="hero-name impact-text">Drew Floyd</h1>
          </div>
          <p className="hero-tagline impact-sub">
            Computer Science major focused on machine learning, computer vision,
            and technical product development. I build rigorous systems and
            cinematic digital experiences.
          </p>
          <div className="hero-meta">
            <span>Chapman University · GPA 3.87</span>
            <span>Biliterate · English / Spanish</span>
          </div>
          <div className="cta-row">
            <a className="button" href="#projects">
              View Projects
            </a>
            <a className="button secondary" href="#contact">
              Contact
            </a>
          </div>
        </div>
        <div className="hero-block reveal" style={{ '--delay': '120ms' }}>
          <h2>About</h2>
          <p>
            I blend computer science and data analytics with a creative edge.
            When I’m not building ML pipelines or exploring geospatial systems,
            you’ll find me on the track, behind the camera shooting photography,
            or in documentary film mode chasing real-world stories.
          </p>
          <div className="about-frame">
            <img src="/src/assets/drew.png" alt="Drew Floyd portrait" />
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <p className="section-title reveal">Selected Projects</p>
        <div className="projects-grid">
          <a
            className="project-card project-link reveal"
            style={{ '--delay': '0ms' }}
            href="/eye-tracking.html"
            target="_blank"
            rel="noreferrer"
          >
            <p className="project-meta">Computer Vision</p>
            <h3>Eye Tracking System</h3>
            <p>
              Custom CNN training with annotated datasets, upgraded to a YOLO
              architecture for higher detection performance.
            </p>
          </a>
          <article className="project-card reveal" style={{ '--delay': '80ms' }}>
            <p className="project-meta">Machine Learning</p>
            <h3>CreateML & API Integration</h3>
            <p>
              Built and deployed CreateML models and connected them to Swift
              applications with live API integrations.
            </p>
          </article>
          <article className="project-card reveal" style={{ '--delay': '160ms' }}>
            <p className="project-meta">Analytics</p>
            <h3>Business Analytics Models</h3>
            <p>
              Designed 10+ predictive models and custom generative systems using
              TensorFlow.
            </p>
          </article>
          <a
            className="project-card project-link reveal"
            style={{ '--delay': '240ms' }}
            href="/stable.html"
            target="_blank"
            rel="noreferrer"
          >
            <p className="project-meta">iOS Product</p>
            <h3>Stable · Ranch Management App</h3>
            <p>
              Built an iOS prototype to streamline ranch task tracking, status
              visibility, and daily operations.
            </p>
          </a>
        </div>
      </section>

      <section className="section" id="skills">
        <p className="section-title reveal">Skills</p>
        <div className="grid-two">
          <div className="skills-card reveal" style={{ '--delay': '0ms' }}>
            <h2>Technical</h2>
            <div className="skills-grid">
              <div className="skill-pill">Python</div>
              <div className="skill-pill">Java</div>
              <div className="skill-pill">C++ / C</div>
              <div className="skill-pill">Swift</div>
              <div className="skill-pill">SQL</div>
              <div className="skill-pill">Computer Vision</div>
              <div className="skill-pill">Machine Learning</div>
              <div className="skill-pill">Data Visualization</div>
              <div className="skill-pill">Data Analysis</div>
              <div className="skill-pill">Tableau</div>
              <div className="skill-pill">Alteryx</div>
              <div className="skill-pill">AWS</div>
              <div className="skill-pill">CI/CD Pipelines</div>
              <div className="skill-pill">QGIS</div>
            </div>
          </div>
          <div className="skills-card reveal" style={{ '--delay': '120ms' }}>
            <h2>Additional</h2>
            <div className="skills-grid">
              <div className="skill-pill">Leadership</div>
              <div className="skill-pill">Communication</div>
              <div className="skill-pill">Collaboration</div>
              <div className="skill-pill">Problem Solving</div>
              <div className="skill-pill">Adaptability</div>
              <div className="skill-pill">Time Management</div>
              <div className="skill-pill">Video Production</div>
              <div className="skill-pill">Media Direction</div>
              <div className="skill-pill">Biliterate EN/ES</div>
              <div className="skill-pill">Scholar Athlete</div>
              <div className="skill-pill">Documentary Film</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="resume">
        <p className="section-title reveal">Education & Experience</p>
        <div className="resume-grid">
          <a
            className="resume-card resume-link accent-edu reveal"
            style={{ '--delay': '0ms' }}
            href="https://www.chapman.edu/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="resume-summary">
              <div className="resume-eyebrow">Education</div>
              <h3>Chapman University</h3>
              <p className="resume-role">B.S. Computer Science</p>
              <p className="resume-meta">
                Minor in Business Analytics & Documentary Film · GPA 3.87 · 2022–Present
              </p>
            </div>
          </a>
          <a
            className="resume-card resume-link accent-work reveal"
            style={{ '--delay': '120ms' }}
            href="https://seescan.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="resume-summary">
              <div className="resume-eyebrow">Experience</div>
              <h3>SeeScan</h3>
              <p className="resume-role">Software Engineering Intern</p>
              <p className="resume-meta">
                Refactored geospatial map tiling services and shipped CI/CD pipelines
                and internal tooling.
              </p>
            </div>
          </a>
          <a
            className="resume-card resume-link accent-work reveal"
            style={{ '--delay': '240ms' }}
            href="https://www.instagram.com/chapmanxctf/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="resume-summary">
              <div className="resume-eyebrow">Experience</div>
              <h3>Chapman Athletics</h3>
              <p className="resume-role">Track & Field Student Assistant</p>
              <p className="resume-meta">
                Photographer and videographer for multiple NCAA Division III teams.
              </p>
            </div>
          </a>
        </div>
      </section>

      <section className="section" id="contact">
        <p className="section-title reveal">Contact</p>
        <div className="contact-card reveal">
          <h2>Let’s Build</h2>
          <p>
            Open to software engineering, ML engineering, computer vision, data
            science, and technical product roles.
          </p>
          <div className="contact-actions">
            <a className="button" href="mailto:andrew.christopher.floyd@gmail.com">
              Email
            </a>
            <a className="button secondary" href="tel:+18586689723">
              Call
            </a>
          </div>
        </div>
      </section>

      <footer className="footer reveal">© 2026 Drew Floyd · San Diego, CA</footer>
    </div>
  )
}

export default App
