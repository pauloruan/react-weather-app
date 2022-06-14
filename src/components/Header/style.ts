import styled from 'styled-components';

const Container = styled.header`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.primary};
  padding: 0 1rem;
  
  h1 {
    color: ${({ theme }) => theme.colors.secondary};
  }

  nav {
    width: 36%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    align-content: center;
    align-self: center;
  }

  a {
    color: ${({ theme }) => theme.colors.secondary};
    text-decoration: none;
    font-size: 1.2rem;;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.font};
    }
    &:active, &:focus, &:visited {
      text-decoration: none;
    }
  }
`;

export default Container;
