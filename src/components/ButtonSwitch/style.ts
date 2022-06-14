import styled from 'styled-components';

const ButtonContainer = styled.button`
  width: 100%;
  height: 100%;
  border: none;
  background: none;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 0.5rem;
  font-size: 2rem;
  font-weight: bolder;
  color: ${({ theme }) => theme.colors.secondary};
  transition: all 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.colors.font};
    }

    &:active, &:focus, &:visited {
      text-decoration: none;
    }
`;

export default ButtonContainer;
