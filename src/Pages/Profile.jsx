import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { getLocalStorage, removeAllLocalStorage } from '../Service/storage';
import doneProfileIcon from '../images/doneProfileIcon.svg';
import favoriteProfileIcon from '../images/favoriteProfileIcon.svg';
import logoutProfileIcon from '../images/LogoutProfileIcon.svg';
import { checkAuthentication } from '../Service/utils';
import {
  EmailContainer, ButtonsConstainer, BorderBottom, WithoutBottom,
} from '../Styles/Pages/Profile.styled';

export default function Profile() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const { email: userEmail } = getLocalStorage('user');
    setEmail(userEmail);
  }, []);

  const handleLogout = () => {
    removeAllLocalStorage();
    navigate('/login');
  };

  useEffect(() => {
    checkAuthentication(navigate);
  }, [navigate]);

  return (
    <section>
      <Header />
      <EmailContainer>
        <h2>{ email }</h2>
      </EmailContainer>
      <ButtonsConstainer>
        <section>
          <BorderBottom
            type="button"
            onClick={ () => navigate('/done-recipes') }
          >
            <img src={ doneProfileIcon } alt="botão done" />

          </BorderBottom>
        </section>
        <section>
          <BorderBottom
            type="button"
            onClick={ () => navigate('/favorite-recipes') }
          >
            <img src={ favoriteProfileIcon } alt="botão favorite" />

          </BorderBottom>
        </section>
        <section>
          <WithoutBottom
            type="button"
            onClick={ handleLogout }
          >
            <img src={ logoutProfileIcon } alt="botão logout" />

          </WithoutBottom>
        </section>
      </ButtonsConstainer>
      <Footer />
    </section>
  );
}
