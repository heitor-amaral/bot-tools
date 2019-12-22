import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #263859, #ff6768);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 32px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 8px;
      height: 48px;
      padding: 0 16px;
      color: #fff;
      margin: 0 0 16px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    button {
      margin: 8px 0 0;
      height: 48px;
      border-radius: 8px;
      font-weight: bold;
      color: #fff;
      border: 0;
      font-size: 16px;
      background: #3b9eff;
      transition: background 0.5s;

      &:hover {
        background: ${darken(0.07, '#3b9eff')};
      }
    }
  }
`;
