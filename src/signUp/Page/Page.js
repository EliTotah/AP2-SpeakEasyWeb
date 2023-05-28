import React, { useState } from 'react';
import './Page.css';
import  '../signup';

function Page({ title, fields, onNext, onPrev ,formValues1}) {
  const [formValues, setFormValues] = useState(formValues1);

  const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [img, setimg] = useState();

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const newFormValues = { ...formValues, [name]: value};
    setFormValues(newFormValues);
  };

  const validate = (index) => {
    const field = fields[index];
    const value = formValues[field.name];
    if (field.required && !value) {
      return;
    }
    if (field.emailError) {
      return field.emailError;
    }
    if (field.phoneNumberError) {
      return field.phoneNumberError;
    }
    if (field.passwordError) {
      return field.passwordError;
    }
    if (field.passwordsMatchError) {
      return field.passwordsMatchError;
    }
    if (field.passwordVerificationError) {
      return field.passwordVerificationError;
    }

    return null;
  };
  

  const handleNext = () => {
    const errors = fields.map((field, index) => validate(index));
    const hasErrors = errors.some((error) => error !== null);
    if (hasErrors) {
      alert('Please fill in all required fields');
      return;
    }
    if (onNext) {
      console.log(formValues);
      onNext(formValues);
    }
  };

  return (
    <div className="ContainPage">
      <div>
        <div className="title">{title}</div>
      </div>
      {fields.map((field, index) => (
        <div className="field" key={index}>
          <div className="label">
            {field.required && <span className="required">*</span>}
            {field.label}
          </div>
          <input
            type={field.type}
            name={field.name}
            value={formValues[field.name] || ''}
            onChange={(event) => handleInputChange(event, index)}
            required={field.required}
            pattern={field.pattern}
          />
          {validate(index) && <div className="error">{validate(index)}</div>}
          {field.passwordVerificationError && <div className="error">{field.passwordVerificationError}</div>}
        </div>
      ))}

      <div className="field btns">
        {onPrev && <button className="prev" onClick={onPrev}>Previous</button>}
        {onNext && <button className="next" onClick={handleNext}>Next</button>}
      </div>
    </div>
  );
}

export default Page;
