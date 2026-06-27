// Rooms.jsx
import { useState } from "react";
import { roomBooking } from "../services/api";
import "./Rooms.css";

function Rooms() {
  const [form, setForm] = useState({
    roomName: "Executive Suite",
    name: "",
    phone: "",
    email: "",
    date: ""
  });

  const [selectedRoom, setSelectedRoom] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('details');
  const [activeImage, setActiveImage] = useState(0);

  const roomTypes = [
    "Executive Suite",
    "Deluxe Suite"
  ];

  const roomData = {
    "Executive Suite": {
      image: "/images/executive.png",
      images: [
        "/images/executive.png",
        "/images/executive2.png",
        "/images/executive3.png",
        "/images/executive4.png"
      ],
      description: "Spacious executive suite with modern amenities, perfect for business travelers.",
      fullDescription: "Our Executive Suite offers the perfect blend of comfort and functionality. Designed with the modern business traveler in mind, this suite features a dedicated work area, high-speed internet, and ergonomic seating. The spacious living area provides ample room to relax after a long day of meetings, while the luxurious bathroom features a rain shower and premium toiletries.",
      price: "$180/night",
      amenities: ["King Bed", "Smart TV", "Rain Shower", "Work Desk", "Free WiFi", "Room Service", "Air Conditioning"],
      badge: "Most Booked",
      category: "executive",
      size: "45 sqm",
      capacity: "2 Adults",
      bedType: "King Size Bed",
      view: "City View",
      rating: "4.8"
    },
    "Deluxe Suite": {
      image: "/images/Delux room.png",
      images: [
        "/images/Delux room.png",
        "/images/deluxe2.png",
        "/images/deluxe3.png",
        "/images/deluxe4.png"
      ],
      description: "Elegant deluxe suite with premium furnishings and stunning city views.",
      fullDescription: "Indulge in luxury with our Deluxe Suite, featuring premium furnishings and breathtaking panoramic views. This suite is designed for those who appreciate the finer things in life, with a separate living area. The elegant decor and thoughtful amenities create an atmosphere of sophisticated comfort, perfect for romantic getaways or special celebrations.",
      price: "$250/night",
      amenities: ["King Bed", "Smart TV", "Free WiFi", "Premium Toiletries", "24/7 Butler Service"],
      badge: "Luxury Choice",
      category: "deluxe",
      size: "60 sqm",
      capacity: "2 Adults + 1 Child",
      view: "Panoramic City View",
      bedType: "King Size Bed",
      rating: "4.9"
    }
  };

  const handleBookNow = (roomName) => {
    setSelectedRoom(roomName);
    setModalMode('booking');
    setForm({...form, roomName: roomName});
    setIsModalOpen(true);
    setActiveImage(0);
    document.body.style.overflow = 'hidden';
  };

  const handleViewDetails = (roomName) => {
    setSelectedRoom(roomName);
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
    await roomBooking(form);
    alert("Booking Submitted Successfully!");
    setForm({
      roomName: "Executive Suite",
      name: "",
      phone: "",
      email: "",
      date: ""
    });
    closeModal();
  };

  const handleCloseModal = (e) => {
    if (e.target.className === 'modal-overlay') {
      closeModal();
    }
  };

  const getRoom = (name) => roomData[name];

  const nextImage = () => {
    const room = getRoom(selectedRoom);
    if (room && room.images.length > 0) {
      setActiveImage(prev => prev < room.images.length - 1 ? prev + 1 : 0);
    }
  };

  const prevImage = () => {
    const room = getRoom(selectedRoom);
    if (room && room.images.length > 0) {
      setActiveImage(prev => prev > 0 ? prev - 1 : room.images.length - 1);
    }
  };

  return (
    <div className="rooms-page">
      <div className="container">
        {/* Hero Section */}
        <div className="rooms-hero">
          <h1 className="page-title">Luxury Rooms & Suites</h1>
          <p className="page-subtitle">Experience elegance and comfort in our premium accommodations</p>
          <div className="hero-underline"></div>
        </div>

        {/* Room Categories Summary */}
        <div className="room-categories-summary">
          <div className="category-summary-card executive">
            <span className="category-icon">🏢</span>
            <div>
              <h4>Executive Suite</h4>
              <p>Business & Luxury</p>
            </div>
          </div>
          <div className="category-summary-card deluxe">
            <span className="category-icon">✨</span>
            <div>
              <h4>Deluxe Suite</h4>
              <p>Premium & Elegance</p>
            </div>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="rooms-grid">
          {roomTypes.map((room, index) => {
            const data = roomData[room];
            return (
              <div key={index} className={`room-card ${data.category}`}>
                <div className="room-image-wrapper">
                  <img 
                    src={data.image} 
                    alt={room}
                    className="room-image"
                  />
                  <span className={`room-category-badge ${data.category}`}>
                    {data.category}
                  </span>
                  {data.badge && (
                    <span className="room-badge">{data.badge}</span>
                  )}
                  <div className="room-overlay">
                    <span className="room-rating">⭐ {data.rating}</span>
                  </div>
                </div>
                
                <div className="room-info">
                  <h3>{room}</h3>
                  <div className="room-meta">
                    <span className="room-size">📐 {data.size}</span>
                    <span className="room-capacity">👥 {data.capacity}</span>
                    <span className="room-view">👁️ {data.view}</span>
                  </div>
                  <p className="room-description">{data.description}</p>
                  
                  <div className="room-amenities">
                    {data.amenities.slice(0, 4).map((amenity, idx) => (
                      <span key={idx} className="amenity-tag">{amenity}</span>
                    ))}
                    {data.amenities.length > 4 && (
                      <span className="amenity-tag more">+{data.amenities.length - 4}</span>
                    )}
                  </div>
                  
                  <div className="room-footer">
                    <div className="room-actions">
                      <button 
                        className="view-details-btn"
                        onClick={() => handleViewDetails(room)}
                      >
                        View Details
                      </button>
                      <button 
                        className="book-btn"
                        onClick={() => handleBookNow(room)}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className="why-choose-section">
          <h2 className="section-title">Why Choose Nice Hotel</h2>
          <p className="section-subtitle">Experience the best in hospitality</p>
          
          <div className="features-grid">
            <div className="feature-card">
              <span className="feature-icon">🏆</span>
              <h4>Premium Quality</h4>
              <p>Top-rated accommodations with world-class amenities</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">🤝</span>
              <h4>Personalized Service</h4>
              <p>Dedicated staff ensuring your comfort and satisfaction</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">📍</span>
              <h4>Prime Location</h4>
              <p>Centrally located with easy access to city attractions</p>
            </div>
            <div className="feature-card">
              <span className="feature-icon">💰</span>
              <h4>Best Value</h4>
              <p>Competitive rates with luxury experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedRoom && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className={`modal-content ${modalMode}`}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-body">
              {/* Image Slider - Full Width at Top (Details View Only) */}
              {modalMode === 'details' && (
                <div className="modal-image-slider">
                  <div className="slider-main">
                    <img 
                      src={getRoom(selectedRoom)?.images[activeImage] || getRoom(selectedRoom)?.image} 
                      alt={selectedRoom} 
                    />
                    <div className="slider-overlay">
                      <span className={`slider-badge ${getRoom(selectedRoom)?.category}`}>
                        {getRoom(selectedRoom)?.category}
                      </span>
                      {getRoom(selectedRoom)?.badge && (
                        <span className="slider-badge-tag">{getRoom(selectedRoom)?.badge}</span>
                      )}
                      <span className="slider-rating">⭐ {getRoom(selectedRoom)?.rating}</span>
                    </div>
                    {getRoom(selectedRoom)?.images.length > 1 && (
                      <>
                        <button className="slider-nav prev" onClick={prevImage}>‹</button>
                        <button className="slider-nav next" onClick={nextImage}>›</button>
                        <div className="slider-counter">
                          {activeImage + 1} / {getRoom(selectedRoom)?.images.length}
                        </div>
                      </>
                    )}
                  </div>
                  {getRoom(selectedRoom)?.images.length > 1 && (
                    <div className="slider-thumbnails">
                      {getRoom(selectedRoom)?.images.map((img, idx) => (
                        <img 
                          key={idx} 
                          src={img} 
                          alt={`${selectedRoom} view ${idx + 1}`}
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
                  <h2 className="modal-title">{selectedRoom}</h2>
                  
                  <div className="modal-meta">
                    <span>📐 {getRoom(selectedRoom)?.size}</span>
                    <span>👥 {getRoom(selectedRoom)?.capacity}</span>
                    <span>🛏️ {getRoom(selectedRoom)?.bedType}</span>
                    <span>👁️ {getRoom(selectedRoom)?.view}</span>
                  </div>

                  <p className="modal-description">
                    {getRoom(selectedRoom)?.fullDescription}
                  </p>

                  <div className="modal-amenities-section">
                    <h4>✨ Amenities</h4>
                    <div className="modal-amenities-grid">
                      {getRoom(selectedRoom)?.amenities.map((amenity, idx) => (
                        <span key={idx} className="modal-amenity-item">
                          ✓ {amenity}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button 
                    className="modal-book-now-btn"
                    onClick={() => {
                      setModalMode('booking');
                      setForm({...form, roomName: selectedRoom});
                    }}
                  >
                    📅 Book This Room
                  </button>
                </div>
              ) : (
                // BOOKING VIEW - Form only, no image
                <div className="modal-booking-view">
                  <h2 className="modal-title">Book {selectedRoom}</h2>
                  <p className="booking-subtitle">Fill in the details below to reserve your stay</p>
                  
                  <form onSubmit={submit} className="booking-form">
                    <div className="form-group">
                      <label>Check-in Date</label>
                      <input
                        type="date"
                        value={form.date}
                        onChange={(e) => setForm({...form, date: e.target.value})}
                        required
                      />
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

                    <button type="submit" className="submit-btn">
                      Confirm Booking - {getRoom(selectedRoom)?.price}
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

export default Rooms;