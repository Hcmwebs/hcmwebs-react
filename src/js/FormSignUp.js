import useForm from './useForm';
import { useState } from 'react';
import validate from './ValidateForm';

const FormSignUp = ({ signUp, error }) => {
  const [details, setDetails] = useState({ name: '', email: '', comments: '' });

  const handleSubmit = e => {
    e.preventDefault();
    signUp(details);
  };

  // const { handleChange, values, handleSubmit, errors, isSubmitting } = useForm(
  //   submitForm,
  //   validate
  // );

  return (
    <>
      <form className='form' action='' method='post' onSubmit={handleSubmit}>
        <div className='formGroup'>
          <label htmlFor='fullname'>FullName: </label>
          <input
            id='fullname'
            type='text'
            name='fullname'
            placeholder='Fullname'
            value={details.fullname}
            onChange={e => setDetails({ ...details, name: e.target.value })}
          />
          {/* {errors.fullname && <small>{errors.fullname}</small>} */}
        </div>
        <div className='formGroup'>
          <label htmlFor='email'>Email: </label>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='xyz@xyz.com'
            value={details.email}
            onChange={e => setDetails({ ...details, email: e.target.value })}
          />
          />
          {/* {errors.email && <small>{errors.email}</small>} */}
        </div>
        <div className='formGroup'>
          <label htmlFor='comments'> Comments: </label>
          <textarea
            id='comments'
            type='text'
            name='comments'
            placeholder='Please write your message here'
            value={details.comments}
            onChange={e => setDetails({ ...details, comments: e.target.value })}
          />{'Please write your message here'}</textarea>
          {/* {errors.comments && <small>{errors.comments}</small>} */}
        </div>

        <button type='submit' className='btn'>
          Send
        </button>
      </form>
    </>
  );
};

export default FormSignUp;
