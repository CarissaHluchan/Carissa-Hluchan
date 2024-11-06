import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { motion } from 'framer-motion';

import './Nav.css';

function Nav({ isLightMode, handleClick }) {

  const [ currentRoute, setCurrentRoute] = useState();

  const handleActiveRoute = (event) => {
    //add id to state
  }

  return (
    <nav>
      <Link to='/about'>
        <motion.button
          className={`nav-link${currentRoute === 'about' ? ' active' : ''}`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring' }}>About</motion.button></Link>
      <Link to='/contact' className='nav-link'>Contact</Link>
      <Link to='/skills' className='nav-link'>Skills</Link>
      <Link to='/projects' className='nav-link'>Projects</Link>
      <Link to='/testimonials' className='nav-link'>Testimonials</Link>
      <button id='dark-mode-toggle' onClick={handleClick}>
        {isLightMode ? <FaSun className='toggle-sun' /> : <FaMoon className='toggle-moon' />}
      </button>
    </nav>
  )
}

export default Nav;