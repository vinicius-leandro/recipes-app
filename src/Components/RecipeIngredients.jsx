import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import {
  getLocalStorage, saveLocalStorage, saveOrRemoveInProgress,
} from '../Service/storage';
import { RecipesContext } from '../Context/RecipesContext';
import getIngredients from '../Service/utils';

export default function RecipeIngredients({ recipe, pathname, id }) {
  const { setButtonDisabled } = useContext(RecipesContext);
  const [ingredients, setIngredients] = useState([]);
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const IN_PROGRESS = 'in-progress';
  const detailsOrInProgress = !pathname.includes(IN_PROGRESS)
    ? 'details' : IN_PROGRESS;

  const mealsOrCocktails = pathname.includes('food') ? 'meals' : 'cocktails';
  const obj = {
    mealsOrCocktails, id, setCheckedIngredients,
  };

  useEffect(() => {
    if (pathname.includes(IN_PROGRESS)) {
      const inProgress = getLocalStorage('inProgressRecipes');
      if (!inProgress[mealsOrCocktails][id]) {
        inProgress[mealsOrCocktails] = { [id]: [] };
        saveLocalStorage('inProgressRecipes', inProgress);
      }
      setCheckedIngredients(inProgress[mealsOrCocktails][id]);
    }
  }, [id, mealsOrCocktails, pathname]);

  useEffect(() => {
    const ingredientArray = getIngredients(recipe);
    setIngredients(ingredientArray);
  }, [recipe]);

  useEffect(() => {
    if (ingredients.length > 0
      && ingredients.length === checkedIngredients.length) setButtonDisabled(false);
    else setButtonDisabled(true);
  }, [checkedIngredients, ingredients, setButtonDisabled]);

  return (
    <section>
      <h2>Ingredients</h2>
      {
        detailsOrInProgress === 'details' ? (
          <div>
            <ul>
              {
                ingredients.map((ingredient) => (
                  <li key={ ingredient }>{ingredient}</li>
                ))
              }
            </ul>
          </div>
        ) : (
          <div>
            {
              ingredients.map((ingredient) => (
                <div key={ ingredient }>
                  <label htmlFor={ ingredient }>
                    <input
                      type="checkbox"
                      name={ ingredient }
                      id={ ingredient }
                      value={ ingredient }
                      checked={ checkedIngredients.some((i) => ingredient === i) }
                      onChange={
                        ({ target: { value } }) => saveOrRemoveInProgress(value, obj)
                      }
                    />
                    {ingredient}
                  </label>
                </div>
              ))
            }
          </div>
        )
      }
    </section>
  );
}

RecipeIngredients.propTypes = {
  id: PropTypes.number,
  pathname: PropTypes.string,
  recipe: PropTypes.object,
}.isRequired;
