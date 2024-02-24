import React, { useState, useEffect } from 'react';
import UploadForm from './UploadForm';
import PhotoViewerModal from './PhotoViewerModal';
import './GalleryPage.css'; // Ensure you have this for styling

function GalleryPage() {
  const [modalImage, setModalImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);

  useEffect(() => {
    const newImages = Array.from({ length: 50 }, (_, index) =>
      `https://robohash.org/${index + 1}?set=set1`
    );
    setGalleryImages(newImages);
  }, []);

  const addImageToGallery = (newImageUrl) => {
    setGalleryImages((prevImages) => [newImageUrl, ...prevImages]);
  };

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <UploadForm onImageUpload={addImageToGallery} />
      <div className="gallery-container">
        {galleryImages.map((image, index) => (
          <div key={index} className="image-container" onClick={() => openModal(image)}>
            <img src={image} alt={`Robot ${index + 1}`} className="gallery-image" />
          </div>
        ))}
      </div>
      <PhotoViewerModal isOpen={isModalOpen} imageSrc={modalImage} onClose={closeModal} />
    </div>
  );
}

export default GalleryPage;
