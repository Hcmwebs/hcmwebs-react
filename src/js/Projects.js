import { GiFrenchFries } from 'react-icons/gi';
import { BsGrid3X2GapFill } from 'react-icons/bs';
const Projects = () => {
  return (
    <section className='projects'>
      <div>
        <a
          href='https://github.com/Hcmwebs/social-proof-section'
          target='_blank'
          noreferrer='https://github.com/'>
          <span>
            <BsGrid3X2GapFill color='rgba(224, 78, 62, 1)' />
          </span>
          Social Proof UI
        </a>
      </div>
      <div>
        <a href='https://github.com/Hcmwebs/memoryGame'>
          <span>
            <GiFrenchFries color='rgba(224, 78, 62, 1)' />
          </span>
          Memory game
        </a>
      </div>
    </section>
  );
};

export default Projects;
