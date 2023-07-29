import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import trayWithClocheAndHeart from '../images/trayWithClocheAndHeart.svg';
import recipesAppLetter from '../images/recipesAppLetter.svg';
import searchIcon from '../images/searchIcon.svg';
import profileIcon from '../images/profileIcon.svg';
import dishIcon from '../images/dishIcon.svg';
import cupIcon from '../images/cupIcon.svg';
import yellowProfileIcon from '../images/yellowProfileIcon.svg';
import doneRecipesIcon from '../images/doneRecipesIcon.svg';
import favoriteRecipesIcon from '../images/favoriteRecipesIcon.svg';
import SearchBar from './SearchBar';
import {
  UpperHeaderContainer, LowerHeaderContainer,
} from '../Styles/Components/Header.styled';

export default function Header() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isSearchIconClicked, setIsSearchIconClicked] = useState(false);
  const [hasSearchButton, setHasSearchButton] = useState();
  const [pageIcon, setPageIcon] = useState();
  const [title, setTitle] = useState();

  const handlePathNames = (titlePage, search, icon) => {
    setTitle(titlePage);
    setHasSearchButton(search);
    setPageIcon(icon);
  };

  useEffect(() => {
    if (pathname !== '/foods') {
      const pathnames = {
        '/drinks': () => { handlePathNames('DRINKS', true, cupIcon); },
        '/profile': () => { handlePathNames('PROFILE', false, yellowProfileIcon); },
        '/done-recipes': () => {
          handlePathNames('DONE RECIPES', false, doneRecipesIcon);
        },
        '/favorite-recipes': () => {
          handlePathNames('FAVORITES', false, favoriteRecipesIcon);
        },
      };
      pathnames[pathname]();
    } else {
      handlePathNames('MEALS', true, dishIcon);
    }
  }, [pathname]);

  return (
    <header>
      <UpperHeaderContainer>
        <Link to="/foods">
          <figure>
            <img src={ trayWithClocheAndHeart } alt="Bandeja de restaurante" />
            <img src={ recipesAppLetter } alt="Escrito recipes app" />
          </figure>
        </Link>
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
      </UpperHeaderContainer>
      <LowerHeaderContainer>
        <div>
          <img src={ pageIcon } alt="icone de prato com garfo e faca" />
          <h1 data-testid="page-title">{ title }</h1>
        </div>
      </LowerHeaderContainer>
      {
        isSearchIconClicked && <SearchBar />
      }
    </header>
  );
}
