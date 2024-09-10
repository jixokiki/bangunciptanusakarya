import React, { useState } from 'react';
import axios from 'axios';
import './Form.css'; // Mengimpor file Sass


const Form = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:4000/datasubmit', {
        email,
        name,
        address
      });

      alert('Data submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className='formApp'>
      <h4>Contact Form</h4>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </div>
        <button type="submit">
          <h7>Submit</h7>
          </button>
      </form>
    </div>
  );
};

export default Form;
