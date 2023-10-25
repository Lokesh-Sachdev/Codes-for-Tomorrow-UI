import React, { useState } from 'react';

const FeedbackForm = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      formData.message.trim() === ''
    ) {
      setErrorMessage('Please Fill the all Fields');
    } else {
      setSubmitted(true);
      setErrorMessage('');
    }
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={handleSubmit}>
          {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              cols="23"
            />
          </label>
          <br />
          <div className="form__btns">
            <button onClick={onClose}>Close</button>
            <button type="submit">Submit</button>
          </div>
        </form>
      ) : (
        <div>
          <p>Thanks for your Feedback</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
