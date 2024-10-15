import React from 'react';

import gitHubIcon from '../assets/github.svg';
import linkedInIcon from '../assets/linkedIn_icon.svg';
// import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/gmail.svg';
// import slackIcon from '../assets/slack.png'
import resumeIcon from '../assets/resume-icon.png';
import resume from '../assets/Carissa_Hluchan_Resume.pdf';
import './Contact.css';

function Contact() {
  return (
    <section className='contact-section'>
      <div className='links-wrapper'>
        <a href="https://github.com/CarissaHluchan" target="_blank" rel="noopener noreferrer">
          <img src={gitHubIcon} alt="GitHub" className='contact-icon' />
        </a>
        <a href="https://www.linkedin.com/in/carissahluchan" target="_blank" rel="noopener noreferrer">
          <img src={linkedInIcon} alt="LinkedIn" className='contact-icon' />
        </a>
      </div>
      <div className='contact-wrapper'>
        <h4>Contact:</h4>
        <a href="mailto:CarissaHluchan@gmail.com">
          <img src={emailIcon} alt="Email" className='contact-icon' />
        </a>
      </div>
      <div className='resume-wrapper'>
        <h5>Download my Resume:</h5>
        <a href={resume} target="_blank" rel="noopener noreferrer" download="Carissa_Hluchan_Resume.pdf">
          <img src={resumeIcon} alt="Resume" className='resume-icon' />
        </a>
      </div>
    </section>
  );
}

export default Contact;
