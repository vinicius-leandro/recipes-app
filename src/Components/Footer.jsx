import React from 'react';
import { Link } from 'react-router-dom';
import cupIcon from '../images/cupIcon.svg';
import dishIcon from '../images/dishIcon.svg';
import FooterContainer from '../Styles/Components/Footer.styled';

export default function Footer() {
  return (
    <FooterContainer>
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
    </FooterContainer>
  );
}
