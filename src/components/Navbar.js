import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Loyalty Program<bn></bn>
            <i class="fa-sharp fa-solid fa-compact-disc"/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              News Feed
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/privacy-policy'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Privacy Policy
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/your-stars-and-reward'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Your Stars and Reward
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/events-check-in'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Events Check-in
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/form'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Form
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/employees-report'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Employees Report
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/report-issue'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Report Issue
              </Link>
            </li>
            
            <li>
              <Link
                to='/log-in'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Log in
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>LOG IN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
