import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DotGrid from '../components/DotGrid/DotGrid';
import './AboutMe.css';

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

const AboutMe = ({ setIsTransitioning, setClickPosition }) => {
  const navigate = useNavigate();
  const [selectedNote, setSelectedNote] = useState(null);

  const handleBackToMenu = (event) => {
    setClickPosition({ x: event.clientX, y: event.clientY });
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/menu');
    }, 400);
  };

  const handleNoteClick = (note) => {
    setSelectedNote(note);
  };

  const handleCloseNote = () => {
    setSelectedNote(null);
  };

  const notes = [
    {
      id: 1,
      title: '👋 About Me',
      preview: 'Media Design Student',
      date: 'Berkan Hergul',
      content: [
        "Hey, I'm Berkan! I'm a Media Design student at Fontys in the Netherlands. I like making things that look good but also actually work the way they're supposed to.",
        "I'm really into UX/UI design and front-end development. What I like most is that I can do both the design part and the coding part. A lot of people specialize in one or the other, but I enjoy being able to design something and then actually build it myself.",
        "Working on projects this semester taught me that you can't just assume what users want. You have to actually test things and get feedback. Sometimes the stuff you think is cool turns out to confuse people, and sometimes small details you didn't think mattered end up being really important.",
        "My plan is to focus on UX/UI design, front-end development, and mobile app development. That's the direction I want to go professionally. I want to be someone who can design interfaces that people actually enjoy using and then build them properly."
      ],
      stats: [
        { label: 'Age', value: '21' },
        { label: 'Location', value: 'Netherlands' },
        { label: 'Education', value: 'Fontys University' }
      ]
    },
    {
      id: 2,
      title: '🎨 Design Skills',
      preview: 'UI/UX Design, Prototyping & Visual Design',
      date: 'Tools & Skills',
      content: [
        "I work with the standard design tools you'd expect. Figma is my main tool for UI/UX work and prototyping. I also use Photoshop and Illustrator when I need them for visual design stuff."
      ],
      skills: ['Figma', 'Photoshop', 'Illustrator', 'UI/UX Design', 'Prototyping']
    },
    {
      id: 3,
      title: '💻 Development',
      preview: 'Front-end development with modern web technologies',
      date: 'Technical Skills',
      content: [
        "I know HTML, CSS, and JavaScript which are the basics for web development. I've also been learning React because it makes building interactive websites way easier. I use VS Code for coding and Git for keeping track of my work."
      ],
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'VS Code', 'Git']
    },
    {
      id: 4,
      title: '🔍 Research',
      preview: 'User research, testing & accessibility',
      date: 'Research Methods',
      content: [
        "I've learned that you need to actually test your designs with real people. I do user research, A/B testing, and usability testing to see if what I made actually works. I also try to keep accessibility in mind so everyone can use what I build."
      ],
      skills: ['User Research', 'A/B Testing', 'User Interviews', 'Accessibility', 'Usability Testing', 'Data Analysis']
    },
    {
      id: 5,
      title: '🚀 Current Projects',
      preview: 'Active projects and learning',
      date: 'What I\'m Building',
      content: [
        "Right now I'm working on a couple projects that are pushing me to learn new stuff and get better at what I do."
      ],
      projects: [
        'Ducks on Fire - Creative digital agency website plus a photogrammetry and virtual production project using Unreal Engine',
        'Wii-Inspired Portfolio - This portfolio you\'re looking at right now. Built with React and has a 3D intro room that took forever to optimize'
      ]
    },
    {
      id: 6,
      title: '📬 Get In Touch',
      preview: 'Available for opportunities',
      date: 'Let\'s Connect',
      content: [
        "I'm open to internships, collaborations, or just talking about design and development stuff.",
        "If you have a project in mind or want to work together on something, feel free to reach out. Always down to chat about design or help out with interesting projects."
      ],
      contact: [
        'Available for internships and freelance work',
        'Based in the Netherlands',
        'Open to remote opportunities',
        'Down to collaborate on cool projects'
      ]
    }
  ];

  return (
    <div className="about-me-view">
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
        className="about-me-dotgrid"
      />

      <button className="back-button" onClick={handleBackToMenu}>
        ← Back to Menu
      </button>

      <div className="about-me-container">
        <div className="about-me-header">
          <div className="intro-bubble">
            <h1 className="intro-title">
              <Typewriter text="About Me" speed={80} delay={200} />
            </h1>
            <p className="intro-subtitle">
              <Typewriter
                text="Get to know me through these interactive message cards. Click any card to explore my journey, skills, and projects."
                speed={30}
                delay={1500}
              />
            </p>
          </div>
        </div>

        <div className="message-board">
          {notes.map((note) => (
            <div
              key={note.id}
              className="message-note"
              onClick={() => handleNoteClick(note)}
            >
              <div className="note-header">
                <span className="note-title">{note.title}</span>
                <span className="note-date">{note.date}</span>
              </div>
              <p className="note-preview">{note.preview}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Note Modal */}
      {selectedNote && (
        <div className="note-modal-overlay" onClick={handleCloseNote}>
          <div className="note-modal" onClick={(e) => e.stopPropagation()}>
            <button className="note-close" onClick={handleCloseNote}>×</button>
            <h2 className="note-modal-title">{selectedNote.title}</h2>
            <p className="note-modal-date">{selectedNote.date}</p>

            <div className="note-modal-content">
              {selectedNote.content.map((paragraph, index) => (
                <p key={index} className="note-paragraph">{paragraph}</p>
              ))}

              {selectedNote.stats && (
                <div className="note-stats">
                  {selectedNote.stats.map((stat, index) => (
                    <div key={index} className="note-stat">
                      <span className="stat-label">{stat.label}:</span>
                      <span className="stat-value">{stat.value}</span>
                    </div>
                  ))}
                </div>
              )}

              {selectedNote.skills && (
                <div className="note-skills">
                  {selectedNote.skills.map((skill, index) => (
                    <span key={index} className="skill-tag">{skill}</span>
                  ))}
                </div>
              )}

              {selectedNote.projects && (
                <div className="note-projects">
                  {selectedNote.projects.map((project, index) => (
                    <p key={index} className="project-item">• {project}</p>
                  ))}
                </div>
              )}

              {selectedNote.contact && (
                <div className="note-contact">
                  {selectedNote.contact.map((item, index) => (
                    <p key={index} className="contact-item">• {item}</p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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

export default AboutMe;
