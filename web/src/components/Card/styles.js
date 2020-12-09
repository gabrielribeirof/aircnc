import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 25px;
  border-radius: 8px;

  background-color: #fff;

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 12px;
    color: var(--primary);
    font-weight: bold;
    margin-bottom: 6px;
  }

  input {
    height: 45px;
    margin-bottom: 15px;
    padding: 0 15px;
    border: 1px solid var(--border);
    border-radius: 4px;

    font-size: 14px;
    transition: border-color .3s;
  }

  input:focus {
    border-color: var(--border-dark);
  }

  .hot-link {
    width: 100%;
    margin-top: 10px;

    color: var(--primary);
    font-size: 12px;
    text-align: center;

    a {
      color: #000;
      font-weight: bold;
    }
  }
`;
