import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import ParallaxScroll, { ParallaxSection } from '../components/ParallaxScroll/ParallaxScroll';
import Carousel from '../components/Carousel';
import './Projects.css';

const Projects = () => {
  const navigate = useNavigate();
  const location = useLocation();

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

  return (
    <div className="project-view">
      <div className="project-navbar">
        <button className="back-button" onClick={() => navigate('/')}>
          ← Back to Menu
        </button>
      </div>

      <ParallaxScroll>
        {/* Project Overview */}
        <ParallaxSection sectionClassName="project-section" id="overview">
          <div className="stack-card-content">
            <h2 className="section-title">📋 PROJECT OVERVIEW</h2>
            <h1 className="project-main-title">DUCKS ON FIRE</h1>
            <p>
              Ducks on Fire is a creative digital media agency. While my teammates focused on
              creating the branding guide, game and logo designs, I was responsible for
              researching, designing, and developing the agency's website. The project involved creating a professional web presence that accurately represents our creative agency brand and showcases our services to potential clients.
            </p>
            <div className="project-meta">
              <div><strong>Role:</strong> Web Designer & Developer</div>
              <div><strong>Date:</strong> Sept 2024 - Now</div>
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
            <h2 className="section-title">🔍 RESEARCH PROCESS</h2>
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
            <h2 className="section-title">🎨 DESIGN PROCESS</h2>
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
            <h2 className="section-title">💻 DEVELOPMENT</h2>
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
            <h2 className="section-title">🎮 3D MODELING EXPERIMENTS</h2>
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
            <h2 className="section-title">🎨 INFOGRAPHIC POSTER</h2>
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
            <h2 className="section-title">🤝 TEAM COLLABORATION</h2>
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
