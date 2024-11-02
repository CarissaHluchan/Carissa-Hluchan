import { Link } from 'react-router-dom';
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

import './Nav.css';

function Nav({ isLightMode, handleClick }) {

  return (
    <nav>
      <Link to='/about' className='nav-link'>About</Link>
      <Link to='/contact' className='nav-link'>Contact</Link>
      <Link to='/skills' className='nav-link'>Skills</Link>
      <Link to='/projects' className='nav-link'>Projects</Link>
      <Link to='/testimonials' className='nav-link'>Testimonials</Link>
      <button id='dark-mode-toggle' onClick={handleClick}>
        {isLightMode ? <FaSun className='toggle-sun'/> : <FaMoon className='toggle-moon'/>}
      </button>
    </nav>
  )
}

export default Nav;