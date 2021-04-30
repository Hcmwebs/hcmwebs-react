import logo from '../images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = index => {
    if (isOpen === index) {
      return setIsOpen();
    }
  };

  return (
    <nav className='nav'>
      <div className='logo'>
        <img src={logo} alt='Logo' />
      </div>

      <ul className={(isOpen ? 'open' : '') + ' navBar'}>
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
      <span
        className='hamburger'
        onClick={() => {
          setIsOpen(true);
        }}>
        {isOpen ? <FaTimes color='rgba(255, 150, 94, 1)' /> : <FaBars />}
      </span>
    </nav>
  );
};

export default Nav;
