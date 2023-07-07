import React, { createContext, useMemo, useState } from 'react';
import PropTypes from 'prop-types';

export const RecipesContext = createContext([]);

export function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const value = useMemo(
    () => ({
      recipes,
      setRecipes,
    }),
    [recipes, setRecipes],
  );

  return (
    <RecipesContext.Provider value={ value }>
      {children}
    </RecipesContext.Provider>
  );
}

RecipesProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
