import React from 'react';
import LoginForm from '../Components/LoginForm';
import appLogo from '../images/appLogo.svg';
import salad from '../images/salad.svg';

export default function Login() {
  return (
    <>
      <section>
        <figure>
          <img src={ appLogo } alt="logotipo do app" />
        </figure>
        <figure>
          <img src={ salad } alt="salada com alface e tomate" />
        </figure>
      </section>
      <section>
        <LoginForm />
      </section>
    </>
  );
}
