import { useState, useEffect } from 'react';

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    fullname: '',
    email: '',
    comments: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState('');
  const handleIsSubmitting = () => {
    if (!isSubmitting) {
      return setIsSubmitting(false);
    } else {
      return setIsSubmitting(true);
    }
  };

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validate(values));
    handleIsSubmitting();
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  }, [errors]);

  return { handleChange, values, handleSubmit, errors, isSubmitting };
};

export default useForm;
