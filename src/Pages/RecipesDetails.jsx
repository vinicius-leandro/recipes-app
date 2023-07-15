import React, { useEffect, useState } from 'react';
import { useMatches } from 'react-router-dom';
import { getRecipeById } from '../Service/requests';
import ControlledCarousel from '../Components/ControlledCarousel';
import RecipesDetailsButton from '../Components/RecipesDetailsButton';
import ShareAndFavorite from '../Components/ShareAndFavorite';

export default function RecipesDetails() {
  const match = useMatches();
  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [showVideo, setShowVideo] = useState(false);
  const foodOrDrink = match[1].pathname.includes('food') ? {
    id: 'idMeal',
    type: 'food',
    name: 'strMeal',
    image: 'strMealThumb',
    mealsOrCocktails: 'meals',
    alcoholicOrNot: false,
  } : {
    id: 'idDrink',
    type: 'drink',
    name: 'strDrink',
    image: 'strDrinkThumb',
    mealsOrCocktails: 'cocktails',
    alcoholicOrNot: true,
  };
  const INITIAL_CODE_VIDEO = 33;
  const { id, type, name, image, mealsOrCocktails, alcoholicOrNot } = foodOrDrink;
  useEffect(() => {
    const getRecipe = async () => {
      if (match[1].pathname.includes('foods')) {
        const [result] = await getRecipeById('meals', match[1].params.id);
        JSON.stringify(result.strYoutube);
        setRecipe(result);
        setShowVideo(true);
      } else {
        const [result] = await getRecipeById('drinks', match[1].params.id);
        setRecipe(result);
        setShowVideo(true);
      }
    };

    getRecipe();
  }, [match]);
  useEffect(() => {
    const getIngredients = (obj) => {
      const ingredientArray = [];
      const MAX_INGREDIENTS = 15;
      for (let index = 1; index <= MAX_INGREDIENTS; index += 1) {
        if (obj[`strIngredient${index}`] !== ''
        && obj[`strIngredient${index}`] !== undefined) {
          ingredientArray.push(
            `${obj[`strIngredient${index}`]} - ${obj[`strMeasure${index}`]}`,
          );
        }
      }

      setIngredients(ingredientArray);
    };

    getIngredients(recipe);
  }, [recipe]);
  return (
    <section>
      <h1>{recipe[name]}</h1>
      <p>{recipe.strCategory}</p>
      <ShareAndFavorite
        pathname={ match[1].pathname }
        recipe={ {
          id: recipe[id],
          type,
          nationality: recipe.strArea,
          category: recipe.strCategory,
          alcoholicOrNot: recipe[alcoholicOrNot],
          name: recipe[name],
          image: recipe[image],
        } }
      />
      <figure>
        <img src={ recipe[image] } alt="" />
      </figure>
      <section>
        <h2>Ingredients</h2>
        <div>
          <ul>
            {
              ingredients.map((ingredient) => (
                <li key={ ingredient }>{ingredient}</li>
              ))
            }
          </ul>
        </div>
      </section>
      <section>
        <h2>Instructions</h2>
        <div>
          <p>{recipe.strInstructions}</p>
        </div>
      </section>
      <section>
        <h2>Video</h2>
        <div>
          {
            showVideo && (
              <iframe
                width="560"
                height="315"
                src={
                  `https://www.youtube-nocookie.com/embed/${JSON.stringify(recipe.strYoutube).slice(INITIAL_CODE_VIDEO, recipe.strYoutube.lastIndexOf(' '))}`
                }
                title="YouTube video player"
                allowFullScreen
              />
            )
          }
        </div>
      </section>
      <ControlledCarousel />
      <RecipesDetailsButton
        id={ match[1].params.id }
        mealsOrCocktails={ mealsOrCocktails }
      />
    </section>
  );
}
