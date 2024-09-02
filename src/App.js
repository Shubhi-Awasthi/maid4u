// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import About from './components/About';       // Make sure these components are created
import Services from './components/Services'; // and their respective files exist
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';
import MaidDetailsPage from './components/MaidDetailsPage';
import Booking from './components/Booking';
import MaidBookingPage from './components/MaidBookingPage';
import UserHomepage from './components/UserHomepage';
import MaidDashboard from './components/MaidDashboard';
import BookingRequestsPage from './components/BookingRequestsPage';


const App = () => {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/MaidBookingPage" element={<MaidBookingPage />} />
                {/* <Route path="/location" element={<LocationPage />} /> */}
                {/* <Route path="/maid-selection" element={<MaidSelectionPage />} /> */}
                <Route path="/maiddetails" element={<MaidDetailsPage />} />
                <Route path="/booking" element={<Booking />} />
                <Route path="/userhomepage" element={<UserHomepage />} />
                <Route path="/maiddashboard" element={<MaidDashboard />} />
                <Route path="/bookingrequestspage" element={<BookingRequestsPage />} />










                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;

