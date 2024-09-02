// src/components/Services.js
import React from 'react';
import './Services.css'; // Ensure you create this CSS file for styling

const Services = () => {
    return (
        <div className="services">
            <header className="services-header">
                <h1>Our Services</h1>
            </header>
            <section className="services-content">
                <div className="service">
                    <div className="service-icon">🧹</div>
                    <h2>Cleaning Services</h2>
                    <p>
                        Our cleaning services are designed to keep your home or office spotless and organized. Our experienced professionals use the best cleaning products and techniques to ensure a thorough clean.
                    </p>
                    <ul>
                        <li>Home Cleaning</li>
                        <li>Office Cleaning</li>
                        <li>Deep Cleaning</li>
                        <li>Move-In/Move-Out Cleaning</li>
                    </ul>
                    <p>
                        Whether you need a one-time deep clean or regular maintenance, we offer flexible scheduling to fit your needs.
                    </p>
                </div>
                <div className="service">
                    <div className="service-icon">🍳</div>
                    <h2>Cooking Services</h2>
                    <p>
                        Our cooking services bring delicious, healthy meals right to your table. Whether you're hosting an event or need daily meal preparation, our skilled cooks provide exceptional service.
                    </p>
                    <ul>
                        <li>Meal Preparation</li>
                        <li>Catering for Events</li>
                        <li>Specialty Dishes</li>
                        <li>Dietary Meals</li>
                    </ul>
                    <p>
                        We cater to a variety of dietary preferences and can customize menus to suit your needs.
                    </p>
                </div>
            </section>
            <footer className="services-footer">
                <p>For more details or to book a service, please <a href="/contact">contact us</a>.</p>
            </footer>
        </div>
    );
};

export default Services;
