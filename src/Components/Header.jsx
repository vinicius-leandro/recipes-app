import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import trayWithClocheAndHeart from '../images/trayWithClocheAndHeart.svg';
import recipesAppLetter from '../images/recipesAppLetter.svg';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import dishIcon from '../images/dishIcon.svg';
import cupIcon from '../images/cupIcon.svg';
import yellowProfileIcon from '../images/yellowProfileIcon.svg';
import doneRecipesIcon from '../images/doneRecipesIcon.svg';
import favoriteRecipesIcon from '../images/favoriteRecipesIcon.svg';

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isSearchIconClicked, setIsSearchIconClicked] = useState(false);
  const [hasSearchButton, setHasSearchButton] = useState(true);
  const [pageIcon, setPageIcon] = useState(dishIcon);
  const [title, setTitle] = useState('Foods');

  const handlePathNames = (titlePage, search, icon) => {
    setTitle(titlePage);
    setHasSearchButton(search);
    setPageIcon(icon);
  };

  useEffect(() => {
    if (pathname !== '/foods') {
      const pathnames = {
        '/drinks': () => { handlePathNames('Drinks', true, cupIcon); },
        '/profile': () => { handlePathNames('Profile', false, yellowProfileIcon); },
        '/done-recipes': () => {
          handlePathNames('Done Recipes', false, doneRecipesIcon);
        },
        '/favorite-recipes': () => {
          handlePathNames('Favorite Recipes', false, favoriteRecipesIcon);
        },
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
          <img src={ pageIcon } alt="icone de prato com garfo e faca" />
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
