import BotaoAdicionar from '../../components/BotaoAdicionar';
import ListaContatos from '../../containers/ListaContatos/ListaContatos';

const Home = () => (
  <>
    <h2>Lista de Contatos</h2>
    <ListaContatos />
    <BotaoAdicionar />
  </>
);

export default Home;
