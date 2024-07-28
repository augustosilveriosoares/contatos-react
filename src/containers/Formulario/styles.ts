import styled from 'styled-components';

export const Form = styled.form`
  width:100%
  font-size: 14px;
`;

export const Input = styled.input`
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

export const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin: 5px 0;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  color: #fff;
  transition: background-color 0.3s;

  &:hover {
    opacity: 0.9;
  }
`;

// Botão de editar
export const EditButton = styled(Button)`
  background-color: #4caf50; // Cor verde
`;

// Botão de Voltar
export const BackButton = styled(Button)`
  background-color: gray; // Cor verde
`;
