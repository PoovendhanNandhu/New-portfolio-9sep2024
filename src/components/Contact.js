import React from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { Github } from 'lucide-react';
import './Contact.css';

function Contact() {
  return (
    <div className='spline-container'>
      <div className='contact-us'>
      <div className="contact-card">
        <h2 className="contact-title">Contact Me</h2>
        <div className="contact-info">
          <div className="contact-item">
            <Mail size={20} />
            <a href="mailto:poovendhannandhu@gmail.com">poovendhannandhu@gmail.com</a>
          </div>
          <div className="contact-item">
            <Phone size={20} />
            <a href="tel:+1234567890">+1 (234) 567-890</a>
          </div>
          <div className="contact-item">
            <Linkedin size={20} />
            <a href="https://www.linkedin.com/in/poovendhan-v-580971227/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="contact-item">
            <Github size={20} />
            <a href="https://github.com/PoovendhanNandhu" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Contact;