import { useState } from "react";
import { contactQuery, submitReview as submitReviewApi } from "../services/api";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  
  const [review, setReview] = useState({
    name: "",
    email: "",
    rating: 5,
    review: ""
  });
  
  const [activeTab, setActiveTab] = useState("contact");
  const [submitting, setSubmitting] = useState(false);

  // Contact form handler
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const result = await contactQuery(form);
      console.log("Contact submission result:", result);

      if (result.success) {
        alert("Your query has been submitted successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        alert(result.message || "Error submitting query. Please try again.");
      }
    } catch (error) {
      console.error("Contact submission error:", error);
      alert("Error submitting query. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Review form handler
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      console.log("Submitting review data:", review);
      
      const result = await submitReviewApi(review);
      console.log("Review submission result:", result);

      if (result && result.success) {
        alert("Thank you for your review! It has been submitted successfully.");
        setReview({
          name: "",
          email: "",
          rating: 5,
          review: ""
        });
      } else {
        const errorMsg = result?.message || "Error submitting review. Please try again.";
        alert(errorMsg);
      }
    } catch (error) {
      console.error("Review submission error:", error);
      alert("Error submitting review. Please check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Social Media Data with original colors
  const socialLinks = [
    {
      name: "Facebook",
      icon: "📘",
      url: "https://facebook.com/nicehotel",
      color: "#1877F2",
      hoverColor: "#1877F2"
    },
    {
      name: "Instagram",
      icon: "📸",
      url: "https://instagram.com/nicehotel",
      color: "#E4405F",
      hoverColor: "#E4405F"
    },
    {
      name: "Twitter",
      icon: "🐦",
      url: "https://twitter.com/nicehotel",
      color: "#1DA1F2",
      hoverColor: "#1DA1F2"
    },
    {
      name: "YouTube",
      icon: "▶️",
      url: "https://youtube.com/nicehotel",
      color: "#FF0000",
      hoverColor: "#FF0000"
    },
    {
      name: "TripAdvisor",
      icon: "⭐",
      url: "https://tripadvisor.com/nicehotel",
      color: "#34E0A1",
      hoverColor: "#34E0A1"
    },
    {
      name: "WhatsApp",
      icon: "💬",
      url: "https://wa.me/919876543210",
      color: "#25D366",
      hoverColor: "#25D366"
    }
  ];

  // Location data
  const location = {
    address: "Near chugli ghar Mansa, 151505",
    city: "Mansa",
    state: "Punjab",
    country: "India",
    pincode: "151505",
    coordinates: {
      lat: "19.0760",
      lng: "72.8777"
    },
    nearby: [
      "📍 5 mins from Busstand",
      "📍 2 mins from Railway Station",
      "📍 Walking distance to Market",
    ]
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-subtitle">We'd love to hear from you</p>

        {/* Tab Navigation */}
        <div className="contact-tabs">
          <button 
            className={`tab-btn ${activeTab === "contact" ? "active" : ""}`}
            onClick={() => setActiveTab("contact")}
          >
            📧 Send Query
          </button>
          <button 
            className={`tab-btn ${activeTab === "review" ? "active" : ""}`}
            onClick={() => setActiveTab("review")}
          >
            ⭐ Submit Review
          </button>
        </div>

        <div className="contact-wrapper">
          {/* Contact Info - Updated with Location and Social */}
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>We're here to help and answer any questions you might have.</p>
            
            {/* Contact Details */}
            <div className="contact-details">
              <div className="contact-detail">
                <span className="icon">📍</span>
                <div>
                  <strong>Address</strong>
                  <p>{location.address}</p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="icon">📞</span>
                <div>
                  <strong>Phone</strong>
                  <p>+91 9216400005</p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="icon">✉️</span>
                <div>
                  <strong>Email</strong>
                  <p>deepaksingla239@gmail.com</p>
                </div>
              </div>
              <div className="contact-detail">
                <span className="icon">🕐</span>
                <div>
                  <strong>Working Hours</strong>
                  <p>24/7 - Always Open</p>
                </div>
              </div>
            </div>

            {/* Location Section */}
            <div className="location-section">
              <h4>📍 Our Location</h4>
              <div className="location-details">
                <div className="location-info">
                  <p><strong>City:</strong> {location.city}</p>
                  <p><strong>State:</strong> {location.state}</p>
                  <p><strong>Country:</strong> {location.country}</p>
                  <p><strong>Pincode:</strong> {location.pincode}</p>
                </div>
                <div className="nearby-places">
                  <p><strong>Nearby:</strong></p>
                  <ul>
                    {location.nearby.map((place, index) => (
                      <li key={index}>{place}</li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* Map placeholder */}
              <div className="map-placeholder">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d908.649555849454!2d75.39638788998352!3d29.986933090451032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39111f4472153cd7%3A0x9eb17ba12b841dd9!2sHotel%20Embassy%20and%20Restaurant!5e0!3m2!1sen!2sin!4v1782541389283!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: "8px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Hotel Location"
                ></iframe>
              </div> {/* <-- This closing div was missing */}
            </div> {/* <-- This closing div was missing */}

            {/* Social Media Section */}
            <div className="social-section">
              <h4>Connect With Us</h4>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    data-color={social.color}
                    title={social.name}
                  >
                    <span className="social-icon">{social.icon}</span>
                    <span className="social-name">{social.name}</span>
                  </a>
                ))}
              </div>
            </div> {/* <-- This closing div was missing */}

            {/* Quick Info */}
            <div className="quick-info">
              <div className="info-badge">
                <span>✅</span> Book Direct & Save 10%
              </div>
              <div className="info-badge">
                <span>⭐</span> 4.8/5 Rating - 500+ Reviews
              </div>
              <div className="info-badge">
                <span>🏆</span> Best Hotel 2024 Award
              </div>
            </div>
          </div>

          {/* Contact Form */}
          {activeTab === "contact" && (
            <div className="contact-form-wrapper">
              <h3 className="form-title">Send us a Message</h3>
              <form onSubmit={handleContactSubmit} className="contact-form">
                <input
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={(e) => setForm({...form, name: e.target.value})}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={(e) => setForm({...form, email: e.target.value})}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={form.phone}
                  onChange={(e) => setForm({...form, phone: e.target.value})}
                  required
                />
                <textarea
                  placeholder="Your Message"
                  value={form.message}
                  onChange={(e) => setForm({...form, message: e.target.value})}
                  required
                />
                <button type="submit" className="contact-submit-btn" disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          )}

          {/* Review Form */}
          {activeTab === "review" && (
            <div className="contact-form-wrapper">
              <h3 className="form-title">Share Your Experience</h3>
              <form onSubmit={handleReviewSubmit} className="contact-form">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={review.name}
                  onChange={(e) => setReview({...review, name: e.target.value})}
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  value={review.email}
                  onChange={(e) => setReview({...review, email: e.target.value})}
                  required
                />
                <div className="rating-section">
                  <label>Rating:</label>
                  <div className="rating-stars">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        className={`star-btn ${star <= review.rating ? "active" : ""}`}
                        onClick={() => setReview({...review, rating: star})}
                      >
                        ★
                      </button>
                    ))}
                  </div>
                  <span className="rating-text">{review.rating} / 5</span>
                </div>
                <textarea
                  placeholder="Write your review..."
                  value={review.review}
                  onChange={(e) => setReview({...review, review: e.target.value})}
                  required
                  rows="4"
                />
                <button type="submit" className="contact-submit-btn" disabled={submitting}>
                  {submitting ? "Submitting..." : "Submit Review"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;