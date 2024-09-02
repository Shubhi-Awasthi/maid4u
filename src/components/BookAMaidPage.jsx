// src/components/BookAMaidPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BookAMaidPage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/location');
    };

    return (
        <div>
            <h1>Book a Maid</h1>
            <button onClick={handleClick}>Select Location</button>
        </div>
    );
};

export default BookAMaidPage;
