const Navbar = isOpen => {
  return (
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
  );
};

export default Navbar;
