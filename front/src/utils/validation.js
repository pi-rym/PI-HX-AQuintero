const validation = (inputs) => {
  const errors = {};

  const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const regexNumber = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;

  const regexpassword = /^(?=\w*\d)\S{6,10}$/;

  if (!regexEmail.test(inputs.email)) {
    errors.email = 'Debe ser un email';
  }

  if (!inputs.email) {
    errors.email = 'El email no puede ser vacio';
  }

  if (inputs.email.length > 35) {
    errors.email = 'Debe tener menos de 35 caracteres';
  }

  if (!regexNumber.test(inputs.password)) {
    errors.password = 'La contraseña debe tener un numero';
  }

  if (!regexpassword.test(inputs.password)) {
    errors.password = 'Debe tener entre 6 y 10 caracteres';
  }

  if (!/\d/.test(inputs.password)) {
    errors.password = 'Debe tener un numero'
  }

  return errors;
};

//errors= {email: 'Debe tener menos de 35 caracteres',
//password: 'Debe tener entre 6 y 10 caracteres'}

export default validation;

//mail@mail.com
