// Services.jsx
import "./Services.css";

function Services() {
  const services = [
    { 
      icon: "🛏️", 
      name: "Luxury Rooms", 
      description: "9 premium rooms with modern amenities and comfort",
      category: "accommodation-events",
      features: ["King Bed", "Smart TV", "Rain Shower", "Work Desk", "Free WiFi"]
    },
    { 
      icon: "🍽️", 
      name: "Fine Dining Restaurant", 
      description: "Exquisite cuisine prepared by world-class chefs",
      category: "dining",
      features: ["Private Dining", "Breakfast Buffet", "Room Service"]
    },
    { 
      icon: "💒", 
      name: "Party Hall", 
      description: "Elegant ballroom for Kitty and celebrations",
      category: "accommodation-events",
      features: ["100 Guests", "Sound System", "Dance Floor", "Decor Services"]
    },
    { 
      icon: "📊", 
      name: "Meeting Hall", 
      description: "Modern facilities for business meetings and events",
      category: "accommodation-events",
      features: ["AV Equipment", "Video Conferencing", "High-Speed WiFi", "Breakout Rooms", "Catering"]
    },
    { 
      icon: "📶", 
      name: "Free WiFi", 
      description: "High-speed internet throughout the property",
      category: "amenities",
      features: ["High-Speed", "Property-wide", "Secure Connection", "24/7 Support", "Multiple Devices"]
    },
    { 
      icon: "🧹", 
      name: "Daily Housekeeping", 
      description: "Immaculate room cleaning and turndown service",
      category: "amenities",
      features: ["Daily Cleaning", "Turndown Service", "Fresh Linens", "Amenity Restocking", "Laundry Service"]
    },
    { 
      icon: "🛎️", 
      name: "Concierge Service", 
      description: "Personalized assistance for all your needs",
      category: "amenities",
      features: ["Tour Bookings", "Restaurant Reservations", "Transportation", "Local Recommendations", "24/7 Support"]
    },
  ];

  // Updated categories - combined accommodation and events
  const categories = {
    'accommodation-events': { 
      title: "Accommodation & Events", 
      icon: "🏨",
      description: "Comfortable rooms and perfect venues for special occasions"
    },
    amenities: { 
      title: "Amenities & Services", 
      icon: "✨",
      description: "Additional services for your convenience"
    },
    dining: { 
      title: "Dining & Bars", 
      icon: "🍽️",
      description: "Exquisite culinary experiences"
    },
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

        {/* Service Categories Navigation */}
        <div className="service-categories-nav">
          {Object.entries(categories).map(([key, value]) => {
            const categoryServices = getServicesByCategory(key);
            if (categoryServices.length === 0) return null;
            return (
              <a key={key} href={`#${key}`} className="category-nav-item">
                <span className="nav-icon">{value.icon}</span>
                <span className="nav-label">{value.title}</span>
                <span className="nav-count">{categoryServices.length}</span>
              </a>
            );
          })}
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
                <p className="category-description">{value.description}</p>
                <div className="category-underline"></div>
              </div>
              
              <div className="services-grid">
                {categoryServices.map((service, index) => (
                  <div key={index} className={`service-card ${key}`}>
                    <div className="service-icon-wrapper">
                      <span className="service-icon">{service.icon}</span>
                    </div>
                    <h3 className="service-name">{service.name}</h3>
                    <p className="service-description">{service.description}</p>
                    <div className="service-features">
                      {service.features.map((feature, idx) => (
                        <span key={idx} className="service-feature-tag">{feature}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {/* CTA Section */}
        <div className="services-cta">
          <h2>Ready to Experience Luxury?</h2>
          <p>Contact us to learn more about our services and how we can make your stay extraordinary</p>
          <button className="services-cta-btn" onClick={() => window.location.href = '/contact'}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;