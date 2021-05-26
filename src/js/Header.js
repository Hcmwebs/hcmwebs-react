import { Data} from './Data';
const Header = () => {

  return (
    <>
      {Data.map((item, key) => {
        return (
          <header className='header'>
            <div className='heroText'>
              <h1 key={1}>
                {item.title} <span key={item.id}>{item.name}</span>
              </h1>
              <p>I build great and awesome websites</p>
              <p>Your next best friend!</p>
            </div>
          </header>
        );})}
    </>
  );
};

export default Header;
