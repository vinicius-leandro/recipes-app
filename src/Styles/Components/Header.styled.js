import styled from 'styled-components';

const UpperHeaderContainer = styled.section`
  background-color: #FCDC36;
  display: flex;
  justify-content: space-between;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  width: 100vw;

  figure {
    display: flex;
    

    img {
      margin-right: 1.3rem;
    }
  }

  div {
    display: flex;

    button {
      border: none;
      background-color: inherit;
      margin-left: 1.3rem;
    }
  }
`;

const LowerHeaderContainer = styled.section`
  /* background-color: blue; */
  display: flex;
  justify-content: center;
  width: 100vw;

  div {
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: red; */

    img {
      margin-bottom: 0.7rem;
    }

    h1 {
      color: ${(props) => props.theme.colors.purple};
      font-weight: 900;
      font-size: 20px;
      letter-spacing: 2px;
    }
  }
`;

export {
  UpperHeaderContainer,
  LowerHeaderContainer,
};
