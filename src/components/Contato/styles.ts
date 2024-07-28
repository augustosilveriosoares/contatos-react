import styled from 'styled-components';

export const Card = styled.div`
  padding: 32px 32px 32px 24px;
  background-color: #e0e0e0;
  border-radius: 16px;
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

// Botão de excluir
export const DeleteButton = styled(Button)`
  background-color: #f44336; // Cor vermelha
`;
