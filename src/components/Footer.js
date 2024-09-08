import React from 'react';
import './Footer.css'; // Import the CSS for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="social-media-icons">
        {/* Social Media Icons */}
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        {/* Add more icons as needed */}
      </div>
    </footer>
  );
}

export default Footer;
