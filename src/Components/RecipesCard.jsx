import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import RecipesCardStyled from '../Styles/Components/RecipesCard.styled';

export default function RecipesCard({ foodOrDrink, recipeImage, recipeName, recipeId }) {
  return (
    <Link to={ `/${foodOrDrink}/${recipeId}` }>
      <RecipesCardStyled>
        <img src={ recipeImage } alt={ recipeName } />
        <p>{ recipeName }</p>
      </RecipesCardStyled>
    </Link>

  );
}

RecipesCard.propTypes = {
  index: PropTypes.number,
  foodOrDrink: PropTypes.string,
  recipeImage: PropTypes.string,
  recipeName: PropTypes.string,
  recipeId: PropTypes.string,
}.isRequired;
