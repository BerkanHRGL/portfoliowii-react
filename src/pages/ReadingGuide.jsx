import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ReadingGuide.css';

const ReadingGuide = ({ setIsTransitioning, setClickPosition }) => {
  const navigate = useNavigate();
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  const handleBackToMenu = (event) => {
    setClickPosition({ x: event.clientX, y: event.clientY });
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/menu');
    }, 400);
  };

  const handleEvidenceClick = (e, sectionId) => {
    e.preventDefault();
    window.open(`/projects-apple#${sectionId}`, '_blank');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate="true"]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  // Detect when back button is over dark sections
  useEffect(() => {
    const checkDarkSection = () => {
      const backButton = document.querySelector('.back-button');

      if (!backButton) return;

      const backButtonRect = backButton.getBoundingClientRect();

      // Check all dark sections
      const darkSections = document.querySelectorAll('.apple-section.apple-dark');
      let isOverDark = false;

      darkSections.forEach((section) => {
        const sectionRect = section.getBoundingClientRect();

        // Check if button overlaps with dark section
        const backButtonOverlaps =
          backButtonRect.top < sectionRect.bottom &&
          backButtonRect.bottom > sectionRect.top;

        if (backButtonOverlaps) {
          isOverDark = true;
        }
      });

      setIsOverDarkSection(isOverDark);
    };

    // Check on scroll
    window.addEventListener('scroll', checkDarkSection);
    // Check initially
    checkDarkSection();

    return () => {
      window.removeEventListener('scroll', checkDarkSection);
    };
  }, []);

  return (
    <div className="reading-guide-view">
      <button
        className={`back-button ${isOverDarkSection ? 'over-dark' : ''}`}
        onClick={handleBackToMenu}
      >
        ← Back to Menu
      </button>

      <div className="apple-content">
        {/* Hero Section */}
        <section className="apple-hero">
          <h1 className="apple-hero-title">READING GUIDE</h1>
          <p className="apple-hero-description">
            Semester 3 Portfolio - ICT Media Design
          </p>
        </section>

        {/* About Me */}
        <section className="apple-section">
          <div className="apple-container">
            <h2 className="apple-section-title">About Me</h2>
            <p className="apple-section-text">
              Hi! I'm Berkan, an ICT Media Design student at Fontys. I chose to create an external website as my portfolio because I wanted to show my coding skills and create something unique that represents my personality and work style.
            </p>
            <p className="apple-section-text">
              My passion lies in UX/UI design, front-end development, and mobile app development. Through this semester, I've been actively exploring these areas to understand where my future career trajectory is heading. I want to become a designer-developer who can create beautiful, intuitive interfaces that people actually enjoy using.
            </p>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Discovering My Professional Identity</h3>
            <p className="apple-section-text">
              The reason I'm drawn to UX/UI design is because I like creating designs, but also designs that have meaning. I realized through my projects that I enjoy nitpicking on things, finding those small details that make a difference in user experience. That's what UX/UI design is really about: finding those small things that matter.
            </p>
            <p className="apple-section-text">
              What really excites me about UX is understanding how other users function and do work. I find data interesting, looking at how people interact with interfaces, what they struggle with, what flows naturally for them. This curiosity about user behavior is what drives my interest in UX research and makes me want to create solutions that actually fit how people think and work.
            </p>
            <p className="apple-section-text">
              I also discovered that I love development because it lets me put those designs to real work. There's something satisfying about taking a design I've created and actually building it, making it functional and interactive. Working on both the Ducks on Fire website and my portfolio helped me realize that I don't want to just design or just develop, I like to do both. This realization shaped my decision to focus on UX/UI design and front-end development/mobile-app development as my career path.
            </p>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Portfolio Format</h3>
            <div className="apple-grid-2" data-animate="true">
              <div className="apple-card">
                <h3 className="apple-card-title">External Website</h3>
                <p className="apple-card-text">Custom built portfolio to showcase coding skills.</p>
              </div>
              <div className="apple-card">
                <h3 className="apple-card-title">Wii-Style Interface</h3>
                <p className="apple-card-text">Unique interactive design inspired by Nintendo Wii menu system.</p>
              </div>
              <div className="apple-card">
                <h3 className="apple-card-title">React Application</h3>
                <p className="apple-card-text">Built with modern web technologies.</p>
              </div>
              <div className="apple-card">
                <h3 className="apple-card-title">Version Control</h3>
                <p className="apple-card-text">Complete development history tracked through GitHub.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Outcome 1 */}
        <section className="apple-section apple-dark">
          <div className="apple-container">
            <h2 className="apple-section-title">Learning Outcome 1</h2>
            <h3 className="apple-subsection-title">Conceptualize, Design, and Develop Interactive Media Products</h3>
            <p className="apple-section-text">
              You create engaging concepts and translate them into professional validated media products by applying user-centered design principles, visual design techniques and by exploring emerging trends and developments in media, design and technologies.
            </p>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>What This Means</h3>
            <p className="apple-section-text">
              <strong>Engaging & validated media products:</strong> I test my work to see if the target audience is attracted and satisfied with the concept or product.
            </p>
            <p className="apple-section-text">
              <strong>User-centered design principles:</strong> I design digital products following guidelines from the media field, like usability rules and UI patterns, using professional tools.
            </p>
            <p className="apple-section-text">
              <strong>Emerging technologies:</strong> I explore technologies relevant for today's ICT, like AI tools, modern web technologies, and interactive design systems.
            </p>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Progress</h3>
            <div className="apple-split" data-animate="true">
              <div className="apple-split-content">
                <h3 className="apple-subsection-title" style={{ marginTop: '0' }}>What's Going Well</h3>
                <p className="apple-section-text">Completed multiple projects with full design process from research to final implementation</p>
                <p className="apple-section-text">Using professional tools effectively (Figma for design, VS Code for development, GitHub for version control)</p>
                <p className="apple-section-text">Exploring emerging technologies like React, GSAP, photogrammetry, and AI tools</p>
                <p className="apple-section-text">Creating engaging visual communication through posters and storyboards</p>
                <p className="apple-section-text">Building responsive, interactive web experiences with modern frameworks</p>
              </div>
              <div className="apple-split-content">
                <h3 className="apple-subsection-title" style={{ marginTop: '0' }}>What I Need to Work On</h3>
                <p className="apple-section-text">Conduct formal user testing with target audience, not just classmates and friends</p>
                <p className="apple-section-text">Apply structured UX research methods like personas, user journeys, and usability testing</p>
                <p className="apple-section-text">Measure design effectiveness with quantitative data and analytics</p>
                <p className="apple-section-text">Document design decisions more thoroughly for stakeholder communication</p>
              </div>
            </div>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Evidence</h3>
            <div className="apple-evidence-list">
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#research" onClick={(e) => handleEvidenceClick(e, 'research')}>Agency Research Process</a></h4>
                <p className="apple-evidence-text">Researched creative digital agencies to understand what makes effective agency websites and how to position Ducks on Fire in the market.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#user-testing" onClick={(e) => handleEvidenceClick(e, 'user-testing')}>User Testing Sessions</a></h4>
                <p className="apple-evidence-text">Showed design iterations to teammates, classmates, and friends to get feedback on visual appeal, clarity, and user experience.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#design-iterations" onClick={(e) => handleEvidenceClick(e, 'design-iterations')}>Design Development in Figma</a></h4>
                <p className="apple-evidence-text">Created multiple design concepts in Figma, trying different approaches to present the agency's services before choosing the final direction.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#development" onClick={(e) => handleEvidenceClick(e, 'development')}>Website Implementation</a></h4>
                <p className="apple-evidence-text">Coded the final website using HTML, CSS, and JavaScript, turning the visual designs into a working, responsive website.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#poster" onClick={(e) => handleEvidenceClick(e, 'poster')}>Infographic Poster Design</a></h4>
                <p className="apple-evidence-text">Created an infographic poster to visually communicate the agency's information, applying visual design techniques and brand guidelines.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#3d-modeling" onClick={(e) => handleEvidenceClick(e, '3d-modeling')}>3D Modeling with Photogrammetry</a></h4>
                <p className="apple-evidence-text">Explored emerging technology by experimenting with PhotoModeler for photogrammetry to create 3D models from photographs.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#short-movie" onClick={(e) => handleEvidenceClick(e, 'short-movie')}>Short Movie Conceptualization</a></h4>
                <p className="apple-evidence-text">Developed an engaging concept for a short movie showcasing photogrammetry techniques. Created visual storyboards to translate the concept into a professional media product, demonstrating emerging technology in a creative narrative format.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-research" onClick={(e) => handleEvidenceClick(e, 'portfolio-research')}>Portfolio Research & Inspiration</a></h4>
                <p className="apple-evidence-text">Researched other portfolios and analyzed the Wii menu system to create a unique, themed portfolio that stands out while maintaining professionalism.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-design" onClick={(e) => handleEvidenceClick(e, 'portfolio-design')}>Portfolio Design Process</a></h4>
                <p className="apple-evidence-text">Created multiple design iterations in Figma, balancing playful Wii aesthetics with professional presentation through user-centered design principles.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-development" onClick={(e) => handleEvidenceClick(e, 'portfolio-development')}>Interactive Features Development</a></h4>
                <p className="apple-evidence-text">Developed interactive elements like the dot grid physics system, expandable cards, and smooth page transitions using modern web technologies (React, GSAP).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Outcome 2 */}
        <section className="apple-section">
          <div className="apple-container">
            <h2 className="apple-section-title">Learning Outcome 2</h2>
            <h3 className="apple-subsection-title">Transferable Production</h3>
            <p className="apple-section-text">
              You create professional documentation and use version control for your products in a personal and team context. You communicate design decisions and recommendations to relevant stakeholders.
            </p>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>What This Means</h3>
            <p className="apple-section-text">
              <strong>Version control in personal and team context:</strong> I use fitting version control systems like Git to manage and track different versions of products, both in individual and group projects.
            </p>
            <p className="apple-section-text">
              <strong>Design decisions and recommendations:</strong> I communicate with team members using methods like documentation and guides to help with production and clearly express suggestions for improvements and new features.
            </p>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Progress</h3>
            <div className="apple-split" data-animate="true">
              <div className="apple-split-content">
                <h3 className="apple-subsection-title" style={{ marginTop: '0' }}>What's Going Well</h3>
                <p className="apple-section-text">Using GitHub effectively with clear commit messages to track development progress</p>
                <p className="apple-section-text">Collaborating in Figma with teammates using real-time version control</p>
                <p className="apple-section-text">Following and implementing brand guidelines consistently across projects</p>
                <p className="apple-section-text">Creating professional project documentation like briefs and storyboards</p>
                <p className="apple-section-text">Documenting design process from research to final implementation</p>
              </div>
              <div className="apple-split-content">
                <h3 className="apple-subsection-title" style={{ marginTop: '0' }}>What I Need to Work On</h3>
                <p className="apple-section-text">Write better code comments explaining complex logic and decision-making</p>
                <p className="apple-section-text">Develop documentation that's accessible and useful for other developers</p>
              </div>
            </div>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Evidence</h3>
            <div className="apple-evidence-list">
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#development" onClick={(e) => handleEvidenceClick(e, 'development')}>GitHub Version Control</a></h4>
                <p className="apple-evidence-text">Used GitHub for the Ducks on Fire project with commit messages to track development progress and changes.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#development" onClick={(e) => handleEvidenceClick(e, 'development')}>Figma Collaboration for Brand Guide</a></h4>
                <p className="apple-evidence-text">Worked collaboratively in Figma on the brand guide with teammates. Figma's version control enabled real-time collaboration and maintained a complete project history, allowing me to reference exact design values when building the website.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#user-testing" onClick={(e) => handleEvidenceClick(e, 'user-testing')}>Brand Guide Implementation</a></h4>
                <p className="apple-evidence-text">Worked with the brand guide created by teammates to keep visual consistency in colors, fonts, and visual elements throughout the website design.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#team-collaboration" onClick={(e) => handleEvidenceClick(e, 'team-collaboration')}>Team Communication</a></h4>
                <p className="apple-evidence-text">Used WhatsApp for daily team communication and Flowspace for task management and sharing project information.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#overview" onClick={(e) => handleEvidenceClick(e, 'overview')}>Design Documentation</a></h4>
                <p className="apple-evidence-text">Created clear documentation of the design process from research to final implementation.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-development" onClick={(e) => handleEvidenceClick(e, 'portfolio-development')}>Portfolio GitHub Version Control</a></h4>
                <p className="apple-evidence-text">Used GitHub for both the original and React versions of the portfolio, maintaining clear commit history and documentation of technical decisions.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-design" onClick={(e) => handleEvidenceClick(e, 'portfolio-design')}>Portfolio Design Documentation</a></h4>
                <p className="apple-evidence-text">Documented the complete design journey from research and inspiration to final implementation, showing clear reasoning for design choices.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Outcome 3 */}
        <section className="apple-section apple-dark">
          <div className="apple-container">
            <h2 className="apple-section-title">Learning Outcome 3</h2>
            <h3 className="apple-subsection-title">Creative Iterations</h3>
            <p className="apple-section-text">
              You present the successive iterations of your creative process, and the connections between them, of your methodically substantiated, iterative design and development process.
            </p>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>What This Means</h3>
            <p className="apple-section-text">
              <strong>Successive iterations:</strong> I create validated and explained improvements done on a previous version based on feedback, new insights, or user tests.
            </p>
            <p className="apple-section-text">
              <strong>Creative process:</strong> Every step I take for creating products is guided by design models like Design Thinking and user-centered design methods.
            </p>
            <p className="apple-section-text">
              <strong>Connections:</strong> I show the logical relationships between successive iterations and explain why each change was made.
            </p>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Progress</h3>
            <div className="apple-split" data-animate="true">
              <div className="apple-split-content">
                <h3 className="apple-subsection-title" style={{ marginTop: '0' }}>What's Going Well</h3>
                <p className="apple-section-text">Creating multiple design iterations and documenting the progression clearly</p>
                <p className="apple-section-text">Actively seeking and incorporating feedback from teammates, teachers, and classmates</p>
                <p className="apple-section-text">Explaining connections between iterations with clear reasoning for changes</p>
                <p className="apple-section-text">Using iterative processes across different deliverables (website, poster, storyboards, portfolio)</p>
                <p className="apple-section-text">Learning from unsuccessful attempts and comparing different approaches</p>
              </div>
              <div className="apple-split-content">
                <h3 className="apple-subsection-title" style={{ marginTop: '0' }}>What I Need to Work On</h3>
                <p className="apple-section-text">Conduct formal user testing with actual target audience beyond classmates and friends</p>
                <p className="apple-section-text">Define clear success criteria before starting each iteration cycle</p>
              </div>
            </div>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Evidence</h3>
            <div className="apple-evidence-list">
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#design-iterations" onClick={(e) => handleEvidenceClick(e, 'design-iterations')}>Multiple Design Iterations</a></h4>
                <p className="apple-evidence-text">Created several different design concepts in Figma for the Ducks on Fire website, each trying different approaches to show the agency's services.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#user-testing" onClick={(e) => handleEvidenceClick(e, 'user-testing')}>Feedback Integration</a></h4>
                <p className="apple-evidence-text">Collected feedback from teammates and classmates on design iterations and used this to make improvements in the next version.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#research" onClick={(e) => handleEvidenceClick(e, 'research')}>Research to Final Design Process</a></h4>
                <p className="apple-evidence-text">Documented the complete process from initial agency research, through inspiration gathering, to multiple design iterations, to the final design.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#design-iterations" onClick={(e) => handleEvidenceClick(e, 'design-iterations')}>Iterative Improvement</a></h4>
                <p className="apple-evidence-text">Each design version built on insights from the previous one, showing clear connections between iterations and reasons for changes.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#poster" onClick={(e) => handleEvidenceClick(e, 'poster')}>Poster Design Iterations</a></h4>
                <p className="apple-evidence-text">Created an initial poster design, gathered feedback from team and teachers, and refined it into a final version with improved visual hierarchy and brand consistency.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#short-movie" onClick={(e) => handleEvidenceClick(e, 'short-movie')}>Short Movie Storyboarding Process</a></h4>
                <p className="apple-evidence-text">Developed the short movie through iterative stages: whiteboard sketches, refined comic-style storyboard using Nano Banana Pro, showing clear progression and connections between each iteration of the creative process.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#3d-modeling" onClick={(e) => handleEvidenceClick(e, '3d-modeling')}>Testing Different Solutions</a></h4>
                <p className="apple-evidence-text">Experimented with PhotoModeler for 3D modeling, evaluated the disappointing results, and learned from the team's comparison with other software like RealityScan to understand which tools work better for photogrammetry.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-design" onClick={(e) => handleEvidenceClick(e, 'portfolio-design')}>Portfolio Design Iterations</a></h4>
                <p className="apple-evidence-text">Created multiple Figma iterations for the portfolio, balancing playful and professional elements, with each version building on feedback about being too game-like or too formal.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-feedback" onClick={(e) => handleEvidenceClick(e, 'portfolio-feedback')}>Portfolio Feedback & Refinement</a></h4>
                <p className="apple-evidence-text">Showed early versions to friends and classmates, received feedback about professionalism balance, and adjusted the design to find the right sweet spot.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Outcome 4 */}
        <section className="apple-section">
          <div className="apple-container">
            <h2 className="apple-section-title">Learning Outcome 4</h2>
            <h3 className="apple-subsection-title">Professional Standards</h3>
            <p className="apple-section-text">
              Both individually and in teams, you apply a relevant methodological approach used in the professional field to formulate project goals, involve stakeholders, conduct applied research, provide advice, make decisions, and deliver reports. In doing so, you keep in view the relevant ethical, intercultural, and sustainable aspects.
            </p>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>What This Means</h3>
            <p className="apple-section-text">
              Both individually and in teams, I use professional methods to structure projects, involve the right people, do research, give advice, make decisions, and create reports while considering ethical and sustainable aspects.
            </p>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Progress</h3>
            <div className="apple-split" data-animate="true">
              <div className="apple-split-content">
                <h3 className="apple-subsection-title" style={{ marginTop: '0' }}>What's Going Well</h3>
                <p className="apple-section-text">Following structured methodologies for projects (research → design → testing → implementation)</p>
                <p className="apple-section-text">Creating professional project documentation including team charters, project briefs, and storyboards</p>
                <p className="apple-section-text">Conducting applied research to inform design decisions based on industry standards</p>
                <p className="apple-section-text">Collaborating effectively in team context using task management tools (Flowspace) and communication platforms</p>
                <p className="apple-section-text">Considering responsive design for different devices and platforms</p>
              </div>
              <div className="apple-split-content">
                <h3 className="apple-subsection-title" style={{ marginTop: '0' }}>What I Need to Work On</h3>
                <p className="apple-section-text">Communication with the team and better time management</p>
              </div>
            </div>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Evidence</h3>
            <div className="apple-evidence-list">
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#overview" onClick={(e) => handleEvidenceClick(e, 'overview')}>Structured Project Approach</a></h4>
                <p className="apple-evidence-text">Followed a clear process for the Ducks on Fire project: research → inspiration gathering → design iterations → user testing → final implementation.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#team-collaboration" onClick={(e) => handleEvidenceClick(e, 'team-collaboration')}>Team Charter Creation</a></h4>
                <p className="apple-evidence-text">Created a team charter at the start of the project that set clear rules and expectations for how the team would work together.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#short-movie" onClick={(e) => handleEvidenceClick(e, 'short-movie')}>Short Movie Project Brief</a></h4>
                <p className="apple-evidence-text">Created a comprehensive project brief with Lars for the short movie that laid out our vision, concept, inspirations, and planned approach. This professional documentation helped us stay focused and aligned throughout production.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#research" onClick={(e) => handleEvidenceClick(e, 'research')}>Applied Research</a></h4>
                <p className="apple-evidence-text">Conducted research into creative agencies to understand industry standards and inform design decisions.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#team-collaboration" onClick={(e) => handleEvidenceClick(e, 'team-collaboration')}>Team Collaboration</a></h4>
                <p className="apple-evidence-text">Worked with teammates who created the brand guide and incorporated their work into the website design.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-overview" onClick={(e) => handleEvidenceClick(e, 'portfolio-overview')}>Portfolio Project Methodology</a></h4>
                <p className="apple-evidence-text">Followed a structured approach for the portfolio project: research other portfolios → identify unique angle → design iterations → development → optimization for different devices.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-feedback" onClick={(e) => handleEvidenceClick(e, 'portfolio-feedback')}>Responsive Design Considerations</a></h4>
                <p className="apple-evidence-text">Ensured the portfolio works on different devices by simplifying animations for mobile and creating responsive layouts, considering accessibility and user experience across platforms.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Outcome 5 */}
        <section className="apple-section apple-dark">
          <div className="apple-container">
            <h2 className="apple-section-title">Learning Outcome 5</h2>
            <h3 className="apple-subsection-title">Personal Leadership</h3>
            <p className="apple-section-text">
              You are aware of your own strengths and weaknesses, both in the field of ICT and in your personal development. You choose actions in line with your core values to promote your personal growth and develop your learning attitude.
            </p>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>What This Means</h3>
            <p className="apple-section-text">
              I create my own personal portfolio to prove this and all the other learning outcomes. The form and technical system of my portfolio is my choice, but it should reflect my core values and authentic self.
            </p>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Progress</h3>
            <div className="apple-split" data-animate="true">
              <div className="apple-split-content">
                <h3 className="apple-subsection-title" style={{ marginTop: '0' }}>What's Going Well</h3>
                <p className="apple-section-text">Created a unique portfolio that authentically reflects my personality and interests</p>
                <p className="apple-section-text">Learning from failures and comparing different approaches (PhotoModeler vs RealityScan)</p>
                <p className="apple-section-text">Proactively teaching myself emerging technologies (React, GSAP)</p>
                <p className="apple-section-text">Taking ownership of specific project components (website design and development)</p>
                <p className="apple-section-text">Clearly identified career trajectory: UX/UI design, front-end development, and mobile app development</p>
                <p className="apple-section-text">Actively exploring technologies aligned with professional goals</p>
                <p className="apple-section-text">Being critical of my own work and cutting features that don't serve the end goal</p>
              </div>
              <div className="apple-split-content">
                <h3 className="apple-subsection-title" style={{ marginTop: '0' }}>What I Need to Work On</h3>
                <p className="apple-section-text">Gain hands-on experience in mobile app development before specialization</p>
                <p className="apple-section-text">Expand portfolio to showcase more UX/UI focused case studies with user research</p>
                <p className="apple-section-text">Share knowledge by mentoring other students in areas where I'm strong</p>
                <p className="apple-section-text">Take on leadership roles in team projects, not just execute assigned tasks</p>
                <p className="apple-section-text">Improve time management to avoid over-perfecting small details</p>
              </div>
            </div>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Evidence</h3>
            <div className="apple-evidence-list">
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#overview" onClick={(e) => handleEvidenceClick(e, 'overview')}>Taking Initiative</a></h4>
                <p className="apple-evidence-text">Took responsibility for the website research, design, and development part of the Ducks on Fire project while teammates focused on branding.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#development" onClick={(e) => handleEvidenceClick(e, 'development')}>Self-Directed Learning</a></h4>
                <p className="apple-evidence-text">Learned new techniques and approaches for web development and design implementation during the project.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#user-testing" onClick={(e) => handleEvidenceClick(e, 'user-testing')}>Seeking Feedback</a></h4>
                <p className="apple-evidence-text">Asked teammates, classmates, and friends for feedback on design iterations and used their input to improve the work.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#development" onClick={(e) => handleEvidenceClick(e, 'development')}>Problem Solving</a></h4>
                <p className="apple-evidence-text">Worked through technical challenges during development and found solutions independently.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#3d-modeling" onClick={(e) => handleEvidenceClick(e, '3d-modeling')}>Learning from Failures</a></h4>
                <p className="apple-evidence-text">Experimented with PhotoModeler for 3D modeling, recognized when the results were disappointing, and learned from comparing it with teammates' more successful approaches using different software.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-overview" onClick={(e) => handleEvidenceClick(e, 'portfolio-overview')}>Portfolio as Personal Expression</a></h4>
                <p className="apple-evidence-text">Created a unique Wii-themed portfolio that reflects my personality and interests, choosing an external website format to showcase both design and technical skills.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-feedback" onClick={(e) => handleEvidenceClick(e, 'portfolio-feedback')}>Critical Self-Reflection</a></h4>
                <p className="apple-evidence-text">Learned to balance creativity with usability, being critical of my own work and cutting features that didn't serve the end goal even after spending hours on them.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-development" onClick={(e) => handleEvidenceClick(e, 'portfolio-development')}>Technical Problem Solving</a></h4>
                <p className="apple-evidence-text">Worked through complex challenges like page transitions, dot grid physics, and performance optimization, finding solutions through trial and error and learning new technologies (React, GSAP).</p>
              </div>
            </div>
          </div>
        </section>

        {/* Reflection */}
        <section className="apple-section">
          <div className="apple-container">
            <h2 className="apple-section-title">Reflection</h2>
            <p className="apple-section-text">
              Looking at my progress this semester, I'm happy with how I've been able to combine my interest in design with technical development skills. Working on the Ducks on Fire project has taught me a lot about the full process from research to final product.
            </p>
            <p className="apple-section-text">
              What went well was my ability to stay organized and break down big tasks into smaller, manageable pieces. I also got better at asking for feedback and actually using it to improve my work.
            </p>
            <p className="apple-section-text">
              What could be better is my time management, sometimes I spend too much time perfecting small details instead of focusing on the bigger picture first. I also want to get better at explaining my design decisions to others.
            </p>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Next Steps</h3>
            <div className="apple-split" data-animate="true">
              <div className="apple-split-content">
                <h3 className="apple-subsection-title" style={{ marginTop: '0' }}>Short-term (This Semester)</h3>
                <p className="apple-section-text">Improving my project planning and time management skills</p>
                <p className="apple-section-text">Getting better at presenting and explaining my work to others</p>
                <p className="apple-section-text">Expanding my knowledge of professional tools like Photoshop, Illustrator and Unreal Engine</p>
              </div>
              <div className="apple-split-content">
                <h3 className="apple-subsection-title" style={{ marginTop: '0' }}>Long-term (Future Career)</h3>
                <p className="apple-section-text">
                  I've identified my learning trajectory and professional direction: <strong>UX/UI design, front-end development, and mobile app development</strong>.
                </p>
                <p className="apple-section-text">Choosing the mobile app development specialization next semester</p>
                <p className="apple-section-text">Building more UX/UI focused projects for my portfolio</p>
                <p className="apple-section-text">Learning React Native or Flutter for mobile development</p>
                <p className="apple-section-text">Deepening knowledge of design systems and accessibility</p>
                <p className="apple-section-text">Seeking internships in UX/UI and front-end development</p>
              </div>
            </div>

            <p className="apple-section-text" style={{ marginTop: '80px' }}>
              I want to continue being curious and trying new approaches in these areas, but also become more efficient in my workflow. My goal is to become a designer-developer who can handle complex projects independently while also being a valuable team member - someone who bridges the gap between design and development.
            </p>
          </div>
        </section>
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

export default ReadingGuide;
