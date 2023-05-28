import React, { useState } from 'react';
import profilePic from './profile4.jpg';
import './profilePic.css';

function ProfilePic({setImage1}) {
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
    console.log(URL.createObjectURL(event.target.files[0]));
    setImage1(URL.createObjectURL(event.target.files[0]));
    setImageSrc(URL.createObjectURL(event.target.files[0]));
  };

  const handleImageLoad = (event) => {
    //setImageSrc(event.target.result);
    URL.createObjectURL(event.target.result)
    setImage1(setImageSrc(event.target.result));
  };

  return (
    <div className="profile-pic-div" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={imageSrc} id="photo" alt="Profile" />
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
