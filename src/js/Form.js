import { useState } from 'react';
import FormFillUp from './FormFillUp';
import FormSuccess from './FormSuccess';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const submitForm = () => {
    setIsSubmitted(true);
  };

  return (
    <>
      {!isSubmitted ? <FormFillUp submitForm={submitForm} /> : <FormSuccess />}
    </>
  );
};

export default Form;
