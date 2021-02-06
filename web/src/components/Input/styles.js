import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  position: relative;

  input {
    width: 100%;
    font-size: 18px;
    border: 0;

    &:focus ~ div::after {
      transform: scaleX(1);
    }

    &::placeholder {
      color: #666;
    }
  }
`;

export const InputUnderline = styled.div`
  &::before {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    bottom: -5px;
    left: 0;
    background: var(--secondary);
  }

  &::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    bottom: -5px;
    left: 0;
    background: #000;

    transition: 0.2s; 
    transform: scaleX(0);
    transform-origin: left;
  }
`;
