import styled from 'styled-components';

export const WelcomeBanner = styled.section`
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: bold;
`;

export const SpotRequests = styled.section`
  margin-bottom: 6px;

  span {
    display: inline-block;
    font-size: 14px;
  }

  button {
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0;
    border: 0;

    background: transparent;
    font-weight: bold;
    cursor: pointer;
  }

  button.accept {
    color: #84C870;
  }

  button.reject {
    color: #E55E5E;
  }
`;

export const SpotList = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 30px;

  .spot-item {
    display: grid;
    grid-auto-flow: row;
  }

  .spot-item header {
    width: 100%;
    height: 120px;
    margin-bottom: 4px;
    background-size: cover;
    border-radius: 4px;
  }

  .spot-item strong {
    width: 100%;
    font-size: 16px;
    color: #222;
  }

  .spot-item span {
    width: 100%;
    margin-bottom: 5px;
    font-size: 15px;
    color: #999;
  }

  .spot-item button {
    padding: 5px 0;
    border: 0;
    border-radius: 4px;

    background-color: var(--salmon);

    color: #fff;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .spot-item button:disabled {
    background-color: rgba(0, 0, 0, 0.3);
    cursor: not-allowed;
  }

  .spot-item button:hover, .spot-item button:focus {
    background-color: var(--salmon-dark);
  }
`;
