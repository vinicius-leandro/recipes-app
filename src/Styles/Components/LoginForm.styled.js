import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;

  input {
    margin-bottom: 1rem;
    padding: 0.8rem;
    border: 1px solid ${(props) => props.theme.colors.purple};
    border-radius: 8px;
    font-size: 14px;
    color: ${(props) => props.theme.colors.purple};


    &::placeholder {
      color: ${(props) => props.theme.colors.purple};
    }

    &:focus {
      outline-color: ${(props) => props.theme.colors.purple};
    }
  }

  button {
    padding: 0.9rem;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    background-color: ${(props) => props.theme.colors.yellow};
    color: white;
    font-weight: 700;
  }
`;

export default FormContainer;
