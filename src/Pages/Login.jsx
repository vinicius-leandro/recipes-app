import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../Components/LoginForm';
import appLogo from '../images/appLogo.svg';
import salad from '../images/salad.svg';
import { authenticationToDkipLogin } from '../Service/utils';

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    authenticationToDkipLogin(navigate);
  }, [navigate]);

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
