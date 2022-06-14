import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  
  button {
    width: 10%;
    height: 30%;
    border: none;
    cursor: pointer;
    border-radius: 0.5rem;
    font-size: larger;
    font-weight: bolder;
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.font};
    box-shadow: var(--box-shadow-base);
    transition: all 0.2s ease-in-out;
    &:hover {
      color: ${({ theme }) => theme.colors.font};
      background: ${({ theme }) => theme.colors.secondary};
    }
  }

  input {
    width: 50%;
    height: 30%;
    border: none;
    margin: 0.5rem;
    font-size: larger;
    font-weight: bolder;
    text-align: center;
    border-radius: 0.5rem;
    background: transparent;
    color: ${({ theme }) => theme.colors.font};
    box-shadow: var(--box-shadow-base);
    transition: all 0.3s ease-in-out;
    &::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
    text-align: center;
    font-size: large;
  }

}`;

export default Container;
