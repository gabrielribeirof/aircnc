import styled from 'styled-components';

export const Container = styled.div`
  max-width: 850px;
  margin: 20px auto;
`;

export const RequestContainer = styled.div`
  span {
    margin-right: 10px;
  }

  button {
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 8px;
    border: 0;
    border-radius: 8px;

    background: transparent;
    font-weight: 16px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background: #F7F7F7;
    }
  }

  button.accept {
    border: 1px solid #84C870;
    color: #84C870;
  }

  button.reject {
    border: 1px solid #E55E5E;
    color: #E55E5E;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SpotItem = styled.div`
  width: 100%;
  border-radius: 8px;

  display: flex;
  flex-direction: column;

  transition: 0.2s;
  cursor: pointer;

  header {
    width: 100%;
    height: 170px;

    img {
      width: 100%;
      height: 100%;
      border-radius: 8px;
      object-fit: cover;
    }
  }

  span.title {
    width: 100%;
    margin: 5px 0;
    margin-bottom: 0;
    font-size: 18px;
    font-weight: 800;
  }

  span.price {
    font-size: 18px;
    color: var(--primary);
  }
`;
