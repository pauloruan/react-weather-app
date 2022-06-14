import styled from 'styled-components';

const PageContainer = styled.body`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.font};
`;

export default PageContainer;
