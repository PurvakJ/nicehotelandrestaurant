import { useState, useEffect } from 'react';
import { useData } from '../App';
import './OfferPopup.css';

const OfferPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const { activeOffers = [] } = useData();

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setIsClosed(true);
  };

  // Get the first active offer or use default
  const currentOffer = activeOffers.length > 0 ? activeOffers[0] : null;
  
  if (!isVisible || isClosed) return null;

  return (
    <div className="offer-popup-overlay" onClick={handleClose}>
      <div className="offer-popup" onClick={(e) => e.stopPropagation()}>
        <button className="offer-popup-close" onClick={handleClose}>×</button>
        <div className="offer-popup-content">
          <span className="offer-popup-badge">✨ Special Offer</span>
          <h2 className="offer-popup-title">
            {currentOffer ? currentOffer[1] : "Welcome to Nice Hotel"}
          </h2>
          <p className="offer-popup-text">
            {currentOffer ? currentOffer[2] : "Enjoy 20% off on your first stay with us!"}
          </p>
          <p className="offer-popup-subtext">
            Luxury rooms • Fine dining • Banquet hall
          </p>
          <button className="offer-popup-btn" onClick={() => window.location.href = '/contact'}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;