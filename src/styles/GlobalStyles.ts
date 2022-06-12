import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color-base: #007ee5;
    --secondary-color-base: #7b8994;
    --background-color-base: #f2f2f4;
    --card-color-base: #c0c0c8;
    --text-color-base: #222;
    --font-base: 'Nunito', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-base);
  }
`;

export default GlobalStyles;
