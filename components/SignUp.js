import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [formData, setFormData] = useState({
    names: '',
    email: '',
    confirmEmail: '',
    password: '',
    confirmPassword: '',
    paymentDetails: '',
    phoneNumber: '',
    desiredDate: ''
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.email !== formData.confirmEmail) {
      alert("Emails do not match.");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Simple base64 encoding as a placeholder for hashing
    const hashedPassword = btoa(formData.password);
    const userData = {
      username: formData.email, // Using email as username
      password: hashedPassword,
    };

    // Storing user data in local storage
    localStorage.setItem(userData.username, JSON.stringify(userData));

    // Navigate to a confirmation or another page
    navigate(`/confirm/someEventId`); // Change 'someEventId' as needed
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="names">Names of the Couple:</label>
          <input type="text" id="names" value={formData.names} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="confirmEmail">Confirm Email:</label>
          <input type="email" id="confirmEmail" value={formData.confirmEmail} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input type="password" id="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="paymentDetails">Payment Details:</label>
          <input type="text" id="paymentDetails" value={formData.paymentDetails} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="desiredDate">Desired Date:</label>
          <input type="date" id="desiredDate" value={formData.desiredDate} onChange={handleChange} required />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
