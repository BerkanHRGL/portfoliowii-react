import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WarningScreen from './components/WarningScreen';
import WiiMenu from './components/WiiMenu';
import Projects from './pages/Projects';
import ProjectsApple from './pages/ProjectsApple';
import ReadingGuide from './pages/ReadingGuide';
import AboutMe from './pages/AboutMe';
import PageTransition from './components/PageTransition/PageTransition';
import './styles/main.css';

function App() {
  // Check if warning was already dismissed or if coming from anchor link
  const hasSeenWarning = localStorage.getItem('warningDismissed') === 'true';
  const hasAnchor = window.location.hash.length > 0;

  const [showWarning, setShowWarning] = useState(!hasSeenWarning && !hasAnchor);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [clickPosition, setClickPosition] = useState(null);

  const handleWarningDismiss = () => {
    setShowWarning(false);
    localStorage.setItem('warningDismissed', 'true');
  };

  const handleTransitionComplete = () => {
    // Keep transition active for circle to shrink and reveal new page
    setTimeout(() => {
      setIsTransitioning(false);
    }, 350); // Wait for shrink animation (0.3s + small buffer)
  };

  return (
    <Router>
      {showWarning && <WarningScreen onDismiss={handleWarningDismiss} />}
      <PageTransition
        isActive={isTransitioning}
        onComplete={handleTransitionComplete}
        clickPosition={clickPosition}
      />
      <Routes>
        <Route path="/" element={<WiiMenu setIsTransitioning={setIsTransitioning} setClickPosition={setClickPosition} />} />
        <Route path="/projects" element={<Projects setIsTransitioning={setIsTransitioning} setClickPosition={setClickPosition} />} />
        <Route path="/projects-apple" element={<ProjectsApple setIsTransitioning={setIsTransitioning} setClickPosition={setClickPosition} />} />
        <Route path="/reading-guide" element={<ReadingGuide setIsTransitioning={setIsTransitioning} setClickPosition={setClickPosition} />} />
        <Route path="/about-me" element={<AboutMe setIsTransitioning={setIsTransitioning} setClickPosition={setClickPosition} />} />
      </Routes>
    </Router>
  );
}

export default App;
