import { useState, useEffect } from 'react';
import './Navbar.css';
import resumeUrl from '../assets/Resume-ThuNguyen.pdf';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openResume = () => {
    setIsResumeOpen(true);
    closeMenu();
  };

  const closeResume = () => {
    setIsResumeOpen(false);
  };

  const openInNewTab = () => {
    window.open(resumeUrl, '_blank');
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'Resume-ThuNguyen.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const sections = ['home', 'experience', 'projects', 'skills', 'contact'];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isResumeOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isResumeOpen]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="navbar-logo">
            Portfolio
          </a>

          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#experience"
                className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#projects"
                className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#skills"
                className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#contact"
                className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
            <li className="nav-item">
              <button className="nav-link resume-btn" onClick={openResume}>
                Resume
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {isResumeOpen && (
        <div className="resume-overlay" onClick={closeResume}>
          <div className="resume-popup" onClick={(e) => e.stopPropagation()}>
            <div className="resume-header">
              <button className="resume-action-btn" onClick={openInNewTab}>
                Open in New Tab
              </button>
              <button className="resume-action-btn" onClick={downloadResume}>
                Download
              </button>
              <button className="resume-close-btn" onClick={closeResume}>
                Close
              </button>
            </div>
            <div className="resume-content">
              <iframe src={resumeUrl} title="Resume" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
