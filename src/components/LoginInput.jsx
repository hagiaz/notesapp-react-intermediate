/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import useFormInput from '../hooks/useFormInput'; // Import the custom hook

function LoginInput({ login }) {
  const email = useFormInput('');
  const password = useFormInput('');

  const onSubmitHandler = (event) => {
    event.preventDefault();
    login({
      email: email.value,
      password: password.value,
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className='login-input'>
      <input
        type="email"
        placeholder='Email'
        value={email.value}
        onChange={email.onChange}
      />
      <input
        type="password"
        placeholder='Password'
        value={password.value}
        onChange={password.onChange}
      />
      <button type="submit">Masuk</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
