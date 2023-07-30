import React, { useContext, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Components/Header';
import { RecipesContext } from '../Context/RecipesContext';
import RecipesCard from '../Components/RecipesCard';
import Footer from '../Components/Footer';
import { getGenericRecipes } from '../Service/requests';
import RecipesFilters from '../Components/RecipesFilters';
import { checkAuthentication } from '../Service/utils';
import RecipesCardContainer from '../Styles/Pages/Recipes.styled';

export default function Recipes() {
  const { recipes, setRecipes, filteredRecipes, hasFilter } = useContext(RecipesContext);
  const { pathname } = useLocation();
  const recipeImage = pathname.includes('food') ? 'strMealThumb' : 'strDrinkThumb';
  const recipeName = pathname.includes('food') ? 'strMeal' : 'strDrink';
  const recipeId = pathname.includes('food') ? 'idMeal' : 'idDrink';
  const foodOrDrink = pathname.includes('food') ? 'foods' : 'drinks';
  const recipesOnDisplay = !hasFilter ? recipes : filteredRecipes;
  const LIMIT = 12;
  const navigate = useNavigate();

  useEffect(() => {
    checkAuthentication(navigate);
  }, [navigate]);

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
      <RecipesCardContainer>
        {
          recipesOnDisplay.slice(0, LIMIT).map((recipe, index) => (
            <RecipesCard
              key={ index }
              foodOrDrink={ foodOrDrink }
              recipeImage={ recipe[recipeImage] }
              recipeName={ recipe[recipeName] }
              recipeId={ recipe[recipeId] }
            />
          ))
        }
      </RecipesCardContainer>
      <Footer />
    </>
  );
}
