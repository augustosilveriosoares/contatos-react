import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Circulo = styled(Link)`
  display: flex;
  height: 64px;
  width: 64px;
  background-color: #44bd32;
  color: #fff;
  position: fixed;
  bottom: 40px;
  right: 40px;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  cursor: pointer;
  text-decoration: none;
`;
