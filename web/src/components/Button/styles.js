import styled, { css } from 'styled-components';

export const Container = styled.button`
  min-width: 160px;
  padding: 12px;
  border: 0;
  border-radius: 8px;

  background: var(--primary);

  color: #FFF;
  font-weight: 700;
  font-size: 18px;

  transition: 0.1s;
  cursor: pointer;

  & + button {
    margin-top: 10px;
  }
  
  &:hover {
    transform: scale(1.02);
    background: var(--primary-dark);
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
