import { IconContext } from 'react-icons';
import Contact from './Contact';
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaEnvelopeSquare,
} from 'react-icons/fa';

const Contacts = () => {
  return (
    <IconContext.Provider
      value={{ color: 'rgba(255, 255, 255, 1)', size: '5rem' }}>
      <div className='footer__links'>
        <Contact
          Github={FaGithubSquare}
          Twitter={FaTwitterSquare}
          Email={FaEnvelopeSquare}
        />
      </div>
    </IconContext.Provider>
  );
};

export default Contacts;
