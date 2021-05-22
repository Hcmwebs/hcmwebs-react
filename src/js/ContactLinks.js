import { Link } from 'react-router-dom';

const ContactLinks = ({ Github, Twitter, Email }) => {
  return (
    <div>
      <a href='https://github.com/Hcmwebs' target='_blank' rel='noreferrer'>
        <Github />
      </a>
      <a href='https://twitter.com/hcmwebs' target='_blank' rel='noreferrer'>
        <Twitter />
      </a>
      <Link to='/Contact' target='_blank' rel='noreferrer'>
        <Email />
      </Link>
    </div>
  );
};

export default ContactLinks;
