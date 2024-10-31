import { React, useState } from 'react';
import { Link } from 'react-router-dom';

// import gitHubIcon from '../../assets/github.svg';
// import linkedInIcon from '../../assets/linkedin.png';
import phoneIcon from '../../assets/phone_icon.png';
import emailIcon from '../../assets/gmail.svg';
import resumeIcon from '../../assets/resume-icon.png';
import resume from '../../assets/Carissa_Hluchan_Resume.pdf';
import './Contact.css';

function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const handlePhoneClick = () => {
    navigator.clipboard.writeText("(702) 738-8031")
    .then(() => {
      setShowPopup(true); // Show popup
      setTimeout(() => setShowPopup(false), 2000); // Hide after 2 seconds
    })
    .catch(err => console.error("Failed to copy text: ", err));
};

  return (
    <section className='contact-section'>
        <h2>Contact:</h2>

        <div className='email-wrapper'>
          <h3>Email:</h3>
          <div className='email-content-wrapper'>
            <Link to="mailto:CarissaHluchan@gmail.com">
              <img src={emailIcon} alt="Email" className='email-icon' />
            </Link>
            <div className='contact-content'>CarissaHluchan@gmail.com</div>
          </div>
        </div>

        <div className='phone-wrapper'>
          <h4>Phone number:</h4>
          <div className='phone-content-wrapper' onClick={handlePhoneClick}>
            <img src={phoneIcon} alt='Phone' className='phone-icon' />
            <div className='contact-content'>(702) 738-8031</div>
          </div>
          {showPopup && <div className="popup">Phone number copied!</div>}
        </div>

        <div className='resume-wrapper'>
          <h5>Resume:</h5>
          <div className='resume-content-wrapper' >
            <Link to={resume} target="_blank" rel="noopener noreferrer" download="Carissa_Hluchan_Resume.pdf">
              <img src={resumeIcon} alt="Resume" className='resume-icon' />
            </Link>
            <div className='contact-content'>Click to download</div>
          </div>
        </div>

    </section>
  );
}

export default Contact;
