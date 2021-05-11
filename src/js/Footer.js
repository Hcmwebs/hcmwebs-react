import { IconContext } from 'react-icons';
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaEnvelopeSquare,
} from 'react-icons/fa';
import Contacts from './Contacts';

const Footer = () => {
  return (
    <IconContext.Provider
      value={{
        color: ' rgba(255,255, 255, 1)',
        size: '5rem',
      }}>
      <footer className=' footer'>
        <Contacts
          FaGithubSquare={FaGithubSquare}
          FaTwitterSquare={FaTwitterSquare}
          FaEnvelopeSquare={FaEnvelopeSquare}
        />
      </footer>
    </IconContext.Provider>
  );
};

export default Footer;
