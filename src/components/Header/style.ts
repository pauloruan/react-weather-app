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

`;

export default Container;
