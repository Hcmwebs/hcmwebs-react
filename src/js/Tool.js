const Tool = ({ TiHtml5, TiCss3, SiJavascript, SiReact, Sass }) => {
  return (
    <div className='tool'>
      <span>
        <TiHtml5 />
      </span>
      <span>
        <TiCss3 />
      </span>
      <span>
        <SiJavascript />
      </span>
      <span>
        <SiReact />
      </span>
      <span>
        <Sass />
      </span>
    </div>
  );
};

export default Tool;
