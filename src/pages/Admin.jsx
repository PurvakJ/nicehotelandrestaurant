import { useEffect, useState } from "react";
import { getAllData, updateStatus, sendApprovalEmail, addOffer, updateOffer, deleteOffer } from "../services/api";
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
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Track which items are being updated
  const [updatingItems, setUpdatingItems] = useState(new Set());

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

  // Filter Data
  const filteredData = data.filter(item => {
    if (filterType !== "all" && item.type !== filterType) return false;
    if (filterStatus !== "all" && item.status !== filterStatus) return false;
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const nameMatch = (item.name || item.roomName || item.hallName || "").toLowerCase().includes(searchLower);
      const emailMatch = (item.email || "").toLowerCase().includes(searchLower);
      const phoneMatch = (item.phone || "").includes(searchTerm);
      return nameMatch || emailMatch || phoneMatch;
    }
    return true;
  });

  const handleStatusUpdate = async (item, newStatus) => {
    // Add item to updating set immediately
    setUpdatingItems(prev => new Set(prev).add(item.id));
    
    // Update local state immediately - this makes buttons disappear
    const updatedData = data.map(d => 
      d.id === item.id ? { ...d, status: newStatus } : d
    );
    setData(updatedData);

    try {
      const sheetName = item.type === "Room" ? "RoomBookings" : 
                       item.type === "Hall" ? "HallBookings" : 
                       "ContactQueries";
      
      const bookingType = item.type === "Room" ? item.roomName || "Room Booking" :
                         item.type === "Hall" ? item.hallName || "Hall Booking" :
                         "Contact Query";

      const customerName = item.name || "Guest";

      const result = await updateStatus({
        sheetName: sheetName,
        id: item.id,
        status: newStatus,
        email: item.email,
        customerName: customerName,
        bookingType: bookingType
      });

      if (result.success) {
        await sendApprovalEmail(
          item.email,
          customerName,
          bookingType,
          newStatus
        );

        setNotification({ 
          type: "success", 
          message: `${bookingType} ${newStatus.toLowerCase()} successfully! Email sent to ${item.email}`
        });
        
        // Refresh data from server
        await loadData();
      } else {
        // Revert if failed
        const revertedData = data.map(d => 
          d.id === item.id ? { ...d, status: item.status } : d
        );
        setData(revertedData);
        setNotification({ type: "error", message: result.message || "Failed to update status" });
      }
    } catch (error) {
      console.error("Error updating status:", error);
      // Revert if error
      const revertedData = data.map(d => 
        d.id === item.id ? { ...d, status: item.status } : d
      );
      setData(revertedData);
      setNotification({ type: "error", message: "Error updating status" });
    } finally {
      // Remove from updating set
      setUpdatingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(item.id);
        return newSet;
      });
    }
  };

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
    value = value.replace('%', '');
    const num = parseFloat(value);
    if (!isNaN(num) && num > 0) {
      if (num >= 1) {
        setOfferForm({...offerForm, discount: (num / 100).toString()});
      } else {
        setOfferForm({...offerForm, discount: num.toString()});
      }
    } else {
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
      const result = await updateOffer({
        id: editingOffer.id,
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
      setNotification({ type: "error", message: "Error updating offer" });
    }
  };

  const handleDeleteOffer = async (id) => {
    if (window.confirm("Are you sure you want to delete this offer?")) {
      try {
        const result = await deleteOffer(id);
        if (result.success) {
          setNotification({ type: "success", message: "Offer deleted successfully!" });
          loadData();
        } else {
          setNotification({ type: "error", message: result.message || "Failed to delete offer" });
        }
      } catch (error) {
        console.error("Error deleting offer:", error);
        setNotification({ type: "error", message: "Error deleting offer" });
      }
    }
  };

  const openEditOffer = (offer) => {
    setEditingOffer(offer);
    setOfferForm({
      title: offer.title,
      description: offer.description,
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
    setFilterStatus("all");
    setSearchTerm("");
  };

  // Login Page
  if (!isLoggedIn) {
    return (
      <div className="login-page">
        <div className="login-container">
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
              <p className="admin-subtitle">Manage bookings, offers, reviews & more</p>
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
            <label>Filter by Status:</label>
            <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="all">All Status</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
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
              {offers.map((offer) => (
                <div key={offer.id} className={`offer-card ${offer.status}`}>
                  <div className="offer-header">
                    <h3>{offer.title}</h3>
                    <span className={`offer-status-badge ${offer.status}`}>
                      {offer.status}
                    </span>
                  </div>
                  <p className="offer-description">{offer.description}</p>
                  <p className="offer-discount">Discount: {formatDiscount(offer.discount)}</p>
                  <div className="offer-actions">
                    <button className="edit-btn" onClick={() => openEditOffer(offer)}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => handleDeleteOffer(offer.id)}>
                      Delete
                    </button>
                  </div>
                </div>
              ))}
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
              {reviews.map((review) => (
                <div key={review.id} className={`review-card ${review.status?.toLowerCase() || 'pending'}`}>
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
                  <div className="review-footer">
                    <span className={`status-badge ${review.status?.toLowerCase() || 'pending'}`}>
                      {review.status || "Pending"}
                    </span>
                    <span className="review-date">
                      {review.createdAt ? new Date(review.createdAt).toLocaleDateString() : "Recent"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bookings Section */}
        <div className="admin-section">
          <h2 className="section-title">All Bookings & Queries</h2>
          
          {filteredData.length === 0 ? (
            <div className="empty-state">No bookings found matching your filters.</div>
          ) : (
            <div className="admin-items">
              {filteredData.map((item) => {
                const isApproved = item.status === "Approved";
                const isRejected = item.status === "Rejected";
                const isUpdating = updatingItems.has(item.id);
                const isPending = item.status === "Pending" || !item.status;
                
                // Only show buttons if status is pending
                const showButtons = isPending && !isUpdating;
                
                return (
                  <div key={item.id} className={`admin-item ${item.status?.toLowerCase() || 'pending'} ${isUpdating ? 'updating' : ''}`}>
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
                      <p>
                        <strong>Status:</strong> 
                        <span className={`status-badge ${item.status?.toLowerCase() || 'pending'}`}>
                          {item.status || "Pending"}
                        </span>
                      </p>
                    </div>
                    
                    <div className="item-actions">
                      {showButtons && (
                        <>
                          <button 
                            className="approve-btn"
                            onClick={() => handleStatusUpdate(item, "Approved")}
                          >
                            ✓ Approve
                          </button>
                          <button 
                            className="reject-btn"
                            onClick={() => handleStatusUpdate(item, "Rejected")}
                          >
                            ✕ Reject
                          </button>
                        </>
                      )}
                      
                      {isUpdating && (
                        <span className="updating-label">⏳ Updating...</span>
                      )}
                      
                      {isApproved && !isUpdating && (
                        <span className="approved-label">✓ Approved</span>
                      )}
                      
                      {isRejected && !isUpdating && (
                        <span className="rejected-label">✕ Rejected</span>
                      )}
                      
                      {isPending && !isUpdating && !showButtons && (
                        <span className="pending-label">⏳ Pending</span>
                      )}
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
            <h2>{editingOffer ? "Edit Offer" : "Add New Offer"}</h2>
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
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={offerForm.description}
                  onChange={(e) => setOfferForm({...offerForm, description: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <label>Discount (%)</label>
                <input
                  type="text"
                  value={offerForm.discount}
                  onChange={handleDiscountChange}
                  placeholder="e.g., 20"
                  required
                />
                <small style={{color: '#8a7a6a', fontSize: '12px', marginTop: '4px', display: 'block'}}>
                  Enter percentage (e.g., 20 for 20%)
                </small>
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