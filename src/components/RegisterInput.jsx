/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import useFormInput from '../hooks/useFormInput'; // Import the custom hook

function RegisterInput({ register }) {
  const name = useFormInput('');
  const email = useFormInput('');
  const password = useFormInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    register({
      name: name.value,
      email: email.value,
      password: password.value,
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className='register-input'>
      <input
        type="text"
        placeholder="Name"
        value={name.value}
        onChange={name.onChange}
      />
      <input
        type="email"
        placeholder="Email"
        value={email.value}
        onChange={email.onChange}
      />
      <input
        type="password"
        placeholder="Password"
        autoComplete="current-password"
        value={password.value}
        onChange={password.onChange}
      />
      <button type="submit">Daftar</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
