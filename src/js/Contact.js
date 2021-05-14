import { Link } from 'react-router-dom';

const Contact = ({ Github, Twitter, Email }) => {
  return (
    <>
      <Link to='https://github.com/Hcmwebs' target='_blank' noreferrer>
        {<Github />}
      </Link>
      <Link to='https://twitter.com/hcmwebs' target='_blank' noreferrer>
        {<Twitter />}
      </Link>
    </>
  );
};

export default Contact;
