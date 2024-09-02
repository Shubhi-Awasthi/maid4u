// src/components/LocationPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LocationPage.css';

const LocationPage = () => {
    const navigate = useNavigate();
    const locations = ['Delhi', 'Noida', 'Greater Noida', 'Gurugram', 'Ghaziabad'];

    const handleLocationClick = (location) => {
        navigate(`/maid-selection?location=${encodeURIComponent(location)}`);
    };

    return (
        <div className="location-page">
            <h1>Select Your Location</h1>
            <ul>
                {locations.map((location, index) => (
                    <li 
                        key={index}
                        onClick={() => handleLocationClick(location)}
                    >
                        {location}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LocationPage;
