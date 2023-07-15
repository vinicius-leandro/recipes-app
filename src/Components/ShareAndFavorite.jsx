import React, { useEffect, useState } from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import shareIcon from '../images/shareIcon.svg';
import emptyHeartIcon from '../images/emptyHeartIcon.svg';
import fullHeartIcon from '../images/fullHeartIcon.svg';
import { getLocalStorage, removeLocalStorage,
  saveLocalStorage } from '../Service/storage';

export default function ShareAndFavorite({ pathname, recipe }) {
  const [shareButtonClicked, setShareButtonClicked] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const favoriteButtonIcon = !isFavorite ? emptyHeartIcon : fullHeartIcon;

  useEffect(() => {
    const { id } = recipe;
    const favoriteRecipes = getLocalStorage('favoriteRecipes');
    favoriteRecipes.forEach((favoriteRecipe) => {
      if (favoriteRecipe.id === id) setIsFavorite(true);
    });
  }, [recipe]);

  const handleShareButton = () => {
    const TWO_SECONDS = 2000;
    copy(`recipes-app-vinicius-leandro.vercel.app${pathname}`);
    setShareButtonClicked(true);
    setTimeout(() => {
      setShareButtonClicked(false);
    }, TWO_SECONDS);
  };

  const handleFavoriteButton = () => {
    if (isFavorite) {
      removeLocalStorage('favoriteRecipes', recipe.id);
    } else {
      const currentFavoriteRecipes = getLocalStorage('favoriteRecipes');
      const newFavoriteRecipes = [...currentFavoriteRecipes, recipe];
      saveLocalStorage('favoriteRecipes', newFavoriteRecipes);
    }
    setIsFavorite((prevState) => !prevState);
  };

  return (
    <section>
      <section>
        <button type="button" onClick={ handleShareButton }>
          <img src={ shareIcon } alt="botão de compartilhar" />
        </button>
        <button type="button" onClick={ handleFavoriteButton }>
          <img src={ favoriteButtonIcon } alt="coração de favoritar" />
        </button>
      </section>
      {
        shareButtonClicked && (
          <span>Link Copied!</span>
        )
      }
    </section>
  );
}

ShareAndFavorite.propTypes = {
  pathname: PropTypes.string,
  recipe: PropTypes.shape({
    id: PropTypes.number,
    type: PropTypes.string,
    name: PropTypes.string,
    image: PropTypes.string,
    nationality: PropTypes.string,
    category: PropTypes.string,
    alcoholicOrNot: PropTypes.bool,
  }),
}.isRequired;
