import React, { useState, useEffect } from 'react';
import './WelcomeScreen.css';
import ProfileForm from './ProfileForm';
import axios from 'axios';

function WelcomeScreen() {
    const [showProfileForm, setShowProfileForm] = useState(false);
    const [fullName, setFullName] = useState('');
    const [profilePhotoURL, setProfilePhotoURL] = useState('');
    const [emailVerified, setEmailVerified] = useState(false);

    useEffect(() => {
        const handleStorageChange = () => {
            setFullName(localStorage.getItem('fullName') || 'Your Full Name');
            setProfilePhotoURL(localStorage.getItem('profilePhotoURL'));
            setEmailVerified(JSON.parse(localStorage.getItem('emailVerified') || 'false')); 
        };

        window.addEventListener('storage', handleStorageChange);
        handleStorageChange(); 

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleProfileUpdate = (profileData) => {
        setShowProfileForm(false);
        setFullName(localStorage.getItem('fullName') || 'Your Full Name');
        setProfilePhotoURL(localStorage.getItem('profilePhotoURL'));
        setEmailVerified(profileData.emailVerified);
    };

    const handleVerifyEmail = async () => {
        const idToken = localStorage.getItem('token');
        if (idToken) {
            try {
                await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyDo8G727k7YUfG19hcgPOG5qJXJuU8cLLM`, {
                    requestType: "VERIFY_EMAIL",
                    idToken: idToken
                });
                alert('Verification email sent. Please check your email.');
            } catch (error) {
                alert('Failed to send verification email.');
            }
        }
    };

    return (
        <div className="welcome-screen">
            <div className="welcome-container">
                <h1>Welcome to Expense Tracker</h1>
                <h2>Welcome, {fullName}</h2>
                {profilePhotoURL && <img src={profilePhotoURL} alt="Profile" />}
                <p>Your personal finance dashboard</p>
                {!emailVerified && <button onClick={handleVerifyEmail}>Verify Email</button>}
                <button className="complete-profile-btn" onClick={() => setShowProfileForm(true)}>
                    Complete now
                </button>
                {showProfileForm && <ProfileForm onProfileUpdate={handleProfileUpdate} onCancel={() => setShowProfileForm(false)} />}
            </div>
        </div>
    );
}

export default WelcomeScreen;
