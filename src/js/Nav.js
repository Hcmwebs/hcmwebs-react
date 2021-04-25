import logo from '../images/logo.png';

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
      <div className='hamburger'></div>
    </nav>
  );
};

export default Nav;
