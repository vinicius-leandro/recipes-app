import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import appIcon from '../images/appIcon.svg';

export default function Icon() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeToGoToLogin = 3000;
    setTimeout(() => {
      navigate('/login');
    }, timeToGoToLogin);
  }, [navigate]);

  return (
    <div>
      <figure>
        <img src={ appIcon } alt="Icone do app" />
      </figure>
    </div>
  );
}
