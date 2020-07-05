import styled from 'styled-components';
import media from 'styled-media-query';

export const Container = styled.div`
  width: 100%;
  height: 150px;
  padding: 30px 180px;

  display: flex;
  align-items: center;

  background-color: var(--title);
  color: var(--white);

  ${media.lessThan('medium')`
    padding: 10px;
  `}
`;
