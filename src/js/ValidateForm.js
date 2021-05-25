export default function validate(values) {
  let errors = {};

  //Fullname
  if (!values.fullname.trim()) {
    errors.fullname = 'Fullname required';
  }

  //  validation  email
  if (!values.email.trim()) {
    errors.email = 'Oops! Please add your email';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Oops! Please check your email';
  }

  //comments
  if (!values.comments) {
    errors.comments = 'Comments required';
  }

  return errors;
}
