import logo from '../images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = () => {
  return (
    <nav>
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
      <FaBars />
      <FaTimes />
    </nav>
  );
};

export default Nav;
