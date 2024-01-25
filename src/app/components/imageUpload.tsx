import { useState } from 'react';

export default function ImageUpload() {
  const [image, setImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add code to upload the image to localhost
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleImageChange} />
        <button type="submit">Upload</button>
      </form>
      {image && (
        <button onClick={openModal}>Preview Image</button>
      )}
      {showModal && <ImagePreviewModal image={image} closeModal={closeModal} />}
    </div>
  );
}
