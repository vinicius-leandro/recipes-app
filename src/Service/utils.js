const getIngredients = (recipe) => {
  const ingredientArray = [];
  const MAX_INGREDIENTS = 15;
  for (let index = 1; index <= MAX_INGREDIENTS; index += 1) {
    if (recipe[`strIngredient${index}`] !== ''
    && recipe[`strIngredient${index}`] !== undefined
    && recipe[`strIngredient${index}`] !== null) {
      ingredientArray.push(
        `${recipe[`strIngredient${index}`]} - ${recipe[`strMeasure${index}`]}`,
      );
    }
  }
  return ingredientArray;
};

const authenticationToDkipLogin = (callback) => {
  if (JSON.parse(localStorage.getItem('user'))) {
    callback('/foods');
  }
};

const checkAuthentication = (callback) => {
  if (!JSON.parse(localStorage.getItem('user'))) {
    callback('/');
  }
};

export { getIngredients, authenticationToDkipLogin, checkAuthentication };
