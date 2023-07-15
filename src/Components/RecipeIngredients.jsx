import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function RecipeIngredients({ recipe }) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    const getIngredients = () => {
      const ingredientArray = [];
      const MAX_INGREDIENTS = 15;
      for (let index = 1; index <= MAX_INGREDIENTS; index += 1) {
        if (recipe[`strIngredient${index}`] !== ''
        && recipe[`strIngredient${index}`] !== undefined
        && recipe[`strIngredient${index}`] !== null) {
          ingredientArray.push(
            `${recipe[`strIngredient${index}`]} - ${recipe[`strMeasure${index}`]}`,
          );
        }
      }

      setIngredients(ingredientArray);
    };

    getIngredients();
  }, [recipe]);
  return (
    <section>
      <h2>Ingredients</h2>
      <div>
        <ul>
          {
            ingredients.map((ingredient) => (
              <li key={ ingredient }>{ingredient}</li>
            ))
          }
        </ul>
      </div>
    </section>
  );
}

RecipeIngredients.propTypes = {
  recipe: PropTypes.object,
}.isRequired;
