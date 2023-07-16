import React, { useEffect, useState, useContext } from 'react';
import { useMatches, useNavigate } from 'react-router-dom';
import RecipeHeader from '../Components/RecipeHeader';
import RecipeInstructionsAndVideo from '../Components/RecipeInstructionsAndVideo';
import RecipeIngredients from '../Components/RecipeIngredients';
import { getRecipeById } from '../Service/requests';
import { RecipesContext } from '../Context/RecipesContext';
import { getLocalStorage, saveLocalStorage } from '../Service/storage';

export default function RecipesInProgress() {
  const { buttonDisabled } = useContext(RecipesContext);
  const navigate = useNavigate();
  const match = useMatches();
  const [recipe, setRecipe] = useState({});
  const [showYtAndInstructions, setShowYtAndInstructions] = useState(false);
  const foodOrDrink = match[1].pathname.includes('food') ? {
    id: 'idMeal',
    category: 'strCategory',
    nationality: 'strArea',
    type: 'food',
    tags: 'strTags',
    name: 'strMeal',
    image: 'strMealThumb',
    alcoholicOrNot: false,
  } : {
    id: 'idDrink',
    category: 'strCategory',
    nationality: 'strArea',
    type: 'drink',
    tags: 'strTags',
    name: 'strDrink',
    image: 'strDrinkThumb',
    alcoholicOrNot: true,
  };

  const {
    id, category, nationality, type, name, tags, image, alcoholicOrNot,
  } = foodOrDrink;

  useEffect(() => {
    const getRecipe = async () => {
      if (match[1].pathname.includes('foods')) {
        const [result] = await getRecipeById('meals', match[1].params.id);
        JSON.stringify(result.strYoutube);
        setRecipe(result);
        setShowYtAndInstructions(true);
      } else {
        const [result] = await getRecipeById('drinks', match[1].params.id);
        setRecipe(result);
        setShowYtAndInstructions(false);
      }
    };

    getRecipe();
  }, [match]);

  console.log(recipe);

  const handleClick = () => {
    const payload = {
      id: recipe[id],
      type,
      tags: recipe[tags],
      nationality: recipe[nationality],
      category: recipe[category],
      alcoholicOrNot: recipe[alcoholicOrNot],
      name: recipe[name],
      image: recipe[image],
    };
    const doneRecipes = getLocalStorage('doneRecipes');
    const newDoneRecipes = [...doneRecipes, payload];
    saveLocalStorage('doneRecipes', newDoneRecipes);

    navigate('/done-recipes');
  };

  return (
    <section>
      <RecipeHeader recipe={ recipe } pathname={ match[1].pathname } />
      <RecipeIngredients
        recipe={ recipe }
        pathname={ match[1].pathname }
        id={ match[1].params.id }
      />
      {
        showYtAndInstructions && (
          <RecipeInstructionsAndVideo
            instructions={ recipe.strInstrucions }
            ytUrl={ recipe.strYoutube }
          />
        )
      }
      <section>
        <button
          type="button"
          onClick={ handleClick }
          disabled={ buttonDisabled }
        >
          Finish Recipe
        </button>
      </section>
    </section>
  );
}
