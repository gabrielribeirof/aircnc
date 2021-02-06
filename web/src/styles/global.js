import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --primary: #444444;
    --border: #dddddd;
    --border-dark: #999999;
    --border-darker: #484848;

    --salmon: #f05a5b;
    --salmon-dark: #d94947;
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
