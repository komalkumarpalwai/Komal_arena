// src/Contact.js

import React, { useState } from 'react';
import './Navbar.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white text-black p-4">
        <h1 className="text-3xl font-bold mb-6">Thank You for Contacting Us!</h1>
        <p className="text-lg">We appreciate your message and will get back to you soon.</p>
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center  min-h-screen bg-white text-black p-4">
    <h1 className="text-3xl font-bold mb-6">Get in Touch</h1>
    <form onSubmit={handleSubmit} className="w-full max-w-md bg-white p-6 shadow-md rounded">
      <div className="flex space-x-4 mb-4">
        <div className="w-full">
          <label className="block text-sm font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-full">
          <label className="block text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded p-2"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold mb-2" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full border border-gray-300 rounded p-2"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>
      <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-200 contact">
        Submit
      </button>
    </form>
  </div>
  );
}

export default Contact;
