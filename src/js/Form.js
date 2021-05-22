import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comments, setComments] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
  };
  const handleCommentsChange = e => {
    setComments(e.target.value);
  };

  const handleSubmit = e => {
    alert(`${name} ${email} ${comments}`);
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit} action='' method='post'>
        <div className='formGroup'>
          <label htmlFor='fullname'>FullName:</label>
          <input
            type='text'
            placeholder='Fullname'
            value={name}
            onChange={handleNameChange}
          />
          <small>Error Message</small>
        </div>
        <div className='formGroup'>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            placeholder='xyz@xyz.com'
            value={email}
            onChange={handleEmailChange}
          />
          <small>Error Message</small>
        </div>
        <div className='formGroup'>
          <label htmlFor='comments'> Comments: </label>
          <textarea
            type='text'
            placeholder='Please write your message here'
            value={comments}
            onChange={handleCommentsChange}></textarea>
          <small>Error Message</small>
        </div>

        <button type='submit' className='btn'>
          Send
        </button>
      </form>
    </>
  );
};

export default Form;
