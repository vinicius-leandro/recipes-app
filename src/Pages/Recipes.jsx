import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import { RecipesContext } from '../Context/RecipesContext';
import RecipesCard from '../Components/RecipesCard';
import Footer from '../Components/Footer';
import { getGenericRecipes } from '../Service/requests';
import RecipesFilters from '../Components/RecipesFilters';

export default function Recipes() {
  const { recipes, setRecipes, filteredRecipes, hasFilter } = useContext(RecipesContext);
  const { pathname } = useLocation();
  const recipeImage = pathname.includes('food') ? 'strMealThumb' : 'strDrinkThumb';
  const recipeName = pathname.includes('food') ? 'strMeal' : 'strDrink';
  const recipesOnDisplay = !hasFilter ? recipes : filteredRecipes;
  const LIMIT = 12;

  useEffect(() => {
    const getRecipes = async () => {
      if (pathname.includes('food')) {
        const foods = await getGenericRecipes('meals');
        setRecipes(foods);
      } else {
        const drinks = await getGenericRecipes('drinks');
        setRecipes(drinks);
      }
    };

    getRecipes();
  }, [pathname, setRecipes]);

  return (
    <>
      <Header />
      <RecipesFilters />
      <section>
        {
          recipesOnDisplay.slice(0, LIMIT).map((recipe, index) => (
            <RecipesCard
              key={ index }
              index={ index }
              recipeImage={ recipe[recipeImage] }
              recipeName={ recipe[recipeName] }
            />
          ))
        }
      </section>
      <Footer />
    </>
  );
}
