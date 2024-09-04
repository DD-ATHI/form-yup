// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandedPage.css'; // Import LandedPage-specific CSS

const LandedPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    dob: '',
    gender: '',
    place: '',
    favoriteFood: [], // Array to store selected favorite foods
    interests: [],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked, options } = e.target;

    if (type === 'select-multiple') {
      const selectedOptions = Array.from(options)
        .filter(option => option.selected)
        .map(option => option.value);
      setFormData(prevState => ({
        ...prevState,
        [name]: selectedOptions,
      }));
    } else if (type === 'checkbox') {
      setFormData(prevState => ({
        ...prevState,
        [name]: checked
          ? [...prevState[name], value]
          : prevState[name].filter(item => item !== value),
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleFavoriteFoodChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      favoriteFood: checked
        ? [...prevState.favoriteFood, value]
        : prevState.favoriteFood.filter(item => item !== value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword, mobile, dob, gender, place, favoriteFood, interests } = formData;

    if (!name || !email || !password || !confirmPassword || !mobile || !dob || !gender || !place || favoriteFood.length === 0 || interests.length === 0) {
      alert('Please fill all fields.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    navigate('/success');
  };

  return (
    <div className="landed-container">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <label className="label">Name <span className="required">*</span>:
            <input type="text" name="name" value={formData.name} onChange={handleChange} maxLength="20" className="input" required />
          </label>
          <label className="label">Email <span className="required">*</span>:
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="input" required />
          </label>
          <label className="label">Password <span className="required">*</span>:
            <input type="password" name="password" value={formData.password} onChange={handleChange} maxLength="15" className="input" required />
          </label>
          <label className="label">Confirm Password <span className="required">*</span>:
            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="input" required />
          </label>
          <label className="label">Mobile No <span className="required">*</span>:
            <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} maxLength="10" className="input" required />
          </label>
          <label className="label">Date of Birth <span className="required">*</span>:
            <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="input" required />
          </label>
          <label className="label">Gender <span className="required">*</span>:
            <div className="radio-container">
              <label>
                <input type="radio" name="gender" value="male" checked={formData.gender === 'male'} onChange={handleChange} required />
                Male
              </label>
              <label>
                <input type="radio" name="gender" value="female" checked={formData.gender === 'female'} onChange={handleChange} required />
                Female
              </label>
            </div>
          </label>
          <label className="label">Place <span className="required">*</span>:
            <select name="place" value={formData.place} onChange={handleChange} className="select" required>
              <option value="">Select a place</option>
              <option value="Chennai">Chennai</option>
              <option value="Trichy">Trichy</option>
              <option value="Madurai">Madurai</option>
              <option value="Coimbatore">Coimbatore</option>
            </select>
          </label>
          <div className="input-group">
            <label htmlFor="favorite-food">Favorite Food <span className="required">*</span>:</label>
            <div className="custom-select">
              <input
                type="text"
                id="favorite-food-display"
                value={formData.favoriteFood.join(', ')}
                placeholder="Select your favorite food..."
                readOnly
                className="input"
              />
              <div id="favorite-food-menu" className="select-items">
                <label><input type="checkbox" value="Pizza" onChange={handleFavoriteFoodChange} checked={formData.favoriteFood.includes('Pizza')} /> Pizza</label>
                <label><input type="checkbox" value="Burger" onChange={handleFavoriteFoodChange} checked={formData.favoriteFood.includes('Burger')} /> Burger</label>
                <label><input type="checkbox" value="Noodles" onChange={handleFavoriteFoodChange} checked={formData.favoriteFood.includes('Sushi')} /> Noodles</label>
                <label><input type="checkbox" value="Pasta" onChange={handleFavoriteFoodChange} checked={formData.favoriteFood.includes('Pasta')} /> Pasta</label>
                <label><input type="checkbox" value="Biriyani" onChange={handleFavoriteFoodChange} checked={formData.favoriteFood.includes('Salad')} /> Biriyani</label>
              </div>
            </div>
          </div>
          <label className="label">Interests <span className="required">*</span>:
            <div className="checkbox-container">
              <label>
                <input type="checkbox" name="interests" value="sports" checked={formData.interests.includes('sports')} onChange={handleChange} />
                Sports
              </label>
              <label>
                <input type="checkbox" name="interests" value="reading" checked={formData.interests.includes('reading')} onChange={handleChange} />
                Reading
              </label>
              <label>
                <input type="checkbox" name="interests" value="traveling" checked={formData.interests.includes('traveling')} onChange={handleChange} />
                Traveling
              </label>
            </div>
          </label>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LandedPage;
