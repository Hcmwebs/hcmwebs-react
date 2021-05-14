import { Link } from 'react-router-dom';
const Navbar = ({ isOpen, isActive }) => {
  return (
    <ul className={(isOpen ? 'open' : '') + ' navBar'}>
      <li>
        <Link to='/' className='active'>
          Home
        </Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/projects'>Projects</Link>
      </li>
      <li>
        <Link to='/tools'>Tools</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
    </ul>
  );
};

export default Navbar;
