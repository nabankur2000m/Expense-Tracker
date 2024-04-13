import React, { useState, useEffect } from 'react';
import './WelcomeScreen.css';
import ProfileForm from './ProfileForm';

function WelcomeScreen() {
    const [showProfileForm, setShowProfileForm] = useState(false);
    const [fullName, setFullName] = useState('');
    const [profilePhotoURL, setProfilePhotoURL] = useState('');

    useEffect(() => {
        const handleStorageChange = () => {
            setFullName(localStorage.getItem('fullName') || 'Your Full Name');
            setProfilePhotoURL(localStorage.getItem('profilePhotoURL'));
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
    };

    return (
        <div className="welcome-screen">
            <div className="welcome-container">
                <h1>Welcome to Expense Tracker</h1>
                <h2>Welcome, {fullName}</h2>
                {profilePhotoURL && <img src={profilePhotoURL} alt="Profile" />}
                <p>Your personal finance dashboard</p>
                <button className="complete-profile-btn" onClick={() => setShowProfileForm(true)}>
                    Complete now
                </button>
                {showProfileForm && <ProfileForm onProfileUpdate={handleProfileUpdate} onCancel={() => setShowProfileForm(false)} />}
            </div>
        </div>
    );
}

export default WelcomeScreen;
