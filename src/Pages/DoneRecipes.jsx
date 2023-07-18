import React, { useContext } from 'react';
import Header from '../Components/Header';
import { RecipesContext } from '../Context/RecipesContext';
import DoneAndFavoriteFilters from '../Components/DoneAndFavoriteFilters';
import DoneAndFavoriteCards from '../Components/DoneAndFavoriteCards';

export default function DoneRecipes() {
  const { recipes } = useContext(RecipesContext);
  return (
    <section>
      <Header />
      <DoneAndFavoriteFilters />
      {
        recipes.map((doneRecipe, index) => (
          <DoneAndFavoriteCards
            key={ index }
            page="done recipes"
            recipe={ doneRecipe }
          />
        ))
      }
    </section>
  );
}
