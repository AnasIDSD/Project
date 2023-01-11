import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import '../../styles/Navbar.css';
import Dropdown from './Dropdown';
import safe from '../../public/static/safe.png'
import CryptoDropDown from './CryptoDropDown'
import Image from "next/image"

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [crdropdown, setcrDropdown] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  const oncrMouseEnter = () => {
    if (window.innerWidth < 960) {
      setcrDropdown(false);
    } else {
      setcrDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const oncrMouseLeave = () => {
    if (window.innerWidth < 960) {
      setcrDropdown(false);
    } else {
      setcrDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <a to='/' className='navbar-logo' onClick={closeMobileMenu}>
        <Image className='moonimage' src={"https://smoon1996.com/Logo1.png"}  width={300} height={40} />
        {/* <img src='../../public/static/safe.png'></img> */}
          <i class='fab fa-firstdraft' />
        </a>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li
            className='nav-item'
            onMouseEnter={oncrMouseEnter}
            onMouseLeave={oncrMouseLeave}
          >
            <a
              to='/'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Cryptocurrency <i className='fas2 fa-caret-down' />
            </a>
            {crdropdown && <CryptoDropDown />}
          </li>
          <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <a
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Discover <i className='fas2 fa-caret-down' />
            </a>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <a
              to='/products'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Lists
            </a>
          </li>
         
         
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
