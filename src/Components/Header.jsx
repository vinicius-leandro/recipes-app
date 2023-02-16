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
  const [hasProfileButton, setHasProfileButton] = useState(true);
  const [title, setTitle] = useState('Foods');

  const handlePathNames = (titlePage, search, profile) => {
    setTitle(titlePage);
    setHasSearchButton(search);
    setHasProfileButton(profile);
  };

  useEffect(() => {
    const pathnames = {
      '/login': () => { handlePathNames('Login', true, false); },
      '/drinks': () => { handlePathNames('Drinks', true, true); },
      '/profile': () => { handlePathNames('Profile', false, true); },
      '/done-recipes': () => { handlePathNames('Done Recipes', false, true); },
      '/favorite-recipes': () => { handlePathNames('Favorite Recipes', false, true); },
    };
    pathnames[pathname]();
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
          {
            hasProfileButton && (
              <button type="button" onClick={ () => navigate('/profile') }>
                <img
                  src={ profileIcon }
                  alt="icone de perfil"
                  data-testid="profile-top-btn"
                />
              </button>
            )
          }
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
