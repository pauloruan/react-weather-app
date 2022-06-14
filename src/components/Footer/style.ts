import styled from 'styled-components';

const Container = styled.footer`
  width: 100%;
  height: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 0;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.font};
  padding: 0 1rem;
  text-align: center;
  font-weight: bolder;
  font-size: medium;
`;

export default Container;
