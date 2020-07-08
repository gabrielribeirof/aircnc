import styled from 'styled-components';
import media from 'styled-media-query';

export const SpotList = styled.div`
  margin: 0 100px;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  ${media.lessThan('medium')`
    margin: 0;
    grid-template-columns: 1fr;
  `}
`;

export const Spot = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid var(--subtitle-2);
  border-radius: 8px;

  header {
    width: 100%;
    height: 120px;
    border-radius: 8px;

    background-position: center;
    background-size: cover;
  }
`;

export const SpotInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 24px;

  strong {
    font-size: 24px;
    color: var(--title);
  }
  span {
    padding-bottom: 5px;

    font-size: 15px;
    color: var(--subtitle-2);
  }
`;
