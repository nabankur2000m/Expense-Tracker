import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import LoginForm from './components/LoginForm';
import WelcomeScreen from './components/WelcomeScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/welcome" element={<WelcomeScreen />} />
        <Route path="/" element={<SignUpForm />} />
      </Routes>
    </Router>
  );
}

export default App;
