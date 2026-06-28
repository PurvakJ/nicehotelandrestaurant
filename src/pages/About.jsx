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
              src="/images/exterior.jpeg"
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
                  <p>Grand Ballroom for 100 Guests</p>
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
              <div className="category-image-wrapper">
                <img 
                  src="/images/executive.png" 
                  alt="Executive Suite"
                  className="category-image-img"
                />
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
              <span className="category-price">From ₹1500/night</span>
            </div>

            <div className="room-category-card">
              <div className="category-image-wrapper">
                <img 
                  src="/images/Delux room.png" 
                  alt="Deluxe Suite"
                  className="category-image-img"
                />
                <span className="category-badge deluxe">Deluxe</span>
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
              <span className="category-price">From ₹2000/night</span>
            </div>
          </div>
        </div>

        {/* Banquet & Events */}
        <div className="about-banquet-section">
          <h2 className="section-title">Grand Events & Celebrations</h2>
          <p className="section-subtitle">Host your special occasions in elegance</p>
          
          <div className="banquet-details-card">
            <div className="banquet-image-wrapper">
              <img 
                src="/images/kitty hall.png" 
                alt="Grand Ballroom"
                className="banquet-image"
              />
            </div>
            <div className="banquet-info">
              <h3>Grand Ballroom</h3>
              <p className="banquet-capacity">👥 Capacity: 100 Guests</p>
              <p className="banquet-description">
                Elegant ballroom with crystal chandeliers and sophisticated decor. 
                Perfect for parties, kitty parties, and small celebrations.
                Whether you are hosting an intimate kitty party, 
                a joyous birthday celebration, or a small, cherished wedding reception,
                 our ballroom provides the perfect, versatile canvas. Our dedicated events team is committed to transforming your vision into reality, ensuring every moment is nothing short of spectacular. Complement your event with our restaurant's acclaimed culinary artistry, offering a bespoke menu that will delight your guests and make your celebration truly unforgettable. Discover the perfect blend of impeccable service and breathtaking surroundings, exclusively with us.



              </p>
              <div className="banquet-features-list">
                <span className="banquet-feature">🎤 Stage</span>
                <span className="banquet-feature">🔊 Sound System</span>
                <span className="banquet-feature">💎 Chandeliers</span>
                <span className="banquet-feature">💃 Dance Floor</span>
                <span className="banquet-feature">🍽️ Catering</span>
                <span className="banquet-feature">🅿️ Parking</span>
              </div>
              <div className="banquet-pricing-grid">
                <div className="banquet-price-item">
                  <span>Kitty Party</span>
                  <strong>₹15,000</strong>
                </div>
                <div className="banquet-price-item">
                  <span>Birthday Party</span>
                  <strong>₹20,000</strong>
                </div>
                <div className="banquet-price-item">
                  <span>Social Gathering</span>
                  <strong>₹25,000</strong>
                </div>
                <div className="banquet-price-item">
                  <span>Custom Package</span>
                  <strong>Contact Us</strong>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dining Section */}
        <div className="about-dining-section">
          <h2 className="section-title">Exquisite Dining</h2>
          <p className="section-subtitle">A culinary journey like no other</p>
          
          <div className="dining-card">
            <div className="dining-image-wrapper">
              <img 
                src="/images/Private dining.png" 
                alt="Fine Dining Restaurant"
                className="dining-image"
              />
            </div>
            <div className="dining-info">
              <h3>Fine Dining Restaurant</h3>
              <p className="dining-description">
                Indulge in culinary excellence at our fine dining restaurant. 
                Our award-winning chefs create exquisite dishes using the finest 
                ingredients, offering both local and international cuisine in an 
                elegant setting.Every plate is a work of art, presented with precision and passion, designed to delight all the senses. The experience is elevated by our restaurant's refined and intimate setting, where soft lighting, impeccable service, and an atmosphere of quiet luxury create the perfect backdrop for a memorable meal. Whether you are celebrating a special occasion or simply indulging in an extraordinary evening out, our restaurant promises a dining experience that transcends the ordinary and leaves a lasting impression.



                
              </p>
              <div className="dining-features">
                <span className="dining-feature">🍳 Breakfast Buffet</span>
                <span className="dining-feature">🍷 Wine Selection</span>
                <span className="dining-feature">🍽️ Private Dining</span>
                <span className="dining-feature">🛎️ Room Service</span>
              </div>
              <div className="dining-hours">
                <span>🕐 Breakfast: 7:00 - 10:00 AM</span>
                <span>🕐 Lunch: 12:00 - 3:00 PM</span>
                <span>🕐 Dinner: 7:00 - 11:00 PM</span>
              </div>
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
              <span className="amenity-icon">🧺</span>
              <h4>Housekeeping</h4>
              <p>Daily cleaning & turndown service</p>
            </div>
            <div className="amenity-item">
              <span className="amenity-icon">🛎️</span>
              <h4>Concierge</h4>
              <p>24/7 personalized assistance</p>
            </div>
            <div className="amenity-item">
              <span className="amenity-icon">🔒</span>
              <h4>Secure</h4>
              <p>24/7 security & surveillance</p>
            </div>
            <div className="amenity-item">
              <span className="amenity-icon">♿</span>
              <h4>Accessible</h4>
              <p>Wheelchair accessible</p>
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="about-location-section">
          <h2 className="section-title">Our Location</h2>
          <p className="section-subtitle">Conveniently located in the heart of the city</p>
          
          <div className="location-card">
            <div className="location-info">
              <div className="location-address">
                <span className="location-icon">📍</span>
                <div>
                  <h4>Address</h4>
                  <p>Near chugli ghar, Mansa 151505</p>
                </div>
              </div>
              <div className="location-details">
                <div className="location-detail">
                  <span>📍 5 mins from Bus Stand</span>
                </div>
                <div className="location-detail">
                  <span>📍 2 mins from Railway Station</span>
                </div>
                <div className="location-detail">
                  <span>📍 Walking distance to Market</span>
                </div>
              </div>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d908.649555849454!2d75.39638788998352!3d29.986933090451032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39111f4472153cd7%3A0x9eb17ba12b841dd9!2sHotel%20Embassy%20and%20Restaurant!5e0!3m2!1sen!2sin!4v1782541389283!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Business Location"
              ></iframe>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="about-cta">
          <h2>Ready to Experience Luxury?</h2>
          <p>Book your stay today and enjoy world-class hospitality at Nice Hotel</p>
          <button className="about-cta-btn" onClick={() => window.location.href = '/rooms'}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;