import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  width: 100%;
  height: 75px;
  margin-bottom: 10px;
  padding: 0 80px;

  box-shadow: 0 5px 4px #f4f4f4;

  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 992px) {
    padding: 0 10px;
  }
`;

export const Side = styled.div`
  flex: 1;

  @media (max-width: 992px) {
    flex: 0;
  }
`;

export const Logo = styled(Link)`
  height: 100%;

  display: flex;
  align-items: center;

  img {
    width: auto;
    height: 30px;
  }
`;

export const Nav = styled.nav`
  height: 100%;

  display: flex;
  flex: 2;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media (max-width: 992px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  margin: 0 15px;

  color: #000;
  font-size: 16px;
  font-weight: 800;
  text-decoration: none;

  transition: 0.2s;

  ${(props) => !props.selected
  && css`
    color: var(--secondary);

    &:hover {
      color: var(--secondary-dark);
    }
  `}
`;

export const ActionBar = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;

  font-weight: 800;
`;

export const Action = styled(Link)`
  height: 35px;
  padding: 0 20px;
  border-radius: 8px;

  display: flex;
  flex-direction: center;
  align-items: center;

  color: #000;
  text-decoration: none;

  transition: 0.1s;
  cursor: pointer;
  
  &:hover {
    background: #F7F7F7;
  }

  & + a {
    margin-left: 10px;
  }
`;

export const ActionHighlighted = styled(Action)`
  color: var(--primary);
  border: 1px solid var(--primary);
`;

export const UserHighlighted = styled(ActionHighlighted)`
  width: 100px;
  padding: 0;
  padding-right: 14px;
  justify-content: space-between;

  div:first-child {
    width: 40px;
    height: 100%;
    border-right: 1px solid var(--primary);
    border-radius: 8px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
