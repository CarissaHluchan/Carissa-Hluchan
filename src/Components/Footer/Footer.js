import React from 'react';
import { Link } from 'react-router-dom';

import gitHubIcon from '../../assets/github.svg';
import linkedInIcon from '../../assets/ilinkedin.svg';
import './Footer.css';

function Footer() {

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
      <p>Thank you for checking out my site!</p>
    </footer>
  )
}

export default Footer;