import React from 'react';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <h1>Welcome to the Event Photo Sharing App</h1>
      <p>Scan the QR code for your event to start sharing and viewing photos!</p>
      <div>
        <Link to="/signin"><button>Sign In</button></Link>
        <Link to="/signup"><button>Sign Up</button></Link>
      </div>
    </div>
  );
}

export default LandingPage;
