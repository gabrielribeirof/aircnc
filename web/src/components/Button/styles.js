import styled, { css } from 'styled-components';

export const Container = styled.button`
  width: 100%;
  height: 45px;
  border: 0;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--salmon);
  color: #fff;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover, &:focus {
    background-color: var(--salmon-dark);
  }

  & + button {
    margin-top: 10px;
  }

  ${(props) => (
    props.isCancellation
    && css`
      background-color: #bbb;

      &:hover, &:focus {
        background-color: #aaa;
      }
    `
  )}
`;
