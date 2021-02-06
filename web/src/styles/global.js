import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #FF385C;
    --primary-dark: #DC1E41;
    --secondary: #B8B8B8;
    --secondary-dark: #9E9E9E;
    --border: #DDDDDD;
    --border-dark: #484848;
  }

  * {
    box-sizing: border-box;
    outline: none;
  }

  body {
    margin: 0;
    font-family: 'Nunito Sans';
    font-weight: 400;
    text-rendering: optimizeLegibility;
    color: var(--title);
  }

  input, button {
    font-family: 'Nunito Sans';
  }
`;
