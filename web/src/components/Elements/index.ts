import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LightButton = styled(Link)`
  width: 100%;
  min-height: 18px;
  padding: 15px 25px;
  border: 1px solid var(--salmon);
  border-radius: 50px;

  font-size: 14px;
  font-weight: bold;
  color: var(--salmon);
  text-align: center;
  text-decoration: none;

  transition: 0.08s linear;

  &:hover,
  &:focus {
    background-color: var(--salmon);
    color: var(--white);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 15px 25px;
  border: none;
  border-radius: 8px;

  background-color: var(--salmon);

  font-size: 14px;
  font-weight: bold;
  color: var(--white);
  text-align: center;
  text-decoration: none;
  cursor: pointer;

  transition: 0.02s linear;

  &:hover,
  &:focus {
    background-color: #d24041;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 5px;
  padding: 5px 15px;
  border: 0.5px solid var(--subtitle-2);
  border-radius: 8px;

  display: flex;
  align-items: center;

  font-size: 16px;
  color: var(--subtitle-3);
`;
