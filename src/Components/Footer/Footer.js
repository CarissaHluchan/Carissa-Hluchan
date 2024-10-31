import React from 'react';
import { Link } from 'react-router-dom';

import gitHubIcon from '../../assets/github-icon-2.svg';
import linkedInIcon from '../../assets/linkedIn_icon.svg';
import './Footer.css';

function Footer() {
  
  return (
    <footer>
      <Link to='https://github.com/CarissaHluchan'>
        <img src={gitHubIcon} className='footer-link'/>
      </Link>
      <Link to='https://www.linkedin.com/in/carissahluchan/'>
        <img src={linkedInIcon} className='footer-link'/>
      </Link>
    </footer>
  )
}

export default Footer;