import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    comments: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const history = useHistory();

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = { values };
    setErrors(validate(values));
    setIsSubmitting(true);
    fetch('http://localhost:8000/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    }).then(() => {
      console.log('new form Added');
      setIsSubmitting(false);
      history.push('/');
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors, callback, isSubmitting]);

  return {
    handleChange,
    values,
    handleSubmit,
    errors,
    isSubmitting,
  };
};

export default useForm;
