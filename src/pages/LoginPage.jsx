/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { login } from '../utils/api';
import translations from "../utils/locales";
import { LocaleConsumer } from "../contexts/LocaleContext";
 
function LoginPage({ loginSuccess }) {
  async function onLogin({ email, password }) {
    const { error, data } = await login({ email, password });
 
    if (!error) {
      loginSuccess(data);
    }
  }
 
  return (
    <LocaleConsumer>
      {({ locale }) => (
        <section className='login-page'>
          <h2>{translations[locale].login}</h2>
          <LoginInput login={onLogin} />
          <p>{translations[locale].didNotHave} <Link to="/register">{translations[locale].register}</Link></p>
        </section>
      )}
    </LocaleConsumer>
  );
}
 
LoginPage.propTypes = {
  loginSuccess: PropTypes.func.isRequired,
}
 
export default LoginPage;