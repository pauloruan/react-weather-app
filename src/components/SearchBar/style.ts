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
    background: var(--text-color-base);
    color: var(--background-color-base);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
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
    color: var(--text-color-base);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    &::placeholder {
    color: var(--text-color-base);
    text-align: center;
    font-size: large;
  }

}`;

export default Container;
