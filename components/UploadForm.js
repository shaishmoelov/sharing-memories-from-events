import React from 'react';

function UploadForm({ onImageUpload }) {
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    // Check if the file type is an image
    if (!file.type.match('image.*')) {
      alert('Please select an image file.');
      return;
    }

    // Additional check for specific image formats (optional)
    const validImageTypes = ['image/jpeg', 'image/png', 'image/gif'];
    if (!validImageTypes.includes(file.type)) {
      alert('Only JPEG, PNG, and GIF files are allowed.');
      return;
    }

    const imageUrl = URL.createObjectURL(file);
    onImageUpload(imageUrl); // Call the passed in function with the new image URL
  };

  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <input type="file" onChange={handleFileChange} accept="image/jpeg, image/png, image/gif" />
      {/* Removed the submit button as the image is added on file selection */}
    </form>
  );
}

export default UploadForm;
