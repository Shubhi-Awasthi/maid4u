// src/components/MaidDashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from './Layout';
import './Homepage.css'; // Use Homepage.css to maintain styling consistency
import './MaidDashboard.css'; // If you have additional styles for MaidDashboard

const maidDetails = {
  name: 'Jane Doe',
  location: 'Noida',
  experience: '10 years',
  services: ['Cleaning', 'Cooking'],
};

const initialBookings = [
  {
    id: 1,
    userName: 'user1',
    location: 'Delhi',
    slot: '02:00 PM',
    date: '26 Jan 2024',
  },
  {
    id: 2,
    userName: 'user2',
    location: 'Noida',
    slot: '03:00 PM',
    date: '27 Jan',
  },
  {
    id: 3,
    userName: 'user3',
    location: 'Noida',
    slot: '04:00 PM',
    date: '28 Jan',
  },
];

const MaidDashboard = () => {
  const [bookings, setBookings] = React.useState(initialBookings);
  const [showPopup, setShowPopup] = React.useState(false);
  const [popupMessage, setPopupMessage] = React.useState('');
  const [popupType, setPopupType] = React.useState(''); // 'success' or 'error'

  const navigate = useNavigate();

  const handleAccept = (id) => {
    setBookings(bookings.filter(booking => booking.id !== id));
    showPopupMessage('You have accepted the booking request!', 'success');
  };

  const handleReject = (id) => {
    setBookings(bookings.filter(booking => booking.id !== id));
    showPopupMessage('You have rejected the booking request.', 'error');
  };

  const showPopupMessage = (message, type) => {
    setPopupMessage(message);
    setPopupType(type);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const goToBookingRequests = () => {
    navigate('/MaidBookingPage');
  };

  return (
    <Layout>
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome, {maidDetails.name}!</h1>
          <p>Your profile and booking details are displayed below.</p>
        </div>
      </section>

      <section className="maid-details">
        <h2>My Profile</h2>
        <div className="maid-info">
          <p><strong>Name:</strong> {maidDetails.name}</p>
          <p><strong>Location:</strong> {maidDetails.location}</p>
          <p><strong>Experience:</strong> {maidDetails.experience}</p>
          <p><strong>Services Offered:</strong> {maidDetails.services.join(', ')}</p>
        </div>
      </section>

      <section className="booking-section">
        <button onClick={goToBookingRequests} className="cta-button">
          View Booking Requests
        </button>
      </section>

      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-container">
            {popupType === 'success' && (
              <div className="checkmark-container">
                <img src="/path/to/checkmark.png" alt="Checkmark" className="checkmark" />
              </div>
            )}
            <div className="popup-message">{popupMessage}</div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default MaidDashboard;
