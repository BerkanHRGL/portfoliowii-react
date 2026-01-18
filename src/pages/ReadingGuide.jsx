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
                <p className="apple-section-text">Apply structured UX research methods like personas, user journeys, and usability testing</p>
                <p className="apple-section-text">Document design decisions more thoroughly for stakeholder communication</p>
              </div>
            </div>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Evidence</h3>
            <div className="apple-evidence-list">
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#research" onClick={(e) => handleEvidenceClick(e, 'research')}>Agency Research & Best Practice Analysis</a></h4>
                <p className="apple-evidence-text">I researched creative digital agencies using Library Research and compared about 6 different agency websites to figure out what works and what doesn't. This helped me understand what makes a good agency website before I started designing.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#design-iterations" onClick={(e) => handleEvidenceClick(e, 'design-iterations')}>Iterative Design with Peer Review</a></h4>
                <p className="apple-evidence-text">I created multiple design versions in Figma and got feedback from my team and teacher on each one. You can see how I shifted from a modern look to a more vintage aesthetic based on the feedback, which ended up matching the brand guide we created together.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#user-testing" onClick={(e) => handleEvidenceClick(e, 'user-testing')}>User Testing & Feedback Integration</a></h4>
                <p className="apple-evidence-text">I tested my designs with teammates, classmates, and friends throughout the process. I documented what they said and what I changed based on their feedback, which helped me improve the designs with actual user input.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#short-movie" onClick={(e) => handleEvidenceClick(e, 'short-movie')}>Virtual Production Short Film Concept</a></h4>
                <p className="apple-evidence-text">I came up with a concept for a short film about how we get too focused on recording moments instead of actually experiencing them. It let me test photogrammetry in a real production while also telling a meaningful story.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-3d-intro" onClick={(e) => handleEvidenceClick(e, 'portfolio-3d-intro')}>3D Interactive Portfolio Intro</a></h4>
                <p className="apple-evidence-text">I taught myself Three.js and React Three Fiber to build an interactive 3D living room as my portfolio intro. It was a challenge, but it gave my portfolio a unique first impression while showing I can learn new tech on my own.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-ab-testing" onClick={(e) => handleEvidenceClick(e, 'portfolio-ab-testing')}>A/B Testing & User Research</a></h4>
                <p className="apple-evidence-text">I created a survey with 12 questions and got 6 people to answer it to validate whether the 3D intro was actually a good idea. The data backed up my decision, which showed me the value of testing ideas with users instead of just guessing.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-development" onClick={(e) => handleEvidenceClick(e, 'portfolio-development')}>Interactive Web Development</a></h4>
                <p className="apple-evidence-text">I built some pretty complex interactive features using React and GSAP - like the dot grid that reacts to your mouse, cards that expand, smooth page transitions, and that circular wipe effect when you click.</p>
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
                <p className="apple-section-text">Develop documentation that's accessible and useful for other developers</p>
              </div>
            </div>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Evidence</h3>
            <div className="apple-evidence-list">
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#development" onClick={(e) => handleEvidenceClick(e, 'development')}>GitHub Version Control for Code</a></h4>
                <p className="apple-evidence-text">I used GitHub with clear commit messages for both the Ducks on Fire project and my portfolio. You can see the whole development history from when I started to the final optimized version, which keeps everything organized and traceable.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#development" onClick={(e) => handleEvidenceClick(e, 'development')}>Real-time Figma Collaboration</a></h4>
                <p className="apple-evidence-text">I worked with my team in Figma on the brand guide where we could see each other's cursors, leave comments, and watch changes happen in real time. Figma tracks everything like Git does for code, so we could try things out and go back to earlier versions if we needed to.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#team-collaboration" onClick={(e) => handleEvidenceClick(e, 'team-collaboration')}>Team Charter & Communication Systems</a></h4>
                <p className="apple-evidence-text">We created a team charter to set clear rules and expectations. We used Flowspace for managing tasks and WhatsApp for daily updates, which kept everything organized and made sure we were all on the same page.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#short-movie" onClick={(e) => handleEvidenceClick(e, 'short-movie')}>Short Movie Project Brief</a></h4>
                <p className="apple-evidence-text">Lars and I wrote up a full project brief documenting our vision, concept, and approach for the short film. It helped us communicate our ideas clearly and kept us aligned on what we were trying to make.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#3d-modeling" onClick={(e) => handleEvidenceClick(e, '3d-modeling')}>Photogrammetry Workflow Documentation</a></h4>
                <p className="apple-evidence-text">I created a complete workflow tutorial showing every step of the RealityScan to Unreal Engine process. The documentation makes it easy for anyone on the team to follow the same workflow and get the same results.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-3d-intro" onClick={(e) => handleEvidenceClick(e, 'portfolio-3d-intro')}>3D Model Optimization Documentation</a></h4>
                <p className="apple-evidence-text">I documented how I optimized the 3D model from 95MB down to 16.79MB using gltf-transform. I explained the technical decisions about compression and texture sizing, and the trade-offs between file size and visual quality.</p>
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
                <h4 className="apple-evidence-title"><a href="/projects-apple#design-iterations" onClick={(e) => handleEvidenceClick(e, 'design-iterations')}>Agency Website Design Iterations</a></h4>
                <p className="apple-evidence-text">I created multiple design versions in Figma, shifting from a modern look (Iteration 1) to a vintage aesthetic (Iterations 2-4) based on our team's brand guide. Each version responded to feedback with clear reasons for the changes - like matching the brand identity better, improving navigation, and balancing vintage style with modern usability.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#user-testing" onClick={(e) => handleEvidenceClick(e, 'user-testing')}>User Testing with Documented Changes</a></h4>
                <p className="apple-evidence-text">I tested my designs with teammates and classmates throughout the process. When someone said "I can't tell what this agency does," I added a clear hero section. I documented all the feedback and the changes I made, which helped me stay systematic about incorporating what people told me.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#3d-modeling" onClick={(e) => handleEvidenceClick(e, '3d-modeling')}>Video Tutorial Iterations</a></h4>
                <p className="apple-evidence-text">I made a first version of the workflow video in Premiere Pro, got feedback from my team about pacing and clarity, then made a second version with better annotations, smoother transitions, and actual video footage instead of just static images.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#short-movie" onClick={(e) => handleEvidenceClick(e, 'short-movie')}>Storyboard Iterations Based on Technical Constraints</a></h4>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#3d-modeling" onClick={(e) => handleEvidenceClick(e, '3d-modeling')}>Comparing Photogrammetry Solutions</a></h4>
                <p className="apple-evidence-text">I tried PhotoModeler and got disappointing results, so I compared it with my team's RealityScan approach. I documented the quality differences and what I learned from testing both solutions.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-3d-intro" onClick={(e) => handleEvidenceClick(e, 'portfolio-3d-intro')}>3D Model Optimization Iterations</a></h4>
                <p className="apple-evidence-text">I went through multiple optimization attempts: the original 95MB model caused lag, my first compression to 48.58MB broke the UV coordinates, and my final optimization to 16.79MB kept the quality intact. Each version fixed specific problems I found through testing.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-survey-results" onClick={(e) => handleEvidenceClick(e, 'portfolio-survey-results')}>Data-Driven Design Validation</a></h4>
                <p className="apple-evidence-text">I ran an A/B testing survey to see if the 3D intro was actually a good idea. I got feedback from 6 people, and everyone preferred the portfolio with the 3D intro, which validated my decision with actual user data instead of just my opinion.</p>
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
                <h4 className="apple-evidence-title"><a href="/projects-apple#research" onClick={(e) => handleEvidenceClick(e, 'research')}>Applied Research Methodology</a></h4>
                <p className="apple-evidence-text">I used the DOT framework to research agency websites - specifically Library Research and Best, Good & Bad Analysis. I looked at 6 different agency websites and categorized what worked, what was okay, and what didn't, which gave me solid evidence to base my design decisions on.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#team-collaboration" onClick={(e) => handleEvidenceClick(e, 'team-collaboration')}>Professional Team Setup</a></h4>
                <p className="apple-evidence-text">We created a team charter with clear roles and expectations. We used Flowspace for managing tasks and WhatsApp for daily communication, which kept us organized and made sure everyone stayed involved throughout the project.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#short-movie" onClick={(e) => handleEvidenceClick(e, 'short-movie')}>Comprehensive Project Brief</a></h4>
                <p className="apple-evidence-text">Lars and I created a detailed project brief documenting our vision, concept, research (like Apple Vision Pro ads and that Black Mirror episode), and technical approach. It helped us set clear goals and kept everyone on the same page throughout production.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#development" onClick={(e) => handleEvidenceClick(e, 'development')}>Collaborative Design with Version Control</a></h4>
                <p className="apple-evidence-text">I worked with my team in Figma on the brand guide where everything's tracked like Git does for code. We could experiment with designs, go back to previous versions if needed, and everyone had access to the complete project history.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-ab-testing" onClick={(e) => handleEvidenceClick(e, 'portfolio-ab-testing')}>Professional User Research Approach</a></h4>
                <p className="apple-evidence-text">I ran an A/B test with a structured survey (12 questions, 6 participants) to validate whether the 3D intro was worth keeping. I set clear research goals, gathered data, and used it to make an evidence-based decision instead of just going with my gut.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-3d-intro" onClick={(e) => handleEvidenceClick(e, 'portfolio-3d-intro')}>Cross-Browser Performance Testing</a></h4>
                <p className="apple-evidence-text">I found out the 3D intro performed differently across browsers - Chrome and Opera had more lag than Brave, Edge, and Safari. I dug into why this happened and learned about WebGL and how different browsers handle GPU resources.</p>
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
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-overview" onClick={(e) => handleEvidenceClick(e, 'portfolio-overview')}>Portfolio as Authentic Self-Expression</a></h4>
                <p className="apple-evidence-text">I created a Wii-themed portfolio that actually reflects my personality and what I care about. I went with an external website to show both my design and coding skills, because I believe portfolios should be memorable and fun while still being professional.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-3d-intro" onClick={(e) => handleEvidenceClick(e, 'portfolio-3d-intro')}>Proactive Self-Directed Learning</a></h4>
                <p className="apple-evidence-text">I taught myself Three.js and React Three Fiber from scratch to build the 3D intro. I had to figure out WebGL rendering, 3D scenes, camera controls, lighting, UV coordinates - all of it on my own, which pushed me way out of my comfort zone.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#3d-modeling" onClick={(e) => handleEvidenceClick(e, '3d-modeling')}>Learning from Failures</a></h4>
                <p className="apple-evidence-text">I tried PhotoModeler and it gave disappointing results. Instead of getting stuck, I compared it with what my team did with RealityScan and learned from why theirs worked better. It taught me that picking the wrong tool happens, but you can learn from it.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-3d-intro" onClick={(e) => handleEvidenceClick(e, 'portfolio-3d-intro')}>Persistent Technical Problem Solving</a></h4>
                <p className="apple-evidence-text">I went through multiple attempts to optimize the 3D model: 95MB caused lag, my first try at 48.58MB broke the UV coordinates, and my final version at 16.79MB finally kept the quality. I had to learn gltf-transform and debug a bunch of issues, but I stuck with it until it worked.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-ab-testing" onClick={(e) => handleEvidenceClick(e, 'portfolio-ab-testing')}>Validating Bold Choices with Research</a></h4>
                <p className="apple-evidence-text">I knew the 3D intro was a bold choice and might not work for everyone. Instead of just assuming it was good because I liked it, I ran an A/B test to validate it with actual data. It showed me that personal preferences need to be backed up with user research.</p>
              </div>
              <div className="apple-evidence-item">
                <h4 className="apple-evidence-title"><a href="/projects-apple#portfolio-feedback" onClick={(e) => handleEvidenceClick(e, 'portfolio-feedback')}>Critical Self-Reflection & Priority Management</a></h4>
                <p className="apple-evidence-text">I've learned to be critical of my own work and cut features that don't actually help, even after spending hours on them. It's taught me that perfectionism can get in the way of finishing things. I know time management is a weakness I'm working on.</p>
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
