import { useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import './ProjectsApple.css';
import DragCarousel from '../components/DragCarousel';

const ProjectsApple = ({ setIsTransitioning, setClickPosition }) => {
  const navigate = useNavigate();
  const [activeProject, setActiveProject] = useState('ducks-on-fire');
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  // Refs for all animated sections
  const animatedSectionsRef = useRef([]);

  // Agency research images for carousel
  const agencyImages = [
    '/imgs/inspo.png',
    '/imgs/inspo2.png',
    '/imgs/inspo3.png',
    '/imgs/inspo4.png',
    '/imgs/inspo5.png',
    '/imgs/inspo6.png'
  ];

  // Design iterations images for carousel
  const iterationsImages = [
    '/imgs/iterations.png',
    '/imgs/iterations2.png',
    '/imgs/iterations3.png',
    '/imgs/iterations4.png',
    '/imgs/iterations6.png'
  ];

  // Final design images
  const finalDesignImages = [
    '/imgs/finaldesign.png',
    '/imgs/finaldesign2.png',
    '/imgs/finaldesign3.png',
    '/imgs/finaldesign4.png'
  ];

  // Poster images
  const posterImages = [
    '/imgs/poster.png',
    '/imgs/posterfinal.png'
  ];

  // Short movie storyboard images
  const storyboardImages = [
    '/imgs/storyboard.jpeg',
    '/imgs/storyboard1.png',
    '/imgs/storyboard3.jpeg',
    '/imgs/shortmovieposter.jpeg'
  ];

  // Team collaboration images
  const collaborationImages = [
    '/imgs/teamcharter.png',
    '/imgs/flowspace.png',
    '/imgs/whatsapp.png'
  ];

  // Portfolio project images
  const portfolioInspirationImages = [
    '/imgs/wiiui.png',
    '/imgs/wiiui2.png'
  ];

  const portfolioDesignImages = [
    '/imgs/wiifigma1.png',
    '/imgs/wiifigma2.png',
    '/imgs/wiifigma3.png',
    '/imgs/wiifigma4.png'
  ];

  const handleBackToMenu = (event) => {
    setClickPosition({ x: event.clientX, y: event.clientY });
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/menu');
    }, 400);
  };

  // Handle hash-based scrolling
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // Remove the # from hash
      const id = hash.replace('#', '');

      // Check if the hash is for portfolio sections
      if (id.startsWith('portfolio-')) {
        setActiveProject('portfolio');
      }

      // Wait for content to render, then scroll
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  // Scroll to top when switching projects
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeProject]);

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

    // Observe all sections marked with data-animate
    const sections = document.querySelectorAll('[data-animate="true"]');
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, [activeProject]);

  // Detect when navbar/back button are over dark sections
  useEffect(() => {
    const checkDarkSection = () => {
      const backButton = document.querySelector('.back-button');
      const navbar = document.querySelector('.apple-project-tabs');

      if (!backButton || !navbar) return;

      const backButtonRect = backButton.getBoundingClientRect();
      const navbarRect = navbar.getBoundingClientRect();

      // Check all dark sections
      const darkSections = document.querySelectorAll('.apple-section.apple-dark');
      let isOverDark = false;

      darkSections.forEach((section) => {
        const sectionRect = section.getBoundingClientRect();

        // Check if either button overlaps with dark section
        const backButtonOverlaps =
          backButtonRect.top < sectionRect.bottom &&
          backButtonRect.bottom > sectionRect.top;

        const navbarOverlaps =
          navbarRect.top < sectionRect.bottom &&
          navbarRect.bottom > sectionRect.top;

        if (backButtonOverlaps || navbarOverlaps) {
          isOverDark = true;
        }
      });

      setIsOverDarkSection(isOverDark);
    };

    // Check on scroll
    window.addEventListener('scroll', checkDarkSection);
    // Check initially and when project changes
    checkDarkSection();

    return () => {
      window.removeEventListener('scroll', checkDarkSection);
    };
  }, [activeProject]);

  const renderDucksOnFire = () => (
    <div className="apple-content">
      {/* Hero Section */}
      <section className="apple-hero">
        <h1 className="apple-hero-title">DUCKS ON FIRE</h1>
        <div className="apple-hero-row">
          <p className="apple-hero-subtitle">Creative digital media agency</p>
          <div className="apple-hero-meta">
            <div className="apple-hero-meta-item">
              <span className="apple-hero-meta-label">Timeline</span>
              <span className="apple-hero-meta-value">Sept 2025 - Now</span>
            </div>
            <div className="apple-hero-meta-item">
              <span className="apple-hero-meta-label">Tools</span>
              <div className="apple-hero-tools">
                <span className="apple-tool">Figma</span>
                <span className="apple-tool">Adobe Illustrator</span>
                <span className="apple-tool">Visual Studio Code</span>
                <span className="apple-tool">HTML</span>
                <span className="apple-tool">CSS</span>
                <span className="apple-tool">JavaScript</span>
                <span className="apple-tool">PhotoModeler</span>
                <span className="apple-tool">GitHub Copilot</span>
                <span className="apple-tool">WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Project Overview */}
        <section id="overview" className="apple-section">
          <div className="apple-container">
            <h2 className="apple-section-title">Project Overview</h2>
            <p className="apple-section-text">
              Ducks on Fire is a creative digital media agency. We work on all kinds of digital stuff - websites, games, 3D content, you name it. The whole project is about building the agency from the ground up, which means creating a website, branding, and trying out cool new tech like making 3D models from photos.
            </p>
            <p className="apple-section-text">
              It's basically mixing creative design with coding and tech to make digital things that people actually want to use and interact with.
            </p>
            <h3 className="apple-subsection-title deliverables-title">What I Created</h3>
            <div className="apple-grid-3" data-animate="true">
              <div className="apple-card">
                <h3 className="apple-card-title">Agency Website</h3>
                <p className="apple-card-text">Full website design and development showcasing services and portfolio.</p>
              </div>
              <div className="apple-card">
                <h3 className="apple-card-title">Infographic Poster</h3>
                <p className="apple-card-text">Visual communication piece presenting key agency information.</p>
              </div>
              <div className="apple-card">
                <h3 className="apple-card-title">3D Modeling</h3>
                <p className="apple-card-text">Photogrammetry experiments exploring different software solutions.</p>
              </div>
              <div className="apple-card">
                <h3 className="apple-card-title">Short Movie</h3>
                <p className="apple-card-text">Using photogrammetry to create a short movie showcasing how the technique works.</p>
              </div>
              <div className="apple-card">
                <h3 className="apple-card-title">Team Collaboration</h3>
                <p className="apple-card-text">Coordinated workflows and communication systems across the team.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Process */}
        <section id="research" className="apple-section">
          <div className="apple-container">
            <div className="apple-split" data-animate="true">
              <div className="apple-split-content">
                <h2 className="apple-section-title">Research Process</h2>
                <h3 className="apple-subsection-title">Inspiration Gathering</h3>
                <p className="apple-section-text">
                 I Collected visual ideas from top agencies on Awwwards and Behance to understand current design trends in the agency space. This helped me figure out what design style would work best for Ducks on Fire's brand while keeping it modern and professional.
                </p>
                <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Best, Good & Bad Analysis</h3>
                <p className="apple-section-text">
                  I analyzed about 6 different agency websites and categorized them into what worked really well, what was okay, and what didn't work at all. This analysis gave me clear design principles to follow.
                </p>
                <p className="apple-section-text">
                  <strong>What I found:</strong> The best examples had clear service descriptions right on the homepage, easy-to-find contact info in the navigation, and balanced portfolios that didn't overwhelm visitors.
                </p>
                <p className="apple-section-text">
                  <strong>How I used this:</strong> This research directly influenced my first design iteration - I made sure to include a clear services section at the top of the homepage and put contact info in a visible spot in the navigation. The bad examples showed me what to avoid, like hiding important info in submenus or cluttering the homepage with too many projects.
                </p>
              </div>
              <div className="apple-split-image-stack">
                {agencyImages.map((img, index) => (
                  <img key={index} src={img} alt={`Agency Research ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section id="design-iterations" className="apple-section apple-dark">
          <div className="apple-container">
            <div className="apple-split" data-animate="true">
              <div className="apple-split-content">
                <h2 className="apple-section-title">Design Iterations</h2>
                <p className="apple-section-text">
                  Created multiple design iterations in Figma, using Prototyping. Each version was tested and improved based on feedback from my team and teacher.
                </p>
                <h3 className="apple-subsection-title">Iteration 1: Modern Approach</h3>
                <p className="apple-section-text">
                  I originally wanted to go for a modern, clean look for the website based on my research of current agency trends. I created the first version with a minimal design, lots of white space, and modern typography.
                </p>
                <p className="apple-section-text">
                  <strong>Feedback received:</strong> The brand guide got a complete remake by my teammates. The new direction was more vintage and retro, which didn't match my modern design at all.
                </p>
                <p className="apple-section-text">
                  <strong>What I changed:</strong> I had to completely switch up my design approach to align with the new vintage brand identity. This meant changing typography, color treatments, and overall visual style.
                </p>
                <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Iteration 2-4: Finding the Balance</h3>
                <p className="apple-section-text">
                  The challenge was making it vintage without it feeling old or outdated. I went through several iterations trying different combinations of vintage and modern elements.
                </p>
                <p className="apple-section-text">
                  <strong>Feedback received:</strong> Early vintage versions felt too retro and hard to navigate.
                </p>
                <p className="apple-section-text">
                  <strong>What I changed:</strong> I kept the vintage aesthetic from the brand guide (retro fonts, warmer colors) but added modern elements like clean layouts, proper white space, and smooth interactions. This gave it vintage vibes while staying fresh and usable.
                </p>
                <p className="apple-section-text">
                  <strong>Why this worked:</strong> The final iteration balanced both worlds, it matched the brand identity while still feeling current and professional.
                </p>
              </div>
              <div className="apple-split-image-stack">
                {iterationsImages.map((img, index) => (
                  <img key={index} src={img} alt={`Design Iteration ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* User Testing */}
        <section id="user-testing" className="apple-section">
          <div className="apple-container">
            <h2 className="apple-section-title">User Testing & Feedback</h2>
            <p className="apple-section-text">
              Throughout the design process, I asked teammates, classmates, and friends for feedback on the website. Their input helped me spot issues I didn't notice and improve the overall design. Each piece of feedback led to specific changes in the next iteration.
            </p>
            <div className="apple-stats" data-animate="true">
              <div className="apple-stat">
                <div className="apple-stat-number">Clarity Issue</div>
                <p className="apple-stat-text"><strong>Feedback:</strong> 3 classmates said "I can't tell what this agency actually does" when looking at the homepage.</p>
                <p className="apple-stat-text"><strong>What I changed:</strong> I added a clear hero section at the top with a headline explaining the agency's services and a brief description of what we do.</p>
                <p className="apple-stat-text"><strong>Why:</strong> If visitors don't immediately understand what the agency does, they'll leave. The hero section needed to communicate our value proposition within seconds.</p>
              </div>
            </div>
            <div className="apple-split" data-animate="true">
              <div className="apple-split-content">
                <h3 className="apple-subsection-title">Final Design</h3>
                <p className="apple-section-text">
                  After all the iterations and feedback, the final design balances creativity with professionalism while clearly showing what Ducks on Fire offers.
                </p>
                <h3 className="apple-subsection-title" style={{ marginTop: '80px' }}>Brand Guide Implementation</h3>
                <p className="apple-section-text">
                  Throughout the design process, I followed the brand guide my teammates created to keep everything consistent with Ducks on Fire's visual identity.
                </p>
                <a
                  href="/pdfs/Brandguide Ducks On Fire.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-cta-button apple-cta-primary"
                  style={{ marginTop: '32px', display: 'inline-block' }}
                >
                  View Brand Guide PDF
                </a>
              </div>
              <div className="apple-split-image-stack">
                {finalDesignImages.map((img, index) => (
                  <img key={index} src={img} alt={`Final Design ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Development */}
        <section id="development" className="apple-section apple-dark">
          <div className="apple-container">
            <h2 className="apple-section-title">Development</h2>
            <p className="apple-section-text">
              After finishing the design in Figma, I built the website using HTML, CSS, and JavaScript in Visual Studio Code. The development part meant turning the visual designs into a working website that works on different devices and browsers.
            </p>
            <p className="apple-section-text">
              I focused on creating clean HTML structure, good CSS styling, and interactive JavaScript features that make the website better to use. The coding process needed careful attention to make sure the final website looked exactly like the Figma designs.
            </p>
            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Version Control</h3>
            <p className="apple-section-text">
              I used GitHub to manage all the code changes during development, making sure everything was tracked and documented properly. This helped me keep a clear history of the development and work with my team when needed.
            </p>
            <p className="apple-section-text">
              Regular commits with clear messages helped me track progress and gave me the option to undo changes if needed. The GitHub repository keeps a complete record of the website's development from start to finish.
            </p>
            <a
              href="https://github.com/BerkanHRGL/ducksonfire/commits/main/"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-cta-button apple-cta-primary"
              style={{ marginTop: '32px', display: 'inline-block' }}
            >
              View GitHub Commits
            </a>
            <h3 className="apple-subsection-title">Design Version Control & Collaboration</h3>
            <p className="apple-section-text">
              While I used GitHub for code, we also worked on the brand guide in Figma. Figma's version control works like Git for design, tracking changes, enabling real-time collaboration, and maintaining a complete project history.
            </p>
            <p className="apple-section-text">
              The entire brand guide: colors, fonts, logo variations, spacing rules, were documented in one Figma file. This made it easy to reference exact design values when building the website without constantly asking teammates for details.
            </p>
          </div>
        </section>

        {/* 3D Modeling */}
        <section id="3d-modeling" className="apple-section">
          <div className="apple-container">
            <h2 className="apple-section-title">3D Modeling Experiments</h2>
            <p className="apple-section-text">
              As part of our exploration into digital media technologies, our group experimented with photogrammetry to create 3D models from photographs. We tested multiple software solutions to compare their effectiveness and quality.
            </p>
            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>My Contribution - PhotoModeler</h3>
            <p className="apple-section-text">
              I worked with PhotoModeler, a professional photogrammetry software. While it's a powerful tool, the results I achieved were quite disappointing. The 3D model quality didn't meet our expectations, and I encountered various challenges with the reconstruction process.
            </p>
            <p className="apple-section-text">
              Meanwhile, my teammates experimented with other 3D modeling software. RealityScan came out as the best solution for the group. The quality improvement was significant compared to my PhotoModeler results, producing much cleaner and more accurate 3D models from similar source photographs. This comparison showed us the importance of choosing the right tool for photogrammetry work.
            </p>
            <div className="apple-grid-3" data-animate="true">
              <div className="apple-card-image">
                <img src="/imgs/photomodeler.png" alt="PhotoModeler" />
              </div>
              <div className="apple-card-image">
                <img src="/imgs/realityscan.jpg" alt="RealityScan 1" />
              </div>
              <div className="apple-card-image">
                <img src="/imgs/realityscan2.jpg" alt="RealityScan 2" />
              </div>
            </div>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>RealityScan to Unreal Engine Workflow</h3>
            <p className="apple-section-text">
              After determining that RealityScan produced the best quality results for our needs, I documented the complete workflow from capturing photos to having a game-ready 3D asset in Unreal Engine. This tutorial was essential for our research, as it allowed us to validate that RealityScan wasn't just producing good-looking models, but models that could actually be used in real-time production environments.
            </p>
            <p className="apple-section-text">
              The workflow covers the entire pipeline: importing and aligning images, scaling to real-world dimensions, setting proper orientation, reconstructing the mesh, texturing, optimization for real-time use, and finally exporting to Unreal Engine. Each step includes specific technical settings and decisions that affect the final asset quality and performance.
            </p>
            <p className="apple-section-text">
              <strong>Why This Matters:</strong> Understanding the full pipeline is critical because a photogrammetry tool is only as good as its integration with your production environment. By documenting this end-to-end process, we proved that RealityScan doesn't just create pretty 3D models—it creates production-ready assets that work seamlessly in Unreal Engine, which is exactly what we needed for our virtual production short film.
            </p>
            <a
              href="/pdfs/workflow_tutorial.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-cta-button apple-cta-primary"
              style={{ marginTop: '32px', display: 'inline-block' }}
            >
              View Complete Workflow Tutorial PDF
            </a>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Project Summary Video</h3>
            <p className="apple-section-text">
              After documenting the workflow in written form, I created a video summary using Adobe Premiere Pro that showcases our entire photogrammetry pipeline in action. The video demonstrates the full process from capturing photos to having a working 3D asset in Unreal Engine, making it easier to understand the workflow visually rather than just reading documentation.
            </p>
            <p className="apple-section-text">
              This video serves multiple purposes: it documents our research process for evaluating photogrammetry software, demonstrates video editing skills using Premiere Pro, and provides a shareable resource that explains our technical approach in an accessible format.
            </p>

            <h4 className="apple-card-title" style={{ marginTop: '60px' }}>Initial Version</h4>
            <p className="apple-section-text">
              The first version of the video focused on clearly explaining each step of the workflow. I structured it to follow the same sequence as the written tutorial, adding visual examples and screen recordings to make the technical process easier to follow.
            </p>
            <div className="apple-video-container" style={{ marginTop: '40px', marginBottom: '60px' }}>
              <video
                controls
                style={{ width: '100%', maxWidth: '1200px', borderRadius: '12px' }}
              >
                <source src="/vids/firstversion.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            <h4 className="apple-card-title" style={{ marginTop: '80px' }}>Team Feedback & Iteration</h4>
            <p className="apple-section-text">
              After showing the initial version to Lars and the rest of the project group, I received valuable feedback on pacing, clarity, and visual presentation. The team helped me identify sections that needed more explanation and parts that could be simplified.
            </p>
            <div className="apple-grid-2" data-animate="true" style={{ marginTop: '40px' }}>
              <div className="apple-card-image">
                <img src="/imgs/feedback.png" alt="Team Feedback Session 1" />
                <p style={{ marginTop: '12px', fontSize: '14px', opacity: '0.7', textAlign: 'center' }}>Feedback Session Notes</p>
              </div>
              <div className="apple-card-image">
                <img src="/imgs/feedback2.png" alt="Team Feedback Session 2" />
                <p style={{ marginTop: '12px', fontSize: '14px', opacity: '0.7', textAlign: 'center' }}>Revision Checklist</p>
              </div>
            </div>

            <h4 className="apple-card-title" style={{ marginTop: '80px' }}>Revised Version</h4>
            <p className="apple-section-text">
              Based on the feedback, I refined the video by adjusting the pacing, adding clearer annotations, and improving transitions between workflow steps. I also added more variation throughout the video to keep it engaging and dynamic.
            </p>
            <p className="apple-section-text">
              One key improvement was replacing the initial two static images in the first scene with actual video footage. This change made much more sense because it shows the photogrammetry process from multiple angles in motion, giving viewers a better understanding of how we capture the object from different perspectives. Static images couldn't convey this movement and variety as effectively.
            </p>
            <div className="apple-video-container" style={{ marginTop: '40px', marginBottom: '40px' }}>
              <video
                controls
                style={{ width: '100%', maxWidth: '1200px', borderRadius: '12px' }}
              >
                <source src="/vids/secondversion.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        {/* Short Movie */}
        <section id="short-movie" className="apple-section apple-dark">
          <div className="apple-container">
            <h2 className="apple-section-title">Virtual Production Short Film</h2>

            <h3 className="apple-subsection-title" style={{ marginTop: '60px' }}>Project Overview & Purpose</h3>
            <p className="apple-section-text">
              This project serves two parallel goals that bridge technical skill-building with meaningful storytelling. First, we wanted to go beyond just creating 3D assets—we wanted to see how they actually perform in real production scenarios. Most 3D modeling education stops at asset creation, but we wanted to complete the full pipeline: modeling → virtual environment setup → cinematography → final film.
            </p>
            <p className="apple-section-text">
              Second, we wanted to explore an important narrative: the paradox of technology disconnecting us from real experiences while promising to enhance them. The core message is simple but powerful: don't focus so much on capturing life that you forget to live it.
            </p>

            <div className="apple-grid-2" data-animate="true" style={{ marginTop: '60px' }}>
              <div className="apple-card">
                <h4 className="apple-card-title">Technical Goal</h4>
                <p className="apple-card-text">
                  Demonstrate end-to-end virtual production workflow using LED wall technology and Unreal Engine. Testing our 3D models in practical cinematography scenarios while gaining hands-on experience with industry-standard virtual production techniques.
                </p>
              </div>
              <div className="apple-card">
                <h4 className="apple-card-title">Narrative Goal</h4>
                <p className="apple-card-text">
                  Explore how technology meant to capture memories can prevent us from being present. Think of parents filming their kids through a screen instead of watching them directly. The film prompts reflection without being preachy.
                </p>
              </div>
            </div>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Target Audience & Context</h3>
            <p className="apple-section-text">
              <strong>Primary Audience:</strong> Potential employers in VFX and film production who value practical virtual production experience. This project demonstrates both technical competency and storytelling ability.
            </p>
            <p className="apple-section-text">
              <strong>Format:</strong> 3-4 minute narrative short film<br/>
              <strong>Production Location:</strong> Pixel Playground (virtual production studio)<br/>
              <strong>Team:</strong> Berkan Hergül & Lars (co-directors and cinematographers)
            </p>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Research & Creative Direction</h3>
            <p className="apple-section-text">
              Before production, we analyzed two key references that shaped our creative approach:
            </p>

            <div className="apple-split" data-animate="true" style={{ marginTop: '40px' }}>
              <div className="apple-split-content">
                <h4 className="apple-card-title">Apple Vision Pro Launch Ads (2024)</h4>
                <p className="apple-section-text">
                  We studied the controversial clips of a parent filming children while wearing the Vision Pro headset. These moments resonated with audiences because they felt sad—the parent wasn't participating in the joy, just capturing it through a screen. This visual of technology creating emotional distance became a key motif for our film.
                </p>
                <p className="apple-section-text">
                  <strong>Key Insight:</strong> Technology marketed to "enhance memories" can actually prevent genuine presence in the moment.
                </p>
              </div>
              <div className="apple-split-content">
                <h4 className="apple-card-title">Black Mirror S7E5: "Eulogy"</h4>
                <p className="apple-section-text">
                  This episode became our main narrative anchor. The protagonist curates memories so extensively that he loses authentic connection to them. Only when he finds an unedited cassette tape does he feel real emotion. This structure—someone realizing they've traded authenticity for curation—directly inspired our narrative arc.
                </p>
                <p className="apple-section-text">
                  <strong>Tone Reference:</strong> Melancholic and empathetic, not judgmental. Viewers should see their own digital habits reflected.
                </p>
              </div>
            </div>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Project Brief & Concept Development</h3>
            <p className="apple-section-text">
              Before starting any production work, we developed a comprehensive project brief that outlines our technical approach, narrative structure, and creative inspirations. This document served as our north star throughout pre-production, ensuring Lars and I stayed aligned on vision and goals.
            </p>
            <a
              href="/pdfs/Virtual Production Short Film - Project Brief.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-cta-button apple-cta-primary"
              style={{ marginTop: '32px', display: 'inline-block', marginBottom: '80px' }}
            >
              View Complete Project Brief PDF
            </a>

            <div className="apple-split" data-animate="true">
              <div className="apple-split-content">
                <h3 className="apple-subsection-title">Storyboarding & Shot Planning</h3>
                <p className="apple-section-text">
                  We started by sketching the entire narrative on a whiteboard, mapping out the emotional journey and key visual moments. These rough sketches were photographed and refined into a polished comic-style storyboard using Nano Banana Pro. This visualization process was critical for understanding pacing, composition, and how the story would flow before stepping into the studio.
                </p>
                <p className="apple-section-text">
                  <strong>Production Constraint:</strong> After consulting with Chris, we learned that the Pixel Playground cannot easily accommodate top-down camera angles due to LED wall limitations. We adjusted our storyboard to focus on front-facing and side angles, ensuring our creative vision works within technical constraints.
                </p>
                <p className="apple-section-text">
                  <strong>Shot Structure:</strong> The storyboard maps approximately 12-15 shots across the 3-4 minute runtime, emphasizing emotional intimacy through medium shots and close-ups that showcase the protagonist's isolation.
                </p>
                <a
                  href="/pdfs/cartoonstoryboard-2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apple-cta-button apple-cta-primary"
                  style={{ marginTop: '32px', display: 'inline-block' }}
                >
                  View Detailed Storyboard PDF
                </a>
              </div>
              <div className="apple-split-image-stack">
                {storyboardImages.map((img, index) => (
                  <img key={index} src={img} alt={`Storyboard ${index + 1}`} />
                ))}
              </div>
            </div>

            <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Why This Project Matters</h3>
            <p className="apple-section-text">
              This isn't just about making a short film—it's about proving we understand the full production pipeline and can deliver both technically impressive and emotionally resonant work. Virtual production is rapidly becoming the industry standard (see: The Mandalorian, Avatar sequels), and hands-on experience with LED wall workflows is invaluable for breaking into VFX and film production.
            </p>
            <p className="apple-section-text">
              Beyond technical skills, this project combines my interests in cinematography and 3D modeling into a cohesive portfolio piece that demonstrates strategic thinking, creative problem-solving, and the ability to navigate real production constraints.
            </p>
          </div>
        </section>

        {/* Poster Design */}
        <section id="poster" className="apple-section">
          <div className="apple-container">
            <div className="apple-split" data-animate="true">
              <div className="apple-split-content">
                <h2 className="apple-section-title">Infographic Poster</h2>
                <p className="apple-section-text">
                  As part of the Ducks on Fire project, I created an infographic poster to visually communicate key information about what we do as an agency. This poster needed to be both eye-catching and informative while following the brand guidelines.
                </p>
                <h3 className="apple-subsection-title">Design Iterations</h3>
                <p className="apple-section-text">
                  I started with an initial design concept that laid out the agency information and visual elements. After gathering feedback from my team and teachers, I identified areas for improvement.
                </p>
                <p className="apple-section-text">
                  The feedback helped me create a refined final version that better represents the Ducks on Fire brand and communicates the information more effectively. The iterative process improved both the visual appeal and the clarity of the message.
                </p>
              </div>
              <div className="apple-split-image-stack">
                {posterImages.map((img, index) => (
                  <img key={index} src={img} alt={`Poster ${index === 0 ? 'Initial Design' : 'Final Design'}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Collaboration */}
        <section id="team-collaboration" className="apple-section">
          <div className="apple-container">
            <div className="apple-split" data-animate="true">
              <div className="apple-split-content">
                <h2 className="apple-section-title">Team Collaboration</h2>
                <p className="apple-section-text">
                  We started this project by creating a team charter that set clear rules and expectations for how we would work together. This helped us understand everyone's roles and how we would communicate during the project.
                </p>
                <p className="apple-section-text">
                  For task management, we use Flowspace, which works like Trello. We split up all our tasks there and put important project information that everyone needs to see. This keeps us organized and makes sure nothing gets forgotten.
                </p>
                <p className="apple-section-text">
                  Our daily communication happens through WhatsApp where we share quick updates, ask questions, and coordinate our work. This keeps everyone in the loop about what's happening with the project.
                </p>
              </div>
              <div className="apple-split-image-stack">
                {collaborationImages.map((img, index) => (
                  <img key={index} src={img} alt={`Team Collaboration ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final Section */}
        <section className="apple-section apple-final">
          <div className="apple-container">
            <h2 className="apple-section-title">View the Project</h2>
            <div className="apple-cta-group">
              <a
                href="https://i554530.hera.fontysict.net/ducksonfire/"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-cta-button apple-cta-primary"
              >
                View Live Site
              </a>
              <a
                href="https://github.com/BerkanHRGL/ducksonfire"
                target="_blank"
                rel="noopener noreferrer"
                className="apple-cta-button apple-cta-secondary"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </section>
    </div>
  );

  const renderPortfolio = () => (
    <div className="apple-content">
      {/* Hero Section */}
      <section className="apple-hero">
        <h1 className="apple-hero-title">WII-INSPIRED PORTFOLIO</h1>
        <div className="apple-hero-row">
          <p className="apple-hero-subtitle">Personal digital showcase</p>
          <div className="apple-hero-meta">
            <div className="apple-hero-meta-item">
              <span className="apple-hero-meta-label">Timeline</span>
              <span className="apple-hero-meta-value">Sept 2025 - Now</span>
            </div>
            <div className="apple-hero-meta-item">
              <span className="apple-hero-meta-label">Tools</span>
              <div className="apple-hero-tools">
                <span className="apple-tool">Figma</span>
                <span className="apple-tool">Visual Studio Code</span>
                <span className="apple-tool">GitHub</span>
                <span className="apple-tool">Claude</span>
                <span className="apple-tool">React</span>
                <span className="apple-tool">HTML</span>
                <span className="apple-tool">CSS</span>
                <span className="apple-tool">JavaScript</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section id="portfolio-overview" className="apple-section">
        <div className="apple-container">
          <h2 className="apple-section-title">Project Overview</h2>
          <p className="apple-section-text">
            This portfolio website is my personal digital showcase inspired by the Nintendo Wii menu. I wanted to create something that really stands out and shows my personality, not just another boring portfolio website.
          </p>
          <p className="apple-section-text">
            The goal was simple: make a portfolio that people actually remember and enjoy using, while still looking professional enough to showcase my work properly.
          </p>
        </div>
      </section>

      {/* Research & Inspiration */}
      <section id="portfolio-research" className="apple-section">
        <div className="apple-container">
          <div className="apple-split" data-animate="true">
            <div className="apple-split-content">
              <h2 className="apple-section-title">Research & Inspiration</h2>
              <p className="apple-section-text">
                I've always loved the Nintendo Wii's menu system. It's simple, playful, and just feels good to use. The way the channels bounce and move around, the clean design, the interactive elements - it all felt perfect for what I wanted to create.
              </p>
              <p className="apple-section-text">
                I collected screenshots and videos of the Wii menu to understand what made it special. The dot grid background, the channel cards, the smooth transitions - these all became key elements I wanted to include in my own way.
              </p>
            </div>
            <div className="apple-split-image-stack">
              {portfolioInspirationImages.map((img, index) => (
                <img key={index} src={img} alt={`Wii Inspiration ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section id="portfolio-design" className="apple-section apple-dark">
        <div className="apple-container">
          <div className="apple-split" data-animate="true">
            <div className="apple-split-content">
              <h2 className="apple-section-title">Design Process</h2>
              <h3 className="apple-subsection-title">Concepts</h3>
              <p className="apple-section-text">
                I started sketching out ideas in Figma, trying different layouts and seeing how I could adapt the Wii aesthetic to work as a portfolio. The biggest challenge was making it feel nostalgic and fun while still being professional.
              </p>
              <p className="apple-section-text">
                Some early versions were too playful and didn't feel serious enough for a portfolio. Others were too formal and lost the fun Wii vibe completely. It took multiple iterations to find the right balance.
              </p>
              <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Interactions</h3>
              <p className="apple-section-text">
                I wanted the portfolio to feel alive and interactive, not just static pages. The dot grid background that responds to your mouse, the cards that expand when you hover, the smooth page transitions - all of these came from wanting to create that same satisfying feeling the Wii menu had.
              </p>
              <p className="apple-section-text">
                I made sure every interaction had a purpose though. It needed to be fun but not distracting or annoying. The animations needed to be smooth and feel natural, not flashy or overwhelming.
              </p>
            </div>
            <div className="apple-split-image-stack">
              {portfolioDesignImages.map((img, index) => (
                <img key={index} src={img} alt={`Design Process ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Development */}
      <section id="portfolio-development" className="apple-section">
        <div className="apple-container">
          <h2 className="apple-section-title">Development</h2>
          <p className="apple-section-text">
            Building this portfolio was definitely the most fun part. I got to bring all my design ideas to life and make everything actually work. I used React because it makes it easy to organize everything into components and manage all the interactive parts.
          </p>
          <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Technical Challenges</h3>
          <p className="apple-section-text">
            The hardest thing to get right was the page transitions. I wanted it to feel like you're actually entering a Wii channel when you click on something. Getting that circular wipe effect to start exactly where you click and expand smoothly took a lot of trial and error.
          </p>
          <p className="apple-section-text">
            The dot grid background was also surprisingly complex. Making all those dots move smoothly when you move your mouse around, having them react to each other, and keeping it all running at 60fps - that took some serious optimization.
          </p>
          <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Customization</h3>
          <p className="apple-section-text">
            While I took heavy inspiration from the Wii, I didn't want to just copy it. I added modern design elements, updated the color scheme to fit my personal brand, and included interactive features that wouldn't have been possible on the actual Wii.
          </p>
        </div>
      </section>

      {/* Iterations & Feedback */}
      <section id="portfolio-feedback" className="apple-section apple-dark">
        <div className="apple-container">
          <h2 className="apple-section-title">Iterations & Feedback</h2>
          <h3 className="apple-subsection-title">Balancing Creativity & Professionalism</h3>
          <p className="apple-section-text">
            The biggest challenge was making sure the playful Wii theme didn't make my portfolio look unprofessional or childish. I showed early versions to friends and classmates to get feedback. Some said it was too game-like, others said it wasn't playful enough. Finding that sweet spot took a lot of adjustments and fine-tuning.
          </p>
          <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Responsiveness Testing</h3>
          <p className="apple-section-text">
            I had to make sure everything worked smoothly on different devices. The animations that looked perfect on my laptop sometimes lagged on phones, and the layout that worked great on desktop looked cramped on smaller screens. I simplified some animations for mobile devices and created different layouts for various screen sizes.
          </p>
        </div>
      </section>

      {/* What I Learned */}
      <section className="apple-section">
        <div className="apple-container">
          <h2 className="apple-section-title">What I Learned</h2>
          <h3 className="apple-subsection-title">Design Iteration</h3>
          <p className="apple-section-text">
            This project taught me a lot about balancing creativity with usability. It's easy to get carried away with cool effects and animations, but you have to always ask yourself: does this actually make the experience better, or is it just showing off? I learned to be critical of my own work and cut ideas that don't serve the end goal.
          </p>
          <h3 className="apple-subsection-title">Development & Version Control</h3>
          <p className="apple-section-text">
            On the coding side, I got way better at React and working with animations. I learned how to optimize performance, manage complex state, and structure my code so it's actually maintainable.
          </p>
          <p className="apple-section-text">
            I used GitHub for version control throughout development. Making regular commits and organizing my work made it so much easier when I needed to go back and change something or figure out why something broke.
          </p>
          <h3 className="apple-subsection-title">Result</h3>
          <p className="apple-section-text">
            I'm really proud of what I created. It feels unique and personal while still being professional. People who've seen it remember it, which was exactly what I was going for.
          </p>
        </div>
      </section>

      {/* Final Section */}
      <section className="apple-section apple-final">
        <div className="apple-container">
          <h2 className="apple-section-title">View the Project</h2>
          <div className="apple-cta-group">
            <a
              href="https://github.com/BerkanHRGL/portfoliowii"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-cta-button apple-cta-primary"
            >
              GitHub Repo (Original)
            </a>
            <a
              href="https://github.com/BerkanHRGL/portfoliowii-react"
              target="_blank"
              rel="noopener noreferrer"
              className="apple-cta-button apple-cta-secondary"
            >
              GitHub Repo (React Version)
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  return (
    <div className="projects-apple-view">
      <button
        className={`back-button ${isOverDarkSection ? 'over-dark' : ''}`}
        onClick={handleBackToMenu}
      >
        ← Back to Menu
      </button>

      <div className={`apple-project-tabs ${isOverDarkSection ? 'over-dark' : ''}`}>
        <button
          className={`apple-tab ${activeProject === 'ducks-on-fire' ? 'active' : ''}`}
          onClick={() => setActiveProject('ducks-on-fire')}
        >
          Ducks on Fire
        </button>
        <button
          className={`apple-tab ${activeProject === 'portfolio' ? 'active' : ''}`}
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

export default ProjectsApple;
