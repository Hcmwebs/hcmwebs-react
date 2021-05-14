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
      </li>
    </ul>
  );
};

export default Navbar;
