import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import GalleryPage from './components/GalleryPage';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import EventConfirmation from './components/EventConfirmation';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/confirm/:eventId" element={<EventConfirmation />} />
        <Route path="/gallery/:eventId" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
