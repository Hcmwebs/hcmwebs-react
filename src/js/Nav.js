import logo from '../images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setOpen] = useState('False');

  return (
    <nav className='nav'>
      <div className='logo'>
        <img src={logo} alt='Logo' />
      </div>

      <ul className='navBar'>
        <li>
          <a href='/'>Home</a>
        </li>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='/projects'>Projects</a>
        </li>
        <li>
          <a href='/contact'>Contact</a>
        </li>
      </ul>
      <FaBars className='hamburger' />
      <FaTimes className='hamburger' color='rgba(255, 150, 94, 1)' />
    </nav>
  );
};

export default Nav;
