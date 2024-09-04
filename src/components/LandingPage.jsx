// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css'; // Import LandingPage-specific CSS

const LandingPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/form');
  };

  return (
    <div className="landing-container">
      <h1 className="welcomeMessage">Personal Information</h1>
      <button className="button" onClick={handleButtonClick}>Fill Form</button>
    </div>
  );
};

export default LandingPage;
