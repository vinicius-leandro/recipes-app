import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import { RecipesContext } from '../Context/RecipesContext';
import DoneAndFavoriteFilters from '../Components/DoneAndFavoriteFilters';
import DoneAndFavoriteCards from '../Components/DoneAndFavoriteCards';
import { checkAuthentication } from '../Service/utils';
import DoneAndFavoriteCardContainer from '../Styles/Pages/DoneAndFavorite';

export default function FavoriteRecipes() {
  const { recipes } = useContext(RecipesContext);
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthentication(navigate);
  }, [navigate]);

  return (
    <section>
      <Header />
      <DoneAndFavoriteFilters />
      <DoneAndFavoriteCardContainer>
        {
          recipes.map((doneRecipe, index) => (
            <DoneAndFavoriteCards
              key={ index }
              page="favorite recipes"
              recipe={ doneRecipe }
            />
          ))
        }
      </DoneAndFavoriteCardContainer>
    </section>
  );
}
