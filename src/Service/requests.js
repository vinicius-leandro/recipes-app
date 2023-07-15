import axios from 'axios';

const SEARCH_URL = 'search.php?';
const FILTER_URL = 'filter.php?';
const LOOKUP_URL = 'lookup.php?';

const foodOrDrink = {
  meals: axios.create({
    baseURL: 'https://www.themealdb.com/api/json/v1/1/',
  }),

  drinks: axios.create({
    baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/',
  }),
};

export const getRecipesByIngredients = async (choice, ingredient) => {
  const { data } = await foodOrDrink[choice].get(`${FILTER_URL}i=${ingredient}`);
  return data;
};

export const getRecipesByName = async (choice, name) => {
  const { data } = await foodOrDrink[choice].get(`${SEARCH_URL}s=${name}`);
  return data;
};

export const getRecipesByFirstLetter = async (choice, firstLetter) => {
  const { data } = await foodOrDrink[choice].get(`${SEARCH_URL}f=${firstLetter}`);
  return data;
};

export const getGenericRecipes = async (choice) => {
  const { data } = await foodOrDrink[choice].get(`${SEARCH_URL}s=`);
  return data[choice];
};

export const getFilteredRecipes = async (choice, filter) => {
  const { data } = await foodOrDrink[choice].get(`${FILTER_URL}c=${filter}`);
  return data[choice];
};

export const getRecipeById = async (choice, id) => {
  const { data } = await foodOrDrink[choice].get(`${LOOKUP_URL}i=${id}`);
  return data[choice];
};
