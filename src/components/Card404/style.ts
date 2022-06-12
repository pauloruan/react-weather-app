import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  background: var(--background-color-base);
  color: var(--text-color-base);

  img {
    padding: 4rem;
    border-radius: 5rem;
  }
`;

export default Container;
