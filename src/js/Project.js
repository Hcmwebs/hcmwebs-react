import { Link } from 'react-router-dom';

const Project = ({ BsGrid3X2GapFill }) => {
  return (
    <div className='projects__item'>
      <a
        href='https://social-proof-section-amber-eta.vercel.app/'
        target='_blank'
        noreferrer>
        <span>
          <BsGrid3X2GapFill />
        </span>
        Social Proof UI
      </a>
    </div>
  );
};

export default Project;
