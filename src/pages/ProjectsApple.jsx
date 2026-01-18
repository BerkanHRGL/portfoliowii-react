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

  // A/B Testing feedback images
  const feedbackImages = [
    '/imgs/feedbackv1.png',
    '/imgs/feedbackv2.png',
    '/imgs/feedbackv3.png',
    '/imgs/feedbackv5.png',
    '/imgs/feedbackv6.png',
    '/imgs/feedbackv7.png'
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
              <h3 className="apple-subsection-title">Library Research</h3>
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
                Created multiple design iterations in Figma, using <strong>Prototyping</strong>. Each version was tested and improved based on feedback from my team and teacher using <strong>Peer Review</strong>.
              </p>
              <h3 className="apple-subsection-title">Iteration 1: Modern Approach</h3>
              <p className="apple-section-text">
                I originally wanted to go for a modern, clean look for the website based on my research of current agency trends. I created the first version with a minimal design, lots of white space, and modern typography.
              </p>
              <p className="apple-section-text">
                <strong>Feedback received:</strong> We decided as a team to completely remake the brand guide. Working together in Figma, we shifted the direction to something more vintage and retro, which didn't match my modern design at all.
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
              <div className="apple-stat-number">Clarity Issue (Round 1 - 3 Participants)</div>
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
                Throughout the design process, I worked with the brand guide we created together as a team to keep everything consistent with Ducks on Fire's visual identity.
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
            While I used GitHub for code, our team worked together on the brand guide using Figma. Figma's real-time collaboration meant we could all work on the same file at once. We could see each other's cursors moving around, leave comments on specific elements, and watch changes happen live. It's honestly way better than passing files back and forth.
          </p>
          <p className="apple-section-text">
            Figma's version control works like Git for design. Every change gets tracked automatically, you can see the full history of who changed what and when, and you can always go back to earlier versions if needed. This was super helpful when we were experimenting with different color palettes and typography choices. If something didn't work out, we could just revert to a previous version.
          </p>
          <p className="apple-section-text">
            The entire brand guide (colors, fonts, logo variations, spacing rules) lived in one Figma file that we all had access to. This meant I could reference exact design values when building the website without constantly asking teammates for details. Everything was already documented and updated in real-time by the whole team.
          </p>
        </div>
      </section>

      {/* 3D Modeling */}
      <section id="3d-modeling" className="apple-section">
        <div className="apple-container">
          <h2 className="apple-section-title">3D Modeling Experiments</h2>
          <p className="apple-section-text">
            We wanted to try out photogrammetry, which is basically creating 3D models from regular photos. Our group tested different software to see which one gave us the best results.
          </p>
          <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>My Contribution - PhotoModeler</h3>
          <p className="apple-section-text">
            I tried using PhotoModeler, which is supposed to be a professional tool. Honestly, the results were pretty disappointing. The 3D models it created just didn't look good enough, and I ran into a bunch of problems getting the reconstruction to work properly.
          </p>
          <p className="apple-section-text">
            While I was struggling with PhotoModeler, my teammates were testing other software. RealityScan ended up being way better. The difference in quality was huge. Their models came out much cleaner and more accurate even though we were using similar photos. It really showed us that picking the right tool makes a massive difference.
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
            Once we figured out that RealityScan gave us the best results, I wanted to document the whole process from taking photos to actually having a working 3D asset in Unreal Engine. The thing is, a 3D model can look great but be completely useless in a real production environment, so I needed to make sure everything would actually work when we tried to use it.
          </p>
          <p className="apple-section-text">
            The workflow covers everything you need to do. You import and align your images, scale everything to match real world dimensions, set the right orientation, reconstruct the mesh, add textures, optimize it so it runs smoothly in real-time, and then export it to Unreal Engine. Each step involves specific settings and choices that affect how the final asset looks and performs.
          </p>
          <p className="apple-section-text">
            <strong>Why this matters:</strong> A photogrammetry tool is only useful if it integrates well with your production setup. By documenting this complete process, we proved that RealityScan creates assets that actually work in Unreal Engine, not just models that look nice in screenshots. That's what we needed.
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
            After writing up the workflow, I figured it would be way easier to understand if people could actually see it in action. So I put together a video in Adobe Premiere Pro showing the whole photogrammetry pipeline from start to finish. Watching the process is just more intuitive than reading through a bunch of steps.
          </p>
          <p className="apple-section-text">
            The video does a few things at once. It shows how we evaluated different photogrammetry tools, it's a chance to show some video editing work, and it's something I can share with people who want to understand what we did without diving into technical documentation.
          </p>

          <h4 className="apple-card-title" style={{ marginTop: '60px' }}>Initial Version</h4>
          <p className="apple-section-text">
            For the first version, I just wanted to make sure each step was clear and easy to understand. I followed the same order as the written tutorial and added screen recordings and visual examples so people could actually see what's happening at each stage.
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
            After showing the first version to my project group, they gave me feedback on the pacing, how clear things were, and the overall look. They helped me spot parts that needed better explanation and other parts that were too complicated.
          </p>
          <div className="apple-grid-2" data-animate="true" style={{ marginTop: '40px' }}>
            <div className="apple-card-image">
              <img src="/imgs/feedback.png" alt="Team Feedback Session 1" />
              <p style={{ marginTop: '12px', fontSize: '14px', opacity: '0.7', textAlign: 'center' }}>Feedback Session Notes</p>
            </div>
            <div className="apple-card-image">
              <img src="/imgs/feedback2.png" alt="Team Feedback Session 2" />
              <p style={{ marginTop: '12px', fontSize: '14px', opacity: '0.7', textAlign: 'center' }}>Feedback Session Notes</p>
            </div>
          </div>

          <h4 className="apple-card-title" style={{ marginTop: '80px' }}>Revised Version</h4>
          <p className="apple-section-text">
            After getting feedback, I worked on the pacing, made the annotations clearer, and smoothed out the transitions between steps. I also added more variation throughout to keep it interesting.
          </p>
          <p className="apple-section-text">
            One big improvement was swapping out the two static images at the start with actual video footage. It just makes way more sense because you can see the photogrammetry process from multiple angles as it's happening. Static images can't really show that movement and variety the same way.
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
            This project has two main goals. First, we didn't want to just create 3D assets and call it done. We wanted to actually use them in a real production to see how they perform. Most 3D work in school stops at making the model, but we wanted to go through the entire process from modeling all the way to a finished film.
          </p>
          <p className="apple-section-text">
            Second, we wanted to tell a story about something we all do. Technology is supposed to help us capture and remember moments, but sometimes we get so focused on filming that we forget to actually experience what's happening. The message is pretty straightforward: don't get so caught up in recording life that you miss living it.
          </p>

          <div className="apple-grid-2" data-animate="true" style={{ marginTop: '60px' }}>
            <div className="apple-card">
              <h4 className="apple-card-title">Technical Goal</h4>
              <p className="apple-card-text">
                Show the complete virtual production workflow using Unreal Engine. We're testing our 3D models in actual cinematography scenarios and getting hands-on experience with the same techniques used in professional productions.
              </p>
            </div>
            <div className="apple-card">
              <h4 className="apple-card-title">Narrative Goal</h4>
              <p className="apple-card-text">
                Explore how technology that's meant to capture memories can actually stop us from being present. Like when parents film their kids through a screen instead of just watching them. The film makes you think about it without being preachy.
              </p>
            </div>
          </div>

          <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Research & Creative Direction</h3>
          <p className="apple-section-text">
            Before we started, we looked at two things that really influenced how we approached the film:
          </p>

          <div className="apple-split" data-animate="true" style={{ marginTop: '40px' }}>
            <div className="apple-split-content">
              <h4 className="apple-card-title">Apple Vision Pro Launch Ads (2024)</h4>
              <p className="apple-section-text">
                We watched those controversial clips where a parent is filming their kids while wearing the Vision Pro. People found them kind of sad because the parent is just recording through a screen instead of actually being part of the moment. That image of technology creating distance between people became a big part of our film.
              </p>
              <p className="apple-section-text">
                <strong>Key insight:</strong> Technology that's supposed to enhance memories can actually stop you from being present.
              </p>
            </div>
            <div className="apple-split-content">
              <h4 className="apple-card-title">Black Mirror S7E5: "Eulogy"</h4>
              <p className="apple-section-text">
                This episode was our main inspiration. The main character spends so much time organizing and curating his memories that he loses the real connection to them. The only time he feels something genuine is when he finds an old cassette tape that he never edited. That idea of trading real experiences for perfect recordings is what our story is about.
              </p>
              <p className="apple-section-text">
                <strong>Tone we're going for:</strong> Sad and understanding, not judging people. We want viewers to see their own habits in it.
              </p>
            </div>
          </div>

          <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Project Brief & Concept Development</h3>
          <p className="apple-section-text">
            Before we started making anything, we wrote up a full project brief covering our technical plan, story structure, and what inspired us. This document was basically our guide for the whole pre-production process, making sure Lars and I were on the same page about what we wanted to make.
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
                We started by sketching the whole story on a whiteboard, figuring out the emotional beats and important visual moments. Then we took photos of those rough sketches and turned them into a proper comic-style storyboard using Nano Banana Pro. This let us understand the pacing, figure out compositions, and see how the story flows before we actually started shooting.
              </p>
              <p className="apple-section-text">
                <strong>Production issue:</strong> After getting feedback from Chris, we found out the Pixel Playground can't really do top-down camera angles because of technical limitations. So we changed our storyboard to stick with front-facing and side shots instead, making sure what we wanted to create would actually work in the studio.
              </p>
              <p className="apple-section-text">
                <strong>Shot structure:</strong> The storyboard has about 12-15 shots spread across the 3-4 minute runtime. We're focusing on medium shots and close-ups to create that intimate feeling and show how isolated the main character is.
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
            This isn't just about making a short film. It's about showing that we understand how the whole production pipeline works and that we can make something that's both technically solid and emotionally engaging. Virtual production is becoming the standard in the industry (just look at The Mandalorian or the Avatar sequels), so getting hands-on experience with this workflow is really valuable if you want to work in VFX or film.
          </p>
          <p className="apple-section-text">
            On top of the technical stuff, this project brings together my interests in cinematography and 3D modeling into one piece. It shows I can think strategically, solve creative problems, and work within real production limits instead of just ideal scenarios.
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

      {/* Final Presentation */}
      <section id="final-presentation" className="apple-section apple-dark">
        <div className="apple-container">
          <h2 className="apple-section-title">Final Presentation</h2>
          <p className="apple-section-text">
            At the end of the semester, we presented our Ducks on Fire project. I took the initiative to start the presentation and explain what we worked on.
          </p>
          <p className="apple-section-text">
            I talked about our workflow for photogrammetry and how we used RealityScan to create 3D models for Unreal Engine. I also covered the video tutorial I made that shows the process from start to finish - basically how to get from photos to a working 3D asset in Unreal.
          </p>
          <p className="apple-section-text">
            It was a good opportunity to show what we built and explain the technical process behind it.
          </p>

          <div className="video-container" style={{ marginTop: '60px' }}>
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              height: 0,
              overflow: 'hidden',
              borderRadius: '12px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}>
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 0
                }}
                src="https://www.youtube.com/embed/BSOgwETwE0w"
                title="Ducks on Fire Final Presentation"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <p className="apple-section-text" style={{ marginTop: '40px', fontStyle: 'italic', color: '#888' }}>
            Watch the full presentation to see how we explained our project process, demonstrated our work, and answered questions from teachers and peers.
          </p>
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
                <span className="apple-tool">Three.js</span>
                <span className="apple-tool">HTML</span>
                <span className="apple-tool">CSS</span>
                <span className="apple-tool">JavaScript</span>
                <span className="apple-tool">Google Forms</span>
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

      {/* 3D Intro Experience */}
      <section id="portfolio-3d-intro" className="apple-section apple-dark">
        <div className="apple-container">
          <h2 className="apple-section-title">3D Intro Experience</h2>
          <h3 className="apple-subsection-title">Why I Added the 3D Room</h3>
          <p className="apple-section-text">
            After working with 3D models and photogrammetry in the Ducks on Fire project, I wanted to challenge myself by implementing 3D technology directly into my portfolio website. The experience with 3D modeling made me curious about how I could use these skills in a web environment.
          </p>
          <p className="apple-section-text">
            I decided to create an interactive 3D living room intro with a TV that users can click to enter the portfolio. This wasn't just about making something cool - it was about learning a new technology stack and pushing myself out of my comfort zone.
          </p>
          <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Learning Three.js & React Three Fiber</h3>
          <p className="apple-section-text">
            This was my first time working with <strong>Three.js</strong>, a JavaScript library for creating 3D graphics in the browser, and <strong>React Three Fiber</strong>, which makes Three.js work smoothly with React. The learning curve was steep, but it was exactly the challenge I was looking for.
          </p>
          <p className="apple-section-text">
            I had to learn concepts like WebGL rendering, 3D scene management, camera controls, lighting systems, texture mapping, and mesh manipulation. Getting the homepage screenshot to display correctly on the TV screen in the 3D room took multiple attempts and debugging sessions to understand UV coordinates and texture orientation.
          </p>
          <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Technical Challenges - Model Optimization</h3>
          <p className="apple-section-text">
            The original 3D room model was 95MB, which caused significant lag for users on different devices and browsers. I learned about 3D model optimization techniques and used <strong>gltf-transform</strong> to compress the model down to 16.79MB (82% smaller) while preserving all the important details like UV coordinates for textures.
          </p>
          <p className="apple-section-text">
            This involved experimenting with different compression methods, testing Draco compression, resizing textures, and understanding the trade-offs between file size and visual quality. I had to debug issues where aggressive optimization broke the TV screen texture by corrupting UV coordinates.
          </p>
          <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Performance Optimization & Browser Testing</h3>
          <p className="apple-section-text">
            Through user feedback, I discovered that the 3D intro performed differently across browsers. Chrome and Opera showed more lag compared to Brave, Edge, and Safari due to differences in how browsers handle WebGL and GPU resources. This taught me the importance of cross-browser testing and understanding browser rendering engines.
          </p>
        </div>
      </section>

      {/* A/B Testing & User Research */}
      <section id="portfolio-ab-testing" className="apple-section">
        <div className="apple-container">
          <h2 className="apple-section-title">A/B Testing & User Research</h2>
          <h3 className="apple-subsection-title">Why I Conducted User Research</h3>
          <p className="apple-section-text">
            Adding a 3D intro is a bold design choice - it could either make the portfolio memorable and engaging, or it could slow down the experience and frustrate users. I needed to validate this decision with real user feedback rather than just assuming it was a good idea.
          </p>
          <p className="apple-section-text">
            For my learning outcomes, it was important to demonstrate that I can make <strong>data-driven design decisions</strong>. User research and A/B testing are industry-standard practices for validating design choices, so conducting this test shows I understand how to properly evaluate UX decisions.
          </p>
          <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Research Methodology</h3>
          <p className="apple-section-text">
            I created a comprehensive Google Forms survey with 12 questions covering first impressions, performance metrics, design aesthetic, user experience, and overall preference. The survey gathered responses from 6 participants to validate whether the 3D intro was a successful design choice.
          </p>
        </div>
      </section>

      {/* Survey Results */}
      <section id="portfolio-survey-results" className="apple-section apple-dark">
        <div className="apple-container">
          <h2 className="apple-section-title">Survey Results</h2>
          <div className="apple-split apple-split-start" data-animate="true">
            <div className="apple-split-content">
              <h3 className="apple-subsection-title">Performance & Technical</h3>
              <p className="apple-section-text">
                The optimization work paid off. Most users experienced very fast load times (under 3 seconds), and the majority reported smooth performance with no lag. A few noticed minor hiccups, but nothing that significantly impacted their experience. This confirms that compressing the model from 95MB to 16.79MB made a real difference for users on different devices and browsers.
              </p>
              <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>First Impressions & Engagement</h3>
              <p className="apple-section-text">
                User reactions were split but positive - half found it really cool and engaging, while the other half thought it was nice but not necessary. What matters though is that everyone found it more engaging than a standard landing page. This shows the 3D intro successfully makes the portfolio more memorable and interactive compared to typical websites.
              </p>
              <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Design & Aesthetic Fit</h3>
              <p className="apple-section-text">
                The cozy living room concept resonated well with users. Many felt nostalgic Wii/retro vibes, which was exactly what I was going for. Most agreed the 3D intro fits with the overall portfolio aesthetic, though some felt it could be integrated better. Visual quality ratings were mixed, with responses ranging from average to excellent.
              </p>
              <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>User Experience</h3>
              <p className="apple-section-text">
                Most users understood they needed to click the TV to enter, either immediately or after reading the text. The typewriter effect was well-received - users felt it added personality to the intro, and no one found it annoying or too slow.
              </p>
              <h3 className="apple-subsection-title" style={{ marginTop: '120px' }}>Final Verdict</h3>
              <p className="apple-section-text">
                The most important finding: <strong>everyone preferred the portfolio WITH the 3D intro over without it</strong>. Most users felt it made the portfolio look more professional rather than less, which was a major concern I had. When asked if they'd recommend keeping it, the majority said yes - either definitely keep it or keep it with some improvements.
              </p>
              <p className="apple-section-text">
                This validates that the 3D intro was a successful design choice. It makes the portfolio more memorable and engaging without looking unprofessional or gimmicky. The feedback also gives me clear direction for improvements while confirming I should keep this feature.
              </p>
            </div>
            <div className="apple-split-image-stack">
              {feedbackImages.map((img, index) => (
                <img key={index} src={img} alt={`Survey Results ${index + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Iterations & Feedback */}
      <section id="portfolio-feedback" className="apple-section apple-dark">
        <div className="apple-container">
          <h2 className="apple-section-title">Iterations & Feedback</h2>
          <h3 className="apple-subsection-title" style={{ marginTop: '60px' }}>Balancing Creativity & Professionalism</h3>
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
