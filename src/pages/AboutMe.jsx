import { useNavigate } from 'react-router-dom';
import MagicBento from '../components/MagicBento/MagicBento';
import './AboutMe.css';

const AboutMe = () => {
  const navigate = useNavigate();

  const aboutMeCards = [
    {
      color: '#060010',
      title: 'Creative Developer',
      description: 'ICT Media Design student passionate about web development and interactive experiences',
      label: 'About Me'
    },
    {
      color: '#060010',
      title: 'Web Design',
      description: 'Skilled in Figma, Adobe Illustrator, and creating user-centered designs',
      label: 'Design'
    },
    {
      color: '#060010',
      title: 'Full Stack',
      description: 'Experienced with HTML, CSS, JavaScript, React, and modern web technologies',
      label: 'Development'
    },
    {
      color: '#060010',
      title: 'Ducks on Fire',
      description: 'Lead web designer & developer for creative digital agency project',
      label: 'Projects'
    },
    {
      color: '#060010',
      title: 'Team Player',
      description: 'Strong collaboration skills with experience in agile workflows and GitHub',
      label: 'Teamwork'
    },
    {
      color: '#060010',
      title: 'Always Learning',
      description: 'Constantly exploring new technologies, design trends, and creative solutions',
      label: 'Growth'
    }
  ];

  return (
    <div className="about-me-view">
      <div className="project-navbar">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Menu
        </button>
      </div>

      <div className="about-me-container">
        <div className="about-me-header">
          <h1>ABOUT ME</h1>
          <p className="about-me-intro">
            Hi! I'm Berkan, an ICT Media Design student at Fontys with a passion for creating beautiful, interactive web experiences.
          </p>
        </div>

        <MagicBento
          cardData={aboutMeCards}
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
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

export default AboutMe;
