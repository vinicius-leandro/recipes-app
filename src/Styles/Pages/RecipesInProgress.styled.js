import styled from 'styled-components';

const ButtonContainer = styled.section`
  margin: 0.8rem 0.5rem;

  button {
    padding: 0.9rem;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    background-color: ${(props) => props.theme.colors.yellow};
    color: white;
    font-weight: 700;
    letter-spacing: 2px;
    width: 100%;
  }
`;

export default ButtonContainer;
