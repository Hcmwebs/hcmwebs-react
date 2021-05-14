import { Link } from 'react-router-dom';
import { GiToyMallet, GiShoppingCart } from 'react-icons/gi';
import { BsGrid3X2GapFill, BsChatQuoteFill } from 'react-icons/bs';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { RiQuestionAnswerFill } from 'react-icons/ri';
import { FaGlobeAmericas } from 'react-icons/fa';
import Project from './Project';

const Projects = () => {
  return (
    <main className='main'>
      <section className='projects'>
        <Project BsGrid3X2GapFill={BsGrid3X2GapFill} />

        <div className='projects__item'>
          <Link
            to='https://webshop-ui-components.vercel.app/'
            target='_blank'
            noreferrer>
            <span>
              <GiShoppingCart />
            </span>
            Webshop UI
          </Link>
        </div>

        <div className='projects__item'>
          <Link
            to='https://whackamole-5t4gkvwb2-hcmwebs.vercel.app/'
            target='_blank'
            noreferrer>
            <span>
              <GiToyMallet />
            </span>
            Whack-a-Darth-Vader
          </Link>
        </div>
        <div className='projects__item'>
          <Link
            href='https://faq-accordion-card-react.vercel.app/'
            target='_blank'
            noreferrer>
            <span>
              <RiQuestionAnswerFill />
            </span>
            Frequently Asked
          </Link>
        </div>
        <div className='projects__item'>
          <Link
            to='https://weather-app-jpdbx25om.vercel.app'
            target='_blank'
            noreferrer>
            <span>
              <TiWeatherPartlySunny />
            </span>
            Weather app
          </Link>
        </div>
        <div className='projects__item'>
          <Link
            to='https://coding-bootcamp-testimonials-dun.vercel.app/'
            target='_blank'
            noreferrer>
            <span>
              <BsChatQuoteFill />
            </span>
            Testimonials
          </Link>
        </div>

        <div className='projects__item'>
          <Link
            to='https://www.waikatohispano.org.nz/'
            target='_blank'
            noreferrer>
            <span>
              <FaGlobeAmericas />
            </span>
            Waikato Hispano Latino
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Projects;
