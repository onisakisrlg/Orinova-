import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import Home from './pages/Home';
import WebDevelopment from './pages/WebDevelopment';
import UiUxDesign from './pages/UiUxDesign';
import DxSupport from './pages/DxSupport';
import SystemArchitecture from './pages/SystemArchitecture';
import { Theme } from './types';

function SEOUpdater() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let title = 'Orinova Inc. | Digital Origin';
    
    switch(path) {
      case '/':
        title = 'Orinova Inc. | Digital Origin - Web Development & UI/UX Design';
        break;
      case '/services/web-development':
        title = 'Web Development | Orinova Inc.';
        break;
      case '/services/ui-ux-design':
        title = 'UI/UX Design | Orinova Inc.';
        break;
      case '/services/dx-support':
        title = 'DX Support | Orinova Inc.';
        break;
      case '/services/system-architecture':
        title = 'System Architecture | Orinova Inc.';
        break;
      default:
        title = 'Orinova Inc. | Digital Origin';
    }
    
    document.title = title;
  }, [location]);

  return null;
}

export default function App() {
  const [theme, setTheme] = useState<Theme>('light');

  // Toggle theme
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    document.body.style.backgroundColor = theme === 'dark' ? '#000000' : '#ffffff';
  }, [theme]);

  return (
    <Router>
      <SEOUpdater />
      <div className={`min-h-screen transition-colors duration-700 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home theme={theme} />} />
          <Route path="/services/web-development" element={<WebDevelopment theme={theme} />} />
          <Route path="/services/ui-ux-design" element={<UiUxDesign theme={theme} />} />
          <Route path="/services/dx-support" element={<DxSupport theme={theme} />} />
          <Route path="/services/system-architecture" element={<SystemArchitecture theme={theme} />} />
        </Routes>
        <Footer theme={theme} />
      </div>
    </Router>
  );
}
