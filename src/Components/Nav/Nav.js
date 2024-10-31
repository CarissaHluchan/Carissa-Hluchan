import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <nav>
      <Link to='/about' className='nav-link'>About</Link>
      <Link to='/contact' className='nav-link'>Contact</Link>
      <Link to='/skills' className='nav-link'>Skills</Link>
      <Link to='/projects' className='nav-link'>Projects</Link>
      <Link to='/testimonials' className='nav-link'>Testimonials</Link>
    </nav>
  )
}

export default Nav;