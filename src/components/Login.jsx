import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Ensure this CSS file is properly styled

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === '' || password === '') {
            setError('Please fill in all fields.');
            return;
        }

        // Simulate a successful login (replace with actual login logic)
        setSubmitted(true);
        setError('');
        setEmail('');
        setPassword('');
        setTimeout(() => {
            navigate('/UserHomepage'); // Redirect to user homepage
        }, 1000); // Redirect after 2 seconds to show success message
    };

    return (
        <div className="login">
            <header className="login-header">
                <h1>Login</h1>
            </header>
            <section className="login-content">
                <div className="login-form-container">
                    <h2>Welcome Back!</h2>
                    {submitted && <p className="login-success">Login successfull! </p>}
                    {error && <p className="login-error">{error}</p>}
                    <form onSubmit={handleLogin}>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button type="submit">Login</button>
                    </form>
                    <p className="login-footer">
                        Don't have an account? <a href="/register">Register here</a>.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Login;
