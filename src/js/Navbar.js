import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ isOpen, toggle }) => {
  const [isActive, setIsActive] = useState(false);
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
        <Link to='/' className={isActive ? 'active' : ''} onClick={handleClick}>
          Home
        </Link>
      </li>
      <li>
        <Link
          to='/About'
          className={isActive ? 'active' : ''}
          onClick={handleClick}>
          About
        </Link>
      </li>
      <li>
        <Link
          to='/Projects'
          className={isActive ? 'active' : ''}
          onClick={handleClick}>
          Projects
        </Link>
      </li>
      <li>
        <Link
          to='/Tools'
          className={isActive ? 'active' : ''}
          onClick={handleClick}>
          Tools
        </Link>
      </li>
      <li>
        <Link
          to='/Footer'
          className={isActive ? 'active' : ''}
          onClick={handleClick}>
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
