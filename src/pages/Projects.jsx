import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import ParallaxScroll, { ParallaxSection } from '../components/ParallaxScroll/ParallaxScroll';
import Carousel from '../components/Carousel';
import './Projects.css';

const Projects = ({ setIsTransitioning, setClickPosition }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeProject, setActiveProject] = useState(
    location.state?.projectType || 'ducks-on-fire'
  );

  const handleBackToMenu = (event) => {
    setClickPosition({ x: event.clientX, y: event.clientY });
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/menu');
    }, 400);
  };

  // Image arrays for carousels
  const inspirationImages = [
    '/imgs/inspo.png',
    '/imgs/inspo2.png',
    '/imgs/inspo3.png',
    '/imgs/inspo4.png',
    '/imgs/inspo5.png',
    '/imgs/inspo6.png'
  ];

  const iterationsImages = [
    '/imgs/iterations.png',
    '/imgs/iterations2.png',
    '/imgs/iterations3.png',
    '/imgs/iterations4.png',
    '/imgs/iterations6.png'
  ];

  const finalDesignImages = [
    '/imgs/finaldesign.png',
    '/imgs/finaldesign2.png',
    '/imgs/finaldesign3.png',
    '/imgs/finaldesign4.png'
  ];

  const modelingImages = [
    '/imgs/photomodeler.png',
    '/imgs/realityscan.jpg',
    '/imgs/realityscan2.jpg'
  ];

  const posterImages = [
    '/imgs/poster.png',
    '/imgs/posterfinal.png'
  ];

  const collaborationImages = [
    '/imgs/teamcharter.png',
    '/imgs/flowspace.png',
    '/imgs/whatsapp.png'
  ];

  useEffect(() => {
    // Handle both state-based navigation and hash-based navigation
    const sectionId = location.state?.scrollTo || location.hash.replace('#', '');
    const projectType = location.state?.projectType;

    // If section ID starts with "portfolio-", switch to portfolio project
    if (sectionId && sectionId.startsWith('portfolio-')) {
      setActiveProject('portfolio');
    } else if (projectType) {
      setActiveProject(projectType);
    }

    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 300); // Increased timeout to allow project switch
    }
  }, [location]);

  // Portfolio project images
  const portfolioDesignImages = [
    '/imgs/wiifigma1.png',
    '/imgs/wiifigma2.png',
    '/imgs/wiifigma3.png',
    '/imgs/wiifigma4.png'
  ];

  const portfolioInspirationImages = [
    '/imgs/wiiui.png',
    '/imgs/wiiui2.png'
  ];

  const renderDucksOnFire = () => (
    <ParallaxScroll>
      {/* Project Overview */}
      <ParallaxSection sectionClassName="project-section" id="overview">
        <div className="stack-card-content">
          <h2 className="section-title">PROJECT OVERVIEW</h2>
          <h1 className="project-main-title">DUCKS ON FIRE</h1>
          <p>
            Ducks on Fire is a creative digital media agency. While my teammates focused on
            creating the branding guide, game and logo designs, I was responsible for
            researching, designing, and developing the agency's website.
          </p>
          <p>
            Currently, we're working with Iron Hearts on a photogrammetry project where we create 3D scans using photogrammetry techniques and implement them in Unreal Engine. This involves capturing real-world objects and environments to create realistic 3D assets.
          </p>
          <div className="project-meta">
            <div><strong>Date:</strong> Sept 2025 - Now</div>
          </div>
          <div className="tools-section">
            <h3>Tools Used</h3>
            <ul>
              <li>Figma</li>
              <li>Adobe Illustrator</li>
              <li>Visual Studio Code</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>PhotoModeler</li>
              <li>GitHub Copilot</li>
              <li>WhatsApp (Team Communication)</li>
            </ul>
          </div>
        </div>
      </ParallaxSection>

      {/* Research Process */}
      <ParallaxSection sectionClassName="project-section" id="research">
        <div className="stack-card-content">
          <h2 className="section-title">RESEARCH PROCESS</h2>
          <h3>Best, Good & Bad Analysis (CMD Method)</h3>
          <p>
            I analyzed about 6 different agency websites and categorized them into what worked really well, what was okay, and what didn't work at all. The best examples had clear service descriptions, easy-to-find contact info, and balanced portfolios. The bad ones were confusing with messy navigation.
          </p>
          <h3>Inspiration Gathering (Library Research)</h3>
          <p>
            I collected visual ideas from top agencies on Awwwards and Behance. This helped me figure out what design style would work best for Ducks on Fire's brand and decide on layout, fonts, colors, and content organization.
          </p>
          <Carousel images={inspirationImages} alt="Inspiration" />
        </div>
      </ParallaxSection>

      {/* Design Process */}
      <ParallaxSection sectionClassName="project-section" id="design-process">
        <div className="stack-card-content">
          <h2 className="section-title">DESIGN PROCESS</h2>
          <p>
            I created multiple design iterations in Figma, using <strong>Prototyping</strong> and <strong>Peer Review</strong>. Each version was tested and improved based on feedback.
          </p>
          <h4>→ Iteration 1: Content Hierarchy</h4>
          <p>
            <strong>Problem:</strong> Layout felt cluttered with too much focus on game projects.<br/>
            <strong>Feedback:</strong> "It's hard to understand what services the agency actually offers."<br/>
            <strong>Solution:</strong> Created a clear services section at the top and added more white space.
          </p>
          <h4>→ Iteration 2: Navigation</h4>
          <p>
            <strong>Problem:</strong> Navigation was confusing, hard to find contact info.<br/>
            <strong>Feedback:</strong> "I couldn't find the contact information easily."<br/>
            <strong>Solution:</strong> Made navigation sticky with a visible "Contact" button. Reorganized content flow: Services → About → Portfolio → Contact.
          </p>
          <h4>→ Iteration 3: Visual Refinement</h4>
          <p>
            <strong>Problem:</strong> Colors were too aggressive, fonts inconsistent.<br/>
            <strong>Feedback:</strong> "The colors feel too aggressive and don't match the 'creative agency' vibe."<br/>
            <strong>Solution:</strong> Reduced color saturation by 30% and standardized to two fonts from the brand guide.
          </p>
          <Carousel images={iterationsImages} alt="Design Iterations" />
        </div>
      </ParallaxSection>

      {/* User Testing */}
      <ParallaxSection sectionClassName="project-section" id="user-testing">
        <div className="stack-card-content">
          <h2 className="section-title">👥 USER TESTING & FEEDBACK</h2>
          <p>
            I conducted multiple rounds of <strong>Usability Testing</strong> with teammates, classmates, and friends. Each round revealed specific issues that I fixed in the next iteration.
          </p>
          <h3>Testing Rounds</h3>
          <p>
            <strong>Round 1 (3 classmates):</strong> They couldn't tell what the agency does. Added a clear hero section explaining our services.<br/>
            <strong>Round 2 (Team & teacher):</strong> Colors were too bright. Reduced saturation from 100% to 70%.
          </p>
          <h3>Final Design</h3>
          <p>
            After all the iterations and feedback, I created the final design that balances creativity with professionalism while clearly showing what Ducks on Fire offers.
          </p>
          <Carousel images={finalDesignImages} alt="Final Design" />
          <h3>Brand Guide Implementation</h3>
          <p>
            Throughout the design process, I followed the brand guide my teammates created to keep everything consistent with Ducks on Fire's visual identity.
          </p>
          <button
            className="project-btn"
            onClick={() => window.open('/pdfs/Brandguide Ducks On Fire.pdf', '_blank')}
          >
            VIEW BRAND GUIDE PDF
          </button>
        </div>
      </ParallaxSection>

      {/* Development */}
      <ParallaxSection sectionClassName="project-section" id="development">
        <div className="stack-card-content">
          <h2 className="section-title">DEVELOPMENT</h2>
          <p>
            After finishing the design in Figma, I built the website using HTML, CSS, and
            JavaScript in Visual Studio Code. The development part meant turning the visual
            designs into a working website that works on different devices and browsers.
          </p>
          <p>
            I focused on creating clean HTML structure, good CSS styling, and interactive JavaScript features that make the website better to use. The coding process needed careful attention to make sure the final website looked exactly like the Figma designs.
          </p>
          <h3>Version Control</h3>
          <p>
            I used GitHub to manage all the code changes during development, making sure
            everything was tracked and documented properly. This helped me keep a clear history of the development and work with my team when needed.
          </p>
          <p>
            Regular commits with clear messages helped me track progress and gave me the option to undo changes if needed. The GitHub repository keeps a complete record of the website's development from start to finish.
          </p>
          <button
            className="project-btn"
            onClick={() =>
              window.open('https://github.com/BerkanHRGL/ducksonfire/commits/main/', '_blank')
            }
          >
            VIEW GITHUB COMMITS
          </button>
          <h3>Design Version Control & Collaboration</h3>
          <p>
            While I used GitHub for tracking my code, we also worked on the brand guide in Figma, which basically does the same thing for design work. It's how design teams actually handle version control in the industry, similar to how developers use Git.
          </p>
          <p>
            The cool thing about Figma is that we all worked together in one file. Multiple people could be editing at the same time, leaving comments, making changes, and seeing what everyone else was doing. It's like Google Docs but for design. Figma automatically saves every version of the file, so we could always go back and see how the brand guide looked last week or compare different versions of the logo.
          </p>
          <p>
            Everything about our brand - the exact colors, the fonts we picked, all the logo variations, spacing rules - was documented right there in that Figma file. This made it super easy for me when I was building the website because I could just reference the Figma file to get the exact hex codes for colors or see how much spacing should be between elements. No need to ask my teammates every time I needed a design detail.
          </p>
          <p>
            I think it's important to show that version control isn't just a coding thing. Designers need to track their work and collaborate just like developers do, they just use different tools. Figma for design works the same way Git works for code - keeps track of changes, lets people work together, and maintains a complete history of the project.
          </p>
        </div>
      </ParallaxSection>

      {/* 3D Modeling */}
      <ParallaxSection sectionClassName="project-section" id="3d-modeling">
        <div className="stack-card-content">
          <h2 className="section-title">3D MODELING EXPERIMENTS</h2>
          <p>
            As part of our exploration into digital media technologies, our group experimented
            with photogrammetry to create 3D models from photographs. We tested multiple software
            solutions to compare their effectiveness and quality.
          </p>
          <h3>My Contribution - PhotoModeler</h3>
          <p>
            I worked with PhotoModeler, a professional photogrammetry software. While it's a powerful tool, the results I achieved were quite disappointing. The 3D model quality didn't meet our expectations, and I encountered various challenges with the reconstruction process.
          </p>
          <p>
            Meanwhile, my teammates experimented with other 3D modeling software. RealityScan came out as the best solution for the group. The quality improvement was significant compared to my PhotoModeler results, producing much cleaner and more accurate 3D models from similar source photographs. This comparison showed us the importance of choosing the right tool for photogrammetry work.
          </p>
          <Carousel images={modelingImages} alt="3D Modeling" />
        </div>
      </ParallaxSection>

      {/* Poster Design */}
      <ParallaxSection sectionClassName="project-section" id="poster">
        <div className="stack-card-content">
          <h2 className="section-title">INFOGRAPHIC POSTER</h2>
          <p>
            As part of the Ducks on Fire project, I created an infographic poster to visually
            communicate key information about what we do as an agency. This poster needed to be
            both eye-catching and informative while following the brand guidelines.
          </p>
          <h3>Design Iterations</h3>
          <p>
            I started with an initial design concept that laid out the agency information and visual elements. After gathering feedback from my team and teachers, I identified areas for improvement.
          </p>
          <p>
            The feedback helped me create a refined final version that better represents the Ducks on Fire brand and communicates the information more effectively. The iterative process improved both the visual appeal and the clarity of the message.
          </p>
          <Carousel images={posterImages} alt="Poster Design" />
        </div>
      </ParallaxSection>

      {/* Team Collaboration */}
      <ParallaxSection sectionClassName="project-section" id="team-collaboration">
        <div className="stack-card-content">
          <h2 className="section-title">TEAM COLLABORATION</h2>
          <p>
            We started this project by creating a team charter that set clear rules and
            expectations for how we would work together. This helped us understand everyone's
            roles and how we would communicate during the project.
          </p>
          <p>
            For task management, we use Flowspace, which works like Trello. We split up all our tasks there and put important project information that everyone needs to see. This keeps us organized and makes sure nothing gets forgotten.
          </p>
          <p>
            Our daily communication happens through WhatsApp where we share quick updates, ask questions, and coordinate our work. This keeps everyone in the loop about what's happening with the project.
          </p>
          <Carousel images={collaborationImages} alt="Team Collaboration" />
          <div className="project-links">
            <a
              href="https://i554530.hera.fontysict.net/ducksonfire/"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Live Site
            </a>
            <a
              href="https://github.com/BerkanHRGL/ducksonfire"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </ParallaxSection>
    </ParallaxScroll>
  );

  const renderPortfolio = () => (
    <ParallaxScroll>
      {/* Project Overview */}
      <ParallaxSection sectionClassName="project-section" id="portfolio-overview">
        <div className="stack-card-content">
          <h2 className="section-title">PROJECT OVERVIEW</h2>
          <h1 className="project-main-title">WII-INSPIRED PORTFOLIO</h1>
          <p>
            This portfolio website is my personal digital showcase inspired by the Nintendo Wii menu. I wanted to create something that really stands out and shows my personality, not just another boring portfolio website.
          </p>
          <p>
            The goal was simple: make a portfolio that people actually remember and enjoy using, while still looking professional enough to showcase my work properly.
          </p>
          <div className="project-meta">
            <div><strong>Date:</strong> Sept 2025 - Now</div>
          </div>
          <div className="tools-section">
            <h3>Tools Used</h3>
            <ul>
              <li>Figma</li>
              <li>Visual Studio Code</li>
              <li>GitHub</li>
              <li>Claude</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </div>
      </ParallaxSection>

      {/* Research & Inspiration */}
      <ParallaxSection sectionClassName="project-section" id="portfolio-research">
        <div className="stack-card-content">
          <h2 className="section-title">RESEARCH & INSPIRATION</h2>
          <h3>Inspiration (Library Research)</h3>
          <p>
            I've always loved the Nintendo Wii's menu system. It's simple, playful, and just feels good to use. The way the channels bounce and move around, the clean design, the interactive elements, it all felt perfect for what I wanted to create.
          </p>
          <p>
            I collected screenshots and videos of the Wii menu to understand what made it special. The dot grid background, the channel cards, the smooth transitions - these all became key elements I wanted to include in my own way.
          </p>
          <Carousel images={portfolioInspirationImages} alt="Wii Inspiration" />
        </div>
      </ParallaxSection>

      {/* Design Process */}
      <ParallaxSection sectionClassName="project-section" id="portfolio-design">
        <div className="stack-card-content">
          <h2 className="section-title">DESIGN PROCESS</h2>
          <h3>Concepts (Prototyping)</h3>
          <p>
            I started sketching out ideas in Figma, trying different layouts and seeing how I could adapt the Wii aesthetic to work as a portfolio. The biggest challenge was making it feel nostalgic and fun while still being professional.
          </p>
          <p>
            Some early versions were too playful and didn't feel serious enough for a portfolio. Others were too formal and lost the fun Wii vibe completely. It took multiple iterations to find the right balance.
          </p>
          <Carousel images={portfolioDesignImages} alt="Design Process" />
          <h3>Interactions</h3>
          <p>
            I wanted the portfolio to feel alive and interactive, not just static pages. The dot grid background that responds to your mouse, the cards that expand when you hover, the smooth page transitions - all of these came from wanting to create that same satisfying feeling the Wii menu had.
          </p>
          <p>
            I made sure every interaction had a purpose though. It needed to be fun but not distracting or annoying. The animations needed to be smooth and feel natural, not flashy or overwhelming.
          </p>
        </div>
      </ParallaxSection>

      {/* Development */}
      <ParallaxSection sectionClassName="project-section" id="portfolio-development">
        <div className="stack-card-content">
          <h2 className="section-title">DEVELOPMENT</h2>
          <p>
            Building this portfolio was definitely the most fun part. I got to bring all my design ideas to life and make everything actually work. I used React because it makes it easy to organize everything into components and manage all the interactive parts.
          </p>
          <h3>Technical Challenges</h3>
          <p>
            The hardest thing to get right was the page transitions. I wanted it to feel like you're actually entering a Wii channel when you click on something. Getting that circular wipe effect to start exactly where you click and expand smoothly took a lot of trial and error.
          </p>
          <p>
            The dot grid background was also surprisingly complex. Making all those dots move smoothly when you move your mouse around, having them react to each other, and keeping it all running at 60fps - that took some serious optimization.
          </p>
          <h3>Customization</h3>
          <p>
            While I took heavy inspiration from the Wii, I didn't want to just copy it. I added modern design elements, updated the color scheme to fit my personal brand, and included interactive features that wouldn't have been possible on the actual Wii.
          </p>
        </div>
      </ParallaxSection>

      {/* Challenges */}
      <ParallaxSection sectionClassName="project-section" id="portfolio-challenges">
        <div className="stack-card-content">
          <h2 className="section-title">ITERATIONS & FEEDBACK</h2>
          <h3>Balancing Creativity & Professionalism (Peer Review)</h3>
          <p>
            The biggest challenge was making sure the playful Wii theme didn't make my portfolio look unprofessional or childish. I showed early versions to friends and classmates to get feedback. Some said it was too game-like, others said it wasn't playful enough. Finding that sweet spot took a lot of adjustments and fine-tuning.
          </p>
          <h3>Responsiveness Testing</h3>
          <p>
            I had to make sure everything worked smoothly on different devices. The animations that looked perfect on my laptop sometimes lagged on phones, and the layout that worked great on desktop looked cramped on smaller screens. I simplified some animations for mobile devices and created different layouts for various screen sizes.
          </p>
        </div>
      </ParallaxSection>

      {/* Results & Learning */}
      <ParallaxSection sectionClassName="project-section" id="portfolio-results">
        <div className="stack-card-content">
          <h2 className="section-title">WHAT I LEARNED</h2>
          <h3>Design Iteration</h3>
          <p>
            This project taught me a lot about balancing creativity with usability. It's easy to get carried away with cool effects and animations, but you have to always ask yourself: does this actually make the experience better, or is it just showing off? I learned to be critical of my own work and cut ideas that don't serve the end goal.
          </p>
          <h3>Development & Version Control</h3>
          <p>
            On the coding side, I got way better at React and working with animations. I learned how to optimize performance, manage complex state, and structure my code so it's actually maintainable.
          </p>
          <p>
            I used <strong>GitHub</strong> for version control throughout development. Making regular commits and organizing my work made it so much easier when I needed to go back and change something or figure out why something broke.
          </p>
          <h3>Result</h3>
          <p>
            I'm really proud of what I created. It feels unique and personal while still being professional. People who've seen it remember it, which was exactly what I was going for.
          </p>
          <div className="project-links">
            <a
              href="https://github.com/BerkanHRGL/portfoliowii"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub Repo (Original)
            </a>
            <a
              href="https://github.com/BerkanHRGL/portfoliowii-react"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              GitHub Repo (React Version)
            </a>
          </div>
        </div>
      </ParallaxSection>
    </ParallaxScroll>
  );

  return (
    <div className="project-view">
      <button className="back-button" onClick={handleBackToMenu}>
        ← Back to Menu
      </button>

      <div className="project-tabs">
        <button
          className={`project-tab ${activeProject === 'ducks-on-fire' ? 'active' : ''}`}
          onClick={() => setActiveProject('ducks-on-fire')}
        >
          Ducks on Fire
        </button>
        <button
          className={`project-tab ${activeProject === 'portfolio' ? 'active' : ''}`}
          onClick={() => setActiveProject('portfolio')}
        >
          Portfolio
        </button>
      </div>

      {activeProject === 'ducks-on-fire' ? renderDucksOnFire() : renderPortfolio()}
    </div>
  );
};

export default Projects;
