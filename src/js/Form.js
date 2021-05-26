import { useState } from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';

const Form = () => {
  const[isSubmitted,setIsSubmitted] = useState(false)
  const submitForm = ()=> {
    setIsSubmitted(true)
  }
  return (
    <>
      {!isSubmitted ? <FormSignUp submitForm={submitForm} /> : <FormSuccess />}
    </>
  );
};

export default Form;
