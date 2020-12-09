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
    font-family: 'Montserrat';
    font-weight: 500;
    text-rendering: optimizeLegibility;
    color: var(--title);
  }
`;
