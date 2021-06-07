import { Link } from 'react-router-dom';

const Header = () => {
  // const names = [Heze, Developer, Designer];
  return (
    <>
      <header className='header'>
        <div className='heroText'>
          <h1>
            Hi, I am <span>Heze.</span>
          </h1>
          <div className='subtitle'>
            <p className='first'>I am a Designer</p>
            <p className='second'>I am a Developer</p>
            <h2>Welcome to my Website</h2>
            <Link to='/About'>About me</Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
