import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const hashedPassword = btoa(password); // Simple base64 encoding
    const storedUserData = localStorage.getItem(username);
    const userData = storedUserData ? JSON.parse(storedUserData) : null;

    if (userData && userData.password === hashedPassword) {
      // Correct credentials, navigate to the gallery or another page
      navigate(`/gallery/someEventId`); // Adjust the navigation as needed
    } else {
      // Incorrect credentials
      alert('Invalid username or password.');
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username (Email):</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;