const About = () => {
  const profileImage =
    'https://res.cloudinary.com/duymkqhnm/image/upload/v1608460164/hcmwebs/hcmwebs/profiles/personal/IMG_3327_l9pp8q.jpg';
  return (
    <section className='about'>
      <div className='about__header'>
        <img src={profileImage} alt='profileImage' />
      </div>
      <div className='about__body'>
        <p>
          I am a full-time dad with a passion for coding. I am a self-taught
          front-end developer. I love designing and building user-friendly
          interfaces that offer a good user experience.
        </p>
        <button className='btn__primary'>Projects</button>
      </div>
    </section>
  );
};

export default About;
