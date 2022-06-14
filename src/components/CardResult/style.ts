import styled from 'styled-components';

const Container = styled.div`
  width: 60%;
  height: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.font};
  padding: 0 1rem;
  box-shadow: var(--box-shadow-base);
`;

export default Container;
