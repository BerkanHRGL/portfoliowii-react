import { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './ExpandableBento.css';

const ExpandableBento = ({ cardData }) => {
  const [expandedCard, setExpandedCard] = useState(null);
  const [cardPosition, setCardPosition] = useState(null);
  const expandedViewRef = useRef(null);
  const cardRefs = useRef([]);

  const handleCardClick = (index, event) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    setCardPosition({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    });
    setExpandedCard(index);
  };

  const handleClose = () => {
    // Animate back to original position
    const expandedView = expandedViewRef.current;
    if (expandedView && cardPosition) {
      gsap.to(expandedView, {
        top: cardPosition.top,
        left: cardPosition.left,
        width: cardPosition.width,
        height: cardPosition.height,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          setExpandedCard(null);
          setCardPosition(null);
        }
      });
    }
  };

  useEffect(() => {
    const expandedView = expandedViewRef.current;
    if (expandedCard !== null && expandedView && cardPosition) {
      // Start from card position
      gsap.set(expandedView, {
        top: cardPosition.top,
        left: cardPosition.left,
        width: cardPosition.width,
        height: cardPosition.height,
        opacity: 1
      });

      // Animate to full screen
      gsap.to(expandedView, {
        top: '50%',
        left: '50%',
        width: '90vw',
        height: '90vh',
        maxWidth: '1000px',
        maxHeight: '800px',
        duration: 0.5,
        ease: 'power2.inOut'
      });

      // Fade in content
      gsap.fromTo('.expanded-content-inner',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.3, delay: 0.3 }
      );
    }
  }, [expandedCard, cardPosition]);

  const renderDetailedContent = (card) => {
    const content = card.detailedContent;

    return (
      <div className="expanded-content-inner">
        <button className="close-button" onClick={handleClose}>
          ✕
        </button>

        <div className="expanded-header">
          <div className="expanded-label">{card.label}</div>
          <h2 className="expanded-title">{card.title}</h2>
          <h3 className="expanded-subtitle">{content.subtitle}</h3>
        </div>

        <div className="expanded-body">
          {content.paragraphs && (
            <div className="paragraphs-section">
              {content.paragraphs.map((para, i) => (
                <p key={i} className="content-paragraph">{para}</p>
              ))}
            </div>
          )}

          {content.stats && (
            <div className="stats-grid">
              {content.stats.map((stat, i) => (
                <div key={i} className="stat-item">
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {content.skills && (
            <div className="skills-section">
              <h4>Skills</h4>
              {content.skills.map((skill, i) => (
                <div key={i} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {content.highlights && (
            <div className="highlights-section">
              <h4>Highlights</h4>
              <ul className="highlights-list">
                {content.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          )}

          {content.strengths && (
            <div className="strengths-section">
              <h4>Key Strengths</h4>
              <div className="strengths-grid">
                {content.strengths.map((strength, i) => (
                  <div key={i} className="strength-tag">{strength}</div>
                ))}
              </div>
            </div>
          )}

          {content.currentlyLearning && (
            <div className="learning-section">
              <h4>Currently Learning</h4>
              <div className="learning-grid">
                {content.currentlyLearning.map((item, i) => (
                  <div key={i} className="learning-tag">{item}</div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="expandable-bento-grid">
        {cardData.map((card, index) => (
          <div
            key={index}
            ref={el => cardRefs.current[index] = el}
            className={`bento-card ${expandedCard !== null && expandedCard !== index ? 'dimmed' : ''}`}
            onClick={(e) => handleCardClick(index, e)}
          >
            <div className="bento-card-header">
              <span className="bento-label">{card.label}</span>
            </div>
            <div className="bento-card-content">
              <h3 className="bento-title">{card.title}</h3>
              <p className="bento-description">{card.description}</p>
            </div>
            <div className="click-hint">Click to explore →</div>
          </div>
        ))}
      </div>

      {expandedCard !== null && (
        <div className="expanded-overlay" onClick={handleClose}>
          <div
            ref={expandedViewRef}
            className="expanded-view"
            onClick={(e) => e.stopPropagation()}
          >
            {renderDetailedContent(cardData[expandedCard])}
          </div>
        </div>
      )}
    </>
  );
};

export default ExpandableBento;
