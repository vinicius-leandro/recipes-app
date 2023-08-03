import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getLocalStorage } from '../Service/storage';
import { RecipesContext } from '../Context/RecipesContext';
import allDoneAndFavoriteIcon from '../images/allDoneAndFavoriteIcon.svg';
import foodsDoneAndFavoriteIcon from '../images/foodsDoneAndFavoriteIcon.svg';
import drinksDoneAndFavoriteIcon from '../images/drinksDoneAndFavoriteIcon.svg';
import FiltersContainer from '../Styles/Components/DoneAndFavoriteFilters.styled';

export default function DoneAndFavoriteFilters() {
  const { pathname } = useLocation();
  const { setRecipes, changing } = useContext(RecipesContext);
  const [originalRecipes, setOriginalRecipes] = useState([]);
  const [doneOrFavorite, setDoneOrFavorite] = useState('');

  useEffect(() => {
    const path = pathname.includes('done') ? 'doneRecipes' : 'favoriteRecipes';
    const doneOrFavoriteRecipes = getLocalStorage(path);
    setRecipes(doneOrFavoriteRecipes);
    setDoneOrFavorite(path);
    setOriginalRecipes(doneOrFavoriteRecipes);
  }, [pathname, setRecipes, changing]);

  const handleFilters = (type) => {
    const foodorDrinkRecipes = originalRecipes.filter((recipe) => recipe.type === type);
    setRecipes(foodorDrinkRecipes);
  };

  const removeFilters = () => {
    const allRecipes = getLocalStorage(doneOrFavorite);
    setRecipes(allRecipes);
  };

  return (
    <FiltersContainer>
      <section>
        <button
          type="button"
          onClick={ removeFilters }
        >
          <img src={ allDoneAndFavoriteIcon } alt="botão all" />
        </button>
      </section>

      <section>
        <button
          type="button"
          onClick={ () => handleFilters('food') }
        >
          <img src={ foodsDoneAndFavoriteIcon } alt="botão foods" />
        </button>
      </section>

      <section>
        <button
          type="button"
          onClick={ () => handleFilters('drink') }
        >
          <img src={ drinksDoneAndFavoriteIcon } alt="botão drinks" />
        </button>
      </section>

    </FiltersContainer>
  );
}
