import React from 'react';
import './PhotoViewerModal.css'; // Make sure to style your modal

const PhotoViewerModal = ({ isOpen, imageSrc, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={imageSrc} alt="Full Size" />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PhotoViewerModal;