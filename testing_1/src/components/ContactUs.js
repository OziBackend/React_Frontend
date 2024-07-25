import React from 'react';
import '../App.css';

function ContactUs() {
    return (
    <div className="contact-us">
        <h2>Contact Us</h2>
        <p>If you have any questions, feel free to reach out to us!</p>
        <div className="contact-info">
            <p><strong>Email:</strong> admin@example.com</p>
            <p><strong>Phone:</strong> +123 456 7890</p>
        </div>
        <form className="contact-form">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea>
            
            <button type="submit">Send</button>
        </form>
    </div>
    );
}

export default ContactUs;