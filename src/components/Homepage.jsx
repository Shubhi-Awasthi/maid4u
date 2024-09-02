// src/components/Homepage.js
import React from 'react';
import Layout from './Layout';
import './Homepage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Homepage = () => {

    
    return (
        <Layout>
            <section className="hero">
                <div className="hero-content">
                    <h1>Your Trusted Maid Service</h1>
                    <p>Find and book professional maids with ease.</p>
                    {/* <Link to="/MaidBookingPage" className="cta-button">appointments</Link> */}
                    <Link to="/booking" className="cta-button">Book a Maid</Link>
                </div>
            </section>

            <section className="services">
                <h2>Our Services</h2>
                <div className="service-list">
                    <div className="service-item">
                        <div className="service-icon">🧹</div>
                        <h3>Cleaning</h3>
                        <p>Thorough and efficient cleaning services for your home or office.</p>
                    </div>
                    <div className="service-item">
                        <div className="service-icon">🍳</div>
                        <h3>Cooking</h3>
                        <p>Delicious and healthy meals prepared just for you.</p>
                    </div>
                </div>
            </section>

            <section className="how-it-works">
                <h2>How It Works</h2>
                <ol>
                    <li>Search for Maids</li>
                    <li>Choose Your Maid</li>
                    <li>Book and Pay</li>
                </ol>
            </section>

            <section className="featured-maids">
                <h2>Featured Maids</h2>
                <div className="maid-list">
                    <div className="maid-item">
                        <div className="maid-profile">👩‍🔧</div>
                        <h3>Jane Doe</h3>
                        <p>Highly rated with 10 years of experience in cleaning.</p>
                        <span className="rating">⭐⭐⭐⭐⭐</span>
                    </div>
                </div>
            </section>

            <section className="testimonials">
                <h2>What Our Customers Say</h2>
                <blockquote>
                    <p>"Great service and very professional maids. Highly recommend!"</p>
                    <footer>- John Smith</footer>
                </blockquote>
            </section>
        </Layout>
    );
};

export default Homepage;
