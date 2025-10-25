import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WarningScreen from './components/WarningScreen';
import WiiMenu from './components/WiiMenu';
import Projects from './pages/Projects';
import ReadingGuide from './pages/ReadingGuide';
import AboutMe from './pages/AboutMe';
import PageTransition from './components/PageTransition/PageTransition';
import './styles/main.css';

function App() {
  const [showWarning, setShowWarning] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [clickPosition, setClickPosition] = useState(null);

  const handleWarningDismiss = () => {
    setShowWarning(false);
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
        <Route path="/projects" element={<Projects />} />
        <Route path="/reading-guide" element={<ReadingGuide />} />
        <Route path="/about-me" element={<AboutMe />} />
      </Routes>
    </Router>
  );
}

export default App;
