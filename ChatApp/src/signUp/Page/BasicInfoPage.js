import React, { useState } from 'react';
import Page from './Page';
import './Page.css';

function BasicInfoPage({ userName,onUserNameChange, onNext , onPrev }) {
  const [formValues2, setFormValues2] = useState({
    name: "",
    username: "",
  });

  const fields = [
    { name: "name", label: "Name", type: "text", required: true},
    { name: "username", label: "Username", type: "text", required: true , value: userName, onChange : onUserNameChange},
  ];

  const handleNext = (data) => {
    if (data) {
      setFormValues2(data);
      onNext(data);
    }
  };
  return (
    <Page
      title="Basic Info:"
      fields={fields}
      onNext={handleNext}
      onPrev={onPrev}
      formValues1 = {formValues2}
    />
  );
}


export default BasicInfoPage;
