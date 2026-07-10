import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section">
      <div className="contact-card">
        <div className="contact-header">
          <span className="section-label">05</span>
          <span className="contact-header-title">CONTACT</span>
          <div className="section-line"></div>
        </div>

        <div className="contact-body">
          <h2 className="contact-headline">
            Have a project in mind, or just want to talk shop?
          </h2>
          <p className="contact-subtext">
            The fastest way to reach us is straight to the inbox — no form, no back-and-forth.
          </p>

          <a href="mailto:prem.patel9224@gmail.com" className="contact-cta">
            SAY HELLO
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <p className="contact-email">prem.patel9224@gmail.com</p>

          <div className="contact-socials">
            <a href="https://github.com/ignit-fury" target="_blank" rel="noopener noreferrer" className="contact-social-link">GITHUB</a>
            <a href="https://www.linkedin.com/in/prem-patel-9742aa388/" target="_blank" rel="noopener noreferrer" className="contact-social-link">LINKEDIN</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
