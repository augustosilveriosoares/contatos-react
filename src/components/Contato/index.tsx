import * as S from './styles';
import ContatoModel from '../../model/Contato';
import { useDispatch } from 'react-redux';
import { remover } from '../../store/reducer/contato';
import { useNavigate } from 'react-router-dom';

type Props = ContatoModel;

const Contato = ({ id, nome, email, telefone }: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const edit = () => {
    navigate(`/editar/${id}`);
  };

  return (
    <S.Card>
      <label>ID:{id}</label>
      <S.Input type="text" id={nome} value={nome} readOnly></S.Input>
      <S.Input type="text" id={email} value={email} readOnly></S.Input>
      <S.Input type="text" id={telefone} value={telefone} readOnly></S.Input>
      <S.EditButton onClick={edit}>Editar</S.EditButton>
      <S.DeleteButton onClick={() => dispatch(remover(id))}>
        Excluir
      </S.DeleteButton>
    </S.Card>
  );
};

export default Contato;
