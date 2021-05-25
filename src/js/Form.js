import { useState } from 'react';
import FormSignUp from './FormSignUp';
import FormSuccess from './FormSuccess';

const Form = () => {

  const [user, setUser] = useState({
    fullname: '',
    email: '',
    comments: '',
  });
  const signUp = details => {
    console.log(details);
  };

  const signOut = () => {
    console.log('thank you for being in touch');
  };

  // const [isSubmitted, setIsSubmitted] = useState(false);
  // const submitForm = () => {
  //   setIsSubmitted(true);
  // };

  return (
    <>
    {(user.email !== '') ?
    <FormSuccess /> : <FormSignUp signUp= {signUp} error={error} />}

    {/* {!isSubmitted ? <FormFillUp submitForm={submitForm} /> : <FormSuccess />} */}

    </>
  );
};

export default Form;
