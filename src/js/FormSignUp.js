import useForm from './useForm';
import validate from './ValidateForm';

const FormSignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div
          className={
            (values.fullname !== '' ? 'success' : 'error') + ' formGroup'
          }>
          <label htmlFor='fullname'>FullName: </label>
          <input
            id='fullname'
            type='text'
            name='fullname'
            placeholder='Fullname'
            value={values.fullname}
            onChange={handleChange}
          />
          {errors.fullname && <small>{errors.fullname}</small>}
        </div>
        <div
          className={
            (values.email !== '' && errors.email === '' ? 'success' : 'error') +
            ' formGroup'
          }>
          <label htmlFor='email'>Email: </label>
          <input
            id='email'
            type='email'
            name='email'
            placeholder='xyz@xyz.com'
            value={values.email}
            onChange={handleChange}
          />

          {errors.email && <small>{errors.email}</small>}
        </div>

        <div
          className={
            (values.comments !== '' ? 'success' : 'error') + ' formGroup'
          }>
          <label htmlFor='comments'> Comments: </label>
          <textarea
            id='comments'
            type='text'
            name='comments'
            placeholder='Please write your message here'
            value={values.comments}
            onChange={handleChange}></textarea>
          {errors.comments !== '' ? <small>{errors.comments}</small> : ''}
        </div>

        <button
          type='submit'
          className={(errors === '' ? 'success' : 'error') + ' btn'}>
          Send
        </button>
      </form>
    </>
  );
};

export default FormSignUp;
