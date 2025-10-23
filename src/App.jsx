import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WarningScreen from './components/WarningScreen';
import WiiMenu from './components/WiiMenu';
import Projects from './pages/Projects';
import ReadingGuide from './pages/ReadingGuide';
import './styles/main.css';

function App() {
  const [showWarning, setShowWarning] = useState(true);

  const handleWarningDismiss = () => {
    setShowWarning(false);
  };

  return (
    <Router>
      {showWarning && <WarningScreen onDismiss={handleWarningDismiss} />}
      <Routes>
        <Route path="/" element={<WiiMenu />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/reading-guide" element={<ReadingGuide />} />
      </Routes>
    </Router>
  );
}

export default App;
