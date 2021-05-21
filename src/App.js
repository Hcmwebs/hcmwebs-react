import { IconContext } from 'react-icons';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './js/Header';
import Nav from './js/Nav';
import About from './js/About';
import Projects from './js/Projects';
import Tools from './js/Tools';
import Contact from './js/Contact';
import Footer from './js/Footer';
const App = () => {
  return (
    <Router>
      <IconContext.Provider
        value={{
          color: ' rgba(255,255, 255, 1)',
          size: '3rem',
        }}>
        <div className='container'>
          <Nav />
          <Switch>
            <Route exact path='/'>
              <Header />
            </Route>
            <Route exact path='/About'>
              <About />
            </Route>
            <Route exact path='/Projects'>
              <Projects />
            </Route>
            <Route exact path='/Tools'>
              <Tools />
            </Route>
            <Route exact path='/Contact'>
              <Contact />
            </Route>
            <Route exact path='/Results'>
              <Contact />
            </Route>
          </Switch>
          <Footer />
        </div>
      </IconContext.Provider>
    </Router>
  );
};

export default App;
