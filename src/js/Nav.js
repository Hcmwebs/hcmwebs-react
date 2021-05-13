import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Hamburger from './Hamburger';
import Logo from './Logo';
import Navbar from './Navbar';

const Nav = () => {
  const [isActive, setIsActive] = useState('');
  const [isOpen, setIsOpen] = useState('');
  const handleToggle = () => {
    if (!isOpen) {
      return setIsOpen(true);
    } else {
      return setIsOpen(false);
    }
  };

  return (
    <nav className='nav'>
      <Logo />
      <Navbar
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        isActive={isActive}
        setIsActive={setIsActive}
      />
      <Hamburger
        toggle={handleToggle}
        FaBars={FaBars}
        FaTimes={FaTimes}
        isOpen={isOpen}
      />
    </nav>
  );
};

export default Nav;
