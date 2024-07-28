import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto;
  list-style: none;
  padding: 5px;
  }
`;

export const Container = styled.div`
  display: block;

  h2 {
    text-align: center;
    font-size 28px;
    font-weight: bold;
    color:gray
  }
`;

export const Campo = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  outline: none;
  transition: border-color 0.3s;
  display: block;
  width: 100%;

  margin-bottom: 6px;

  &:focus {
    border-color: #007bff;
  }

  &::placeholder {
    color: #aaa;
  }
`;

export default GlobalStyle;
