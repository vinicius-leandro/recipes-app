import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function RecipesCard({ foodOrDrink, recipeImage, recipeName, recipeId }) {
  return (
    <Link to={ `/${foodOrDrink}/${recipeId}` }>
      <section>
        <img src={ recipeImage } alt={ recipeName } />
        <p>{ recipeName }</p>
      </section>
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
