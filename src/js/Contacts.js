import { IconContext } from 'react-icons';
import Contact from './Contact';
import {
  FaGithubSquare,
  FaTwitterSquare,
  FaEnvelopeSquare,
} from 'react-icons/fa';

const Contacts = ({ Github, Twitter, Email }) => {
  return (
    <IconContext.Provider value ={{size : '5rem'}}>
      <div className='footer__links'>
        <Contact Github={FaGithubSquare} />
        <Contact Twitter={FaTwitterSquare} />
        <Contact Email={FaEnvelopeSquare} />
      </div>
    </IconContext.Provider>
  );
};

export default Contacts;
