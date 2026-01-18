import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DotGrid from '../components/DotGrid/DotGrid';
import './Contact.css';

// Typewriter component
function Typewriter({ text, speed = 50, delay = 0, onComplete }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!text) return;

    const startTimeout = setTimeout(() => {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setIsComplete(true);
          if (onComplete) onComplete();
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimeout);
  }, [text, speed, delay, onComplete]);

  return <>{displayedText}{!isComplete && <span className="cursor">|</span>}</>;
}

const Contact = ({ setIsTransitioning, setClickPosition }) => {
  const navigate = useNavigate();

  const handleBackToMenu = (event) => {
    setClickPosition({ x: event.clientX, y: event.clientY });
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/menu');
    }, 400);
  };

  return (
    <div className="contact-view">
      <DotGrid
        dotSize={6}
        gap={25}
        baseColor="#dddddd"
        activeColor="#667eea"
        proximity={100}
        shockRadius={200}
        shockStrength={3}
        resistance={750}
        returnDuration={1.5}
        className="contact-dotgrid"
      />

      <button className="back-button" onClick={handleBackToMenu}>
        ← Back to Menu
      </button>

      <div className="contact-container">
        <div className="contact-header">
          <div className="intro-bubble">
            <h1 className="intro-title">
              <Typewriter text="Let's Connect" speed={80} delay={200} />
            </h1>
            <p className="intro-subtitle">
              <Typewriter
                text="I'm always open to new opportunities, collaborations, and interesting conversations. Feel free to reach out!"
                speed={30}
                delay={1800}
              />
            </p>
          </div>
        </div>

        <div className="contact-content">
          <div className="contact-card">
            <div className="contact-section">
              <h2 className="contact-section-title">What I'm Looking For</h2>
              <ul className="contact-list">
                <li>Internship opportunities in UX/UI design or front-end development</li>
                <li>Freelance projects that challenge my skills</li>
                <li>Collaborative work with other designers and developers</li>
                <li>Opportunities to learn and grow in the tech industry</li>
              </ul>
            </div>

            <div className="contact-section">
              <h2 className="contact-section-title">Get In Touch</h2>
              <div className="contact-methods">
                <a
                  href="mailto:berkanhergul@hotmail.com"
                  className="contact-method"
                >
                  <span className="contact-icon">📧</span>
                  <span className="contact-label">Email</span>
                  <span className="contact-value">berkanhergul@hotmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/berkan-hergul-9a54481b8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <span className="contact-icon">💼</span>
                  <span className="contact-label">LinkedIn</span>
                  <span className="contact-value">Berkan Hergul</span>
                </a>

                <a
                  href="https://www.instagram.com/bn.fyh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-method"
                >
                  <span className="contact-icon">📸</span>
                  <span className="contact-label">Instagram</span>
                  <span className="contact-value">@bn.fyh</span>
                </a>

                <div className="contact-method">
                  <span className="contact-icon">📍</span>
                  <span className="contact-label">Location</span>
                  <span className="contact-value">Netherlands</span>
                </div>
              </div>
            </div>

            <div className="contact-section">
              <h2 className="contact-section-title">Skills & Expertise</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Design</h3>
                  <p>Figma, Photoshop, Illustrator, UI/UX, Prototyping</p>
                </div>
                <div className="skill-category">
                  <h3>Development</h3>
                  <p>React, JavaScript, HTML/CSS, Three.js, Git</p>
                </div>
                <div className="skill-category">
                  <h3>Research</h3>
                  <p>User Testing, A/B Testing, Accessibility, Data Analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social icons */}
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/berkan-hergul-9a54481b8/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon left"
        >
          <img src="/imgs/linkedin.png" alt="LinkedIn" className="social-img" />
        </a>
        <a
          href="https://www.instagram.com/bn.fyh/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon right"
        >
          <img src="/imgs/instagram.png" alt="Instagram" className="social-img" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
