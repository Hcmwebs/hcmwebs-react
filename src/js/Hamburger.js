const Hamburger = ({ toggle, FaTimes, FaBars, isOpen }) => {
  return (
    <>
      <span
        className={(isOpen ? 'open' : '') + ' hamburger'}
        onClick={() => {
          toggle();
        }}>
        {isOpen ? <FaTimes color='rgba(224, 78, 62, 1)' /> : <FaBars />}
      </span>
    </>
  );
};

export default Hamburger;
