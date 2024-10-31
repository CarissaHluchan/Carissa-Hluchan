import React from 'react';
import { Link } from 'react-router-dom';

// import gitHubIcon from '../../assets/github.svg';
// import linkedInIcon from '../../assets/linkedin.png';
import phoneIcon from '../../assets/phone_icon.png';
import emailIcon from '../../assets/gmail.svg';
import resumeIcon from '../../assets/resume-icon.png';
import resume from '../../assets/Carissa_Hluchan_Resume.pdf';
import './Contact.css';

function Contact() {
  return (
    <section className='contact-section'>
      {/* <div className='links-wrapper'>
        <Link to="https://github.com/CarissaHluchan" target="_blank" rel="noopener noreferrer">
          <img src={gitHubIcon} alt="GitHub" className='contact-icon' />
        </Link>
        <Link to="https://www.linkedin.com/in/carissahluchan" target="_blank" rel="noopener noreferrer">
          <img src={linkedInIcon} alt="LinkedIn" className='contact-icon' />
        </Link>
      </div> */}

      {/* <div className='contact-container'> */}
      <div className='contact-wrapper'>
        <h2>Contact:</h2>

        <div className='email-wrapper'>
          <h3>Email:</h3>
          <Link to="mailto:CarissaHluchan@gmail.com">
            <img src={emailIcon} alt="Email" className='email-icon' />
          </Link>
          <div className='contact-content'>CarissaHluchan@gmail.com</div>
        </div>

        <div className='phone-wrapper'>
          <h4>Phone number:</h4>
          <img src={phoneIcon} alt='Phone' className='phone-icon' />
          <div className='contact-content'>(702) 738-8031</div>
        </div>

        <div className='resume-wrapper'>
          <h5>Resume:</h5>
          <Link to={resume} target="_blank" rel="noopener noreferrer" download="Carissa_Hluchan_Resume.pdf">
            <img src={resumeIcon} alt="Resume" className='resume-icon' />
          </Link>
          <div className='contact-content'>Click to download</div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
}

export default Contact;
