import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './BookingForm.css';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    movie: '',
  });

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const movieName = queryParams.get('movie');

  useEffect(() => {
    if (movieName) {
      setFormData((prevData) => ({
        ...prevData,
        movie: movieName,
      }));
    }
  }, [movieName]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Storing user details in session storage
    sessionStorage.setItem('userDetails', JSON.stringify(formData));
    alert('Ticket Booked.');
  };

  return (
    <div className="booking-form-container">
      <h2 className="form-title">Booking Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Movie:</label>
          <input
            type="text"
            name="movie"
            value={formData.movie}
            readOnly
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">Book Ticket</button>
      </form>
    </div>
  );
};

export default BookingForm;
