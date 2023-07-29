import styled from 'styled-components';

const EmailContainer = styled.section`
  margin-top: 2rem;
  margin-bottom: 4rem;
  text-align: center;

  h2 {
    font-size: 18px;
    font-weight: 700;
  }
`;

const ButtonsConstainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  section {
    margin-bottom: 1rem;
    button {
      background-color: inherit;
      width: 80vw;
      padding-bottom: 1rem;
    }
  }
`;

const BorderBottom = styled.button`
  border: none;
  border-bottom: 1px solid #B1B1B1;
`;

const WithoutBottom = styled.button`
  border: none;
`;

export {
  BorderBottom,
  WithoutBottom,
  EmailContainer,
  ButtonsConstainer,
};
