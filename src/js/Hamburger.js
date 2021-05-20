const Hamburger = ({ FaTimes, FaBars, isOpen, handleClick }) => {
  return (
    <>
      <span
        className={(isOpen ? 'open' : '') + ' hamburger'}
        onClick={handleClick}>
        {isOpen ? <FaTimes color='rgba(224, 78, 62, 1)' /> : <FaBars />}
      </span>
    </>
  );
};

export default Hamburger;
