// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css'; // Ensure you create this CSS file for styling

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would usually handle form submission
        // e.g., send formData to an API
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <div className="contact">
            <header className="contact-header">
                <h1>Contact Us</h1>
            </header>
            <section className="contact-content">
                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p>
                        Have questions or need support? Reach out to us through the form below or contact us directly.
                    </p>
                    <ul>
                        <li>
                            <strong>Email:</strong> <a href="mailto:support@maid4u.com">support@maid4u.com</a>
                        </li>
                        <li>
                            <strong>Phone:</strong> +91 7033546627
                        </li>
                        <li>
                            <strong>Address:</strong> Beta Plaza, 2nd Floor, Beta-1 Greater Noida (201310)
                        </li>
                    </ul>
                </div>
                <div className="contact-form">
                    <h2>Send Us a Message</h2>
                    {submitted && <p className="form-success">Thank you for your message! We will get back to you soon.</p>}
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <label htmlFor="message">Message:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="5"
                            required
                        ></textarea>

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Contact;
