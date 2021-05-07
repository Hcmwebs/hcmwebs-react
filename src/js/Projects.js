import { GiFrenchFries, GiToyMallet, GiShoppingCart } from 'react-icons/gi';
import { BsGrid3X2GapFill, BsChatQuoteFill } from 'react-icons/bs';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { RiQuestionAnswerFill } from 'react-icons/ri';

const Projects = () => {
  return (
    <section className='projects'>
      <div classname='projects__item'>
        <a
          href='https://social-proof-section-amber-eta.vercel.app/'
          target='_blank'
          noreferrer='https://github.com/'>
          <span>
            <BsGrid3X2GapFill color='rgba(224, 78, 62, 1)' />
          </span>
          Social Proof UI
        </a>
      </div>
      <div classname='projects__item'>
        <a href='https://webshop-ui-components.vercel.app/' target='_blank'>
          <span>
            <GiShoppingCart color='rgba(224, 78, 62, 1)' />
          </span>
          Webshop UI
        </a>
      </div>

      <div classname='projects__item'>
        <a
          href='https://whackamole-5t4gkvwb2-hcmwebs.vercel.app/'
          target='_blank'>
          <span>
            <GiToyMallet color='rgba(224, 78, 62, 1)' />
          </span>
          Whack-a-Darth-Vader
        </a>
      </div>
      <div classname='projects__item'>
        <a href='https://faq-accordion-card-react.vercel.app/' target='_blank'>
          <span>
            <RiQuestionAnswerFill color='rgba(224, 78, 62, 1)' />
          </span>
          Frequently Asked
        </a>
      </div>
      <div classname='projects__item'>
        <a href='https://weather-app-jpdbx25om.vercel.app' target='_blank'>
          <span>
            <TiWeatherPartlySunny color='rgba(224, 78, 62, 1)' />
          </span>
          Weather app
        </a>
      </div>
      <div classname='projects__item'>
        <a
          href='https://coding-bootcamp-testimonials-dun.vercel.app/'
          target='_blank'>
          <span>
            <BsChatQuoteFill color='rgba(224, 78, 62, 1)' />
          </span>
          Testimonials
        </a>
      </div>
    </section>
  );
};

export default Projects;
