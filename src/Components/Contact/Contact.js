import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import phoneIcon from '../../assets/phone_icon.png';
import emailIcon from '../../assets/gmail.svg';
import resumeIcon from '../../assets/resume-icon.png';
import resume from '../../assets/Carissa_Hluchan_Resume.pdf';
import slackIcon from '../../assets/slack.png';

import leaves from '../../assets/leaves.png';
import leavesDark from '../../assets/leaves-dark.png';
import mountains from '../../assets/mountains.png';
import mountainsDark from '../../assets/mountains-dark.png';
import './Contact.css';

function Contact({ isLightMode }) {

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
      <img src={isLightMode ? leaves : leavesDark} alt="Decorative leaves" className="leaves" />
      <div className='contact-wrapper'>
        <h3>Email:</h3>
        <div className='content-wrapper'>
          <Link to="mailto:CarissaHluchan@gmail.com">
            <motion.img
              src={emailIcon}
              alt="Email"
              className='contact-icon'
              whileHover={{ scale: 1.2, color: "#0a66c2" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring' }} />
          </Link>
          <div className='contact-content'>CarissaHluchan@gmail.com</div>
        </div>
      </div>

      <div className='contact-wrapper'>
        <h4>Phone number:</h4>
        <div className='content-wrapper' onClick={handlePhoneClick}>
          <motion.img
            src={phoneIcon}
            alt='Phone'
            className='contact-icon'
            whileHover={{ scale: 1.2, color: "#0a66c2" }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring' }} />
          <div className='contact-content'>(702) 738-8031</div>
        </div>
        {showPhonePopup && <div className="popup-phone">Phone number copied!</div>}
      </div>

      <div className='contact-wrapper'>
        <h4>Slack:</h4>
        <div className='content-wrapper'>
          <Link to="https://slack.com/app_redirect?channel=@CarissaHluchan">
            <motion.img
              src={slackIcon}
              alt='Slack'
              className='contact-icon'
              whileHover={{ scale: 1.2, color: "#0a66c2" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring' }} />
          </Link>
          <div className='contact-content'>@CarissaHluchan</div>
        </div>
      </div>

      <div className='contact-wrapper'>
        <h5>Resume:</h5>
        <div className='resume-content-wrapper' >
          <Link to={resume} target="_blank" rel="noopener noreferrer" download="Carissa_Hluchan_Resume.pdf">
            <motion.img
              src={resumeIcon}
              alt="Resume"
              className='resume-icon'
              whileHover={{ scale: 1.2, color: "#0a66c2" }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring' }} />
          </Link>
          <div className='contact-content'>Click to download</div>
        </div>
      </div>

      <div className='mountains-wrapper'>
        <img src={isLightMode ? mountains : mountainsDark} alt="Decorative Mountains" className="contact-mountains" />
      </div>

    </section >
  );
}

export default Contact;
