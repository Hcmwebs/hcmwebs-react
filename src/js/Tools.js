import { IconContext } from 'react-icons';
import { TiHtml5, TiCss3 } from 'react-icons/ti';
import { SiJavascript, SiReact } from 'react-icons/si';
import Tool from './Tool';

const Tools = tool => {
  const heading = 'Here are my tools of trade';
  return (
    <IconContext.Provider
      value={{
        color: ' rgba(224, 78, 62, 1)',
        size: '8rem'

      }}>
      <section className='tools'>
        <div className='tools__header'>
          <h4>{heading} </h4>
        </div>
        <div className='tools__body'>
          <Tool TiHtml5={TiHtml5} TiCss3={TiCss3} SiJavascript={SiJavascript} SiReact = {SiReact} />
        </div>
      </section>
    </IconContext.Provider>
  );
};

export default Tools;
