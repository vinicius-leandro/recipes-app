import React from 'react';
import PropTypes from 'prop-types';

export default function RecipesCard({ index, recipeImage, recipeName }) {
  return (
    <section data-testid={ `${index}-recipe-card` }>
      <img src={ recipeImage } alt={ recipeName } data-testid={ `${index}-card-img` } />
      <p data-testid={ `${index}-card-name` }>{ recipeName }</p>
    </section>
  );
}

RecipesCard.propTypes = {
  index: PropTypes.number,
  recipeImage: PropTypes.string,
  recipeName: PropTypes.string,
}.isRequired;
