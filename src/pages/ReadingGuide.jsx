import { useNavigate } from 'react-router-dom';
import ParallaxScroll, { ParallaxSection } from '../components/ParallaxScroll/ParallaxScroll';
import './ReadingGuide.css';

const ReadingGuide = () => {
  const navigate = useNavigate();

  const handleEvidenceClick = (sectionId) => {
    navigate('/projects', { state: { scrollTo: sectionId } });
  };

  return (
    <div className="reading-guide-view">
      <div className="project-navbar">
        <button className="back-button" onClick={() => navigate('/')}>
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
            <h3>Self Assessment: Orienting</h3>
            <p>
              You create engaging concepts and translate them into professional validated media products by applying user-centered design principles, visual design techniques and by exploring emerging trends and developments in media, design and technologies.
            </p>
            <p><strong>Engaging & validated media products:</strong> I test my work to see if the target audience is attracted and satisfied with the concept or product.</p>
            <p><strong>User-centered design principles:</strong> I design digital products following guidelines from the media field, like usability rules and UI patterns, using professional tools.</p>
            <p><strong>Emerging technologies:</strong> I explore technologies relevant for today's ICT, like AI tools, modern web technologies, and interactive design systems.</p>
            <h3>EVIDENCE</h3>
            <ul>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('research')}>Agency Research Process:</button></strong> Researched creative digital agencies to understand what makes effective agency websites and how to position Ducks on Fire in the market.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('user-testing')}>User Testing Sessions:</button></strong> Showed design iterations to teammates, classmates, and friends to get feedback on visual appeal, clarity, and user experience.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('design-process')}>Design Development in Figma:</button></strong> Created multiple design concepts in Figma, trying different approaches to present the agency's services before choosing the final direction.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('development')}>Website Implementation:</button></strong> Coded the final website using HTML, CSS, and JavaScript, turning the visual designs into a working, responsive website.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('poster')}>Infographic Poster Design:</button></strong> Created an infographic poster to visually communicate the agency's information, applying visual design techniques and brand guidelines.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('3d-modeling')}>3D Modeling with Photogrammetry:</button></strong> Explored emerging technology by experimenting with PhotoModeler for photogrammetry to create 3D models from photographs.</li>
            </ul>
          </div>
        </ParallaxSection>

        <ParallaxSection>
          <div className="learning-outcome">
            <h2>LEARNING OUTCOME 2 - TRANSFERABLE PRODUCTION</h2>
            <h3>Self Assessment: Orienting</h3>
            <p>
              You create professional documentation and use version control for your products in a personal and team context. You communicate design decisions and recommendations to relevant stakeholders.
            </p>
            <p><strong>Version control in personal and team context:</strong> I use fitting version control systems like Git to manage and track different versions of products, both in individual and group projects.</p>
            <p><strong>Design decisions and recommendations:</strong> I communicate with team members using methods like documentation and guides to help with production and clearly express suggestions for improvements and new features.</p>
            <h3>EVIDENCE</h3>
            <ul>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('development')}>GitHub Version Control:</button></strong> Used GitHub for the Ducks on Fire project with commit messages to track development progress and changes.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('design-process')}>Brand Guide Implementation:</button></strong> Worked with the brand guide created by teammates to keep visual consistency in colors, fonts, and visual elements throughout the website design.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('team-collaboration')}>Team Communication:</button></strong> Used WhatsApp for daily team communication and Flowspace for task management and sharing project information.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('overview')}>Design Documentation:</button></strong> Created clear documentation of the design process from research to final implementation.</li>
            </ul>
          </div>
        </ParallaxSection>

        <ParallaxSection>
          <div className="learning-outcome">
            <h2>LEARNING OUTCOME 3 - CREATIVE ITERATIONS</h2>
            <h3>Self Assessment: Orienting</h3>
            <p>
              You present the successive iterations of your creative process, and the connections between them, of your methodically substantiated, iterative design and development process.
            </p>
            <p><strong>Successive iterations:</strong> I create validated and explained improvements done on a previous version based on feedback, new insights, or user tests.</p>
            <p><strong>Creative process:</strong> Every step I take for creating products is guided by design models like Design Thinking and user-centered design methods.</p>
            <p><strong>Connections:</strong> I show the logical relationships between successive iterations and explain why each change was made.</p>
            <h3>EVIDENCE</h3>
            <ul>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('design-process')}>Multiple Design Iterations:</button></strong> Created several different design concepts in Figma for the Ducks on Fire website, each trying different approaches to show the agency's services.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('user-testing')}>Feedback Integration:</button></strong> Collected feedback from teammates and classmates on design iterations and used this to make improvements in the next version.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('research')}>Research to Final Design Process:</button></strong> Documented the complete process from initial agency research, through inspiration gathering, to multiple design iterations, to the final design.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('design-process')}>Iterative Improvement:</button></strong> Each design version built on insights from the previous one, showing clear connections between iterations and reasons for changes.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('poster')}>Poster Design Iterations:</button></strong> Created an initial poster design, gathered feedback from team and teachers, and refined it into a final version with improved visual hierarchy and brand consistency.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('3d-modeling')}>Testing Different Solutions:</button></strong> Experimented with PhotoModeler for 3D modeling, evaluated the disappointing results, and learned from the team's comparison with other software like RealityScan to understand which tools work better for photogrammetry.</li>
            </ul>
          </div>
        </ParallaxSection>

        <ParallaxSection>
          <div className="learning-outcome">
            <h2>LEARNING OUTCOME 4 - PROFESSIONAL STANDARDS</h2>
            <h3>Self Assessment: Orienting</h3>
            <p>
              Both individually and in teams, you apply a relevant methodological approach used in the professional field to formulate project goals, involve stakeholders, conduct applied research, provide advice, make decisions, and deliver reports. In doing so, you keep in view the relevant ethical, intercultural, and sustainable aspects.
            </p>
            <p>Both individually and in teams, I use professional methods to structure projects, involve the right people, do research, give advice, make decisions, and create reports while considering ethical and sustainable aspects.</p>
            <h3>EVIDENCE</h3>
            <ul>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('overview')}>Structured Project Approach:</button></strong> Followed a clear process for the Ducks on Fire project: research → inspiration gathering → design iterations → user testing → final implementation.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('team-collaboration')}>Team Charter Creation:</button></strong> Created a team charter at the start of the project that set clear rules and expectations for how the team would work together.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('research')}>Applied Research:</button></strong> Conducted research into creative agencies to understand industry standards and inform design decisions.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('team-collaboration')}>Team Collaboration:</button></strong> Worked with teammates who created the brand guide and incorporated their work into the website design.</li>
            </ul>
          </div>
        </ParallaxSection>

        <ParallaxSection>
          <div className="learning-outcome">
            <h2>LEARNING OUTCOME 5 - PERSONAL LEADERSHIP</h2>
            <h3>Self Assessment: Orienting</h3>
            <p>
              You are aware of your own strengths and weaknesses, both in the field of ICT and in your personal development. You choose actions in line with your core values to promote your personal growth and develop your learning attitude.
            </p>
            <p>I create my own personal portfolio to prove this and all the other learning outcomes. The form and technical system of my portfolio is my choice, but it should reflect my core values and authentic self.</p>
            <h3>EVIDENCE</h3>
            <ul>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('overview')}>Taking Initiative:</button></strong> Took responsibility for the website research, design, and development part of the Ducks on Fire project while teammates focused on branding.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('development')}>Self-Directed Learning:</button></strong> Learned new techniques and approaches for web development and design implementation during the project.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('user-testing')}>Seeking Feedback:</button></strong> Asked teammates, classmates, and friends for feedback on design iterations and used their input to improve the work.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('development')}>Problem Solving:</button></strong> Worked through technical challenges during development and found solutions independently.</li>
              <li><strong><button className="evidence-link" onClick={() => handleEvidenceClick('3d-modeling')}>Learning from Failures:</button></strong> Experimented with PhotoModeler for 3D modeling, recognized when the results were disappointing, and learned from comparing it with teammates' more successful approaches using different software.</li>
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
            <p>For the rest of the semester, I want to focus on:</p>
            <ul>
              <li>Improving my project planning and time management skills</li>
              <li>Getting better at presenting and explaining my work to others</li>
              <li>Expanding my knowledge of professional tools like Photoshop, Illustrator and Unreal Engine</li>
            </ul>
            <p>I want to continue being curious and trying new approaches, but also become more efficient in my workflow. My goal is to become someone who can handle complex projects independently while also being a valuable team member.</p>
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
