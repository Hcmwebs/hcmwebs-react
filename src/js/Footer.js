import Contacts from './Contacts';
import { IconContext } from 'react-icons';

const Footer = () => {
  return (
    <IconContext.Provider
      value={{
        color: 'rgba(224, 78, 62, 1);s',
      }}>
      <footer className=' footer'>
        <Contacts />
      </footer>
    </IconContext.Provider>
  );
};

export default Footer;
