import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../Service/storage';

export default function RecipesDetailsButton({ id, mealsOrCocktails }) {
  const [alreadyDone, setAlreadyDone] = useState(false);
  const [buttonText, setButtonText] = useState('Start Recipe');
  const navigate = useNavigate();
  useEffect(() => {
    const doneRecipes = getLocalStorage('doneRecipes');
    doneRecipes.forEach((recipe) => {
      if (recipe.id === id) setAlreadyDone(true);
    });

    const inProgressRecipes = getLocalStorage('inProgressRecipes');
    const inProgressKeys = Object.keys(inProgressRecipes[mealsOrCocktails]);
    inProgressKeys.forEach((recipe) => {
      if (recipe === id) setButtonText('Continue Recipe');
    });
  }, [id, mealsOrCocktails]);
  return (
    <section>
      {
        !alreadyDone && (
          <button
            type="button"
            onClick={ () => navigate('in-progress') }
          >
            { buttonText }
          </button>
        )
      }
    </section>
  );
}

RecipesDetailsButton.propTypes = {
  id: PropTypes.number,
  mealsOrCocktails: PropTypes.string,
}.isRequired;
