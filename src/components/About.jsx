// src/components/About.js
import React from 'react';
import './About.css'; // Ensure you create this CSS file for styling

const About = () => {
    return (
        <div className="about">
            <header className="about-header">
                <h1>About Us</h1>
            </header>
            <section className="about-content">
                <div className="about-section">
                    <h2>Who We Are</h2>
                    <p>
                        At MaidBooker, we are dedicated to providing top-notch maid services to make your life easier and your home cleaner. Founded in [Year], our mission has always been to offer professional, reliable, and high-quality cleaning services tailored to your needs.
                    </p>
                </div>
                <div className="about-section">
                    <h2>Our Values</h2>
                    <ul>
                        <li><strong>Trust:</strong> We believe in earning and maintaining the trust of our customers through consistent, high-quality service.</li>
                        <li><strong>Integrity:</strong> We operate with transparency and honesty, ensuring that our clients are always informed and satisfied.</li>
                        <li><strong>Excellence:</strong> We are committed to excellence, striving to exceed expectations with every service we provide.</li>
                        <li><strong>Customer-Centric:</strong> Your needs and preferences are at the heart of what we do. We tailor our services to match your requirements.</li>
                    </ul>
                </div>
                <div className="about-section">
                    <h2>Our Team</h2>
                    <p>
                        Our team is composed of experienced and trained professionals who are passionate about their work. Each member is carefully vetted, and we ensure that they adhere to our high standards of quality and professionalism. 
                    </p>
                </div>
                <div className="about-section">
                    <h2>Why Choose Us?</h2>
                    <p>
                        With MaidBooker, you are not just hiring a cleaning service; you are choosing a partner dedicated to enhancing your quality of life. Our user-friendly platform makes booking a maid easy and hassle-free, and our commitment to excellence ensures that your home will always be in the best hands.
                    </p>
                </div>
            </section>
            <footer className="about-footer">
                <p>For more information or to get in touch with us, please <a href="/contact">contact us</a>.</p>
            </footer>
        </div>
    );
};

export default About;
