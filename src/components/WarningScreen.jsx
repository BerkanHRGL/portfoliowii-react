import { useState } from 'react';
import './WarningScreen.css';

const WarningScreen = ({ onDismiss }) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    setTimeout(() => {
      onDismiss();
    }, 500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && isVisible) {
      handleDismiss();
    }
  };

  // Add keyboard listener
  useState(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className={`warning-screen ${isVisible ? 'active' : ''}`}
      onClick={handleDismiss}
      onTouchStart={handleDismiss}
    >
      <div className="warning-content">
        <h1>
          <span className="warning-icon">⚠</span>
          HEALTH AND SAFETY
        </h1>
        <div className="warning-text">
          <p><strong>WARNING - PORTFOLIO EXPERIENCE</strong></p>
          <p>Before browsing this portfolio, read the following important information.</p>

          <p><strong>SEIZURE WARNING</strong></p>
          <p>Some people may experience overwhelming career inspiration when viewing creative work. If you or anyone experiences dizziness, altered vision, eye or muscle twitches, loss of awareness, disorientation, any involuntary movement, or convulsions, immediately discontinue use and consult your career advisor.</p>

          <p><strong>IMPORTANT HEALTH AND SAFETY INFORMATION</strong></p>
          <ul>
            <li>Take a 10-15 minute break every hour to consider your own career goals</li>
            <li>Avoid scrolling if you are tired or need sleep</li>
            <li>Make sure you are in a well-lit room and view from a safe distance</li>
          </ul>

          <p style={{ marginTop: '20px' }}>
            <strong>CLICK
              <span className="mouse-click-icon">
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 0C5.58 0 2 3.58 2 8V16C2 20.42 5.58 24 10 24C14.42 24 18 20.42 18 16V8C18 3.58 14.42 0 10 0ZM10 2C13.31 2 16 4.69 16 8V16C16 19.31 13.31 22 10 22C6.69 22 4 19.31 4 16V8C4 4.69 6.69 2 10 2Z" fill="white"/>
                  <path d="M10 4C9.45 4 9 4.45 9 5V10C9 10.55 9.45 11 10 11C10.55 11 11 10.55 11 10V5C11 4.45 10.55 4 10 4Z" fill="white"/>
                  <circle cx="10" cy="7" r="1.5" fill="#FFD700">
                    <animate attributeName="r" values="1.5;2.5;1.5" dur="1s" repeatCount="indefinite"/>
                    <animate attributeName="opacity" values="1;0.5;1" dur="1s" repeatCount="indefinite"/>
                  </circle>
                </svg>
              </span>
              ANYWHERE TO CONTINUE
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WarningScreen;
