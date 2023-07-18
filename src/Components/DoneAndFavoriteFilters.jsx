import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getLocalStorage } from '../Service/storage';
import { RecipesContext } from '../Context/RecipesContext';

export default function DoneAndFavoriteFilters() {
  const { pathname } = useLocation();
  const { setRecipes } = useContext(RecipesContext);
  const [originalRecipes, setOriginalRecipes] = useState([]);
  const [doneOrFavorite, setDoneOrFavorite] = useState('');

  useEffect(() => {
    const path = pathname.includes('done') ? 'doneRecipes' : 'favoriteRecipes';
    const doneOrFavoriteRecipes = getLocalStorage(path);
    setRecipes(doneOrFavoriteRecipes);
    setDoneOrFavorite(path);
    setOriginalRecipes(doneOrFavoriteRecipes);
  }, [pathname, setRecipes, doneOrFavorite]);

  const handleFilters = (type) => {
    const foodorDrinkRecipes = originalRecipes.filter((recipe) => recipe.type === type);
    setRecipes(foodorDrinkRecipes);
  };

  const removeFilters = () => {
    const allRecipes = getLocalStorage(doneOrFavorite);
    setRecipes(allRecipes);
  };

  return (
    <section>
      <section>
        <button
          type="button"
          onClick={ removeFilters }
        >
          All
        </button>
      </section>

      <section>
        <button
          type="button"
          onClick={ () => handleFilters('food') }
        >
          Food
        </button>
      </section>

      <section>
        <button
          type="button"
          onClick={ () => handleFilters('drink') }
        >
          Drinks
        </button>
      </section>

    </section>
  );
}
