import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { motion } from 'framer-motion';

import './Nav.css';

function Nav({ isLightMode, handleClick }) {

  const [currentRoute, setCurrentRoute] = useState();

  const handleActiveRoute = (event) => {
    console.log(event.target.innerText, 'event')
    setCurrentRoute(event.target.innerText)
  }

  return (
    <nav>
      <Link to='/about'>
        <motion.button
          className={`nav-link${currentRoute === 'About' ? ' active' : ''}`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring' }}
          onClick={handleActiveRoute}
        >About</motion.button>
      </Link>
      <Link to='/contact'>
        <motion.button
          className={`nav-link${currentRoute === 'Contact' ? ' active' : ''}`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring' }}
          onClick={handleActiveRoute}
        >Contact</motion.button>
      </Link>
      <Link to='/skills'>
        <motion.button
          className={`nav-link${currentRoute === 'Skills' ? ' active' : ''}`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring' }}
          onClick={handleActiveRoute}
        >Skills</motion.button>
      </Link>
      <Link to='/projects'>
        <motion.button
          className={`nav-link${currentRoute === 'Projects' ? ' active' : ''}`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring' }}
          onClick={handleActiveRoute}
        >Projects</motion.button>
      </Link>
      <Link to='/testimonials'>
        <motion.button
          className={`nav-link${currentRoute === 'Testimonials' ? ' active' : ''}`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring' }}
          onClick={handleActiveRoute}
        >Testimonials</motion.button>
      </Link>
      <motion.button
        id='dark-mode-toggle'
        onClick={handleClick}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: 'spring' }}
      >{isLightMode ? <FaSun className='toggle-sun' /> : <FaMoon className='toggle-moon' />}
      </motion.button>
    </nav>
  )
}

export default Nav;