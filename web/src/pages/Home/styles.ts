import styled from 'styled-components';

export const Background = styled.div`
  height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url('./assets/landscape.jpg');
  background-position: center;
  background-size: cover;

  color: var(--white);

  h1 {
    margin-bottom: 30px;

    font-size: 34px;
    text-align: center;
    text-shadow: 0 0 3px #222;
  }

  p {
    margin: 0;
    margin-bottom: 30px;

    font-size: 30px;
    text-align: center;
    text-shadow: 0 0 3px #222;
  }
`;
