import React, { useState } from 'react';
import Page from './Page';
import './Page.css';

function ContactInfoPage({ email, phone, onEmailChange, onNumberChange, onNext, onPrev,data }) {
  const [formValues3, setFormValues3] = useState({...data, 
    email: '',
    phoneNumber: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues3({ ...formValues3, [name]: value });
  };

  const handleNext = (data) => {
    if (data) {
      setFormValues3(data);
      onNext(data);
    }
  };

  return (
    <div>
      <Page
        title="Contact Info:"
        fields={[
          {
            label: 'Email Address',
            type: 'email',
            name: 'email',
            value: email,
            onChange: onEmailChange,
            required: false,
          },
          {
            label: 'Phone Number',
            type: 'tel',
            name: 'phoneNumber',
            value: phone,
            onChange: onNumberChange,
            required: false,
          },
        ]}
        onNext={handleNext}
        onPrev={onPrev}
        formValues1 = {formValues3}
      />
    </div>
  );
}

export default ContactInfoPage;
