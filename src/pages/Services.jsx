// Services.jsx
import "./Services.css";

function Services() {
  const services = [
    { 
      icon: "🛏️", 
      name: "Luxury Rooms", 
      description: "9 premium rooms with modern amenities and comfort",
      fullDescription: "Experience unparalleled comfort in our 9 beautifully designed luxury rooms. Each room features premium bedding, smart technology, and elegant furnishings to ensure a restful stay.",
      category: "accommodation",
      features: ["King Bed", "Smart TV", "Rain Shower", "Work Desk", "Free WiFi"]
    },
    { 
      icon: "🍽️", 
      name: "Fine Dining Restaurant", 
      description: "Exquisite cuisine prepared by world-class chefs",
      fullDescription: "Indulge in culinary excellence at our fine dining restaurant. Our award-winning chefs create exquisite dishes using the finest ingredients, offering both local and international cuisine in an elegant setting.",
      category: "dining",
      features: ["International Cuisine", "Wine Selection", "Private Dining", "Breakfast Buffet", "Room Service"]
    },
    { 
      icon: "💒", 
      name: "Wedding Hall", 
      description: "Elegant ballroom for weddings and celebrations",
      fullDescription: "Create unforgettable memories in our stunning wedding hall. With crystal chandeliers, sophisticated decor, and capacity for 500 guests, we provide the perfect setting for your dream wedding.",
      category: "events",
      features: ["500 Guests", "Stage", "Sound System", "Dance Floor", "Decor Services"]
    },
    { 
      icon: "📊", 
      name: "Conference Hall", 
      description: "Modern facilities for business meetings and events",
      fullDescription: "Host successful business events in our state-of-the-art conference hall. Equipped with the latest technology, high-speed internet, and professional support services for seamless presentations and meetings.",
      category: "events",
      features: ["AV Equipment", "Video Conferencing", "High-Speed WiFi", "Breakout Rooms", "Catering"]
    },
    { 
      icon: "📶", 
      name: "Free WiFi", 
      description: "High-speed internet throughout the property",
      fullDescription: "Stay connected with our complimentary high-speed WiFi available throughout the hotel. Perfect for business travelers, streaming, and keeping in touch with loved ones.",
      category: "amenities",
      features: ["High-Speed", "Property-wide", "Secure Connection", "24/7 Support", "Multiple Devices"]
    },
    { 
      icon: "🚗", 
      name: "Valet Parking", 
      description: "Convenient parking with professional valet service",
      fullDescription: "Enjoy hassle-free parking with our professional valet service. Our trained staff ensures your vehicle is safely parked while you focus on enjoying your stay.",
      category: "amenities",
      features: ["24/7 Service", "Secure Parking", "Professional Staff", "Complimentary", "Electric Charging"]
    },
    { 
      icon: "🧹", 
      name: "Daily Housekeeping", 
      description: "Immaculate room cleaning and turndown service",
      fullDescription: "Return to a perfectly clean and refreshed room every day. Our dedicated housekeeping team provides meticulous cleaning, turndown service, and attention to every detail.",
      category: "amenities",
      features: ["Daily Cleaning", "Turndown Service", "Fresh Linens", "Amenity Restocking", "Laundry Service"]
    },
    { 
      icon: "🛎️", 
      name: "Concierge Service", 
      description: "Personalized assistance for all your needs",
      fullDescription: "Our knowledgeable concierge team is ready to assist with restaurant reservations, tour bookings, transportation, and any other requests to make your stay exceptional.",
      category: "amenities",
      features: ["Tour Bookings", "Restaurant Reservations", "Transportation", "Local Recommendations", "24/7 Support"]
    },
  ];

  // Group services by category
  const categories = {
    accommodation: { title: "Accommodation", icon: "🏨" },
    dining: { title: "Dining & Bars", icon: "🍽️" },
    events: { title: "Events & Meetings", icon: "🎯" },
    recreation: { title: "Recreation & Leisure", icon: "🎪" },
    wellness: { title: "Wellness & Spa", icon: "💆" },
    amenities: { title: "Amenities & Services", icon: "✨" }
  };

  const getServicesByCategory = (category) => {
    return services.filter(service => service.category === category);
  };

  return (
    <div className="services-page">
      <div className="container">
        {/* Hero Section */}
        <div className="services-hero">
          <h1 className="page-title">Our Premium Services</h1>
          <p className="page-subtitle">World-class amenities for an unforgettable experience</p>
          <div className="hero-underline"></div>
        </div>

        {/* Service Categories */}
        <div className="service-categories">
          <div className="category-tabs">
            {Object.entries(categories).map(([key, value]) => (
              <a key={key} href={`#${key}`} className="category-tab">
                <span className="tab-icon">{value.icon}</span>
                <span className="tab-label">{value.title}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Services by Category */}
        {Object.entries(categories).map(([key, value]) => {
          const categoryServices = getServicesByCategory(key);
          if (categoryServices.length === 0) return null;
          
          return (
            <div key={key} id={key} className="service-category-section">
              <div className="category-header">
                <h2 className="category-title">
                  <span className="category-icon">{value.icon}</span>
                  {value.title}
                </h2>
                <div className="category-underline"></div>
              </div>
              
              <div className="services-grid">
                {categoryServices.map((service, index) => (
                  <div key={index} className={`service-card ${key}`}>
                    <div className="service-icon-wrapper">
                      <span className="service-icon">{service.icon}</span>
                      <span className="service-number">#{index + 1}</span>
                    </div>
                    <h3>{service.name}</h3>
                    <p className="service-description">{service.description}</p>
                    <div className="service-features">
                      {service.features.slice(0, 4).map((feature, idx) => (
                        <span key={idx} className="service-feature-tag">{feature}</span>
                      ))}
                      {service.features.length > 4 && (
                        <span className="service-feature-tag more">+{service.features.length - 4}</span>
                      )}
                    </div>
                    <button className="service-learn-more">Learn More</button>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* Why Choose Us Section */}
        <div className="why-choose-section">
          <h2 className="section-title">Why Experience Our Services</h2>
          <p className="section-subtitle">Every detail is crafted for your comfort and satisfaction</p>
          
          <div className="reasons-grid">
            <div className="reason-card">
              <span className="reason-icon">⭐</span>
              <h4>Premium Quality</h4>
              <p>Top-rated services with attention to every detail</p>
            </div>
            <div className="reason-card">
              <span className="reason-icon">👨‍💼</span>
              <h4>Professional Staff</h4>
              <p>Trained professionals dedicated to your satisfaction</p>
            </div>
            <div className="reason-card">
              <span className="reason-icon">🕐</span>
              <h4>24/7 Availability</h4>
              <p>Round-the-clock service for your convenience</p>
            </div>
            <div className="reason-card">
              <span className="reason-icon">🎯</span>
              <h4>Personalized Experience</h4>
              <p>Services tailored to your individual preferences</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="services-cta">
          <h2>Ready to Experience Luxury?</h2>
          <p>Contact us to learn more about our services and how we can make your stay extraordinary</p>
          <button className="services-cta-btn">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default Services;