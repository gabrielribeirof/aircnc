import styled from 'styled-components';

export const Container = styled.form`
  padding: 35px 45px;
  border: 1px solid var(--border);
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  h1 {
    width: fit-content;
    margin-top: 0;
    position: relative;
    font-size: 26px;
    font-weight: 700;

    &::before {
      content: '';
      position: absolute;
      height: 4px;
      width: 100%;
      bottom: 3px;
      left: 0;
      z-index: -1;
      border-radius: 8px;
      background: linear-gradient(to left, #FF385C, #D70466);
    }
  }

  .hot-link {
    width: 100%;
    margin-top: 10px;

    color: #000;
    text-align: center;

    a {
      color: #000;
      font-weight: 800;
    }
  }
`;
