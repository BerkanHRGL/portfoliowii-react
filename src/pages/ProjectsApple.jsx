import { useNavigate } from 'react-router-dom';
import './ProjectsApple.css';

const ProjectsApple = ({ setIsTransitioning, setClickPosition }) => {
  const navigate = useNavigate();

  const handleBackToMenu = (event) => {
    setClickPosition({ x: event.clientX, y: event.clientY });
    setIsTransitioning(true);
    setTimeout(() => {
      navigate('/');
    }, 400);
  };

  return (
    <div className="projects-apple-view">
      <button className="back-button" onClick={handleBackToMenu}>
        ← Back to Menu
      </button>

      <div className="apple-content">
        {/* Hero Section */}
        <section className="apple-hero">
          <h1 className="apple-hero-title">DUCKS ON FIRE</h1>
          <p className="apple-hero-subtitle">Creative digital media agency</p>
          <p className="apple-hero-description">
            Research. Design. Develop. A complete journey from concept to reality.
          </p>
        </section>

        {/* Methodology Overview */}
        <section className="apple-section apple-dark">
          <div className="apple-container">
            <h2 className="apple-section-title">Design Methodology</h2>
            <p className="apple-section-text">
              An iterative design process based on the DOT Framework. Systematically working through from research to final product.
            </p>
            <div className="apple-grid-4">
              <div className="apple-card">
                <div className="apple-card-number">1</div>
                <h3 className="apple-card-title">WHAT?</h3>
                <p className="apple-card-text">Research (Best, Good & Bad Analysis + Library Research)</p>
              </div>
              <div className="apple-card">
                <div className="apple-card-number">2</div>
                <h3 className="apple-card-title">WHY?</h3>
                <p className="apple-card-text">Define requirements based on insights</p>
              </div>
              <div className="apple-card">
                <div className="apple-card-number">3</div>
                <h3 className="apple-card-title">HOW?</h3>
                <p className="apple-card-text">Design & develop (Prototyping + Version Control)</p>
              </div>
              <div className="apple-card">
                <div className="apple-card-number">4</div>
                <h3 className="apple-card-title">WHAT IF?</h3>
                <p className="apple-card-text">Test & iterate (Usability Testing + Peer Review)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Research Process */}
        <section className="apple-section">
          <div className="apple-container">
            <div className="apple-split">
              <div className="apple-split-content">
                <h2 className="apple-section-title">Research Process</h2>
                <p className="apple-badge">DOT Framework: WHAT?</p>
                <h3 className="apple-subsection-title">Best, Good & Bad Analysis</h3>
                <p className="apple-section-text">
                  Analyzed about 6 different agency websites and categorized them into what worked really well, what was okay, and what didn't work at all. The best examples had clear service descriptions, easy-to-find contact info, and balanced portfolios.
                </p>
                <h3 className="apple-subsection-title">Inspiration Gathering</h3>
                <p className="apple-section-text">
                  Collected visual ideas from top agencies on Awwwards and Behance. This helped figure out what design style would work best for Ducks on Fire's brand.
                </p>
              </div>
              <div className="apple-split-image">
                <img src="/imgs/inspo.png" alt="Research Inspiration" />
              </div>
            </div>
          </div>
        </section>

        {/* Design Process */}
        <section className="apple-section apple-dark">
          <div className="apple-container">
            <h2 className="apple-section-title">Design Iterations</h2>
            <p className="apple-badge">DOT Framework: HOW? + WHAT IF?</p>
            <p className="apple-section-text-center">
              Created multiple design iterations in Figma, using Prototyping and Peer Review. Each version was tested and improved based on feedback.
            </p>
            <div className="apple-timeline">
              <div className="apple-timeline-item">
                <div className="apple-timeline-marker">1</div>
                <div className="apple-timeline-content">
                  <h3 className="apple-timeline-title">Content Hierarchy</h3>
                  <p className="apple-timeline-problem"><strong>Problem:</strong> Layout felt cluttered with too much focus on game projects.</p>
                  <p className="apple-timeline-feedback"><strong>Feedback:</strong> "It's hard to understand what services the agency actually offers."</p>
                  <p className="apple-timeline-solution"><strong>Solution:</strong> Created a clear services section at the top and added more white space.</p>
                </div>
              </div>
              <div className="apple-timeline-item">
                <div className="apple-timeline-marker">2</div>
                <div className="apple-timeline-content">
                  <h3 className="apple-timeline-title">Navigation</h3>
                  <p className="apple-timeline-problem"><strong>Problem:</strong> Navigation was confusing, hard to find contact info.</p>
                  <p className="apple-timeline-feedback"><strong>Feedback:</strong> "I couldn't find the contact information easily."</p>
                  <p className="apple-timeline-solution"><strong>Solution:</strong> Made navigation sticky with a visible "Contact" button. Reorganized content flow.</p>
                </div>
              </div>
              <div className="apple-timeline-item">
                <div className="apple-timeline-marker">3</div>
                <div className="apple-timeline-content">
                  <h3 className="apple-timeline-title">Visual Refinement</h3>
                  <p className="apple-timeline-problem"><strong>Problem:</strong> Colors were too aggressive, fonts inconsistent.</p>
                  <p className="apple-timeline-feedback"><strong>Feedback:</strong> "The colors feel too aggressive and don't match the 'creative agency' vibe."</p>
                  <p className="apple-timeline-solution"><strong>Solution:</strong> Reduced color saturation by 30% and standardized to two fonts from the brand guide.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Testing */}
        <section className="apple-section">
          <div className="apple-container">
            <h2 className="apple-section-title">User Testing & Feedback</h2>
            <p className="apple-badge">DOT Framework: WHAT IF?</p>
            <p className="apple-section-text-center">
              Conducted multiple rounds of Usability Testing with teammates, classmates, and friends. Each round revealed specific issues that were fixed in the next iteration.
            </p>
            <div className="apple-stats">
              <div className="apple-stat">
                <div className="apple-stat-number">Round 1</div>
                <p className="apple-stat-text">3 classmates couldn't tell what the agency does. Added clear hero section.</p>
              </div>
              <div className="apple-stat">
                <div className="apple-stat-number">Round 2</div>
                <p className="apple-stat-text">Team & teacher: colors too bright. Reduced saturation from 100% to 70%.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Development */}
        <section className="apple-section apple-dark">
          <div className="apple-container">
            <div className="apple-split apple-split-reverse">
              <div className="apple-split-content">
                <h2 className="apple-section-title">Development</h2>
                <p className="apple-section-text">
                  After finishing the design in Figma, built the website using HTML, CSS, and JavaScript in Visual Studio Code. The development part meant turning the visual designs into a working website.
                </p>
                <h3 className="apple-subsection-title">Version Control</h3>
                <p className="apple-section-text">
                  Used GitHub to manage all the code changes during development. Regular commits with clear messages helped track progress and gave the option to undo changes if needed.
                </p>
                <h3 className="apple-subsection-title">Design Version Control & Collaboration</h3>
                <p className="apple-section-text">
                  The entire team worked together in one Figma file to create the brand guide. Figma's built-in version history automatically tracked every design iteration, similar to how Git tracks code commits.
                </p>
              </div>
              <div className="apple-split-image">
                <img src="/imgs/finaldesign.png" alt="Final Design" />
              </div>
            </div>
          </div>
        </section>

        {/* 3D Modeling */}
        <section className="apple-section">
          <div className="apple-container">
            <h2 className="apple-section-title">3D Modeling Experiments</h2>
            <p className="apple-section-text-center">
              As part of our exploration into digital media technologies, our group experimented with photogrammetry to create 3D models from photographs. We tested multiple software solutions to compare their effectiveness and quality.
            </p>
            <div className="apple-grid-3">
              <div className="apple-card-image">
                <img src="/imgs/photomodeler.png" alt="PhotoModeler" />
                <h3 className="apple-card-image-title">My Contribution - PhotoModeler</h3>
                <p className="apple-card-image-text">
                  Worked with PhotoModeler, a professional photogrammetry software. While it's a powerful tool, the results achieved were quite disappointing. The 3D model quality didn't meet expectations.
                </p>
              </div>
              <div className="apple-card-image">
                <img src="/imgs/realityscan.jpg" alt="RealityScan 1" />
                <h3 className="apple-card-image-title">Team's Approach - RealityScan</h3>
                <p className="apple-card-image-text">
                  Meanwhile, teammates experimented with other 3D modeling software. RealityScan came out as the best solution for the group with significantly better quality.
                </p>
              </div>
              <div className="apple-card-image">
                <img src="/imgs/realityscan2.jpg" alt="RealityScan 2" />
                <h3 className="apple-card-image-title">Quality Comparison</h3>
                <p className="apple-card-image-text">
                  The quality improvement was significant compared to PhotoModeler results, producing much cleaner and more accurate 3D models from similar source photographs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Poster Design */}
        <section className="apple-section apple-dark">
          <div className="apple-container">
            <div className="apple-split">
              <div className="apple-split-content">
                <h2 className="apple-section-title">Infographic Poster</h2>
                <p className="apple-section-text">
                  Created an infographic poster to visually communicate key information about what we do as an agency. This poster needed to be both eye-catching and informative while following the brand guidelines.
                </p>
                <h3 className="apple-subsection-title">Design Iterations</h3>
                <p className="apple-section-text">
                  Started with an initial design concept that laid out the agency information and visual elements. After gathering feedback from the team and teachers, identified areas for improvement.
                </p>
                <p className="apple-section-text">
                  The feedback helped create a refined final version that better represents the Ducks on Fire brand and communicates the information more effectively.
                </p>
              </div>
              <div className="apple-split-image">
                <img src="/imgs/posterfinal.png" alt="Poster Design" />
              </div>
            </div>
          </div>
        </section>

        {/* Team Collaboration */}
        <section className="apple-section">
          <div className="apple-container">
            <h2 className="apple-section-title">Team Collaboration</h2>
            <p className="apple-section-text-center">
              Started this project by creating a team charter that set clear rules and expectations for how we would work together. This helped us understand everyone's roles and how we would communicate during the project.
            </p>
            <div className="apple-grid-3">
              <div className="apple-card-image">
                <img src="/imgs/teamcharter.png" alt="Team Charter" />
                <h3 className="apple-card-image-title">Team Charter</h3>
                <p className="apple-card-image-text">
                  Created a team charter at the start that set clear rules and expectations for how we would work together.
                </p>
              </div>
              <div className="apple-card-image">
                <img src="/imgs/flowspace.png" alt="Flowspace" />
                <h3 className="apple-card-image-title">Task Management</h3>
                <p className="apple-card-image-text">
                  Used Flowspace (like Trello) to split up tasks and put important project information that everyone needs to see.
                </p>
              </div>
              <div className="apple-card-image">
                <img src="/imgs/whatsapp.png" alt="WhatsApp" />
                <h3 className="apple-card-image-title">Daily Communication</h3>
                <p className="apple-card-image-text">
                  Used WhatsApp for daily communication where we share quick updates, ask questions, and coordinate work.
                </p>
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
