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
      navigate('/');
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
    if (location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
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
            <p>
              I started by looking at different creative digital agencies to see what works well.
              This helped me understand what makes a good agency website and how to make Ducks on
              Fire stand out from other creative companies.
            </p>
            <p>
              I checked out many agency websites to see what they all do the same and what makes some special. This helped me learn what clients want to see when they visit a creative agency's website and how to show our services clearly.
            </p>
            <h3>Inspiration Gathering</h3>
            <p>
              After finishing my research, I collected visual ideas from top creative agencies. I looked for websites that show creative work well while still looking professional. This helped me figure out what design style would work best for Ducks on Fire's brand.
            </p>
            <p>
              The inspiration I found helped me decide on layout, fonts, colors, and how to organize content. I made sure to collect different examples that could help with various parts of the website design.
            </p>
            <Carousel images={inspirationImages} alt="Inspiration" />
          </div>
        </ParallaxSection>

        {/* Design Process */}
        <ParallaxSection sectionClassName="project-section" id="design-process">
          <div className="stack-card-content">
            <h2 className="section-title">DESIGN PROCESS</h2>
            <p>
              Using Figma, I made different design versions for the Ducks on Fire website. I took
              the brand guide my teammates created and turned it into a website that shows what our
              agency can do.
            </p>
            <h3>Multiple Design Iterations</h3>
            <p>
              I made several different design ideas in Figma, trying out different ways to show our
              agency's services and work. Making these different versions let me test various layouts and styles before picking the final design.
            </p>
            <p>
              Each new design was better than the last one because I used feedback to make improvements. This way of working step by step made sure the final design looks good and works well.
            </p>
            <Carousel images={iterationsImages} alt="Design Iterations" />
          </div>
        </ParallaxSection>

        {/* User Testing */}
        <ParallaxSection sectionClassName="project-section" id="user-testing">
          <div className="stack-card-content">
            <h2 className="section-title">👥 USER TESTING & FEEDBACK</h2>
            <p>
              To check if my designs worked well, I showed them to my teammates, classmates, and
              friends to get their opinions. Getting feedback was really important to find problems
              and make sure the website clearly shows what our agency offers.
            </p>
            <p>
              I showed people my different design versions and asked what they thought about how it looks, if the information was clear, and if it was easy to use. I asked specific questions about moving around the site, how information was organized, and what they thought of the brand.
            </p>
            <h3>Feedback Integration</h3>
            <p>
              Using the feedback I got, I made smart changes to create the final design. The testing showed me important things about what users expect and helped me improve the website's layout and look to better serve the people we want to reach.
            </p>
            <p>
              The feedback also helped make sure the website matched the brand guide my teammates made, keeping everything consistent across all Ducks on Fire materials.
            </p>
            <h3>Final Design</h3>
            <p>
              After using all the feedback and trying many different design ideas, I created the final design that best shows the Ducks on Fire brand. The final design mixes creativity with professional features, making an interesting experience that clearly shows what our agency can do.
            </p>
            <Carousel images={finalDesignImages} alt="Final Design" />
            <h3>Brand Guide Implementation</h3>
            <p>
              During the whole design process, I worked closely with the brand guide my teammates made to keep everything looking the same. This meant using the right colors, fonts, and visual parts that show the Ducks on Fire brand.
            </p>
            <p>
              The design shows our agency's brand online, displaying our creative skills while following the brand rules and keeping the professional quality that shows our team's work together.
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
          <h3>Inspiration</h3>
          <p>
            I've always loved the Nintendo Wii's menu system. It's simple, playful, and just feels good to use. The way the channels bounce and move around, the clean design, the interactive elements, it all felt perfect for what I wanted to create.
          </p>
          <p>
            I started collecting screenshots and videos of the Wii menu to really understand what made it special. The dot grid background, the channel cards, the smooth transitions, these all became key elements I wanted to include in my own way.
          </p>
          <Carousel images={portfolioInspirationImages} alt="Wii Inspiration" />
        </div>
      </ParallaxSection>

      {/* Design Process */}
      <ParallaxSection sectionClassName="project-section" id="portfolio-design">
        <div className="stack-card-content">
          <h2 className="section-title">DESIGN PROCESS</h2>
          <h3>Concepts</h3>
          <p>
            I started sketching out ideas in Figma, trying different layouts and seeing how I could adapt the Wii aesthetic to work as a portfolio. The biggest challenge was making it feel nostalgic and fun while still being professional.
          </p>
          <p>
            Some early versions were too playful and didn't feel serious enough for a portfolio. Others were too formal and lost the fun Wii vibe completely. It took a lot of iterations to find the right balance.
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
          <h3>Challenges</h3>
          <p>
            The hardest thing to get right was probably the page transitions. I wanted it to feel like you're actually entering a Wii channel when you click on something. Getting that circular wipe effect to start exactly where you click and expand smoothly took a lot of trial and error.
          </p>
          <p>
            The dot grid background was also surprisingly complex. Making all those dots move smoothly when you move your mouse around, having them react to each other, and keeping it all running at 60fps - that took some serious optimization.
          </p>
          <h3>Customization</h3>
          <p>
            While I took heavy inspiration from the Wii, I didn't want to just copy it. I added modern design elements, updated the color scheme to fit my personal brand, and included interactive features that wouldn't have been possible on the actual Wii.
          </p>
          <p>
            The expandable cards in the About Me section, for example, are completely my own idea. They let me show more detailed information without cluttering the main view, and the zoom animation makes it feel really satisfying to click on them.
          </p>
        </div>
      </ParallaxSection>

      {/* Challenges */}
      <ParallaxSection sectionClassName="project-section" id="portfolio-challenges">
        <div className="stack-card-content">
          <h2 className="section-title">CHALLENGES I FACED</h2>
          <h3>Professionalism</h3>
          <p>
            The biggest challenge was definitely making sure the playful Wii theme didn't make my portfolio look unprofessional or childish. I had to be really careful about which elements I included and how I styled everything.
          </p>
          <p>
            I showed early versions to friends and classmates to get feedback. Some said it was too game-like, others said it wasn't playful enough. Finding that sweet spot took a lot of adjustments and fine-tuning.
          </p>
          <h3>Responsiveness</h3>
          <p>
            Another big challenge was making sure everything worked smoothly on different devices. The animations that looked perfect on my laptop sometimes lagged on phones, and the layout that worked great on desktop looked cramped on smaller screens.
          </p>
          <p>
            I had to simplify some animations for mobile devices and create different layouts for various screen sizes. It was tedious but necessary to make sure everyone gets a good experience.
          </p>
        </div>
      </ParallaxSection>

      {/* Results & Learning */}
      <ParallaxSection sectionClassName="project-section" id="portfolio-results">
        <div className="stack-card-content">
          <h2 className="section-title">WHAT I LEARNED</h2>
          <h3>Design</h3>
          <p>
            This project taught me a lot about balancing creativity with usability. It's easy to get carried away with cool effects and animations, but you have to always ask yourself: does this actually make the experience better, or is it just showing off?
          </p>
          <p>
            I learned to be critical of my own work and not get too attached to ideas that don't serve the end goal. Some animations I spent hours on got cut because they were distracting or didn't fit the overall experience.
          </p>
          <h3>Development</h3>
          <p>
            On the coding side, I got way better at React and working with animations. I learned how to optimize performance, manage complex state, and structure my code so it's actually maintainable and not just a giant mess.
          </p>
          <p>
            I also learned the importance of version control. Making regular commits and organizing my work made it so much easier when I needed to go back and change something or figure out why something broke.
          </p>
          <h3>Result</h3>
          <p>
            I'm really proud of what I created. It feels unique and personal while still being professional. People who've seen it remember it, which was exactly what I was going for. It's not just another portfolio in a sea of identical websites.
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

export default Projects;
