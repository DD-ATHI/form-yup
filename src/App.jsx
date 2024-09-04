// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LandedPage from './components/LandedPage';
import SuccessPage from './components/SuccessPage';
import './App.css'; // Import App-specific CSS

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/form" element={<LandedPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  </Router>
);

export default App;
