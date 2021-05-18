const Contact = ({ Github, Twitter, Email }) => {
  return (
    <>
      <a href='https://github.com/Hcmwebs' target='_blank' rel='noreferrer'>
        <Github />
      </a>
      <a href='https://twitter.com/hcmwebs' target='_blank' rel='noreferrer'>
        <Twitter />
      </a>
      <a href='/' target='_blank' rel='noreferrer'>
        <Email />
      </a>
    </>
  );
};

export default Contact;
