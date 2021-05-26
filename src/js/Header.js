import { Data} from './Data';
const Header = () => {

  return (
    <>
      {Data.map((item, key) => {
        return (
        <header className='header'>
          <div className='heroText'>
            <h1>{item.title} <span data>{item.name}</span></h1>
            <p>I build great and awesome websites </p>
            <p>
              UI/UX Designer <span> & </span> Developer{' '}
            </p>
            <p>{}</p>
          </div>
        </header>
      )})}
    </>
  );
};

export default Header;
