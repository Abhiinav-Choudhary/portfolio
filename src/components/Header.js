import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className='Navbar'>
      <h2 className='name'>Abhinav</h2>

      {/* Hamburger Icon */}
      <div className="hamburger-icon" onClick={toggleMenu}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </div>

      {/* Nav Links */}
      <nav className={`Nav ${isOpen ? 'active' : ''}`}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/skills" onClick={closeMenu}>Skills</NavLink>
        <NavLink to="/works" onClick={closeMenu}>Works</NavLink>
        <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
      </nav>
    </div>
  );
}

export default Header;
