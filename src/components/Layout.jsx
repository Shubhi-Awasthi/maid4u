// src/components/Layout.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Layout.css'; // Create this CSS file for styling

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header className="header">
                <div className="logo">MAID4U</div>
                <nav className="nav">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/services">Services</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/login">Login</Link>
                </nav>
            </header>
            <main className="main-content">
                {children}
            </main>
        </div>
    );
};

export default Layout;
