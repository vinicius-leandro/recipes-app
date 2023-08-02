import React from 'react';
import PropTypes from 'prop-types';
import ShareAndFavorite from './ShareAndFavorite';
import HeaderContainer from '../Styles/Components/RecipeHeader.styled';

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
    alcoholicOrNot: 'strAlcoholic',
  };

  const { id, type, name, image, alcoholicOrNot } = foodOrDrink;

  return (
    <HeaderContainer $backgroundimage={ recipe[image] }>
      <div>
        <p>{recipe.strCategory}</p>
        <section>
          <ShareAndFavorite
            pathname={ pathname }
            url={ pathname }
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
        </section>
        <h1>{recipe[name]}</h1>
      </div>
    </HeaderContainer>
  );
}

RecipeHeader.propTypes = {
  pathname: PropTypes.string,
  recipe: PropTypes.object,
}.isRequired;
