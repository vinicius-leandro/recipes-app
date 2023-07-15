import React from 'react';
import PropTypes from 'prop-types';
import ShareAndFavorite from './ShareAndFavorite';

export default function RecipeHeader({ recipe, pathname }) {
  const foodOrDrink = pathname.includes('food') ? {
    id: 'idMeal',
    type: 'food',
    name: 'strMeal',
    image: 'strMealThumb',
    alcoholicOrNot: false,
  } : {
    id: 'idDrink',
    type: 'drink',
    name: 'strDrink',
    image: 'strDrinkThumb',
    alcoholicOrNot: true,
  };

  const { id, type, name, image, alcoholicOrNot } = foodOrDrink;

  return (
    <section>
      <h1>{recipe[name]}</h1>
      <p>{recipe.strCategory}</p>
      <ShareAndFavorite
        pathname={ pathname }
        recipe={ {
          id: recipe[id],
          type,
          nationality: recipe.strArea,
          category: recipe.strCategory,
          alcoholicOrNot: recipe[alcoholicOrNot],
          name: recipe[name],
          image: recipe[image],
        } }
      />
      <figure>
        <img src={ recipe[image] } alt="" />
      </figure>
    </section>
  );
}

RecipeHeader.propTypes = {
  pathname: PropTypes.string,
  recipe: PropTypes.object,
}.isRequired;
