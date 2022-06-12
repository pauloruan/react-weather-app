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
  background: var(--primary-color-base);
  color: var(--text-color-base);
  padding: 0 1rem;
  text-align: center;
  font-weight: bolder;
  font-size: medium;
`;

export default Container;
