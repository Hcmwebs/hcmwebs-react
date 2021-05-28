import { Link } from 'react-router-dom';

const Header = () => {
  // const names = [Heze, Developer, Designer];
  return (
    <>
      <header className='header'>
        <div className='heroText'>
          <h1>
            Hi, I am <span> Heze </span>
          </h1>
          <h2>Welcome to my Website</h2>
          <Link to='/About'>About me</Link>
        </div>
      </header>
    </>
  );
};

export default Header;
