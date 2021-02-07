import styled from 'styled-components';

export const Container = styled.div`
  max-width: 420px;
  margin: 20px auto;
`;

export const ThumbnailPreview = styled.label`
  height: 170px;
  margin-bottom: 20px;
  border: 1px dashed #ddd;
  border-radius: 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-size: cover;
  cursor: pointer;

  input {
    display: none;
  }
`;
