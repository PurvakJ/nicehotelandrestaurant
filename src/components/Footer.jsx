// Footer.jsx
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section brand-section">
          <div className="footer-brand">
            <span className="footer-brand-icon">🏨</span>
            <h3>Nice <span className="brand-highlight">Hotel</span></h3>
          </div>
          <p className="footer-description">
            Experience luxury stay, delicious food, premium rooms, and memorable events. 
            Where elegance meets comfort in the heart of the city.
          </p>
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Facebook">📘</a>
            <a href="#" className="social-link" aria-label="Instagram">📷</a>
            <a href="#" className="social-link" aria-label="Twitter">🐦</a>
            <a href="#" className="social-link" aria-label="YouTube">▶️</a>
            <a href="#" className="social-link" aria-label="LinkedIn">💼</a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section links-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">🏠 Home</Link></li>
            <li><Link to="/about">ℹ️ About</Link></li>
            <li><Link to="/rooms">🛏️ Rooms</Link></li>
            <li><Link to="/venue">🏛️ Venue</Link></li>
            <li><Link to="/services">✨ Services</Link></li>
            <li><Link to="/contact">📞 Contact</Link></li>
            <li><Link to="/admin">🔑 Admin</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact-section">
          <h4>Contact Us</h4>
          <div className="contact-item">
            <span className="contact-icon">📍</span>
            <div>
              <strong>Address</strong>
              <p>Near chugli ghar, Mansa 151505</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">📞</span>
            <div>
              <strong>Phone</strong>
              <p><a href="tel:+9192164-00005">+91 92164-00005</a></p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">✉️</span>
            <div>
              <strong>Email</strong>
              <p><a href="mailto:deepaksingla239@gmail.com">deepaksingla239@gmail.com</a></p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon">🕐</span>
            <div>
              <strong>24/7 Service</strong>
              <p>Always Open</p>
            </div>
          </div>
        </div>

        {/* Newsletter & Hours */}
        <div className="footer-section newsletter-section">
          <h4>Newsletter</h4>
          <p className="newsletter-text">
            Subscribe to get special offers and updates
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your email address" 
              className="newsletter-input"
              required
            />
            <button type="submit" className="newsletter-btn">Subscribe</button>
          </form>
          
          <div className="footer-badges">
            <span className="badge">⭐ 5-Star Rated</span>
            <span className="badge">🏆 Award Winner</span>
            <span className="badge">✨ Premium Service</span>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            © {currentYear} Nice Hotel & Restaurant. All Rights Reserved.
          </p>
          <div className="footer-bottom-links">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/sitemap">Sitemap</Link>
          </div>
          <p className="footer-credit">
            Crafted with ❤️ for luxury hospitality
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;