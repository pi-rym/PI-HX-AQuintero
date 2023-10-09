import React, { useState } from 'react';
import validation from '../utils/validation';

function Form({ login }) {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div>
      <form>
        <label>EMAIL</label>
        <input
          placeholder='email'
          type='email'
          value={userData.email}
          name='email'
          onChange={handleChange}
        />
        <p>{errors.email}</p>

        <label>PASSWORD</label>
        <input
          placeholder='password'
          type='password'
          value={userData.password}
          name='password'
          onChange={handleChange}
        />
        <p>{errors.password}</p>

        <button type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
