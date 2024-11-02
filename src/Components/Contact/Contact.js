import { useState } from 'react';
import { Link } from 'react-router-dom';

import phoneIcon from '../../assets/phone_icon.png';
import emailIcon from '../../assets/gmail.svg';
import resumeIcon from '../../assets/resume-icon.png';
import resume from '../../assets/Carissa_Hluchan_Resume.pdf';
import slackIcon from '../../assets/slack.png';
import './Contact.css';

function Contact() {
  const [showPhonePopup, setShowPhonePopup] = useState(false);

  const handlePhoneClick = () => {
    navigator.clipboard.writeText("(702) 738-8031")
      .then(() => {
        setShowPhonePopup(true);
        setTimeout(() => setShowPhonePopup(false), 2000);
      })
      .catch(err => console.error("Failed to copy text: ", err));
  };

  return (
    <section className='contact-section'>
      <h2>Contact:</h2>

      <div className='contact-wrapper'>
        <h3>Email:</h3>
        <div className='content-wrapper'>
          <Link to="mailto:CarissaHluchan@gmail.com">
            <img src={emailIcon} alt="Email" className='contact-icon' />
          </Link>
          <div className='contact-content'>CarissaHluchan@gmail.com</div>
        </div>
      </div>

      <div className='contact-wrapper'>
        <h4>Phone number:</h4>
        <div className='content-wrapper' onClick={handlePhoneClick}>
          <img src={phoneIcon} alt='Phone' className='contact-icon' />
          <div className='contact-content'>(702) 738-8031</div>
        </div>
        {showPhonePopup && <div className="popup-phone">Phone number copied!</div>}
      </div>

      <div className='contact-wrapper'>
        <h4>Slack:</h4>
        <div className='content-wrapper'>
          <Link to="https://slack.com/app_redirect?channel=@CarissaHluchan">
            <img src={slackIcon} alt='Slack' className='contact-icon' />
          </Link>
          <div className='contact-content'>@CarissaHluchan</div>
        </div>
      </div>

      <div className='contact-wrapper'>
        <h5>Resume:</h5>
        <div className='resume-content-wrapper' >
          <Link to={resume} target="_blank" rel="noopener noreferrer" download="Carissa_Hluchan_Resume.pdf">
            <img src={resumeIcon} alt="Resume" className='resume-icon' />
          </Link>
          <div className='contact-content'>Click to download</div>
        </div>
      </div>

    </section >
  );
}

export default Contact;
