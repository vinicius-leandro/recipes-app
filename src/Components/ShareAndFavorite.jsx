import React, { useEffect, useState, useContext } from 'react';
import copy from 'clipboard-copy';
import PropTypes from 'prop-types';
import { propTypes } from 'react-bootstrap/esm/Image';
import { RecipesContext } from '../Context/RecipesContext';
import shareIcon from '../images/shareIcon.svg';
import emptyHeartIcon from '../images/emptyHeartIcon.svg';
import fullHeartIcon from '../images/fullHeartIcon.svg';
import { getLocalStorage, removeLocalStorage,
  saveLocalStorage } from '../Service/storage';
import {
  ButtonsContainer, MessageLinkCopied,
} from '../Styles/Components/ShareAndFavorite.styled';

function ShareAndFavorite({ pathname, recipe, showFavoriteButton = true, url }) {
  const { setChanging } = useContext(RecipesContext);
  const [isFavorite, setIsFavorite] = useState(false);
  const [shareButtonClicked, setShareButtonClicked] = useState(false);
  const favoriteButtonIcon = !isFavorite ? emptyHeartIcon : fullHeartIcon;

  useEffect(() => {
    const { id } = recipe;
    const favoriteRecipes = getLocalStorage('favoriteRecipes');
    favoriteRecipes.forEach((favoriteRecipe) => {
      if (favoriteRecipe.id === id) setIsFavorite(true);
    });
  }, [recipe, setIsFavorite]);

  const handleShareButton = () => {
    const TWO_SECONDS = 2000;
    copy(`https://recipes-app-vinicius-leandro.vercel.app${pathname}`);
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
    setChanging((prevState) => !prevState);
  };

  return (
    <ButtonsContainer $shareButtonClicked={ shareButtonClicked } $url={ url }>
      <section>
        <button type="button" onClick={ handleShareButton }>
          <img src={ shareIcon } alt="botão de compartilhar" />
        </button>
        {
          showFavoriteButton && (
            <button type="button" onClick={ handleFavoriteButton }>
              <img src={ favoriteButtonIcon } alt="coração de favoritar" />
            </button>
          )
        }
      </section>
      {
        shareButtonClicked && (
          <MessageLinkCopied $url={ url }>
            <span>Link Copied!</span>
          </MessageLinkCopied>
        )
      }
    </ButtonsContainer>
  );
}

ShareAndFavorite.propTypes = {
  showFavoriteButton: propTypes.bool,
  pathname: PropTypes.string,
  url: PropTypes.string,
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

export default ShareAndFavorite;
