// Footer.js
import { Link } from "react-router-dom";
import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock, } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  // Business information (consistent with Contact.js)
  const businessInfo = {
    phone1: '9216400005',
    email: 'nicehotelandrestaurant@gmail.com',
    instagram: 'https://www.instagram.com/nice_hotel_and_resturant/?hl=en',
    whatsapp: 'https://wa.me/919216400005',
    address: 'Near chugli ghar, Mansa 151505',
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section brand-section">
          <div className="footer-brand">
            <span className="footer-brand-icon">🏨</span>
            <h3>Nice Hotel &<span className="brand-highlight">Restaurant</span></h3>
          </div>
          <p className="footer-brand-desc">
            Experience luxury and comfort with our premium hospitality services.
          </p>
          <div className="footer-social">
            <a 
              href={businessInfo.instagram} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link instagram" 
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a 
              href={businessInfo.whatsapp} 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link whatsapp" 
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
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
            <li><Link to="/menu">🍽️ Menu</Link></li>
            <li><Link to="/services">✨ Services</Link></li>
            <li><Link to="/contact">📞 Contact</Link></li>
            <li><Link to="/admin">🔑 Admin</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section contact-section">
          <h4>Contact Us</h4>
          <div className="contact-item">
            <span className="contact-icon"><FaMapMarkerAlt /></span>
            <div>
              <strong>Address</strong>
              <p>{businessInfo.address}</p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><FaPhoneAlt /></span>
            <div>
              <strong>Phone</strong>
              <p>
                <a href={`tel:+91${businessInfo.phone1}`}>+91 {businessInfo.phone1}</a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><FaEnvelope /></span>
            <div>
              <strong>Email</strong>
              <p><a href={`mailto:${businessInfo.email}`}>{businessInfo.email}</a></p>
            </div>
          </div>
          <div className="contact-item">
            <span className="contact-icon"><FaClock /></span>
            <div>
              <strong>Working Hours</strong>
              <p>🕐 Always Open</p>
            </div>
          </div>
        </div>

        {/* Newsletter & Hours */}
        <div className="footer-section newsletter-section">
          <h4>Newsletter</h4>
          <p className="newsletter-text">
            Subscribe to get updates on new arrivals and special offers.
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
          <div className="footer-payment">
            <p className="payment-text">We Accept:</p>
            <div className="payment-icons">
              <span>💳</span>
              <span>🏦</span>
              <span>📱</span>
              <span>💰</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p className="copyright">
            © {currentYear} Nice Hotel & Restaurant. All Rights Reserved.
          </p>
          <p className="footer-credit">
            Crafted with ❤️ for premium hospitality
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;