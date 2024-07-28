import React from 'react';
import { store } from './store';
import { Provider } from 'react-redux';
import GlobalStyle from './style';
import { Container } from './style';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cadastro from './pages/Cadastro';
import Home from './pages/Home';

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novo',
    element: <Cadastro />
  },
  {
    path: '/editar/:id',
    element: <Cadastro />
  }
]);

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <RouterProvider router={rotas}></RouterProvider>
      </Container>
    </Provider>
  );
}

export default App;
