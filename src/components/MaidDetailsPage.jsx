// src/components/MaidDetailsPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const MaidDetailsPage = () => {
    const location = useLocation();
    const { maidDetails } = location.state || {};

    if (!maidDetails) {
        return <div>No details available.</div>;
    }

    return (
        <div className="maid-details-page">
            <h1>Maid Details</h1>
            <ul>
                <li><strong>Name:</strong> {maidDetails.name}</li>
                <li><strong>Gender:</strong> {maidDetails.gender}</li>
                <li><strong>Religion:</strong> {maidDetails.religion}</li>
                <li><strong>Age:</strong> {maidDetails.age}</li>
                <li><strong>Experience:</strong> {maidDetails.experience} years</li>
                <li><strong>Price:</strong> ${maidDetails.price} per hour</li>
            </ul>
        </div>
    );
};

export default MaidDetailsPage;
