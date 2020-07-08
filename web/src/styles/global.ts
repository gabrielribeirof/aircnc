import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --title: #222222;
    --subtitle: #dddddd;
    --subtitle-2: #999999;
    --subtitle-3: #484848;

    --white: #ffffff;
    --black: #000000;
    --green: #008a05;
    --yellow: #f9a839;
    --blue: #008489;
    --salmon: #f05a5b;
  }

  * {
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    margin: 0;
    font-family: 'Montserrat';
    font-weight: 500;
    text-rendering: optimizeLegibility;
    color: var(--title);
  }

`;
