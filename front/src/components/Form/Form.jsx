import React, { useState } from 'react';
import validation from '../../utils/validation'
import styles from "./Form.module.css";


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
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <form className={styles.container}>
        <label>EMAIL</label>
        <input
          placeholder='email'
          type='email'
          value={userData.email}
          name='email'
          onChange={handleChange}
          className={errors.email && styles.warning}
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

        <button className={styles.boton} type='submit' onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
