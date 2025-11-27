import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ExpandableBento from '../components/ExpandableBento/ExpandableBento';
import './AboutMe.css';

const AboutMe = ({ setIsTransitioning, setClickPosition }) => {
  const navigate = useNavigate();

  const handleBackToMenu = (event) => {
    setClickPosition({ x: event.clientX, y: event.clientY });
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/');
    }, 400);
  };

  const aboutMeCards = [
    {
      color: '#060010',
      title: 'Berkan Hergul',
      description: 'Media Design Student',
      label: 'About Me',
      detailedContent: {
        subtitle: '21 • Netherlands • Fontys University',
        paragraphs: [
          "Hey, I'm Berkan! I'm a Media Design student from the Netherlands and I love making things that not only look good, but actually work well for people too.",
          "At Fontys I'm learning everything about UX/UI design, front-end development and visual design. What I enjoy most is combining my creativity with technical skills to create projects that actually help people.",
          "Through my projects I've learned that good design starts with good research. I like talking to real users to understand what they need, and use those insights to make better designs.",
          "For my future, I want to focus on UX/UI design, front-end development, and mobile app development. That's where I see myself growing as a professional - creating beautiful, intuitive interfaces that people actually enjoy using."
        ],
        stats: [
          { label: 'Age', value: '21' },
          { label: 'Location', value: 'Netherlands' },
          { label: 'Education', value: 'Fontys' }
        ]
      }
    },
    {
      color: '#060010',
      title: 'Design Skills',
      description: 'UI/UX Design, Prototyping & Visual Design',
      label: 'Design',
      detailedContent: {
        subtitle: 'Design Tools & Skills',
        paragraphs: [
          "I use industry-standard design tools to create beautiful, user-centered interfaces that solve real problems."
        ],
        strengths: [
          'Figma',
          'Photoshop',
          'Illustrator',
          'UI/UX Design',
          'Prototyping'
        ]
      }
    },
    {
      color: '#060010',
      title: 'Development',
      description: 'Front-end development with modern web technologies',
      label: 'Development',
      detailedContent: {
        subtitle: 'Technical Skills',
        paragraphs: [
          "I bring designs to life with clean, modern code. I love working with the latest web technologies to create interactive experiences."
        ],
        strengths: [
          'HTML',
          'CSS',
          'JavaScript',
          'React',
          'VS Code',
          'Git'
        ]
      }
    },
    {
      color: '#060010',
      title: 'Research',
      description: 'User research, testing & accessibility',
      label: 'Research',
      detailedContent: {
        subtitle: 'Research Methods',
        paragraphs: [
          "Good design starts with good research. I use various research methods to understand user needs and validate design decisions."
        ],
        strengths: [
          'User Research',
          'A/B Testing',
          'User Interviews',
          'Accessibility',
          'Usability Testing',
          'Data Analysis'
        ]
      }
    },
    {
      color: '#060010',
      title: 'Currently Working On',
      description: 'Active projects and learning',
      label: 'Projects',
      detailedContent: {
        subtitle: 'What I\'m Building',
        paragraphs: [
          "I'm always working on exciting projects that challenge me and help me grow as a designer and developer."
        ],
        highlights: [
          'Ducks on Fire - Creative digital agency website and photogrammetry project with Iron Hearts using Unreal Engine',
          'Wii-Inspired Portfolio - Interactive portfolio with smooth animations and playful Wii menu design'
        ]
      }
    },
    {
      color: '#060010',
      title: 'Get In Touch',
      description: 'Available for opportunities',
      label: 'Contact',
      detailedContent: {
        subtitle: 'Let\'s Connect',
        paragraphs: [
          "I'm always open to new opportunities, collaborations, and interesting conversations about design and development.",
          "Whether you have a project in mind, want to collaborate, or just want to chat about design, feel free to reach out!"
        ],
        highlights: [
          'Available for internships and freelance work',
          'Based in the Netherlands',
          'Open to remote opportunities',
          'Always happy to collaborate on interesting projects'
        ]
      }
    }
  ];

  return (
    <div className="about-me-view">
      <div className="project-navbar">
        <button className="back-button" onClick={handleBackToMenu}>
          ← Back to Menu
        </button>
      </div>

      <div className="about-me-container">
        <div className="about-me-header">
          <h1>ABOUT ME</h1>
          <p className="about-me-intro">
            Click on any card to learn more about me!
          </p>
        </div>

        <ExpandableBento cardData={aboutMeCards} />
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
