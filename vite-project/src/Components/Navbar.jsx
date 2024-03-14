// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { IoClose, IoMenu } from 'react-icons/io5';
import './Navbar.css';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenuOnMobile = () => {
    if (window.innerWidth <= 1150) {
      setShowMenu(false);
    }
  };

  return (
    <div className='container-fluid'>  
    <header className="header">
      <nav className="nav navbar-expand-lg container-fluid">
        <a href="/" className="nav__logo">
          Jenise
        </a>

        <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#about"  className="nav__link" onClick={closeMenuOnMobile}>
               About 
              </a>
            </li>
            <li className="nav__item">
              <a href="#Technical Skills" className="nav__link" onClick={closeMenuOnMobile}>
                Tech_Stack
              </a>
            </li>
            <li className="nav__item">
              <a href="#Projects" className="nav__link" onClick={closeMenuOnMobile}>
                Projects
              </a>
            </li>
            <li className="nav__item">
              <a href="#Contact" className="nav__link" onClick={closeMenuOnMobile}>
                Contact
              </a>
            </li>
          </ul>
          <div className="nav__close" id="nav-close" onClick={toggleMenu}>
            <IoClose />
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          <IoMenu />
        </div>
      </nav>
    </header>
    </div>
  );
};

export default Navbar;
