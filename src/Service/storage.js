const checkLocalStorage = (...keysToCheck) => {
  keysToCheck.forEach((key) => {
    const arrayOrObject = key === 'doneRecipes' || key === 'favoriteRecipes' ? [] : {};
    if (!JSON.parse(localStorage.getItem(key))) {
      localStorage.setItem(key, JSON.stringify(arrayOrObject));
    }
  });
};

const checkInProgressRecipes = () => {
  const inProgressRecipes = {
    meals: {},
    cocktails: {},
  };

  if (!JSON.parse(localStorage.getItem('inProgressRecipes'))) {
    localStorage.setItem('inProgressRecipes', JSON.stringify(inProgressRecipes));
  }
};

const saveLocalStorage = (objectToSave, payload) => {
  localStorage.setItem(objectToSave, JSON.stringify(payload));
};

const getLocalStorage = (objectToGet) => JSON.parse(localStorage.getItem(objectToGet));

const removeLocalStorage = (objectToRemove, id) => {
  const localStorageItem = getLocalStorage(objectToRemove);
  saveLocalStorage(objectToRemove, localStorageItem.filter((item) => item.id !== id));
};

const saveOrRemoveInProgress = async (value, obj) => {
  const { mealsOrCocktails, id, setCheckedIngredients } = obj;
  const currentInProgress = await getLocalStorage('inProgressRecipes');
  if (currentInProgress[mealsOrCocktails][id].includes(value)) {
    currentInProgress[mealsOrCocktails][id].forEach((ingredient, index) => {
      if (ingredient === value) {
        currentInProgress[mealsOrCocktails][id].splice(index, 1);
        setCheckedIngredients(currentInProgress[mealsOrCocktails][id]);
      }
    });
  } else {
    currentInProgress[mealsOrCocktails][id].push(value);
    setCheckedIngredients(currentInProgress[mealsOrCocktails][id]);
  }
  saveLocalStorage('inProgressRecipes', currentInProgress);
};

export {
  checkLocalStorage,
  saveLocalStorage,
  getLocalStorage,
  checkInProgressRecipes,
  removeLocalStorage,
  saveOrRemoveInProgress,
};
