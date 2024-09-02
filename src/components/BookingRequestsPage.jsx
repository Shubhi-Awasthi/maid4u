// src/components/BookingRequestsPage.js
import React, { useState } from 'react';
import './BookingRequestsPage.css'; // Ensure you have corresponding styles

const BookingRequestsPage = ({ bookings, handleAccept, handleReject }) => {
  return (
    <div className="booking-requests-page">
      <h2>Booking Requests</h2>
      {bookings.length === 0 ? (
        <p>No booking requests at the moment.</p>
      ) : (
        bookings.map((booking) => (
          <div key={booking.id} className="booking-card">
            <h3>{booking.userName}</h3>
            <p><strong>Location:</strong> {booking.location}</p>
            <p><strong>Slot:</strong> {booking.slot}</p>
            <p><strong>Date:</strong> {booking.date}</p>
            <div className="button-container">
              <button
                onClick={() => handleAccept(booking.id)}
                className="accept-button"
              >
                Accept
              </button>
              <button
                onClick={() => handleReject(booking.id)}
                className="reject-button"
              >
                Reject
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BookingRequestsPage;
