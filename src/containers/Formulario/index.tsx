import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Input, EditButton, BackButton } from './styles';
import { FormEvent, useState, useEffect } from 'react';
import { cadastrar } from '../../store/reducer/contato';
import Contato from '../../model/Contato';

const Formulario = () => {
  const { id } = useParams();
  const { idparam } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');

  const contato = useSelector((state: { contatos: { itens: Contato[] } }) =>
    state.contatos?.itens.find((contato: Contato) => contato.id === id)
  );
  useEffect(() => {
    if (contato) {
      setNome(contato.nome);
      setTelefone(contato.telefone);
      setEmail(contato.email);
    }
  }, [contato]);

  const adicionarContato = (evento: FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const novoContato = {
      id: id ?? Math.random().toString(36).substr(2, 9),
      nome,
      email,
      telefone
    };
    console.log(id);
    dispatch(cadastrar(novoContato));
    navigate('/');
  };

  return (
    <>
      <h2>Adicionar Contato</h2>
      <Form onSubmit={adicionarContato}>
        <Input
          type="text"
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          placeholder="Nome"
          required
        ></Input>
        <Input
          type="text"
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          placeholder="Email"
          required
        ></Input>
        <Input
          type="text"
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          placeholder="Telefone"
          required
        ></Input>
        <EditButton type="submit">Salvar</EditButton>
        <BackButton onClick={() => navigate('/')}>Voltar</BackButton>
      </Form>
    </>
  );
};

export default Formulario;
