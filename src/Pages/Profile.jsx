import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { getLocalStorage, removeAllLocalStorage } from '../Service/storage';
import doneProfileIcon from '../images/doneProfileIcon.svg';
import favoriteProfileIcon from '../images/favoriteProfileIcon.svg';
import logoutProfileIcon from '../images/LogoutProfileIcon.svg';
import { checkAuthentication } from '../Service/utils';

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
      <section>
        <h2>{ email }</h2>
      </section>
      <section>
        <section>
          <button
            type="button"
            onClick={ () => navigate('/done-recipes') }
          >
            <img src={ doneProfileIcon } alt="botão done" />

          </button>
        </section>
        <section>
          <button
            type="button"
            onClick={ () => navigate('/favorite-recipes') }
          >
            <img src={ favoriteProfileIcon } alt="botão favorite" />

          </button>
        </section>
        <section>
          <button
            type="button"
            onClick={ handleLogout }
          >
            <img src={ logoutProfileIcon } alt="botão logout" />

          </button>
        </section>
      </section>
      <Footer />
    </section>
  );
}
