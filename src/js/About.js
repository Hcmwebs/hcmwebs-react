import { Link } from 'react-router-dom';
const About = () => {
  const profileImage =
    'https://res.cloudinary.com/duymkqhnm/image/upload/v1608460164/hcmwebs/hcmwebs/profiles/personal/IMG_3327_l9pp8q.jpg';
  return (
    <main className='main'>
      <section className='about'>
        <div className='about__header'>
          <img src={profileImage} alt='profileImage' />
        </div>
        <div className='about__body'>
          <p>
            I am a self-taught front-end developer and designer. I am a
            full-time dad with a passion for coding. I love designing and
            developing user-friendly interfaces that offer a good user
            experience. I am your next best friend. Check out some of my many
            project.
          </p>
          <Link to='/projects'>Projects</Link>
        </div>
      </section>
    </main>
  );
};

export default About;
