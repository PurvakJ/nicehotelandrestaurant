// Venue.jsx
import { useState } from "react";
import { hallBooking } from "../services/api";
import "./Venue.css";

function Venue() {
  const [form, setForm] = useState({
    hallName: "Party Hall",
    name: "",
    phone: "",
    email: "",
    date: "",
    eventType: "Wedding",
    guestCount: "",
    specialRequests: ""
  });

  const [selectedHall, setSelectedHall] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('details');
  const [activeImage, setActiveImage] = useState(0);

  const halls = [
    {
      name: "Party Hall",
      capacity: "100 Guests",
      image: "/images/kitty hall.png",
      images: [
        "/images/kitty1.png",
        "/images/kitty2.png",
      ],
      description: "Elegant party hall with sophisticated decor. Perfect for kitty parties, and social gatherings.",
      fullDescription: "Our Party Hall is the epitome of elegance and comfort. Featuring tasteful decor, comfortable seating, and a warm ambiance, this venue creates the perfect atmosphere for memorable celebrations. The hall can accommodate up to 100 guests and comes equipped with a professional sound system, elegant lighting, and a dedicated stage. Whether you're planning a wedding reception, a kitty party, a birthday celebration, or a social gathering, our dedicated events team will ensure every detail is perfect.",
      features: ["Comfortable Seating", "Sound System", "Elegant Lighting", "Stage", "Dance Floor", "Decorative Setup", "Changing Rooms", "Parking Available"],
      badge: "Most Popular",
      category: "premium",
      area: "500 sqm",
      floor: "Ground Floor",
      rating: "4.9"
    },
    {
      name: "Meeting Room",
      capacity: "10 Guests",
      image: "/images/meeting 2.png",
      images: [
        "/images/meeting 1.png",
      ],
      description: "Comfortable meeting room with essential amenities for small gatherings, training, and discussions.",
      fullDescription: "Our Meeting Room offers a quiet and comfortable environment for small groups. With ergonomic seating, natural light, and a professional ambiance, it's perfect for board meetings, training sessions, workshops, or intimate gatherings. The room is equipped with a sound system, whiteboard, and basic audio, but no projector or screen—keeping it simple and distraction-free. Our team will arrange the seating to suit your needs.",
      features: ["Comfortable Seating", "Sound System", "Natural Light", "AC", "WiFi", "Refreshments on Request"],
      badge: "Business Choice",
      category: "standard",
      area: "200 sqm",
      floor: "1st Floor",
      rating: "4.7"
    },
    {
      name: "Garden Terrace",
      capacity: "Coming Soon",
      image: "https://images.unsplash.com/photo-1530023367847-a683933f4172",
      images: [
        "https://images.unsplash.com/photo-1530023367847-a683933f4172",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
      ],
      description: "Beautiful outdoor venue with scenic views - Opening Soon!",
      fullDescription: "Coming Soon! Our Garden Terrace will be a beautiful outdoor venue perfect for intimate gatherings and romantic celebrations. Surrounded by lush greenery and offering breathtaking views, this venue will create a magical atmosphere for outdoor events. Stay tuned for the grand opening!",
      features: ["Outdoor Setting", "Scenic Views", "Garden Lighting", "Weather Protection", "Bar Service", "Coming Soon"],
      badge: "Coming Soon",
      category: "coming-soon",
      area: "Coming Soon",
      floor: "Ground Floor",
      rating: "4.8"
    }
  ];

  const handleBookNow = (hallName) => {
    if (hallName === "Garden Terrace") {
      alert("Garden Terrace is coming soon! Stay tuned for updates.");
      return;
    }
    setSelectedHall(hallName);
    setModalMode('booking');
    setForm({...form, hallName: hallName});
    setIsModalOpen(true);
    setActiveImage(0);
    document.body.style.overflow = 'hidden';
  };

  const handleViewDetails = (hallName) => {
    if (hallName === "Garden Terrace") {
      alert("Garden Terrace is coming soon! We'll announce the opening date shortly.");
      return;
    }
    setSelectedHall(hallName);
    setModalMode('details');
    setIsModalOpen(true);
    setActiveImage(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const submit = async (e) => {
    e.preventDefault();
    await hallBooking(form);
    alert("Venue Booking Submitted Successfully!");
    setForm({
      hallName: "Party Hall",
      name: "",
      phone: "",
      email: "",
      date: "",
      eventType: "Wedding",
      guestCount: "",
      specialRequests: ""
    });
    closeModal();
  };

  const handleCloseModal = (e) => {
    if (e.target.className === 'modal-overlay') {
      closeModal();
    }
  };

  const getHall = (name) => halls.find(h => h.name === name);

  const nextImage = () => {
    const hall = getHall(selectedHall);
    if (hall) {
      setActiveImage(prev => prev < hall.images.length - 1 ? prev + 1 : 0);
    }
  };

  const prevImage = () => {
    const hall = getHall(selectedHall);
    if (hall) {
      setActiveImage(prev => prev > 0 ? prev - 1 : hall.images.length - 1);
    }
  };

  return (
    <div className="venue-page">
      <div className="container">
        {/* Hero Section */}
        <div className="venue-hero">
          <h1 className="page-title">Party & Event Halls</h1>
          <p className="page-subtitle">Elegant venues for your special occasions</p>
          <div className="hero-underline"></div>
        </div>

        {/* Venue Categories Summary */}
        <div className="venue-categories-summary">
          <div className="category-summary-card premium">
            <span className="category-icon">🎉</span>
            <div>
              <h4>Party Hall</h4>
              <p>Celebrations & Weddings</p>
            </div>
          </div>
          <div className="category-summary-card standard">
            <span className="category-icon">💼</span>
            <div>
              <h4>Meeting Room</h4>
              <p>Business & Training</p>
            </div>
          </div>
          <div className="category-summary-card coming-soon">
            <span className="category-icon">🌿</span>
            <div>
              <h4>Garden Terrace</h4>
              <p>Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Halls Grid */}
        <div className="halls-grid">
          {halls.map((hall, index) => (
            <div key={index} className={`hall-card ${hall.category}`}>
              <div className="hall-image-wrapper">
                <img src={hall.image} alt={hall.name} className="hall-image" />
                <span className={`hall-category-badge ${hall.category}`}>
                  {hall.category === "coming-soon" ? "Coming Soon" : hall.category}
                </span>
                {hall.badge && (
                  <span className="hall-badge">{hall.badge}</span>
                )}
                <div className="hall-overlay">
                  <span className="hall-rating">⭐ {hall.rating}</span>
                </div>
              </div>
              
              <div className="hall-info">
                <h3>{hall.name}</h3>
                <div className="hall-meta">
                  <span className="hall-capacity">👥 {hall.capacity}</span>
                  {hall.area !== "Coming Soon" && (
                    <span className="hall-area">📐 {hall.area}</span>
                  )}
                  <span className="hall-floor">📍 {hall.floor}</span>
                </div>
                <p className="hall-description">{hall.description}</p>
                
                <div className="hall-features">
                  {hall.features.slice(0, 3).map((feature, idx) => (
                    <span key={idx} className="feature-tag">{feature}</span>
                  ))}
                  {hall.features.length > 3 && (
                    <span className="feature-tag more">+{hall.features.length - 3}</span>
                  )}
                </div>
                
                <div className="hall-footer">
                  <div className="hall-actions">
                    <button 
                      className="view-details-btn"
                      onClick={() => handleViewDetails(hall.name)}
                    >
                      View Details
                    </button>
                    <button 
                      className={`book-venue-btn ${hall.category === "coming-soon" ? "disabled" : ""}`}
                      onClick={() => handleBookNow(hall.name)}
                      disabled={hall.category === "coming-soon"}
                    >
                      {hall.category === "coming-soon" ? "Coming Soon" : "Book Now"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Our Venues */}
        <div className="why-choose-section">
          <h2 className="section-title">Why Book With Us</h2>
          <p className="section-subtitle">Experience unforgettable events at Nice Hotel</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🎯</span>
              <h4>Perfect Venues</h4>
              <p>Beautiful spaces for every occasion and guest count</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">👔</span>
              <h4>Expert Planning</h4>
              <p>Dedicated event coordinators for flawless execution</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🍽️</span>
              <h4>Premium Catering</h4>
              <p>Exquisite menus crafted by award-winning chefs</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">✨</span>
              <h4>Luxury Experience</h4>
              <p>Unforgettable ambiance and world-class service</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedHall && selectedHall !== "Garden Terrace" && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className={`modal-content ${modalMode}`}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-body">
              {/* Image Slider - FULL WIDTH at TOP */}
              {modalMode === 'details' && (
                <div className="modal-image-slider">
                  <div className="slider-main">
                    <img 
                      src={getHall(selectedHall)?.images[activeImage] || getHall(selectedHall)?.image} 
                      alt={selectedHall} 
                    />
                    <div className="slider-overlay">
                      <span className={`slider-badge ${getHall(selectedHall)?.category}`}>
                        {getHall(selectedHall)?.category}
                      </span>
                      {getHall(selectedHall)?.badge && (
                        <span className="slider-badge-tag">{getHall(selectedHall)?.badge}</span>
                      )}
                      <span className="slider-rating">⭐ {getHall(selectedHall)?.rating}</span>
                    </div>
                    {getHall(selectedHall)?.images.length > 1 && (
                      <>
                        <button className="slider-nav prev" onClick={prevImage}>‹</button>
                        <button className="slider-nav next" onClick={nextImage}>›</button>
                        <div className="slider-counter">
                          {activeImage + 1} / {getHall(selectedHall)?.images.length}
                        </div>
                      </>
                    )}
                  </div>
                  {getHall(selectedHall)?.images.length > 1 && (
                    <div className="slider-thumbnails">
                      {getHall(selectedHall)?.images.map((img, idx) => (
                        <img 
                          key={idx} 
                          src={img} 
                          alt={`${selectedHall} view ${idx + 1}`}
                          className={`thumb ${idx === activeImage ? 'active' : ''}`}
                          onClick={() => setActiveImage(idx)}
                        />
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* ALL DATA - Below the image */}
              {modalMode === 'details' ? (
                <div className="modal-details-view">
                  <h2 className="modal-title">{selectedHall}</h2>
                  
                  <div className="modal-meta">
                    <span>👥 Capacity: {getHall(selectedHall)?.capacity}</span>
                    {getHall(selectedHall)?.area !== "Coming Soon" && (
                      <span>📐 {getHall(selectedHall)?.area}</span>
                    )}
                    <span>📍 {getHall(selectedHall)?.floor}</span>
                  </div>

                  <p className="modal-description">
                    {getHall(selectedHall)?.fullDescription}
                  </p>

                  <div className="modal-features-section">
                    <h4>✨ Features & Amenities</h4>
                    <div className="modal-features-grid">
                      {getHall(selectedHall)?.features.map((feature, idx) => (
                        <span key={idx} className="modal-feature-item">
                          ✓ {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    className="modal-book-now-btn"
                    onClick={() => {
                      setModalMode('booking');
                      setForm({...form, hallName: selectedHall});
                    }}
                  >
                    📅 Book This Venue
                  </button>
                </div>
              ) : (
                // BOOKING VIEW - Form only, no image
                <div className="modal-booking-view">
                  <h2 className="modal-title">Book {selectedHall}</h2>
                  <p className="booking-subtitle">Fill in the details below to reserve your spot</p>
                  
                  <form onSubmit={submit} className="booking-form">
                    <div className="form-group">
                      <label>Event Type</label>
                      <select
                        value={form.eventType}
                        onChange={(e) => setForm({...form, eventType: e.target.value})}
                        required
                      >
                        <option value="Wedding">💒 Wedding</option>
                        <option value="Kitty Party">🎀 Kitty Party</option>
                        <option value="Birthday Party">🎂 Birthday Party</option>
                        <option value="Social Gathering">🎪 Social Gathering</option>
                        <option value="Corporate Event">💼 Corporate Event</option>
                        <option value="Meeting">📊 Meeting / Training</option>
                        <option value="Other">📌 Other</option>
                      </select>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Event Date</label>
                        <input
                          type="date"
                          value={form.date}
                          onChange={(e) => setForm({...form, date: e.target.value})}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Expected Guests</label>
                        <input
                          type="number"
                          placeholder="Number of guests"
                          value={form.guestCount}
                          onChange={(e) => setForm({...form, guestCount: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label>Full Name</label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          value={form.name}
                          onChange={(e) => setForm({...form, name: e.target.value})}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          value={form.email}
                          onChange={(e) => setForm({...form, email: e.target.value})}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Phone Number</label>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        value={form.phone}
                        onChange={(e) => setForm({...form, phone: e.target.value})}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Special Requests</label>
                      <textarea
                        placeholder="Any special requirements or preferences..."
                        value={form.specialRequests}
                        onChange={(e) => setForm({...form, specialRequests: e.target.value})}
                        rows="3"
                      />
                    </div>

                    <button type="submit" className="submit-btn">
                      Confirm Booking
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Venue;