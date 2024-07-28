import { useId } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Contato from '../../model/Contato';

type ContatoState = {
  itens: Contato[];
};

const initialState: ContatoState = {
  itens: [
    {
      id: '1',
      nome: 'João da Silva',
      email: 'email@email.com',
      telefone: '499999877778'
    },
    {
      id: '2',
      nome: 'Maria Jose',
      email: 'email@gmail.com',
      telefone: '499999877778'
    }
  ]
};

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<string>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      );
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => (t.id = action.payload.id)
      );
      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload;
      }
    },
    cadastrar: (state, action: PayloadAction<Contato>) => {
      const index = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      );
      if (index >= 0) {
        state.itens[index] = action.payload;
      } else {
        state.itens.push(action.payload);
      }
    }
  }
});

export const { remover, editar, cadastrar } = contatoSlice.actions;
export default contatoSlice.reducer;
