import styled from 'styled-components';

export const Container = styled.div`
  max-width: 600px;
  margin: 20px auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 992px) {
    width: 100%;
  }
`;

export const Thumbnail = styled.div`
  width: 100%;
  height: 280px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 15px;
    object-fit: cover;
  }
`;

export const Info = styled.div`
  margin: 20px 0;
`;

export const Head = styled.div`
  margin-bottom: 16px;
  border-bottom: 1px solid var(--border);
`;

export const Row = styled.div`
  display: flex;
  margin-bottom: 16px;
  justify-content: space-between;

  & > div {
    display: flex;
    flex-direction: column;

    .title {
      margin: 0;
      font-size: 24px;
      font-weight: 800;
    }

    .place {
      color: var(--secondary);
      font-weight: 700;
    }
  }

  .price {
    color: var(--primary);
    font-weight: 700;
    font-size: 20px;
  }
`;

export const Tags = styled.div`
  width: 100%;
  margin-bottom: 20px;
  display: flex;

  & > div {
    min-width: 100px;
    height: 28px;

    border-radius: 8px;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: #FFC2CD;

    color: var(--primary);
    font-size: 13px;
    font-weight: 700;

    cursor: default;

    & + div {
      margin-left: 10px;
    }
  }
`;

export const Description = styled.div`
  margin-bottom: 20px;

  h2 {
    margin: 0;
    margin-bottom: 8px;
    font-size: 20px;
  }

  p {
    margin: 0;
  }
`;
