import styled from 'styled-components';

const DoneAndFavoriteCard = styled.section`
  margin-bottom: 1rem;
  border: 1px solid #B1B1B1;
  border-radius: 6px;
  display: flex;

  a {
    width: 40%;
    text-decoration: none;
    color: black;
    display: flex;
  }

  figure {
    img {
      width: 100%;
      height: 100%;
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }
  }


  ${(props) => props.$isFavorite && `
    display: grid;
    grid-template-columns: 40% 60%;

    a {
      width: 100%;
      grid-row-start: 1;
      grid-row-end: 3;
    }
`}
`;

const CardInfoContainer = styled.section`
  width: 50%;
  padding: 1rem;

  div {
    height: 40%;
    a {
      width: 100%;
      h2 {
      font-size: 22px;
    }
    }
    

    p {
      color: #B1B1B1;
      font-weight: 300;
      font-size: 14px;
    }
  }

  section {
    height: 30%;
    width: auto;
    p {
      font-size: 15px;
    }

    span {
      width: fit-content;
      background-color: #D9D9D9;
      border-radius: 20px;
      padding: 0.3rem;
      color: #797D86;
      font-size: 13px;
    }
  }
  ${(props) => props.$isFavorite && `
    width: 100%;
  `}
`;

const ShareButtonContainer = styled.section`
  padding-top: 1rem;
  padding-right: 1rem;

  ${(props) => props.$isFavorite && `
    grid-column-start: 2;
    grid-column-end: 3;
    width: 35%;
    margin-left: 1rem;
  `}
`;

export {
  ShareButtonContainer,
  CardInfoContainer,
  DoneAndFavoriteCard,
};
