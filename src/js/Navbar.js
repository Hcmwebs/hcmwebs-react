import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ isOpen, toggle }) => {
  const [isActive, setIsActive] = useState('');
  const handleActive = () => {
    if (!isActive) {
      return setIsActive(false);
    } else {
      return setIsActive(true);
    }
  };
  const handleClick = () => {
    handleActive();
    toggle();
  };

  return (
    <ul className={(isOpen ? 'open' : '') + ' navBar'}>
      <li>
        <Link to='/' onClick={handleClick}>
          Home
        </Link>
      </li>
      <li>
        <Link to='/About' onClick={handleClick}>
          About
        </Link>
      </li>
      <li>
        <Link to='/Projects' onClick={handleClick}>
          Projects
        </Link>
      </li>
      <li>
        <Link to='/Tools' onClick={handleClick}>
          Tools
        </Link>
      </li>
      <li>
        <Link to='/Contact' onClick={handleClick}>
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
