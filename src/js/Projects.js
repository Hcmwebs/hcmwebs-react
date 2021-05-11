import { GiToyMallet, GiShoppingCart } from 'react-icons/gi';
import { BsGrid3X2GapFill, BsChatQuoteFill } from 'react-icons/bs';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { RiQuestionAnswerFill } from 'react-icons/ri';
import { FaGlobeAmericas } from 'react-icons/fa';
import Project from './Project';

const Projects = () => {
  return (
    <section className='projects'>
      <Project BsGrid3X2GapFill={BsGrid3X2GapFill} />

      <div className='projects__item'>
        <a href='https://webshop-ui-components.vercel.app/' target='_blank'>
          <span>
            <GiShoppingCart />
          </span>
          Webshop UI
        </a>
      </div>

      <div className='projects__item'>
        <a
          href='https://whackamole-5t4gkvwb2-hcmwebs.vercel.app/'
          target='_blank'>
          <span>
            <GiToyMallet />
          </span>
          Whack-a-Darth-Vader
        </a>
      </div>
      <div className='projects__item'>
        <a href='https://faq-accordion-card-react.vercel.app/' target='_blank'>
          <span>
            <RiQuestionAnswerFill />
          </span>
          Frequently Asked
        </a>
      </div>
      <div className='projects__item'>
        <a href='https://weather-app-jpdbx25om.vercel.app' target='_blank'>
          <span>
            <TiWeatherPartlySunny />
          </span>
          Weather app
        </a>
      </div>
      <div className='projects__item'>
        <a
          href='https://coding-bootcamp-testimonials-dun.vercel.app/'
          target='_blank'>
          <span>
            <BsChatQuoteFill />
          </span>
          Testimonials
        </a>
      </div>

      <div className='projects__item'>
        <a href='https://www.waikatohispano.org.nz/' target='_blank'>
          <span>
            <FaGlobeAmericas />
          </span>
          Waikato Hispano Latino
        </a>
      </div>
    </section>
  );
};

export default Projects;
