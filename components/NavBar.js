import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/upload">UploadForm</Link></li>
        <li><Link to="/upload">PhotoViewerModal</Link></li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}

export default NavBar;