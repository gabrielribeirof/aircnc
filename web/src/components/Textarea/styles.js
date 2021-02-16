import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
  position: relative;

  textarea {
    width: 100%;
    border: 0;
    resize: vertical;

    font-family: 'Nunito Sans';
    font-size: 18px;

    &:focus ~ div::after {
      transform: scaleX(1);
    }

    &::placeholder {
      color: #666;
    }
  }
`;

export const TextareaUnderline = styled.div`
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
