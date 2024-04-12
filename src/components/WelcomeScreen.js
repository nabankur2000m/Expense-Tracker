import React, { useState } from 'react';
import './WelcomeScreen.css';
import ProfileForm from './ProfileForm'; // Make sure to create this component

function WelcomeScreen() {
    const [showProfileForm, setShowProfileForm] = useState(false);

    const handleCompleteProfileClick = () => {
        setShowProfileForm(true); // Show the profile form
    };

    const handleProfileUpdate = (profileData) => {
        // Implement your logic to update the profile here
        setShowProfileForm(false); // Hide the form after update
    };
    const handleCancel = () => {
        setShowProfileForm(false);
    };

    return (
        <div className="welcome-screen">
            <div className="welcome-container">
                <h1>Welcome to Expense Tracker</h1>
                <p>Your personal finance dashboard</p>
                <p>Your profile is incomplete</p>
                <button className="complete-profile-btn" onClick={handleCompleteProfileClick}>
                    Complete now
                </button>
                {showProfileForm && <ProfileForm onProfileUpdate={handleProfileUpdate} onCancel={handleCancel}/>}
            </div>
        </div>
    );
}

export default WelcomeScreen;
