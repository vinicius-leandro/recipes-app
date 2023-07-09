import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import { RecipesContext } from '../Context/RecipesContext';
import RecipesCard from '../Components/RecipesCard';
import Footer from '../Components/Footer';

export default function Recipes() {
  const { recipes } = useContext(RecipesContext);
  const { pathname } = useLocation();
  const recipeImage = pathname.includes('food') ? 'strMealThumb' : 'strDrinkThumb';
  const recipeName = pathname.includes('food') ? 'strMeal' : 'strDrink';
  const LIMIT = 12;
  return (
    <>
      <Header />
      {
        recipes.length !== 0 && (
          <section>
            {
              recipes.slice(0, LIMIT).map((recipe, index) => (
                <RecipesCard
                  key={ index }
                  index={ index }
                  recipeImage={ recipe[recipeImage] }
                  recipeName={ recipe[recipeName] }
                />
              ))
            }
          </section>
        )
      }
      <Footer />
    </>
  );
}
