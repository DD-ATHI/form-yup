// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SuccessPage.css'; // Import SuccessPage-specific CSS

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="success-container">
      <h1 className="success-message">Form Successfully Submitted!</h1>
      <button className="back-button" onClick={handleBackClick}>Go Back</button>
    </div>
  );
};

export default SuccessPage;
