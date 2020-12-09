import styled from 'styled-components';

export const ThumbnailPreview = styled.label`
  height: 160px;
  margin-bottom: 20px;
  border: 1px dashed #ddd;

  display: flex;
  justify-content: center;
  align-items: center;

  background-size: cover;
  cursor: pointer;

  input {
    display: none;
  }
`;
