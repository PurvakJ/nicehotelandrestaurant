// Admin.jsx
import { useEffect, useState } from "react";
import { getAllData, addOffer, updateOffer, deleteOffer } from "../services/api";
import "./Admin.css";

function Admin() {
  // Login State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  // Data States
  const [data, setData] = useState([]);
  const [offers, setOffers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showOfferModal, setShowOfferModal] = useState(false);
  const [editingOffer, setEditingOffer] = useState(null);
  const [offerForm, setOfferForm] = useState({
    title: "",
    description: "",
    discount: "",
    status: "active"
  });
  const [notification, setNotification] = useState(null);

  // Filter States
  const [filterType, setFilterType] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Admin Credentials
  const ADMIN_CREDENTIALS = {
    username: "admin",
    password: "admin123"
  };

  // Check if user is already logged in
  useEffect(() => {
    const loggedIn = localStorage.getItem("adminLoggedIn");
    if (loggedIn === "true") {
      setIsLoggedIn(true);
      loadData();
    }
  }, []);

  // Login Handler
  const handleLogin = (e) => {
    e.preventDefault();
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      setIsLoggedIn(true);
      localStorage.setItem("adminLoggedIn", "true");
      setLoginError("");
      loadData();
    } else {
      setLoginError("Invalid username or password");
    }
  };

  // Logout Handler
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("adminLoggedIn");
    setUsername("");
    setPassword("");
  };

  const loadData = async () => {
    try {
      const result = await getAllData();
      console.log("Loaded data:", result);
      setData(result.bookings || []);
      setOffers(result.offers || []);
      setReviews(result.reviews || []);
    } catch (err) {
      console.log(err);
      setNotification({ type: "error", message: "Failed to load data" });
    } finally {
      setLoading(false);
    }
  };

  // Filter Data - only type filter and search
  const filteredData = data.filter(item => {
    if (filterType !== "all" && item.type !== filterType) return false;
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const nameMatch = (item.name || item.roomName || item.hallName || "").toLowerCase().includes(searchLower);
      const emailMatch = (item.email || "").toLowerCase().includes(searchLower);
      const phoneMatch = (item.phone || "").includes(searchTerm);
      return nameMatch || emailMatch || phoneMatch;
    }
    return true;
  });

  // Get counts for stats
  const getStats = () => {
    const total = data.length;
    const rooms = data.filter(item => item.type === "Room").length;
    const halls = data.filter(item => item.type === "Hall").length;
    const contacts = data.filter(item => item.type === "Contact").length;
    return { total, rooms, halls, contacts };
  };

  const stats = getStats();

  // Format discount for display
  const formatDiscount = (discount) => {
    if (!discount) return "0%";
    if (typeof discount === 'string' && discount.includes('%')) {
      return discount;
    }
    if (typeof discount === 'number' || !isNaN(discount)) {
      const num = parseFloat(discount);
      if (num < 1 && num > 0) {
        return `${Math.round(num * 100)}%`;
      }
      return `${num}%`;
    }
    return `${discount}%`;
  };

  // Handle discount input - store as decimal
  const handleDiscountChange = (e) => {
    let value = e.target.value;
    // Remove any % symbol if present
    value = value.replace('%', '');
    
    // If empty, set empty string
    if (value === '' || value === '-') {
      setOfferForm({...offerForm, discount: value});
      return;
    }
    
    const num = parseFloat(value);
    
    // Check if it's a valid number
    if (!isNaN(num) && num >= 0) {
      // If number is greater than 1, treat it as percentage (e.g., 10 = 10%)
      // and store as decimal (0.1)
      if (num >= 1) {
        setOfferForm({...offerForm, discount: (num / 100).toString()});
      } else {
        // If number is less than 1, it's already a decimal
        setOfferForm({...offerForm, discount: num.toString()});
      }
    } else {
      // If not a valid number, keep the input as is
      setOfferForm({...offerForm, discount: value});
    }
  };

  // =========================
  // OFFER MANAGEMENT
  // =========================

  const handleAddOffer = async () => {
    try {
      const result = await addOffer({
        ...offerForm,
        discount: offerForm.discount || "0.1"
      });
      if (result.success) {
        setNotification({ type: "success", message: "Offer added successfully!" });
        loadData();
        setShowOfferModal(false);
        setOfferForm({ title: "", description: "", discount: "", status: "active" });
      } else {
        setNotification({ type: "error", message: result.message || "Failed to add offer" });
      }
    } catch (error) {
      console.error("Error adding offer:", error);
      setNotification({ type: "error", message: "Error adding offer" });
    }
  };

  const handleUpdateOffer = async () => {
    try {
      const offerId = editingOffer.id || editingOffer._id;
      
      if (!offerId) {
        setNotification({ type: "error", message: "Offer ID not found" });
        return;
      }

      const result = await updateOffer({
        id: offerId,
        ...offerForm,
        discount: offerForm.discount || "0.1"
      });
      
      if (result.success) {
        setNotification({ type: "success", message: "Offer updated successfully!" });
        loadData();
        setShowOfferModal(false);
        setEditingOffer(null);
        setOfferForm({ title: "", description: "", discount: "", status: "active" });
      } else {
        setNotification({ type: "error", message: result.message || "Failed to update offer" });
      }
    } catch (error) {
      console.error("Error updating offer:", error);
      setNotification({ type: "error", message: "Error updating offer: " + error.message });
    }
  };

  const handleDeleteOffer = async (offer) => {
    const offerId = offer.id || offer._id;
    
    if (!offerId) {
      setNotification({ type: "error", message: "Offer ID not found" });
      return;
    }

    if (window.confirm(`Are you sure you want to delete "${offer.title}"?`)) {
      try {
        const result = await deleteOffer(offerId);
        if (result.success) {
          setNotification({ type: "success", message: "Offer deleted successfully!" });
          loadData();
        } else {
          setNotification({ type: "error", message: result.message || "Failed to delete offer" });
        }
      } catch (error) {
        console.error("Error deleting offer:", error);
        setNotification({ type: "error", message: "Error deleting offer: " + error.message });
      }
    }
  };

  const openEditOffer = (offer) => {
    console.log("Editing offer:", offer);
    setEditingOffer(offer);
    setOfferForm({
      title: offer.title || "",
      description: offer.description || "",
      discount: offer.discount || "",
      status: offer.status || "active"
    });
    setShowOfferModal(true);
  };

  const openAddOffer = () => {
    setEditingOffer(null);
    setOfferForm({ title: "", description: "", discount: "", status: "active" });
    setShowOfferModal(true);
  };

  const clearFilters = () => {
    setFilterType("all");
    setSearchTerm("");
  };

  // Login Page
  if (!isLoggedIn) {
    return (
      <div className="login-page">
        <div className="login-container">
          <div className="login-icon">🔐</div>
          <h1>Admin Access</h1>
          <p className="subtitle">Please sign in to continue</p>
          
          {loginError && <div className="login-error">{loginError}</div>}
          
          <form onSubmit={handleLogin} className="login-form">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder="Enter username"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter password"
              />
            </div>
            <button type="submit" className="login-btn">Sign In</button>
          </form>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="admin-page">
        <div className="container">
          <h1 className="page-title">Admin Dashboard</h1>
          <div className="loading">Loading data...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="container">
        <div className="admin-header">
          <div className="admin-header-top">
            <div>
              <h1 className="page-title">Admin Dashboard</h1>
              <p className="admin-subtitle">Manage customer inquiries & offers</p>
            </div>
            <button className="admin-logout-btn" onClick={handleLogout}>
              Sign Out
            </button>
          </div>
          
          {notification && (
            <div className={`notification ${notification.type}`}>
              {notification.message}
              <button onClick={() => setNotification(null)} className="notification-close">×</button>
            </div>
          )}
          
          {/* Stats Cards */}
          <div className="admin-stats">
            <div className="admin-stat-card total">
              <span className="stat-number">{stats.total}</span>
              <span className="stat-label">Total Inquiries</span>
            </div>
            <div className="admin-stat-card rooms">
              <span className="stat-number">{stats.rooms}</span>
              <span className="stat-label">Room Bookings</span>
            </div>
            <div className="admin-stat-card halls">
              <span className="stat-number">{stats.halls}</span>
              <span className="stat-label">Hall Bookings</span>
            </div>
            <div className="admin-stat-card contacts">
              <span className="stat-number">{stats.contacts}</span>
              <span className="stat-label">Contact Queries</span>
            </div>
          </div>
        </div>

        {/* Filters Section */}
        <div className="filter-section">
          <div className="filter-group">
            <label>Filter by Type:</label>
            <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
              <option value="all">All Types</option>
              <option value="Room">Rooms</option>
              <option value="Hall">Halls</option>
              <option value="Contact">Contacts</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Search:</label>
            <input
              type="text"
              placeholder="Search by name, email, phone..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button className="clear-filter-btn" onClick={clearFilters}>
            Clear Filters
          </button>
        </div>

        {/* Offers Section */}
        <div className="admin-section">
          <div className="section-header">
            <h2 className="section-title">Manage Offers</h2>
            <button className="add-offer-btn" onClick={openAddOffer}>
              + Add New Offer
            </button>
          </div>

          {offers.length === 0 ? (
            <div className="empty-state">No offers available. Create your first offer!</div>
          ) : (
            <div className="offers-grid">
              {offers.map((offer, index) => {
                const offerKey = offer.id || offer._id || `offer-${index}`;
                return (
                  <div key={offerKey} className={`offer-card ${offer.status}`}>
                    <div className="offer-header">
                      <h3>{offer.title}</h3>
                      <span className={`offer-status-badge ${offer.status}`}>
                        {offer.status}
                      </span>
                    </div>
                    <p className="offer-description">{offer.description}</p>
                    <div className="offer-discount-wrapper">
                      <span className="offer-discount-label">Discount</span>
                      <span className="offer-discount">{formatDiscount(offer.discount)}</span>
                    </div>
                    <div className="offer-actions">
                      <button 
                        className="edit-btn" 
                        onClick={(e) => {
                          e.stopPropagation();
                          openEditOffer(offer);
                        }}
                        type="button"
                      >
                        ✎ Edit
                      </button>
                      <button 
                        className="delete-btn" 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteOffer(offer);
                        }}
                        type="button"
                      >
                        ✕ Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Reviews Section */}
        <div className="admin-section">
          <div className="section-header">
            <h2 className="section-title">Customer Reviews</h2>
            <span className="review-count">{reviews.length} Total Reviews</span>
          </div>
          
          {reviews.length === 0 ? (
            <div className="empty-state">No reviews submitted yet.</div>
          ) : (
            <div className="reviews-grid">
              {reviews.map((review, index) => {
                const reviewKey = review.id || review._id || `review-${index}`;
                return (
                  <div key={reviewKey} className={`review-card ${review.status?.toLowerCase() || 'pending'}`}>
                    <div className="review-header">
                      <div className="review-user">
                        <h4>{review.name || "Anonymous"}</h4>
                        <p className="review-email">{review.email || "No email"}</p>
                      </div>
                      <div className="review-rating">
                        <div className="stars">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <span key={star} className={star <= review.rating ? "star-filled" : "star-empty"}>
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="rating-number">{review.rating}/5</span>
                      </div>
                    </div>
                    <p className="review-text">"{review.review || "No review content"}"</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Bookings Section */}
        <div className="admin-section">
          <h2 className="section-title">Customer Inquiries</h2>
          <p className="section-subtitle">{filteredData.length} inquiries found</p>
          
          {filteredData.length === 0 ? (
            <div className="empty-state">No inquiries found matching your filters.</div>
          ) : (
            <div className="admin-items">
              {filteredData.map((item, index) => {
                const itemKey = item.id || item._id || `item-${index}`;
                return (
                  <div key={itemKey} className="admin-item">
                    <div className="item-info">
                      <h4>
                        <span className="item-type">{item.type}</span>
                        {(item.name || item.roomName || item.hallName || "N/A").toUpperCase()}
                      </h4>
                      <p>
                        <strong>Email:</strong> {item.email || "N/A"} &nbsp;|&nbsp;
                        <strong>Phone:</strong> {item.phone || "N/A"}
                      </p>
                      {item.date && (
                        <p>
                          <strong>Date:</strong> {new Date(item.date).toLocaleDateString()}
                        </p>
                      )}
                      {item.message && <p><strong>Message:</strong> {item.message}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Offer Modal */}
      {showOfferModal && (
        <div className="modal-overlay" onClick={() => setShowOfferModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{editingOffer ? "✎ Edit Offer" : "➕ Add New Offer"}</h2>
              <button className="modal-close-btn" onClick={() => setShowOfferModal(false)}>×</button>
            </div>
            <form onSubmit={(e) => {
              e.preventDefault();
              editingOffer ? handleUpdateOffer() : handleAddOffer();
            }}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={offerForm.title}
                  onChange={(e) => setOfferForm({...offerForm, title: e.target.value})}
                  required
                  placeholder="Enter offer title"
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={offerForm.description}
                  onChange={(e) => setOfferForm({...offerForm, description: e.target.value})}
                  required
                  placeholder="Enter offer description"
                />
              </div>
              <div className="form-group">
                <label>Discount (%)</label>
                <input
                  type="text"
                  value={offerForm.discount ? Math.round(parseFloat(offerForm.discount) * 100) || '' : ''}
                  onChange={handleDiscountChange}
                  placeholder="e.g., 20"
                  required
                />
                <small className="form-hint">Enter percentage (e.g., 20 for 20%)</small>
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  value={offerForm.status}
                  onChange={(e) => setOfferForm({...offerForm, status: e.target.value})}
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={() => setShowOfferModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  {editingOffer ? "Update" : "Add"} Offer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Admin;