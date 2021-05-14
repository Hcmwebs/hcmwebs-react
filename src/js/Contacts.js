import Contact from './Contact';

const Contacts = ({ Github, Twitter, Email }) => {
  return (
    <div className='footer__links'>
      <Contact Github={Github} />
      <Contact Twitter={Twitter} />
      <Contact Email={Email} />
    </div>
  );
};

export default Contacts;
