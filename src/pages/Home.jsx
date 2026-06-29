// Home.jsx - Complete file with fix
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { getOffers, getReviews } from "../services/api";
import "./Home.css";

function Home() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [offers, setOffers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const galleryIntervalRef = useRef(null);

  // Hero Carousel Images
  const heroImages = [
    {
      url: "/images/executive.png",
      title: "Premium Accommodation",
      subtitle: "Luxury Rooms & Suites"
    },
    {
      url: "/images/dinning2.png",
      title: "Fine Dining",
      subtitle: "Exquisite Culinary Experiences"
    },
    {
      url: "/images/meeting1.png",
      title: "Grand Events",
      subtitle: "Celebrate in Elegance"
    },
  ];

  // Gallery Images
  const galleryImages = [
    {
      url: "/images/executive.png",
      title: "Executive Room",
      badge: "Featured"
    },
    {
      url: "/images/Delux room.png",
      title: "Premium Room",
      badge: "New"
    },
    {
      url: "/images/meeting 2.png",
      title: "Meeting Area",
      badge: "Popular"
    },
    {
      url: "/images/dining 1.png",
      title: "Dining Area",
      badge: "Luxury"
    },
    {
      url: "/images/kitty hall.png",
      title: "Party Hall",
      badge: "Grand"
    },
    {
      url: "https://images.unsplash.com/photo-1530023367847-a683933f4172",
      title: "Garden Terrace",
      badge: "Coming Soon"
    }
  ];

  // Room Data with categories
  const rooms = [
    {
      id: 1,
      name: "Executive Suite",
      category: "executive",
      image: "/images/executive.png",
      description: "Spacious executive suite with modern amenities, perfect for business travelers.",
      price: "₹1500/night",
      amenities: ["King Bed", "Smart TV", "Rain Shower", "Work Desk", "Free WiFi"],
      badge: "Most Booked"
    },
    {
      id: 2,
      name: "Deluxe Suite",
      category: "deluxe",
      image: "/images/Delux room.png",
      description: "Elegant deluxe suite with premium furnishings and stunning city views.",
      price: "₹2000/night",
      amenities: ["King Bed", "Smart TV", "Mini Bar", "Free WiFi"],
      badge: "Luxury Choice"
    },
  ];

  // Banquet/Event Hall Data
  const banquetHalls = [
    {
      id: 1,
      name: "Grand Ballroom",
      capacity: "50-100 Guests",
      image: "/images/kitty hall.png",
      description: "Elegant ballroom with crystal chandeliers and sophisticated decor. Perfect for weddings, galas, and small celebrations.                 Indulge in culinary excellence at our fine dining restaurant. Our award-winning chefs create exquisite dishes using the finest ingredients, offering both local and international cuisine in an elegant setting.Every plate is a work of art, presented with precision and passion, designed to delight all the senses. The experience is elevated by our restaurant's refined and intimate setting, where soft lighting, impeccable service, and an atmosphere of quiet luxury create the perfect backdrop for a memorable meal. Whether you are celebrating a special occasion or simply indulging in an extraordinary evening out, our restaurant promises a dining experience that transcends the ordinary and leaves a lasting impression.",
      features: ["Stage", "Sound System", "Chandeliers", "Dance Floor" ,"Stage", "Sound System", "Catering"],
      descriptions:"Indulge in culinary excellence at our fine dining restaurant. Our award-winning chefs create exquisite dishes using the finest ingredients, offering both local and international cuisine in an elegant setting.Every plate is a work of art, presented with precision and passion, designed to delight all the senses. ",
    }
  ];

  // Features Data
  const features = [
    {
      icon: "🛏️",
      title: "Luxury Rooms",
      description: "9 premium rooms with world-class amenities",
      stat: "9 Rooms"
    },
    {
      icon: "🍽️",
      title: "Fine Dining",
      description: "Exquisite cuisine by award-winning chefs",
      stat: "5-Star Dining"
    },
    {
      icon: "🏛️",
      title: "Event Venues",
      description: "Elegant halls for Kitty & get together",
      stat: "1 Halls"
    },
    {
      icon: "⭐",
      title: "Premium Service",
      description: "Personalized hospitality at its best",
      stat: "24/7 Service"
    }
  ];

  // Auto-rotate hero carousel
  useEffect(() => {
    const heroInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(heroInterval);
  }, [heroImages.length]);

  // Auto-rotate gallery
  useEffect(() => {
    galleryIntervalRef.current = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(galleryIntervalRef.current);
  }, [galleryImages.length]);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [offersData, reviewsData] = await Promise.all([
          getOffers(),
          getReviews()
        ]);
        setOffers(offersData || []);
        setReviews(reviewsData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Use fallback data if API fails
        setOffers([
          {
            id: 1,
            title: "Summer Special",
            description: "Get 15% off on all room bookings. Limited time offer!",
            discount: "15% OFF",
            status: "active"
          },
          {
            id: 2,
            title: "Family Getaway",
            description: "Special family package with complimentary breakfast and kids stay free.",
            discount: "10% OFF",
            status: "active"
          },
          {
            id: 3,
            title: "Corporate Retreat",
            description: "Perfect for business meetings with conference room and catering included.",
            discount: "10% OFF",
            status: "active"
          }
        ]);
        setReviews([
          {
            id: 1,
            name: "John Smith",
            rating: 5,
            review: "Amazing experience! The rooms were luxurious and the service was impeccable.",
            createdAt: new Date().toISOString()
          },
          {
            id: 2,
            name: "Sarah Johnson",
            rating: 5,
            review: "Beautiful hotel with outstanding amenities. The staff went above and beyond.",
            createdAt: new Date().toISOString()
          },
          {
            id: 3,
            name: "Michael Chen",
            rating: 4,
            review: "Great location, comfortable rooms, and excellent dining options. Highly recommended!",
            createdAt: new Date().toISOString()
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Get top 3 reviews
  const topReviews = reviews.slice(0, 3);

  // Get active offers only
  const activeOffers = offers.filter(offer => offer.status === "active");

  // Gallery navigation
  const goToGallerySlide = (index) => {
    setGalleryIndex(index);
    clearInterval(galleryIntervalRef.current);
    galleryIntervalRef.current = setInterval(() => {
      setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
  };

  const prevGallerySlide = () => {
    setGalleryIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const nextGallerySlide = () => {
    setGalleryIndex((prev) => (prev + 1) % galleryImages.length);
  };

// Format discount display - FIXED for decimal values
const formatDiscount = (discount) => {
  if (!discount) return 'Special Offer';
  
  // Convert to string if it's a number
  const discountStr = String(discount);
  
  // If it already has % or OFF, return as is
  if (discountStr.includes('%') || discountStr.includes('OFF')) {
    return discountStr;
  }
  
  // Check if it's a decimal (0.1, 0.15, etc.)
  const num = parseFloat(discountStr);
  if (!isNaN(num)) {
    // If it's less than 1, it's a decimal representing percentage
    if (num < 1 && num > 0) {
      // Convert decimal to percentage (0.1 -> 10%)
      const percent = Math.round(num * 100);
      return `${percent}% OFF`;
    }
    // If it's already a whole number, add % OFF
    if (Number.isInteger(num)) {
      return `${num}% OFF`;
    }
    return `${num}% OFF`;
  }
  
  return discountStr;
};

  return (
    <div className="hotel-home">
      {/* ========================= */}
      {/* HERO SECTION WITH CAROUSEL */}
      {/* ========================= */}
      <section className="hotel-hero">
        <div className="hero-carousel">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className={`carousel-image ${index === currentSlide ? 'active-slide' : ''}`}
              style={{ backgroundImage: `url(${image.url})` }}
            />
          ))}
        </div>
        <div className="hero-content">
          <div className="hero-text-container">
            <h1 className="hero-title">Nice Hotel</h1>
            <h2 className="hero-subtitle">And Restaurant</h2>
            <div className="hero-underline"></div>
            <p className="hero-description">
              {heroImages[currentSlide]?.title} — {heroImages[currentSlide]?.subtitle}
            </p>
            <button 
              className="hero-btn"
              onClick={() => navigate("/rooms")}
            >
              Explore Our Rooms
            </button>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* FEATURES SECTION */}
      {/* ========================= */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Welcome to Nice Hotel And Restaurant</h2>
          <p className="section-subtitle">
            Where luxury meets comfort — Experience world-class hospitality
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
                <span className="feature-stat">{feature.stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* EXCLUSIVE OFFERS SECTION */}
      {/* ========================= */}
      <section className="offers-section">
        <div className="container">
          <h2 className="section-title offers-title">✨ Exclusive Offers</h2>
          <p className="section-subtitle offers-subtitle">
            Special deals and packages for our valued guests
          </p>
          
          {loading ? (
            <div className="loading-status">
              <div className="loading-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <p className="loading-text">Loading offers...</p>
            </div>
          ) : activeOffers.length === 0 ? (
            <div className="text-center" style={{ color: 'rgba(255,255,255,0.7)', padding: '40px 0' }}>
              <p>No active offers available at the moment. Check back soon!</p>
            </div>
          ) : (
            <div className="offers-grid">
              {activeOffers.slice(0, 4).map((offer, index) => (
                <div key={offer.id} className={`offer-card ${index === 0 ? 'featured' : ''}`}>
                  {index === 0 && <div className="offer-featured-badge">🔥 Best Deal</div>}
                  <div className="offer-discount-badge">
                    {formatDiscount(offer.discount)}
                  </div>
                  <div className="offer-content">
                    <h3 className="offer-title">{offer.title}</h3>
                    <p
  className="offer-description"
>
  {offer.description}
</p>
                    <div className="offer-footer">
                      <span className="offer-validity">✓ Limited Time</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeOffers.length > 4 && (
            <div className="view-all-wrapper">
              <button 
                className="view-all-btn"
                onClick={() => navigate("/rooms")}
              >
                View All Offers
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ========================= */}
      {/* GALLERY SLIDER SECTION */}
      {/* ========================= */}
      <section className="gallery-slider-section">
        <div className="container">
          <h2 className="section-title">Hotel Gallery</h2>
          <p className="section-subtitle">Explore our beautiful spaces and amenities</p>
          
          <div className="gallery-slider-container">
            <div 
              className="gallery-slider"
              style={{ transform: `translateX(-${galleryIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="gallery-slide">
                  <img src={image.url} alt={image.title} />
                  <div className="gallery-slide-overlay">
                    <h3>
                      {image.title}
                      <span className="new-badge">{image.badge}</span>
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            
            <button className="slider-btn prev" onClick={prevGallerySlide}>
              ‹
            </button>
            <button className="slider-btn next" onClick={nextGallerySlide}>
              ›
            </button>
            
            <div className="slider-dots">
              {galleryImages.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === galleryIndex ? 'active' : ''}`}
                  onClick={() => goToGallerySlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* ROOMS SECTION */}
      {/* ========================= */}
      <section className="rooms-section">
        <div className="container">
          <h2 className="section-title">Luxury Rooms & Suites</h2>
          <p className="section-subtitle">
            Choose from our executive and deluxe accommodations
          </p>
          
          <div className="room-categories-summary">
            <span className="category-badge">
              🏢 Executive Suites & Rooms
              <span className="count">
                {rooms.filter(r => r.category === 'executive').length}
              </span>
            </span>
            <span className="category-badge">
              ✨ Deluxe Suites & Rooms
              <span className="count">
                {rooms.filter(r => r.category === 'deluxe').length}
              </span>
            </span>
          </div>
          
          <div className="rooms-grid">
            {rooms.map((room) => (
              <div key={room.id} className="room-card">
                <div className="room-image-wrapper">
                  <img src={room.image} alt={room.name} className="room-image" />
                  <span className={`room-category-badge ${room.category}`}>
                    {room.category}
                  </span>
                  {room.badge && (
                    <span className="room-badge">{room.badge}</span>
                  )}
                  <div className="room-overlay"></div>
                </div>
                <div className="room-details">
                  <h3 className="room-name">{room.name}</h3>
                  <p className="room-description">{room.description}</p>
                  <p className="room-price">{room.price}</p>
                  <div className="room-amenities">
                    {room.amenities.map((amenity, idx) => (
                      <span key={idx} className="amenity-tag">{amenity}</span>
                    ))}
                  </div>
                  <button 
                    className="room-btn"
                    onClick={() => navigate("/rooms")}
                  >
                    Book This Room
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="view-all-wrapper">
            <button 
              className="view-all-btn"
              onClick={() => navigate("/rooms")}
            >
              View All Rooms
            </button>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* BANQUET SECTION */}
      {/* ========================= */}
      <section className="banquet-section">
        <div className="container">
          <h2 className="section-title">Grand Event Venues</h2>
          <p className="section-subtitle">
            Host your special occasions in our elegant Party halls
          </p>
          
          {banquetHalls.map((hall) => (
            <div key={hall.id} className="banquet-card">
              <div className="banquet-image-wrapper">
                <img src={hall.image} alt={hall.name} className="banquet-image" />
                <div className="banquet-overlay">
                  <span className="banquet-capacity">👥 {hall.capacity}</span>
                </div>
              </div>
              <div className="banquet-details">
                <h3>{hall.name}</h3>
                <p className="banquet-description">{hall.description}</p>
                <p></p>
                
                <div className="banquet-features">
                  <h4>Features</h4>
                  <div className="feature-grid">
                    {hall.features.map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                  </div>
                </div>
                <p className="banquet-description">{hall.descriptions}</p>
                <button 
                  className="banquet-btn"
                  onClick={() => navigate("/venue")}
                >
                  Book This Venue
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ========================= */}
      {/* TESTIMONIALS SECTION */}
      {/* ========================= */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">Guest Reviews</h2>
          <p className="section-subtitle">
            What our guests say about their experience
          </p>
          
          {loading ? (
            <div className="loading-status">
              <div className="loading-dots">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
              <p className="loading-text">Loading reviews...</p>
            </div>
          ) : topReviews.length === 0 ? (
            <div className="text-center" style={{ padding: '40px 0', color: '#8a7a6a' }}>
              <p>No reviews yet. Be the first to share your experience!</p>
            </div>
          ) : (
            <div className="testimonials-grid">
              {topReviews.map((review) => (
                <div key={review.id} className="testimonial-card">
                  <span className="testimonial-badge">Verified Guest</span>
                  <div className="testimonial-stars">
                    {[...Array(5)].map((_, idx) => (
                      <span key={idx}>
                        {idx < review.rating ? '★' : '☆'}
                      </span>
                    ))}
                  </div>
                  <p className="testimonial-text">"{review.review || 'Great experience!'}"</p>
                  <div className="testimonial-author">
                    <span className="author-name">{review.name || 'Anonymous'}</span>
                    <span className="author-date">
                      {review.createdAt ? new Date(review.createdAt).toLocaleDateString() : 'Recent'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          <div className="view-all-wrapper">
            <button 
              className="view-all-btn"
              onClick={() => navigate("/contact")}
            >
              Read All Reviews
            </button>
          </div>
        </div>
      </section>

      {/* ========================= */}
      {/* CTA SECTION */}
      {/* ========================= */}
      <section className="cta-section">
        <div className="container">
          <h2 className="cta-title">Experience Luxury Today</h2>
          <p className="cta-text">
            Book your stay now and enjoy world-class hospitality at Nice Hotel
          </p>
          <div className="cta-buttons">
            <button 
              className="cta-primary"
              onClick={() => navigate("/rooms")}
            >
              Book a Room
            </button>
            <button 
              className="cta-secondary"
              onClick={() => navigate("/contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;