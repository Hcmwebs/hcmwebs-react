import { GiToyMallet, GiShoppingCart } from 'react-icons/gi';
import { BsGrid3X2GapFill, BsChatQuoteFill } from 'react-icons/bs';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { RiQuestionAnswerFill } from 'react-icons/ri';
import { FaGlobeAmericas } from 'react-icons/fa';
const Project = () => {
  return (
    <>
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
      <div className='projects__item'>
        <a
          href='https://webshop-ui-components.vercel.app/'
          target='_blank'
          noreferrer>
          <span>
            <GiShoppingCart />
          </span>
          Webshop UI
        </a>
      </div>
      <div className='projects__item'>
        <a
          href='https://whackamole-5t4gkvwb2-hcmwebs.vercel.app/'
          target='_blank'
          noreferrer>
          <span>
            <GiToyMallet />
          </span>
          Whack-a-Darth-Vader
        </a>
      </div>
      <div className='projects__item'>
        <a
          href='https://faq-accordion-card-react.vercel.app/'
          target='_blank'
          noreferrer>
          <span>
            <RiQuestionAnswerFill />
          </span>
          Frequently Asked
        </a>
      </div>
      <div className='projects__item'>
        <a
          href='https://weather-app-jpdbx25om.vercel.app'
          target='_blank'
          noreferrer>
          <span>
            <TiWeatherPartlySunny />
          </span>
          Weather app
        </a>
      </div>
      <div className='projects__item'>
        <a
          href='https://coding-bootcamp-testimonials-dun.vercel.app/'
          target='_blank'
          noreferrer>
          <span>
            <BsChatQuoteFill/>
          </span>
          Testimonials
        </a>
      </div>

      <div className='projects__item'>
        <a href='https://www.waikatohispano.org.nz/' target='_blank' noreferrer>
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
