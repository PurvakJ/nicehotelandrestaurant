import { useState } from "react";
import { contactQuery, submitReview as submitReviewApi } from "../services/api";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
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

  // Business information (same as App.js)
  const businessInfo = {
    phone1: '9216400005',
    email: 'deepaksingla239@gmail.com',
    instagram: 'https://www.instagram.com/bholasingh_sons_tyre/',
    facebook: 'https://www.facebook.com/p/BHOLA-SINGH-SONS-61565127653219/',
    whatsapp: 'https://wa.me/919216400005',
    address: 'Near chugli ghar, Mansa 151505',
  };

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

  // Social Media Data with React Icons
  const socialLinks = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: businessInfo.facebook,
      color: "#1877F2",
      className: "facebook"
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: businessInfo.instagram,
      color: "#E4405F",
      className: "instagram"
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      url: businessInfo.whatsapp,
      color: "#25D366",
      className: "whatsapp"
    }
  ];

  // Location data
  const location = {
    address: businessInfo.address,
    city: "Mansa",
    state: "Punjab",
    country: "India",
    pincode: "151505",
    nearby: [
      "5 mins from Bus Stand",
      "2 mins from Railway Station",
      "Walking distance to Market",
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
          {/* Contact Form - On Top */}
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

          {/* Review Form - On Top */}
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

          {/* Bottom Section - Map and Contact Info Side by Side */}
          <div className="bottom-section">
            {/* Map Section - Left */}
            <div className="map-section">
              <h4>📍 Our Location</h4>
              <div className="map-placeholder">
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

            {/* Contact Info - Right */}
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
                    <p>
                      <a href={`tel:+91${businessInfo.phone1}`} className="contact-link">
                        +91 {businessInfo.phone1}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-detail">
                  <span className="icon">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <p>
                      <a href={`mailto:${businessInfo.email}`} className="contact-link">
                        {businessInfo.email}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact-detail">
                  <span className="icon">🕐</span>
                  <div>
                    <strong>Working Hours</strong>
                    <p>Always Open</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Section - Below Map and Contact Info */}
          <div className="social-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`social-link ${social.className}`}
                  data-color={social.color}
                  title={social.name}
                >
                  <span className="social-icon">{social.icon}</span>
                  <span className="social-name">{social.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;