import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import trayWithClocheAndHeart from '../images/trayWithClocheAndHeart.svg';
import recipesAppLetter from '../images/recipesAppLetter.svg';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import dishIcon from '../images/dishIcon.svg';

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isSearchIconClicked, setIsSearchIconClicked] = useState(false);
  const [hasSearchButton, setHasSearchButton] = useState(true);
  const [title, setTitle] = useState('Foods');

  const handlePathNames = (titlePage, search) => {
    setTitle(titlePage);
    setHasSearchButton(search);
  };

  useEffect(() => {
    if (pathname !== '/foods') {
      const pathnames = {
        '/drinks': () => { handlePathNames('Drinks', true); },
        '/profile': () => { handlePathNames('Profile', false); },
        '/done-recipes': () => { handlePathNames('Done Recipes', false); },
        '/favorite-recipes': () => { handlePathNames('Favorite Recipes', false); },
      };
      pathnames[pathname]();
    }
  }, [pathname]);

  return (
    <header>
      <section>
        <div>
          <figure>
            <img src={ trayWithClocheAndHeart } alt="Bandeija de restaurante e coração" />
          </figure>
          <figure>
            <img src={ recipesAppLetter } alt="Escrito recipes app" />
          </figure>
        </div>
        <div>
          {
            hasSearchButton && (
              <button
                type="button"
                onClick={ () => setIsSearchIconClicked((prevState) => !prevState) }
              >
                <img
                  src={ searchIcon }
                  alt="icone de lupa"
                  data-testid="search-top-btn"
                />
              </button>
            )
          }
          <button type="button" onClick={ () => navigate('/profile') }>
            <img
              src={ profileIcon }
              alt="icone de perfil"
              data-testid="profile-top-btn"
            />
          </button>
        </div>
      </section>
      <section>
        <div>
          <img src={ dishIcon } alt="icone de prato com garfo e faca" />
          <h1 data-testid="page-title">{ title }</h1>
        </div>
      </section>
      {
        isSearchIconClicked && (
          <section>
            <input type="text" data-testid="search-input" />
          </section>
        )
      }
    </header>
  );
}
