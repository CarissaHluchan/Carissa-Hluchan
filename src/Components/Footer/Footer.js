import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

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
          <motion.img
            src={gitHubIcon}
            className='footer-link'
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring' }} />
        </Link>
        <Link to='https://www.linkedin.com/in/carissahluchan/'>
          <motion.img
            src={linkedInIcon}
            className='footer-link'
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring' }} />
        </Link>
      </div>
      <p>Thank you for checking out my site</p>
    </footer>
  )
}

export default Footer;