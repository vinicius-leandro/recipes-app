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

export {
  checkLocalStorage,
  saveLocalStorage,
  getLocalStorage,
  checkInProgressRecipes,
};
