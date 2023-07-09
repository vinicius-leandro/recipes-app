import React from 'react';
import { Link } from 'react-router-dom';
import cupIcon from '../images/cupIcon.svg';
import dishIcon from '../images/dishIcon.svg';

export default function Footer() {
  return (
    <footer data-testid="footer">
      <Link to="/drinks">
        <figure>
          <img src={ cupIcon } alt="icone de copo de drink" />
        </figure>
      </Link>
      <Link to="/foods">
        <figure>
          <img src={ dishIcon } alt="icone de prato com garfo e faca" />
        </figure>
      </Link>
    </footer>
  );
}
