import Contact from './Contact';

const Contacts = ({ FaGithubSquare, FaTwitterSquare, FaEnvelopeSquare }) => {
  return (
    <div className = 'footer__links'>
      <a href='https://'>
        <FaGithubSquare />
      </a>
      <a href='https://'>
        <FaTwitterSquare />
      </a>
      <a href='https://'>
        <FaEnvelopeSquare />
      </a>
    </div>
  );
};

export default Contacts;
