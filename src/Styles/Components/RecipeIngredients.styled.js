import styled from 'styled-components';

const IngredientsContainer = styled.section`
  margin: 2.5rem 0.5rem;
  h2 {
    font-weight: 700;
    font-size: 25px;
    margin-left: 0.7rem;
  }

  section {
    margin-top: 0.5rem;
    border: 1px solid #b1b1b1;
    border-radius: 7px;
    padding: 1rem 0.7rem 0.4rem 0.7rem;
  }
`;

const IngredientsList = styled.section`
  ul{
    list-style-position: inside;

    li {
      margin-bottom: 0.6rem;


      @media screen and (-webkit-min-device-pixel-ratio:0)
        and (min-resolution:.001dpcm) {
          span{
            margin-left: -0.6rem;
          } 
        }
    }
  }
`;

const IngredientsCheckbox = styled.div`
  margin-bottom: 0.6rem;

  input {
    background-color: green;
    margin-right: 0.5rem;
    accent-color: ${(props) => props.theme.colors.yellow};
  }
`;

export {
  IngredientsList,
  IngredientsCheckbox,
  IngredientsContainer,
};
