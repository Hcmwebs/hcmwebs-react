const Hamburger = ({ toggle, FaTimes, FaBars, isOpen }) => {
  return (
    <>
      <span
        className={(isOpen ? 'open' : '') + ' hamburger'}
        onClick={() => {
          toggle();
        }}>
        {isOpen ? <FaTimes color='rgba(255, 150, 94, 1)' /> : <FaBars />}
      </span>
    </>
  );
};

export default Hamburger;
