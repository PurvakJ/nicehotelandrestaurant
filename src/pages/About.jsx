// About.jsx
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <div className="about-hero">
          <h1 className="page-title">About Nice Hotel</h1>
          <p className="page-subtitle">Luxury accommodation, fine dining, and premium events</p>
          <div className="hero-underline"></div>
        </div>

        {/* Main Content */}
        <div className="about-grid">
          <div className="about-image-wrapper">
            <img
              src="/images/"
              alt="Nice Hotel Exterior"
              className="about-image"
            />
            <div className="image-badge">Est. 2024</div>
          </div>

          <div className="about-content">
            <h2>Experience Luxury & Comfort</h2>
            <p className="about-description">
              Welcome to <strong>Nice Hotel & Restaurant</strong>, where elegance meets comfort. 
              Our establishment features <strong>9 beautifully designed luxury rooms</strong>, 
              a fine dining restaurant, and a magnificent Party hall for 
              weddings, conferences, and special events.
            </p>
            <p className="about-description">
              Located in the Center of the city, we offer world-class hospitality 
              with personalized service to make your stay truly memorable.
            </p>
            
            <div className="about-features">
              <div className="about-feature">
                <span className="feature-icon">🛏️</span>
                <div>
                  <h4>9 Luxury Rooms</h4>
                  <p>Executive & Deluxe Suites</p>
                </div>
              </div>
              <div className="about-feature">
                <span className="feature-icon">🍽️</span>
                <div>
                  <h4>Fine Dining</h4>
                  <p>Exquisite Culinary Experiences</p>
                </div>
              </div>
              <div className="about-feature">
                <span className="feature-icon">🏛️</span>
                <div>
                  <h4>Party Hall</h4>
                  <p>Grand Ballroom for 500 Guests</p>
                </div>
              </div>
              <div className="about-feature">
                <span className="feature-icon">⭐</span>
                <div>
                  <h4>Premium Service</h4>
                  <p>24/7 World-Class Hospitality</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-stats">
          <div className="stat-card">
            <span className="stat-number">9</span>
            <span className="stat-label">Luxury Rooms</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">100</span>
            <span className="stat-label">Banquet Capacity</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Premium Service</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">⭐ 5</span>
            <span className="stat-label">Star Experience</span>
          </div>
        </div>

        {/* Room Categories */}
        <div className="about-rooms-section">
          <h2 className="section-title">Our Accommodations</h2>
          <p className="section-subtitle">Choose from our premium room categories</p>
          
          <div className="room-categories">
            <div className="room-category-card">
              <div className="category-image executive-bg">
                <span className="category-badge">Executive</span>
              </div>
              <h3>Executive Suites</h3>
              <p>Spacious executive suites with modern amenities, perfect for business travelers.</p>
              <ul className="category-amenities">
                <li>✓ King Bed</li>
                <li>✓ Smart TV</li>
                <li>✓ Rain Shower</li>
                <li>✓ Work Desk</li>
                <li>✓ Free WiFi</li>
              </ul>
              <span className="category-price">From $180/night</span>
            </div>

            <div className="room-category-card">
              <div className="category-image deluxe-bg">
                <span className="category-badge">Deluxe</span>
              </div>
              <h3>Deluxe Suites</h3>
              <p>Elegant deluxe suites with premium furnishings and stunning city views.</p>
              <ul className="category-amenities">
                <li>✓ King Bed</li>
                <li>✓ Smart TV</li>
                <li>✓ Mini Bar</li>
                <li>✓ Work Desk</li>
                <li>✓ Free WiFi</li>
              </ul>
              <span className="category-price">From $250/night</span>
            </div>
          </div>
        </div>

        {/* Banquet & Events */}
        <div className="about-banquet-section">
          <h2 className="section-title">Grand Events & Celebrations</h2>
          <p className="section-subtitle">Host your special occasions in elegance</p>
          
          <div className="banquet-details-card">
            <div className="banquet-info">
              <h3>Grand Ballroom</h3>
              <p className="banquet-capacity">👥 Capacity: 100 Guests</p>
              <p className="banquet-description">
                Elegant ballroom with crystal chandeliers and sophisticated decor. 
                Perfect for party, kitty and small celebrations.
              </p>
              <div className="banquet-features-list">
                <span className="banquet-feature">🎤 Stage</span>
                <span className="banquet-feature">🔊 Sound System</span>
                <span className="banquet-feature">💎 Chandeliers</span>
                <span className="banquet-feature">💃 Dance Floor</span>
              </div>
              <div className="banquet-pricing-grid">
                <div className="banquet-price-item">
                  <span>Wedding Package</span>
                  <strong>$5,000</strong>
                </div>
                <div className="banquet-price-item">
                  <span>Corporate Event</span>
                  <strong>$3,500</strong>
                </div>
                <div className="banquet-price-item">
                  <span>Social Gathering</span>
                  <strong>$2,500</strong>
                </div>
              </div>
            </div>
            <div className="banquet-image-wrapper">
              <img 
                src="/images/kitty hall.png" 
                alt="Grand Ballroom"
                className="banquet-image"
              />
            </div>
          </div>
        </div>

        {/* Amenities Section */}
        <div className="about-amenities-section">
          <h2 className="section-title">Premium Amenities</h2>
          <p className="section-subtitle">Everything you need for a perfect stay</p>
          
          <div className="amenities-grid">
            <div className="amenity-item">
              <span className="amenity-icon">🚗</span>
              <h4>Valet Parking</h4>
              <p>Complimentary parking service</p>
            </div>
            <div className="amenity-item">
              <span className="amenity-icon">🌐</span>
              <h4>Free WiFi</h4>
              <p>High-speed internet throughout</p>
            </div>
            <div className="amenity-item">
              <span className="amenity-icon">🧖</span>
              <h4>Room Services</h4>
              <p>Relaxing treatments available</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="about-cta">
          <h2>Ready to Experience Luxury?</h2>
          <p>Book your stay today and enjoy world-class hospitality at Nice Hotel</p>
          <button className="about-cta-btn">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default About;