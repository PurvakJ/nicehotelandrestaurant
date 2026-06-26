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

  const roomTypes = [
    "Executive Suite",
    "Deluxe Suite"
  ];

  const roomData = {
    "Executive Suite": {
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
      images: [
        "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
        "https://images.unsplash.com/photo-1566073771259-6a8506099945"
      ],
      description: "Spacious executive suite with modern amenities, perfect for business travelers.",
      fullDescription: "Our Executive Suite offers the perfect blend of comfort and functionality. Designed with the modern business traveler in mind, this suite features a dedicated work area, high-speed internet, and ergonomic seating. The spacious living area provides ample room to relax after a long day of meetings, while the luxurious bathroom features a rain shower and premium toiletries.",
      price: "$180/night",
      amenities: ["King Bed", "Smart TV", "Rain Shower", "Work Desk", "Free WiFi", "Mini Bar", "Room Service", "Air Conditioning"],
      badge: "Most Booked",
      category: "executive",
      size: "45 sqm",
      capacity: "2 Adults",
      view: "City View",
      bedType: "King Size Bed"
    },
    "Deluxe Suite": {
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
      images: [
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32",
        "https://images.unsplash.com/photo-1584132967333-10e028bd69f7",
        "https://images.unsplash.com/photo-1582719508461-905c673771fd"
      ],
      description: "Elegant deluxe suite with premium furnishings and stunning city views.",
      fullDescription: "Indulge in luxury with our Deluxe Suite, featuring premium furnishings and breathtaking panoramic views. This suite is designed for those who appreciate the finer things in life, with a separate living area, a Jacuzzi bathtub, and a private balcony. The elegant decor and thoughtful amenities create an atmosphere of sophisticated comfort, perfect for romantic getaways or special celebrations.",
      price: "$250/night",
      amenities: ["King Bed", "Smart TV", "Jacuzzi", "Mini Bar", "Free WiFi", "Private Balcony", "Premium Toiletries", "24/7 Butler Service"],
      badge: "Luxury Choice",
      category: "deluxe",
      size: "60 sqm",
      capacity: "2 Adults + 1 Child",
      view: "Panoramic City View",
      bedType: "King Size Bed"
    }
  };

  const handleBookNow = (roomName) => {
    setSelectedRoom(roomName);
    setForm({...form, roomName: roomName});
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleViewDetails = (roomName) => {
    setSelectedRoom(roomName);
    setIsModalOpen(true);
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
                  <div className="room-overlay"></div>
                </div>
                
                <div className="room-info">
                  <h3>{room}</h3>
                  <div className="room-meta">
                    <span className="room-size">📐 {data.size}</span>
                    <span className="room-capacity">👥 {data.capacity}</span>
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
                    <span className="room-price">{data.price}</span>
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

      {/* Modal/Dialog Box */}
      {isModalOpen && selectedRoom && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-body">
              <div className="modal-image-section">
                <div className="modal-main-image">
                  <img src={roomData[selectedRoom].image} alt={selectedRoom} />
                  <span className={`modal-room-badge ${roomData[selectedRoom].category}`}>
                    {roomData[selectedRoom].category}
                  </span>
                  {roomData[selectedRoom].badge && (
                    <span className="modal-room-badge-tag">{roomData[selectedRoom].badge}</span>
                  )}
                </div>
                <div className="modal-thumbnails">
                  {roomData[selectedRoom].images.map((img, idx) => (
                    <img 
                      key={idx} 
                      src={img} 
                      alt={`${selectedRoom} view ${idx + 1}`}
                      className="thumbnail"
                    />
                  ))}
                </div>
              </div>

              <div className="modal-details">
                <h2>{selectedRoom}</h2>
                
                <div className="modal-room-meta">
                  <span>📐 {roomData[selectedRoom].size}</span>
                  <span>👥 {roomData[selectedRoom].capacity}</span>
                  <span>🛏️ {roomData[selectedRoom].bedType}</span>
                  <span>👁️ {roomData[selectedRoom].view}</span>
                </div>

                <p className="modal-full-description">
                  {roomData[selectedRoom].fullDescription}
                </p>

                <div className="modal-amenities">
                  <h4>All Amenities</h4>
                  <div className="amenities-grid">
                    {roomData[selectedRoom].amenities.map((amenity, idx) => (
                      <span key={idx} className="modal-amenity-tag">
                        ✅ {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-price-section">
                  <span className="modal-price">{roomData[selectedRoom].price}</span>
                  <span className="modal-per-night">per night</span>
                </div>

                {/* Booking Form in Modal */}
                <form onSubmit={submit} className="modal-booking-form">
                  <h4>Book This Room</h4>
                  
                  <div className="modal-form-group">
                    <label>Check-in Date</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({...form, date: e.target.value})}
                      required
                    />
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

                  <button type="submit" className="modal-submit-btn">
                    Book Now - {roomData[selectedRoom].price}
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

export default Rooms;