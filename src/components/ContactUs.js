import React from 'react';

const ContactUs = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Message:</label>
        <textarea></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ContactUs;