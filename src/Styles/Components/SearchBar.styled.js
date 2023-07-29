import styled from 'styled-components';

const FormContainer = styled.form`
  background-color: ${(props) => props.theme.colors.purple};
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  border-radius: 10px 5px;
`;

const InputText = styled.input`
  width: 100%;
  border: 1px solid #B1B1B1;
  border-radius: 5px;
  padding: 0.5rem;
  font-weight: 300;
  font-size: 14px;
`;

const InputRadioContainer = styled.section`
  width: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  margin: auto;

  label {
    display: flex;
    font-size: 13px;
    color: white;

    input {
      margin-right: 0.3rem;
      accent-color: ${(props) => props.theme.colors.yellow};

    }
  }
`;

const ButtonContainer = styled.section`
  width: 70%;
  margin: auto;
  padding-bottom: 0.4rem;
  display: flex;
  justify-content: center;

  button {
    background-color: ${(props) => props.theme.colors.yellow};
    width: 100%;
    padding: 0.4rem;
    border: none;
    border-radius: 5px;
    color: white;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 1px;
  }
`;

export {
  InputText,
  FormContainer,
  ButtonContainer,
  InputRadioContainer,
};
