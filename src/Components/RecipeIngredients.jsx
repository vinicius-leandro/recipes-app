import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { getLocalStorage, saveLocalStorage } from '../Service/storage';
import { RecipesContext } from '../Context/RecipesContext';

export default function RecipeIngredients({ recipe, pathname, id }) {
  const { setButtonDisabled } = useContext(RecipesContext);
  const [ingredients, setIngredients] = useState([]);
  const [checkedIngredients, setCheckedIngredients] = useState([]);
  const IN_PROGRESS = 'in-progress';

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

  useEffect(() => {
    if (ingredients.length > 0
      && ingredients.length === checkedIngredients.length) setButtonDisabled(false);
    else setButtonDisabled(true);
  }, [checkedIngredients, ingredients, setButtonDisabled]);

  const handleChange = async (value) => {
    const currentInProgress = await getLocalStorage('inProgressRecipes');
    if (currentInProgress[mealsOrCocktails][id].includes(value)) {
      currentInProgress[mealsOrCocktails][id].forEach((ingredient, index) => {
        if (ingredient === value) {
          currentInProgress[mealsOrCocktails][id].splice(index, 1);
          setCheckedIngredients(currentInProgress[mealsOrCocktails][id]);
        }
      });
    } else {
      currentInProgress[mealsOrCocktails][id].push(value);
      setCheckedIngredients(currentInProgress[mealsOrCocktails][id]);
    }
    saveLocalStorage('inProgressRecipes', currentInProgress);
  };

  const detailsOrInProgress = !pathname.includes(IN_PROGRESS)
    ? 'details' : IN_PROGRESS;

  const mealsOrCocktails = pathname.includes('food') ? 'meals' : 'cocktails';

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
                      onChange={ ({ target: { value } }) => handleChange(value) }
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
