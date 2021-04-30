import Header from './js/Header';
import Nav from './js/Nav';
import Main from './js/Main';
import { IconContext } from 'react-icons';
const App = () => {
  return (
    <IconContext.Provider
      value={{
        color: ' rgba(198, 236, 234, 1)',
        size: '3rem',
      }}>
      <div className='container'>
        <Nav />
        <Header />
        <Main />
      </div>
    </IconContext.Provider>
  );
};

export default App;
