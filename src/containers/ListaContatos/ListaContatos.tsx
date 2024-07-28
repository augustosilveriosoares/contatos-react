import Contato from '../../components/Contato';

import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const ListaContatos = () => {
  const { itens } = useSelector((state: RootState) => state.contatos);

  return (
    <ul>
      {itens.map((c) => (
        <li key={c.email}>
          <Contato
            id={c.id}
            nome={c.nome}
            email={c.email}
            telefone={c.telefone}
          ></Contato>
        </li>
      ))}
    </ul>
  );
};

export default ListaContatos;
