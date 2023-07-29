import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../Components/LoginForm';
import appLogo from '../images/appLogo.svg';
import salad from '../images/salad.svg';
import { authenticationToDkipLogin } from '../Service/utils';
import {
  LogoContainer, PageContainer, SaladContainer, LoginContainer,
} from '../Styles/Pages/Login.styled';

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    authenticationToDkipLogin(navigate);
  }, [navigate]);

  return (
    <PageContainer>
      <section>
        <LogoContainer>
          <img src={ appLogo } alt="logotipo do app" />
        </LogoContainer>
        <SaladContainer>
          <img src={ salad } alt="salada com alface e tomate" />
        </SaladContainer>
      </section>
      <LoginContainer>
        <h1>LOGIN</h1>
        <LoginForm />
      </LoginContainer>
    </PageContainer>
  );
}
