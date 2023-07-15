import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { checkInProgressRecipes,
  checkLocalStorage, saveLocalStorage } from '../Service/storage';

export default function LoginForm() {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [loginFormData, setLoginFormData] = useState({ email: '', password: '' });

  useEffect(() => {
    const validEmail = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g);
    const MIN_PASSWORD_LENGTH = 6;
    const { email, password } = loginFormData;
    if (validEmail.test(email) && password.length > MIN_PASSWORD_LENGTH) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [loginFormData]);

  const handleChange = ({ target: { name, value } }) => {
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleClick = () => {
    const { email } = loginFormData;

    checkLocalStorage('user', 'mealsToken', 'cocktailsToken',
      'doneRecipes', 'favoriteRecipes');

    checkInProgressRecipes();
    saveLocalStorage('user', { email });
    saveLocalStorage('mealsToken', 1);
    saveLocalStorage('cocktailsToken', 1);
    navigate('/foods');
  };

  return (
    <form>
      <input
        type="text"
        name="email"
        placeholder="Email"
        data-testid="email-input"
        onChange={ handleChange }
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        data-testid="password-input"
        onChange={ handleChange }
      />
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ isDisabled }
        onClick={ handleClick }
      >
        ENTER
      </button>
    </form>
  );
}
