// src/components/MaidSelectionPage.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './MaidSelectionPage.css'; // Import the CSS file

const MaidSelectionPage = () => {
    const [formData, setFormData] = useState({
        gender: '',
        experience: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulate fetching maid details based on user input
        // In a real application, you might make an API call here

        const maidDetails = {
            name: 'Jane Doe',
            gender: formData.gender,
            religion: 'Hindu', // Example data
            age: 30, // Example data
            experience: formData.experience,
            price: 20 // Example data
        };

        navigate('/maid-details', { state: { maidDetails } });
    };

    return (
        <div className="maid-selection-page">
            <form onSubmit={handleSubmit}>
                <h1>Select Maid Preferences</h1>
                <label>
                    Gender:
                    <select name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </label>
                <label>
                    Experience (Years):
                    <select name="experience" value={formData.experience} onChange={handleChange} required>
                        <option value="">Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10+</option>
                    </select>
                </label>
                <button type="submit">Find Maid</button>
            </form>
        </div>
    );
};

export default MaidSelectionPage;
