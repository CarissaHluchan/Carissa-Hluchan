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

          {/* <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          color="currentColor" 
          className='footer-link' width="24" height="24" viewBox="0 0 24 24"
          whileHover={{ scale: 1.2, color: "#0a66c2" }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring' }}>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="#385b0a" />
          </motion.svg> */}

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