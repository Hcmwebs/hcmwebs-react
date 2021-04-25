import Header from './js/Header';
import Nav from './js/Nav';
import Main from './js/Main';
import { IconContext } from 'react-icons';
function App() {
  return (
    <IconContext.Provider value={{ color: 'red', size: '2rem' }}>
      <div className='container'>
        <Nav />
        <Header />
        <Main />
      </div>
    </IconContext.Provider>
  );
}

export default App;
