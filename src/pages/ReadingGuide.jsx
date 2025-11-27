import { useNavigate } from 'react-router-dom';
import ParallaxScroll, { ParallaxSection } from '../components/ParallaxScroll/ParallaxScroll';
import './ReadingGuide.css';

const ReadingGuide = ({ setIsTransitioning, setClickPosition }) => {
  const navigate = useNavigate();

  const handleEvidenceClick = (sectionId, projectType = 'ducks-on-fire') => {
    navigate('/projects', { state: { scrollTo: sectionId, projectType } });
  };

  const handleBackToMenu = (event) => {
    setClickPosition({ x: event.clientX, y: event.clientY });
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/');
    }, 400);
  };

  return (
    <div className="reading-guide-view">
      <div className="project-navbar">
        <button className="back-button" onClick={handleBackToMenu}>
          ← Back to Menu
        </button>
      </div>

      <ParallaxScroll>
        <ParallaxSection>
          <div className="reading-guide-section">
            <h1>READING GUIDE</h1>
            <h2>ABOUT ME</h2>
            <p className="intro">
              Hi! I'm Berkan, an ICT Media Design student at Fontys. I chose to create an external website as my portfolio because I wanted to show my coding skills and create something unique that represents my personality and work style.
            </p>
            <p className="intro">
              My passion lies in UX/UI design, front-end development, and mobile app development. Through this semester, I've been actively exploring these areas to understand where my future career trajectory is heading. I want to become a designer-developer who can create beautiful, intuitive interfaces that people actually enjoy using.
            </p>
            <div className="info-row">
              <div className="portfolio-format">
                <h2>PORTFOLIO FORMAT</h2>
                <ul>
                  <li>External Website Portfolio</li>
                  <li>Wii-style Interactive Interface</li>
                  <li>Custom React Application</li>
                  <li>GitHub Version Control</li>
                </ul>
              </div>
              <div className="semester-section">
                <h3>SEMESTER 3</h3>
              </div>
            </div>
          </div>
        </ParallaxSection>

        <ParallaxSection>
          <div className="learning-outcome">
            <h2>LEARNING OUTCOME 1 - CONCEPTUALIZE, DESIGN, AND DEVELOP INTERACTIVE MEDIA PRODUCTS</h2>
            <h3>Self Assessment: Proficient</h3>
            <p>
              You create engaging concepts and translate them into professional validated media products by applying user-centered design principles, visual design techniques and by exploring emerging trends and developments in media, design and technologies.
            </p>
            <p><strong>Engaging & validated media products:</strong> I test my work to see if the target audience is attracted and satisfied with the concept or product.</p>
            <p><strong>User-centered design principles:</strong> I design digital products following guidelines from the media field, like usability rules and UI patterns, using professional tools.</p>
            <p><strong>Emerging technologies:</strong> I explore technologies relevant for today's ICT, like AI tools, modern web technologies, and interactive design systems.</p>
            <div className="improvement-section">
              <h4>What's Going Well:</h4>
              <ul>
                <li>Made two complete projects with good design process</li>
                <li>Using professional tools properly (Figma, GitHub, VS Code)</li>
                <li>Trying out new tech like React and GSAP animations</li>
              </ul>
              <h4>What I Need to Work On:</h4>
              <ul>
                <li>Test my designs with real users, not just friends</li>
                <li>Use proper research methods like making personas</li>
                <li>Measure if my designs actually work better (with data)</li>
              </ul>
            </div>
            <h3>EVIDENCE</h3>
            <ul>
              <li><strong><a className="evidence-link" href="/projects#research" target="_blank" rel="noopener noreferrer">Agency Research Process:</a></strong> Researched creative digital agencies to understand what makes effective agency websites and how to position Ducks on Fire in the market.</li>
              <li><strong><a className="evidence-link" href="/projects#user-testing" target="_blank" rel="noopener noreferrer">User Testing Sessions:</a></strong> Showed design iterations to teammates, classmates, and friends to get feedback on visual appeal, clarity, and user experience.</li>
              <li><strong><a className="evidence-link" href="/projects#design-process" target="_blank" rel="noopener noreferrer">Design Development in Figma:</a></strong> Created multiple design concepts in Figma, trying different approaches to present the agency's services before choosing the final direction.</li>
              <li><strong><a className="evidence-link" href="/projects#development" target="_blank" rel="noopener noreferrer">Website Implementation:</a></strong> Coded the final website using HTML, CSS, and JavaScript, turning the visual designs into a working, responsive website.</li>
              <li><strong><a className="evidence-link" href="/projects#poster" target="_blank" rel="noopener noreferrer">Infographic Poster Design:</a></strong> Created an infographic poster to visually communicate the agency's information, applying visual design techniques and brand guidelines.</li>
              <li><strong><a className="evidence-link" href="/projects#3d-modeling" target="_blank" rel="noopener noreferrer">3D Modeling with Photogrammetry:</a></strong> Explored emerging technology by experimenting with PhotoModeler for photogrammetry to create 3D models from photographs.</li>
              <li><strong><a className="evidence-link" href="/projects#portfolio-research" target="_blank" rel="noopener noreferrer">Portfolio Research & Inspiration:</a></strong> Researched other portfolios and analyzed the Wii menu system to create a unique, themed portfolio that stands out while maintaining professionalism.</li>
              <li><strong><a className="evidence-link" href="/projects#portfolio-design" target="_blank" rel="noopener noreferrer">Portfolio Design Process:</a></strong> Created multiple design iterations in Figma, balancing playful Wii aesthetics with professional presentation through user-centered design principles.</li>
              <li><strong><a className="evidence-link" href="/projects#portfolio-development" target="_blank" rel="noopener noreferrer">Interactive Features Development:</a></strong> Developed interactive elements like the dot grid physics system, expandable cards, and smooth page transitions using modern web technologies (React, GSAP).</li>
            </ul>
          </div>
        </ParallaxSection>

        <ParallaxSection>
          <div className="learning-outcome">
            <h2>LEARNING OUTCOME 2 - TRANSFERABLE PRODUCTION</h2>
            <h3>Self Assessment: Beginning</h3>
            <p>
              You create professional documentation and use version control for your products in a personal and team context. You communicate design decisions and recommendations to relevant stakeholders.
            </p>
            <p><strong>Version control in personal and team context:</strong> I use fitting version control systems like Git to manage and track different versions of products, both in individual and group projects.</p>
            <p><strong>Design decisions and recommendations:</strong> I communicate with team members using methods like documentation and guides to help with production and clearly express suggestions for improvements and new features.</p>
            <div className="improvement-section">
              <h4>What's Going Well:</h4>
              <ul>
                <li>Using GitHub with clear commits</li>
                <li>Showing my design process in my portfolio</li>
              </ul>
              <h4>What I Need to Work On:</h4>
              <ul>
                <li>Make better technical docs (like README files and setup guides)</li>
                <li>Write better code comments to explain what I'm doing</li>
                <li>Create documentation that other people can actually use</li>
              </ul>
            </div>
            <h3>EVIDENCE</h3>
            <ul>
              <li><strong><a className="evidence-link" href="/projects#development" target="_blank" rel="noopener noreferrer">GitHub Version Control:</a></strong> Used GitHub for the Ducks on Fire project with commit messages to track development progress and changes.</li>
              <li><strong><a className="evidence-link" href="/projects#design-process" target="_blank" rel="noopener noreferrer">Brand Guide Implementation:</a></strong> Worked with the brand guide created by teammates to keep visual consistency in colors, fonts, and visual elements throughout the website design.</li>
              <li><strong><a className="evidence-link" href="/projects#team-collaboration" target="_blank" rel="noopener noreferrer">Team Communication:</a></strong> Used WhatsApp for daily team communication and Flowspace for task management and sharing project information.</li>
              <li><strong><a className="evidence-link" href="/projects#overview" target="_blank" rel="noopener noreferrer">Design Documentation:</a></strong> Created clear documentation of the design process from research to final implementation.</li>
              <li><strong><a className="evidence-link" href="/projects#portfolio-results" target="_blank" rel="noopener noreferrer">Portfolio GitHub Version Control:</a></strong> Used GitHub for both the original and React versions of the portfolio, maintaining clear commit history and documentation of technical decisions.</li>
              <li><strong><a className="evidence-link" href="/projects#portfolio-design" target="_blank" rel="noopener noreferrer">Portfolio Design Documentation:</a></strong> Documented the complete design journey from research and inspiration to final implementation, showing clear reasoning for design choices.</li>
            </ul>
          </div>
        </ParallaxSection>

        <ParallaxSection>
          <div className="learning-outcome">
            <h2>LEARNING OUTCOME 3 - CREATIVE ITERATIONS</h2>
            <h3>Self Assessment: Beginning</h3>
            <p>
              You present the successive iterations of your creative process, and the connections between them, of your methodically substantiated, iterative design and development process.
            </p>
            <p><strong>Successive iterations:</strong> I create validated and explained improvements done on a previous version based on feedback, new insights, or user tests.</p>
            <p><strong>Creative process:</strong> Every step I take for creating products is guided by design models like Design Thinking and user-centered design methods.</p>
            <p><strong>Connections:</strong> I show the logical relationships between successive iterations and explain why each change was made.</p>
            <div className="improvement-section">
              <h4>What's Going Well:</h4>
              <ul>
                <li>Made multiple versions of my designs and showed how they improved</li>
                <li>Got feedback from people and actually used it</li>
                <li>Can explain why I changed things between versions</li>
              </ul>
              <h4>What I Need to Work On:</h4>
              <ul>
                <li>Test with real target users instead of just classmates</li>
                <li>Track actual numbers to see if things got better</li>
                <li>Set clear goals before starting each iteration</li>
              </ul>
            </div>
            <h3>EVIDENCE</h3>
            <ul>
              <li><strong><a className="evidence-link" href="/projects#design-process" target="_blank" rel="noopener noreferrer">Multiple Design Iterations:</a></strong> Created several different design concepts in Figma for the Ducks on Fire website, each trying different approaches to show the agency's services.</li>
              <li><strong><a className="evidence-link" href="/projects#user-testing" target="_blank" rel="noopener noreferrer">Feedback Integration:</a></strong> Collected feedback from teammates and classmates on design iterations and used this to make improvements in the next version.</li>
              <li><strong><a className="evidence-link" href="/projects#research" target="_blank" rel="noopener noreferrer">Research to Final Design Process:</a></strong> Documented the complete process from initial agency research, through inspiration gathering, to multiple design iterations, to the final design.</li>
              <li><strong><a className="evidence-link" href="/projects#design-process" target="_blank" rel="noopener noreferrer">Iterative Improvement:</a></strong> Each design version built on insights from the previous one, showing clear connections between iterations and reasons for changes.</li>
              <li><strong><a className="evidence-link" href="/projects#poster" target="_blank" rel="noopener noreferrer">Poster Design Iterations:</a></strong> Created an initial poster design, gathered feedback from team and teachers, and refined it into a final version with improved visual hierarchy and brand consistency.</li>
              <li><strong><a className="evidence-link" href="/projects#3d-modeling" target="_blank" rel="noopener noreferrer">Testing Different Solutions:</a></strong> Experimented with PhotoModeler for 3D modeling, evaluated the disappointing results, and learned from the team's comparison with other software like RealityScan to understand which tools work better for photogrammetry.</li>
              <li><strong><a className="evidence-link" href="/projects#portfolio-design" target="_blank" rel="noopener noreferrer">Portfolio Design Iterations:</a></strong> Created multiple Figma iterations for the portfolio, balancing playful and professional elements, with each version building on feedback about being too game-like or too formal.</li>
              <li><strong><a className="evidence-link" href="/projects#portfolio-challenges" target="_blank" rel="noopener noreferrer">Portfolio Feedback & Refinement:</a></strong> Showed early versions to friends and classmates, received feedback about professionalism balance, and adjusted the design to find the right sweet spot.</li>
            </ul>
          </div>
        </ParallaxSection>

        <ParallaxSection>
          <div className="learning-outcome">
            <h2>LEARNING OUTCOME 4 - PROFESSIONAL STANDARDS</h2>
            <h3>Self Assessment: Beginning</h3>
            <p>
              Both individually and in teams, you apply a relevant methodological approach used in the professional field to formulate project goals, involve stakeholders, conduct applied research, provide advice, make decisions, and deliver reports. In doing so, you keep in view the relevant ethical, intercultural, and sustainable aspects.
            </p>
            <p>Both individually and in teams, I use professional methods to structure projects, involve the right people, do research, give advice, make decisions, and create reports while considering ethical and sustainable aspects.</p>
            <div className="improvement-section">
              <h4>What's Going Well:</h4>
              <ul>
                <li>Following a clear process for my projects</li>
                <li>Made a team charter to keep things organized</li>
                <li>Did research before starting design work</li>
              </ul>
              <h4>What I Need to Work On:</h4>
              <ul>
                <li>Think about accessibility and ethics in my designs</li>
                <li>Make proper project reports like they do in real companies</li>
              </ul>
            </div>
            <h3>EVIDENCE</h3>
            <ul>
              <li><strong><a className="evidence-link" href="/projects#overview" target="_blank" rel="noopener noreferrer">Structured Project Approach:</a></strong> Followed a clear process for the Ducks on Fire project: research → inspiration gathering → design iterations → user testing → final implementation.</li>
              <li><strong><a className="evidence-link" href="/projects#team-collaboration" target="_blank" rel="noopener noreferrer">Team Charter Creation:</a></strong> Created a team charter at the start of the project that set clear rules and expectations for how the team would work together.</li>
              <li><strong><a className="evidence-link" href="/projects#research" target="_blank" rel="noopener noreferrer">Applied Research:</a></strong> Conducted research into creative agencies to understand industry standards and inform design decisions.</li>
              <li><strong><a className="evidence-link" href="/projects#team-collaboration" target="_blank" rel="noopener noreferrer">Team Collaboration:</a></strong> Worked with teammates who created the brand guide and incorporated their work into the website design.</li>
              <li><strong><a className="evidence-link" href="/projects#portfolio-overview" target="_blank" rel="noopener noreferrer">Portfolio Project Methodology:</a></strong> Followed a structured approach for the portfolio project: research other portfolios → identify unique angle → design iterations → development → optimization for different devices.</li>
              <li><strong><a className="evidence-link" href="/projects#portfolio-challenges" target="_blank" rel="noopener noreferrer">Responsive Design Considerations:</a></strong> Ensured the portfolio works on different devices by simplifying animations for mobile and creating responsive layouts, considering accessibility and user experience across platforms.</li>
            </ul>
          </div>
        </ParallaxSection>

        <ParallaxSection>
          <div className="learning-outcome">
            <h2>LEARNING OUTCOME 5 - PERSONAL LEADERSHIP</h2>
            <h3>Self Assessment: Beginning</h3>
            <p>
              You are aware of your own strengths and weaknesses, both in the field of ICT and in your personal development. You choose actions in line with your core values to promote your personal growth and develop your learning attitude.
            </p>
            <p>I create my own personal portfolio to prove this and all the other learning outcomes. The form and technical system of my portfolio is my choice, but it should reflect my core values and authentic self.</p>
            <div className="improvement-section">
              <h4>What's Going Well:</h4>
              <ul>
                <li>Made a portfolio that actually shows my personality</li>
                <li>Learning from my mistakes (like the PhotoModeler thing)</li>
                <li>Teaching myself new stuff like React and GSAP</li>
                <li>Taking responsibility for parts of team projects</li>
                <li>Identified my career path: UX/UI design, front-end development, and mobile app development</li>
                <li>Actively exploring technologies relevant to my future goals</li>
              </ul>
              <h4>What I Need to Work On:</h4>
              <ul>
                <li>Gain more experience in mobile app development to prepare for my specialization</li>
                <li>Build a stronger portfolio specifically showcasing UX/UI work</li>
                <li>Help other students learn stuff I know</li>
                <li>Take more leadership in projects, not just do tasks</li>
              </ul>
            </div>
            <h3>EVIDENCE</h3>
            <ul>
              <li><strong><a className="evidence-link" href="/projects#overview" target="_blank" rel="noopener noreferrer">Taking Initiative:</a></strong> Took responsibility for the website research, design, and development part of the Ducks on Fire project while teammates focused on branding.</li>
              <li><strong><a className="evidence-link" href="/projects#development" target="_blank" rel="noopener noreferrer">Self-Directed Learning:</a></strong> Learned new techniques and approaches for web development and design implementation during the project.</li>
              <li><strong><a className="evidence-link" href="/projects#user-testing" target="_blank" rel="noopener noreferrer">Seeking Feedback:</a></strong> Asked teammates, classmates, and friends for feedback on design iterations and used their input to improve the work.</li>
              <li><strong><a className="evidence-link" href="/projects#development" target="_blank" rel="noopener noreferrer">Problem Solving:</a></strong> Worked through technical challenges during development and found solutions independently.</li>
              <li><strong><a className="evidence-link" href="/projects#3d-modeling" target="_blank" rel="noopener noreferrer">Learning from Failures:</a></strong> Experimented with PhotoModeler for 3D modeling, recognized when the results were disappointing, and learned from comparing it with teammates' more successful approaches using different software.</li>
              <li><strong><a className="evidence-link" href="/projects#portfolio-overview" target="_blank" rel="noopener noreferrer">Portfolio as Personal Expression:</a></strong> Created a unique Wii-themed portfolio that reflects my personality and interests, choosing an external website format to showcase both design and technical skills.</li>
              <li><strong><a className="evidence-link" href="/projects#portfolio-results" target="_blank" rel="noopener noreferrer">Critical Self-Reflection:</a></strong> Learned to balance creativity with usability, being critical of my own work and cutting features that didn't serve the end goal even after spending hours on them.</li>
              <li><strong><a className="evidence-link" href="/projects#portfolio-development" target="_blank" rel="noopener noreferrer">Technical Problem Solving:</a></strong> Worked through complex challenges like page transitions, dot grid physics, and performance optimization, finding solutions through trial and error and learning new technologies (React, GSAP).</li>
            </ul>
          </div>
        </ParallaxSection>

        <ParallaxSection>
          <div className="learning-outcome reflection">
            <h2>REFLECTION</h2>
            <p>Looking at my progress this semester, I'm happy with how I've been able to combine my interest in design with technical development skills. Working on the Ducks on Fire project has taught me a lot about the full process from research to final product.</p>
            <p>What went well was my ability to stay organized and break down big tasks into smaller, manageable pieces. I also got better at asking for feedback and actually using it to improve my work.</p>
            <p>What could be better is my time management, sometimes I spend too much time perfecting small details instead of focusing on the bigger picture first. I also want to get better at explaining my design decisions to others.</p>
            <h3>NEXT STEPS</h3>
            <h4>Short-term (This Semester):</h4>
            <ul>
              <li>Improving my project planning and time management skills</li>
              <li>Getting better at presenting and explaining my work to others</li>
              <li>Expanding my knowledge of professional tools like Photoshop, Illustrator and Unreal Engine</li>
            </ul>
            <h4>Long-term (Future Career Direction):</h4>
            <p>I've identified my learning trajectory and professional direction: <strong>UX/UI design, front-end development, and mobile app development</strong>. To actively work towards this, I'm taking these concrete steps:</p>
            <ul>
              <li><strong>Next Semester:</strong> Choosing the mobile app development specialization to gain hands-on experience with iOS/Android development</li>
              <li><strong>Portfolio Development:</strong> Building more UX/UI focused projects that demonstrate user research, wireframing, and interaction design skills</li>
              <li><strong>Technical Skills:</strong> Learning React Native or Flutter for cross-platform mobile development</li>
              <li><strong>Design Skills:</strong> Deepening my knowledge of design systems, accessibility standards, and advanced prototyping in Figma</li>
              <li><strong>Professional Growth:</strong> Seeking internships or freelance opportunities in UX/UI design and front-end development</li>
            </ul>
            <p>I want to continue being curious and trying new approaches in these areas, but also become more efficient in my workflow. My goal is to become a designer-developer who can handle complex projects independently while also being a valuable team member - someone who bridges the gap between design and development.</p>
          </div>
        </ParallaxSection>
      </ParallaxScroll>

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
