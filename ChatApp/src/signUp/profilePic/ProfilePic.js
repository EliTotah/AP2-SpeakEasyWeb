import React, { useState } from 'react';
import profilePic from './profile4.jpg';
import './profilePic.css';

function ProfilePic({ setImage1 }) {
  const [imageSrc, setImageSrc] = useState(profilePic);
  const [showUploadBtn, setShowUploadBtn] = useState(false);
  setImage1(imageSrc);

  const handleMouseEnter = () => {
    setShowUploadBtn(true);
  };

  const handleMouseLeave = () => {
    setShowUploadBtn(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataURL = e.target.result;
        setImage1(dataURL);
        setImageSrc(dataURL);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-pic-div" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {imageSrc ? (
        <img src={imageSrc} id="photo" alt="Profile" />
      ) : (
        <div id="placeholder">No image selected</div>
      )}
      <input type="file" id="file" onChange={handleFileChange} style={{ display: 'none' }} />
      {showUploadBtn && (
        <label htmlFor="file" id="uploadBtn">
          Choose Photo
        </label>
      )}
    </div>
  );
}

export default ProfilePic;