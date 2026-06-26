// Venue.jsx
import { useState } from "react";
import { hallBooking } from "../services/api";
import "./Venue.css";

function Venue() {
  const [form, setForm] = useState({
    hallName: "Grand Ballroom",
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

  const halls = [
    {
      name: "Grand Ballroom",
      capacity: "500 Guests",
      image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
      images: [
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
        "https://images.unsplash.com/photo-1530023367847-a683933f4172",
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
      ],
      description: "Elegant ballroom with crystal chandeliers and sophisticated decor. Perfect for weddings, galas, and large celebrations.",
      fullDescription: "Our Grand Ballroom is the epitome of elegance and luxury. Featuring stunning crystal chandeliers, high ceilings, and sophisticated decor, this venue creates the perfect atmosphere for unforgettable events. The ballroom can accommodate up to 500 guests and comes equipped with a state-of-the-art sound system, professional lighting, and a grand stage. Whether you're planning a fairy-tale wedding, a corporate gala, or a grand celebration, our dedicated events team will ensure every detail is perfect.",
      features: ["Stage", "Sound System", "Chandeliers", "Dance Floor", "Professional Lighting", "AV Equipment", "Dressing Rooms", "VIP Lounge"],
      pricing: {
        "Wedding Package": "$5,000",
        "Corporate Event": "$3,500",
        "Social Gathering": "$2,500",
        "Custom Package": "Contact Us"
      },
      badge: "Most Popular",
      category: "premium",
      area: "1000 sqm",
      floor: "2nd Floor",
      rating: "4.9"
    },
    {
      name: "Conference Hall",
      capacity: "200 Guests",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      images: [
        "https://images.unsplash.com/photo-1511578314322-379afb476865",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
        "https://images.unsplash.com/photo-1497366216548-37526070297c"
      ],
      description: "Modern conference space with state-of-the-art equipment and professional amenities.",
      fullDescription: "Designed for business excellence, our Conference Hall offers a professional environment equipped with cutting-edge technology. The hall features high-speed internet, video conferencing capabilities, projection systems, and comfortable seating arrangements. With a capacity of 200 guests, it's ideal for corporate meetings, seminars, workshops, and training sessions. Our business center provides additional support services to ensure your event runs seamlessly.",
      features: ["Video Conferencing", "Projector & Screen", "High-Speed WiFi", "Whiteboard", "Flip Charts", "Breakout Rooms", "Business Center", "Catering Services"],
      pricing: {
        "Full Day": "$1,200",
        "Half Day": "$750",
        "Corporate Package": "$2,000",
        "Monthly Rental": "Contact Us"
      },
      badge: "Business Choice",
      category: "standard",
      area: "400 sqm",
      floor: "1st Floor",
      rating: "4.7"
    },
    {
      name: "Garden Terrace",
      capacity: "150 Guests",
      image: "https://images.unsplash.com/photo-1530023367847-a683933f4172",
      images: [
        "https://images.unsplash.com/photo-1530023367847-a683933f4172",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945",
        "https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
      ],
      description: "Beautiful outdoor venue with scenic views and a romantic atmosphere.",
      fullDescription: "Experience the beauty of nature at our Garden Terrace, an enchanting outdoor venue perfect for intimate gatherings and romantic celebrations. Surrounded by lush greenery and offering breathtaking views, this venue creates a magical atmosphere for outdoor weddings, cocktail parties, and social gatherings. The terrace features elegant lighting, comfortable seating arrangements, and can be customized with themed decorations. Our team ensures weather protection and comfort for your special occasion.",
      features: ["Outdoor Setting", "Scenic Views", "Garden Lighting", "Weather Protection", "Bar Service", "Fire Pits", "Photo Opportunities", "Parking Available"],
      pricing: {
        "Wedding Package": "$3,500",
        "Private Event": "$2,000",
        "Cocktail Party": "$1,500",
        "Custom Package": "Contact Us"
      },
      badge: "Romantic Venue",
      category: "outdoor",
      area: "600 sqm",
      floor: "Ground Floor",
      rating: "4.8"
    }
  ];

  const handleBookNow = (hallName) => {
    setSelectedHall(hallName);
    setForm({...form, hallName: hallName});
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleViewDetails = (hallName) => {
    setSelectedHall(hallName);
    setIsModalOpen(true);
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
      hallName: "Grand Ballroom",
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

  return (
    <div className="venue-page">
      <div className="container">
        {/* Hero Section */}
        <div className="venue-hero">
          <h1 className="page-title">Banquet & Event Halls</h1>
          <p className="page-subtitle">Elegant venues for your special occasions</p>
          <div className="hero-underline"></div>
        </div>

        {/* Venue Categories Summary */}
        <div className="venue-categories-summary">
          <div className="category-summary-card premium">
            <span className="category-icon">🏛️</span>
            <div>
              <h4>Grand Ballroom</h4>
              <p>Premium Indoor Venue</p>
            </div>
          </div>
          <div className="category-summary-card standard">
            <span className="category-icon">💼</span>
            <div>
              <h4>Conference Hall</h4>
              <p>Business & Corporate</p>
            </div>
          </div>
          <div className="category-summary-card outdoor">
            <span className="category-icon">🌿</span>
            <div>
              <h4>Garden Terrace</h4>
              <p>Outdoor & Romantic</p>
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
                  {hall.category}
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
                  <span className="hall-area">📐 {hall.area}</span>
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
                  <div className="hall-pricing">
                    <span className="price-from">From</span>
                    <span className="hall-price">
                      {Object.values(hall.pricing)[0]}
                    </span>
                  </div>
                  <div className="hall-actions">
                    <button 
                      className="view-details-btn"
                      onClick={() => handleViewDetails(hall.name)}
                    >
                      View Details
                    </button>
                    <button 
                      className="book-venue-btn"
                      onClick={() => handleBookNow(hall.name)}
                    >
                      Book Now
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
              <p>Multiple options for every occasion and guest count</p>
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

      {/* Modal/Dialog Box */}
      {isModalOpen && selectedHall && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-body">
              <div className="modal-image-section">
                <div className="modal-main-image">
                  {halls.find(h => h.name === selectedHall) && (
                    <img src={halls.find(h => h.name === selectedHall).image} alt={selectedHall} />
                  )}
                  <span className={`modal-venue-badge ${halls.find(h => h.name === selectedHall)?.category}`}>
                    {halls.find(h => h.name === selectedHall)?.category}
                  </span>
                  {halls.find(h => h.name === selectedHall)?.badge && (
                    <span className="modal-venue-badge-tag">{halls.find(h => h.name === selectedHall)?.badge}</span>
                  )}
                  <div className="modal-rating-badge">
                    ⭐ {halls.find(h => h.name === selectedHall)?.rating}
                  </div>
                </div>
                <div className="modal-thumbnails">
                  {halls.find(h => h.name === selectedHall)?.images.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt={`${selectedHall} view ${idx + 1}`}
                      className="thumbnail"
                    />
                  ))}
                </div>
              </div>

              <div className="modal-details">
                <h2>{selectedHall}</h2>
                
                <div className="modal-venue-meta">
                  <span>👥 Capacity: {halls.find(h => h.name === selectedHall)?.capacity}</span>
                  <span>📐 {halls.find(h => h.name === selectedHall)?.area}</span>
                  <span>📍 {halls.find(h => h.name === selectedHall)?.floor}</span>
                </div>

                <p className="modal-full-description">
                  {halls.find(h => h.name === selectedHall)?.fullDescription}
                </p>

                <div className="modal-features">
                  <h4>All Features & Amenities</h4>
                  <div className="features-grid-modal">
                    {halls.find(h => h.name === selectedHall)?.features.map((feature, idx) => (
                      <span key={idx} className="modal-feature-tag">
                        ✅ {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-pricing-section">
                  <h4>Pricing Packages</h4>
                  <div className="pricing-grid-modal">
                    {halls.find(h => h.name === selectedHall) && 
                      Object.entries(halls.find(h => h.name === selectedHall).pricing).map(([key, value]) => (
                        <div key={key} className="pricing-item">
                          <span className="pricing-label">{key}</span>
                          <span className="pricing-value">{value}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>

                {/* Booking Form in Modal */}
                <form onSubmit={submit} className="modal-booking-form">
                  <h4>Book This Venue</h4>
                  
                  <div className="modal-form-group">
                    <label>Event Type</label>
                    <select
                      value={form.eventType}
                      onChange={(e) => setForm({...form, eventType: e.target.value})}
                      className="modal-form-select"
                      required
                    >
                      <option value="Wedding">Wedding</option>
                      <option value="Corporate Event">Corporate Event</option>
                      <option value="Social Gathering">Social Gathering</option>
                      <option value="Conference">Conference</option>
                      <option value="Party">Party</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="modal-form-row">
                    <div className="modal-form-group">
                      <label>Event Date</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({...form, date: e.target.value})}
                        required
                      />
                    </div>
                    <div className="modal-form-group">
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

                  <div className="modal-form-row">
                    <div className="modal-form-group">
                      <label>Full Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
                        required
                      />
                    </div>
                    <div className="modal-form-group">
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

                  <div className="modal-form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={form.phone}
                      onChange={(e) => setForm({...form, phone: e.target.value})}
                      required
                    />
                  </div>

                  <div className="modal-form-group">
                    <label>Special Requests</label>
                    <textarea
                      placeholder="Any special requirements or preferences..."
                      value={form.specialRequests}
                      onChange={(e) => setForm({...form, specialRequests: e.target.value})}
                      className="modal-textarea"
                      rows="3"
                    />
                  </div>

                  <button type="submit" className="modal-submit-btn">
                    Book Venue
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Venue;