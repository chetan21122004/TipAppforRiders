// components/UpiForm.jsx
import React, { useState } from 'react';

function UpiForm() {
  const [upiId, setUpiId] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = { upiId, name, phone };
    
    // Post data to backend
    const response = await fetch('http://localhost:5000/api/save-upi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Data saved successfully!');
    } else {
      alert('Failed to save data.');
    }
  };

  return (
    <div className="upi-form">
      <h1>Enter Details</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>UPI ID:</label>
          <input 
            type="text" 
            value={upiId} 
            onChange={(e) => setUpiId(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input 
            type="tel" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UpiForm;
