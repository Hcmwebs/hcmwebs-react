import { IconContext } from 'react-icons';
import ContactLinks from './ContactLinks';
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaEnvelopeSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=' footer'>
      <IconContext.Provider
        value={{
          color: 'rgba(255, 255, 255, 1)',
          size: '5rem',
          boxShadow: '0px 10px 15px 2px rgba(0, 0, 0, 0.2)',
        }}>
        <div className='footer__links'>
          <ContactLinks
            Github={FaGithubSquare}
            Twitter={FaTwitterSquare}
            Email={FaEnvelopeSquare}
          />
        </div>
      </IconContext.Provider>
    </footer>
  );
};

export default Footer;
