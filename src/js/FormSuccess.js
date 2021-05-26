import React from 'react';
import { Link } from 'react-router-dom';
const FormSuccess = () => {
  return (
    <div className='successMessage'>
      <p>Thank you for contacting us. Your message has been sent.</p>
      <Link to='/' className='btn'>
        Home
      </Link>
    </div>
  );
};

export default FormSuccess;
