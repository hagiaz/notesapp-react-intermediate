/* eslint-disable no-unused-vars */
import React from 'react';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/api';
import { Link, useNavigate } from 'react-router-dom';
 
function RegisterPage() {
  const navigate = useNavigate();

  async function onRegisterHandler(user) {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  }
 
  return (
    <section className='register-page'>
      <RegisterInput register={onRegisterHandler} />
      <p>Sudah mempunyai akun? <Link to="/">Masuk</Link></p>
    </section>
  )
}
 
export default RegisterPage;