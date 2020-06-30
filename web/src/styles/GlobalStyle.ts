import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap');

  :root {
    --primary: #222;
    --secondary: #717171;
    --tertiary: rgb(34, 34, 34);
    --quaternary: rgb(72, 72, 72);

    --white: #fff;
    --black: #000;
    --green: rgb(0, 138, 5);
    --yellow: #f9a839;
    --blue: rgb(0, 132, 137);
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
    background-color: var(--green);
  }
`;
