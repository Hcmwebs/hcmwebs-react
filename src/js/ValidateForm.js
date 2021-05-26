export default function validate(values) {
  let errors = {};

  //Fullname
  if (!values.fullname.trim()) {
    errors.fullname = 'Fullname required';
  }

  //  validation  email
  if (!values.email.trim()) {
    errors.email = 'Oops! Please add your email';
  } else if (values.email && !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      values.email
    )
  ) {
    errors.email = 'Oops! Please check your email';
  }

  //comments
  if (!values.comments) {
    errors.comments = 'Comments required';
  }

  return errors;
}
