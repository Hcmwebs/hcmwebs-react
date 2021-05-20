import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import Hamburger from './Hamburger';
import Logo from './Logo';
import Navbar from './Navbar';

const Nav = () => {
  const [isOpen, setIsOpen] = useState('');
  const handleToggle = () => {
    if (!isOpen) {
      return setIsOpen(true);
    } else {
      return setIsOpen(false);
    }
  };

  const handleClick = () => {
    handleToggle();
  };
  return (
    <nav className='nav'>
      <Logo />
      <Navbar isOpen={isOpen} toggle={handleToggle} />
      <Hamburger
        handleClick={handleClick}
        FaBars={FaBars}
        FaTimes={FaTimes}
        isOpen={isOpen}
      />
    </nav>
  );
};

export default Nav;
