import React from 'react';
import './contact.scss';
import github from '../../assets/github.svg';
import linkedin from '../../assets/linkedin.svg';
import emailIcon from '../../assets/email.svg'; // Optional: If using an email icon

export default function Contact() {
  // Define your email details
  const email = 'your-email@example.com'; // Replace with your actual email address
  const subject = encodeURIComponent('Contact Inquiry'); // Subject of the email
  const body = encodeURIComponent('Hello,\n\nI would like to get in touch with you regarding...'); // Body of the email

  // Construct the mailto link
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
      <div className="contact" id="contact">
        <h2>Contact</h2>
        <div className="top">
          <a href="https://github.com/ddz5431" target="_blank" rel="noopener noreferrer">
            <img src={github} alt="GitHub"/>
          </a>
          <a href="https://www.linkedin.com/in/yindongwang/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn"/>
          </a>
        </div>
        <div className="bottom">
          <a href={mailtoLink} className="email-button" title="Click to open your email client">
            <img src={emailIcon} alt="Email Icon" className="email-icon"/>
            Send an Email
          </a>
        </div>
      </div>
  );
}
