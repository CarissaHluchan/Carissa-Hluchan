import React from 'react';
import { Link } from 'react-router-dom';

import gitHubDark from '../../assets/github-dark.svg';
import gitHubLight from '../../assets/github-light.svg';
import linkedInDark from '../../assets/linkedin-dark.svg';
import linkedInLight from '../../assets/linkedin-light.svg';
import './Footer.css';

function Footer({ isLightMode }) {

  const gitHubIcon = isLightMode ? gitHubLight : gitHubDark;
  const linkedInIcon = isLightMode ? linkedInLight : linkedInDark;

  return (
    <footer>
      <div className='footer-link-wrapper'>
        <Link to='https://github.com/CarissaHluchan'>
          <img src={gitHubIcon} className='footer-link' />
        </Link>
        <Link to='https://www.linkedin.com/in/carissahluchan/'>
          <img src={linkedInIcon} className='footer-link' />
        </Link>
      </div>
      <p>Thank you for checking out my site</p>
    </footer>
  )
}

export default Footer;