import styled from 'styled-components';

const ButtonsContainer = styled.section`
  section {
    display: flex;
    justify-content: space-between;
    width: 3.5rem;

    ${(props) => props.$shareButtonClicked && `
      width: fit-content;
    `}

    ${(props) => props.$url.includes('done') && `
      width: fit-content;
    `}

    ${(props) => props.$url.includes('favorite') && `
      width: fit-content;
    `}
  }

  button{
    background-color: inherit;
    border: none;

    ${(props) => props.$url.includes('favorite') && `
      margin-right: 1rem; 
    `}
  }
`;

const MessageLinkCopied = styled.section`
  background-color: ${(props) => props.theme.colors.yellow};
  display: block;
  position: absolute;
  right: 2rem;
  border-radius: 5px;
  text-align: center;

  ${(props) => props.$url.includes('favorite') && `
      left: 6rem;
    `}

  span {
    padding: 0.5rem;
    color: ${(props) => props.theme.colors.purple};
    font-weight: 500;
  }
`;

export {
  MessageLinkCopied,
  ButtonsContainer,
};
