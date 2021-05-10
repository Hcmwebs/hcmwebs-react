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
        color: 'rgba(224, 78, 62, 1)',
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
