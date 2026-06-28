// Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/about", label: "About", icon: "ℹ️" },
    { path: "/rooms", label: "Rooms", icon: "🛏️" },
    { path: "/venue", label: "Venue", icon: "🏛️" },
    { path: "/menu", label: "Menu", icon: "🍽️" },
    { path: "/services", label: "Services", icon: "✨" },
    { path: "/contact", label: "Contact", icon: "📞" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobile) {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMobile]);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-brand">
          <Link to="/" className="brand-link">
            <span className="brand-icon">
              <img src="https://i.postimg.cc/mhxQ3hGt/53f3a174-6fcb-4bf4-bea3-7f79881b9814.png" alt="Hotel Logo" className="brand-logo" />
            </span>
            <span className="brand-name">Nice Hotel &<span className="brand-highlight">Restaurant</span></span>
          </Link>
          <button 
            className={`mobile-toggle ${isMobile ? 'active' : ''}`}
            onClick={() => setIsMobile(!isMobile)}
            aria-label="Toggle navigation menu"
          >
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
          </button>
        </div>

        <div className={`navbar-links ${isMobile ? "active" : ""}`}>
          <div className="nav-links-container">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${location.pathname === link.path ? "active" : ""}`}
                onClick={() => setIsMobile(false)}
              >
                <span className="nav-icon">{link.icon}</span>
                <span className="nav-label">{link.label}</span>
                {location.pathname === link.path && (
                  <span className="nav-indicator"></span>
                )}
              </Link>
            ))}
          </div>
          
          {/* Mobile bottom actions */}
          <div className="mobile-actions">
            <div className="mobile-contact-info">
              <span>📞 +91 9216400005</span>
              <span>✉️ nicehotelandrestaurant@gmail.com</span>
            </div>
            <div className="mobile-social">
              <span>📱</span>
              <span>📷</span>
              <span>🐦</span>
              <span>📘</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}