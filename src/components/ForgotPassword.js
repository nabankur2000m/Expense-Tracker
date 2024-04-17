import React, { useState } from 'react';
import axios from 'axios';

const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
};

function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleRequestResetLink = async () => {
        if (!email) {
            setMessage('Please enter your email address.');
            return;
        }

        setLoading(true);
        setMessage('');

        try {
            const response = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDo8G727k7YUfG19hcgPOG5qJXJuU8cLLM`, {
                requestType: 'PASSWORD_RESET',
                email: email
            });
            // Response handling
            console.log(response.data);
            setMessage('Please check your email for the reset link.');
        } catch (error) {
            console.error('Error sending reset email:', error);
            setMessage('Failed to send reset email. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <div style={loaderStyle}>Loading...</div>;
    }

    return (
        <div className="forgot-password-container">
            <h1>Forgot Password</h1>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={loading}
            />
            <button onClick={handleRequestResetLink} disabled={loading}>
                Send Reset Link
            </button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default ForgotPassword;
