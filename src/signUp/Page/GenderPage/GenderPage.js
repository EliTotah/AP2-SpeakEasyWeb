import React from "react";
import './GenderPage.css';
import { useState } from "react";
import "../Page.css";


function GenderPage(props) {
  const { gender, onGenderChange, onNext, onPrev,data } = props;

  const [formValues4, setFormValues4] = useState({...data,
    gender: ''
  });


  const handleNext = (data) => {
      var choose = document.getElementsByName('gen')[0].value;
      data.gender = choose;
      setFormValues4(data);
      onNext(data);
  }; 


  return (
    <div className="gender-page">
      <div>
        <div className="title">Gender:</div>
      </div>
      <div className="field">
        <label className="label">Gender</label>
        <select name="gen" value={gender}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="field btns">
        <button className="prev" onClick={onPrev}>Previous</button>
        <button className="next" onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default GenderPage;
