import { GiShoppingCart } from 'react-icons/gi';
import { BsGrid3X2GapFill, BsChatQuoteFill } from 'react-icons/bs';
import { TiUser } from 'react-icons/ti';
import { RiQuestionAnswerFill } from 'react-icons/ri';
import { FaGlobeAmericas } from 'react-icons/fa';
import { VscPreview } from 'react-icons/vsc';
const Project = () => {
  return (
    <>
      <div className='projects__item'>
        <a
          href='https://social-proof-section-amber-eta.vercel.app/'
          target='_blank'
          rel='noreferrer'>
          <span>
            <BsGrid3X2GapFill />
          </span>
          Social Proof UI
        </a>
      </div>
      <div className='projects__item'>
        <a
          href='https://webshop-ui-components.vercel.app/'
          target='_blank'
          rel='noreferrer'>
          <span>
            <GiShoppingCart />
          </span>
          Webshop UI
        </a>
      </div>
      <div className='projects__item'>
        <a
          href='https://article-preview-component-l7qqqfk96.vercel.app/'
          target='_blank'
          rel='noreferrer'>
          <span>
            <VscPreview />
          </span>
          Article Preview
        </a>
      </div>
      <div className='projects__item'>
        <a
          href='https://faq-accordion-card-react.vercel.app/'
          target='_blank'
          rel='noreferrer'>
          <span>
            <RiQuestionAnswerFill />
          </span>
          Frequently Asked
        </a>
      </div>
      <div className='projects__item'>
        <a
          href='https://profile-card-component-ddqvuqlpq-hcmwebs.vercel.app/'
          target='_blank'
          rel='noreferrer'>
          <span>
            <TiUser />
          </span>
          Profile Card Component
        </a>
      </div>
      <div className='projects__item'>
        <a
          href='https://coding-bootcamp-testimonials-dun.vercel.app/'
          target='_blank'
          rel='noreferrer'>
          <span>
            <BsChatQuoteFill />
          </span>
          Testimonials
        </a>
      </div>

      <div className='projects__item'>
        <a
          href='https://www.waikatohispano.org.nz/'
          target='_blank'
          rel='noreferrer'>
          <span>
            <FaGlobeAmericas />
          </span>
          Waikato Hispano Latino
        </a>
      </div>
    </>
  );
};

export default Project;
