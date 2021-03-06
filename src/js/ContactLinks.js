import { Link } from 'react-router-dom';

const ContactLinks = ({ Github, Twitter, Email }) => {
  return (
    <>
      <a href='https://github.com/Hcmwebs' target='_blank' rel='noreferrer'>
        <Github />
      </a>
      <a href='https://twitter.com/hcmwebs' target='_blank' rel='noreferrer'>
        <Twitter />
      </a>
      <Link to='/Contact'>
        <Email />
      </Link>
    </>
  );
};

export default ContactLinks;
