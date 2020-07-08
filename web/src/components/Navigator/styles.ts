import styled from 'styled-components';
import media from 'styled-media-query';
import { Link } from 'react-router-dom';

interface MenuLinkProps {
  bold?: string;
}

export const Container = styled.div`
  min-height: 80px;
  padding: 0 200px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--white);

  ${media.lessThan('medium')`
    padding: 10px;
    flex-direction: column;

    div {
      justify-content: center;
    }
  `}
`;

export const Logo = styled.img`
  height: 35px;
`;

export const MenuLink = styled(Link)<MenuLinkProps>`
  padding: 0 20px;

  font-size: 14px;
  font-weight: ${(props) => (props.bold ? 'bold' : '500px')};
  text-decoration: none;
  color: var(--title);
`;
