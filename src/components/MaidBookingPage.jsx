import React, { useState } from 'react';
import Layout from './Layout';

// Dummy data for bookings
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
    slot: '02:00 PM',
    date: '26 Jan',
  },
  {
    id: 3,
    userName: 'user3',
    location: 'Noida',
    slot: '02:00 PM',
    date: '26 Jan',
  },
];

const MaidBookingPage = () => {
  const [bookings, setBookings] = useState(initialBookings);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const handleReject = (id) => {
    // Handle the logic to reject the booking
    console.log(`Rejected booking with ID: ${id}`);
    setBookings(bookings.filter(booking => booking.id !== id));
    showPopupMessage('You have rejected the booking request.');
  };

  const showPopupMessage = (message) => {
    setPopupMessage(message);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000); // Auto-hide after 3 seconds
  };

  return (
    <Layout>
      <div style={styles.container}>
        <h1 style={styles.header}>BOOKING REQUESTS</h1>
        {bookings.length === 0 ? (
          <p style={styles.noBookings}>No bookings at the moment.</p>
        ) : (
          <div>
            {bookings.map((booking) => (
              <div key={booking.id} style={styles.bookingCard}>
                <h2 style={styles.userName}>{booking.userName}</h2>
                <p style={styles.details}>Location: <span style={styles.detailValue}>{booking.location}</span></p>
                <p style={styles.details}>Slot: <span style={styles.detailValue}>{booking.slot}</span></p>
                <p style={styles.details}>Date: <span style={styles.detailValue}>{booking.date}</span></p>
                <div style={styles.buttonContainer}>
                  <button
                    onClick={() => handleReject(booking.id)}
                    style={styles.rejectButton}
                  >
                    
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        {showPopup && (
          <div style={styles.popupOverlay}>
            <div style={styles.popupContainer}>
              <div style={styles.popupMessage}>{popupMessage}</div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

const styles = {
  container: {
    maxWidth: '900px',
    margin: 'auto',
    padding: '20px',
    backgroundColor: '#f4f7f6',
    borderRadius: '12px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
    fontSize: '2rem',
    fontWeight: 'bold',
  },
  noBookings: {
    textAlign: 'center',
    color: '#888',
    fontSize: '1.2rem',
  },
  bookingCard: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ddd',
  },
  userName: {
    margin: '0 0 10px 0',
    color: '#007bff',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  details: {
    margin: '5px 0',
    color: '#555',
    fontSize: '1rem',
  },
  detailValue: {
    fontWeight: '600',
    color: '#333',
  },
  buttonContainer: {
    marginTop: '15px',
    display: 'flex',
    gap: '15px',
  },
  rejectButton: {
    padding: '12px 24px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#dc3545',
    color: 'white',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
    fontWeight: 'bold',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  checkmark: {
    width: '20px',
    height: '20px',
  },
  popupOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  popupContainer: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '400px',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
  },
  popupMessage: {
    fontSize: '16px',
    margin: '10px 0',
  },
};

export default MaidBookingPage;
