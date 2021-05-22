import { Link } from 'react-router-dom';
<<<<<<< Updated upstream
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
        <Link to='/' className={isActive ? 'active' : ''} onClick={handleClick}>
=======
const Navbar = ({ isOpen, isActive }) => {
  return (
    <ul className={(isOpen ? 'open' : '') + ' navBar'}>
      <li>
        <Link to='/' className='active'>
>>>>>>> Stashed changes
          Home
        </Link>
      </li>
      <li>
<<<<<<< Updated upstream
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
          to='/Contact'
          className={isActive ? 'active' : ''}
          onClick={handleClick}>
          Contact
        </Link>
=======
        <Link to='/About'>About</Link>
      </li>
      <li>
        <Link to='/Projects'>Projects</Link>
      </li>
      <li>
        <Link to='/Tools'>Tools</Link>
      </li>
      <li>
        <Link to='/Footer'>Contact</Link>
>>>>>>> Stashed changes
      </li>
    </ul>
  );
};

export default Navbar;
