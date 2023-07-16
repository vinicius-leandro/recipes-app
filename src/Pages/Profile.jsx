import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { getLocalStorage, removeAllLocalStorage } from '../Service/storage';

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
            Done Recipes

          </button>
        </section>
        <section>
          <button
            type="button"
            onClick={ () => navigate('/favorite-recipes') }
          >
            Favorite Recipes

          </button>
        </section>
        <section>
          <button
            type="button"
            onClick={ handleLogout }
          >
            Logout

          </button>
        </section>
      </section>
      <Footer />
    </section>
  );
}
