import { Link } from 'react-router-dom';

const Contact = ({ Github, Twitter, Email }) => {
  return (
    <>
      <a href='https://github.com/Hcmwebs' target='_blank' noreferrer>
        <Github />
      </a>
      <a href='https://twitter.com/hcmwebs' target='_blank' noreferrer>
        <Twitter />
      </a>
      <a href='/' target='_blank' noreferrer>
        <Email />
      </a>
    </>
  );
};

export default Contact;
