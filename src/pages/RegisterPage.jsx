/* eslint-disable no-unused-vars */
import React from 'react';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/api';
import { Link, useNavigate } from 'react-router-dom';
import translations from "../utils/locales";
import { LocaleConsumer } from "../contexts/LocaleContext";
 
function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }
 
  return (
    <LocaleConsumer>
      {({ locale }) => (
        <section className='register-page'>
          <RegisterInput register={onRegisterHandler} />
          <p>{translations[locale].didHave} <Link to="/">{translations[locale].login}</Link></p>
        </section>
      )}
    </LocaleConsumer>
  )
}
 
export default RegisterPage;