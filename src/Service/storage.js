const checkLocalStorage = (...objectsToCheck) => {
  objectsToCheck.forEach((object) => {
    if (!JSON.parse(localStorage.getItem(object))) {
      localStorage.setItem(object, JSON.stringify({}));
    }
  });
};

const saveLocalStorage = (objectToSave, payload) => {
  localStorage.setItem(objectToSave, JSON.stringify(payload));
};

const getLocalStorage = (objectToGet) => JSON.parse(localStorage.getItem(objectToGet));

export {
  checkLocalStorage,
  saveLocalStorage,
  getLocalStorage,
};
