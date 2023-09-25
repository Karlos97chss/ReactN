import { NavigationContainer } from '@react-navigation/native';
import NavegacaoPilha from './routes/NavegacaoPinha';
import NavegacaoAba from './routes/NavegacaoAba';
import NavegacaoGaveta from './routes/NavegacaoGaveta';


const App = () => {
  return (
    <NavigationContainer>
      <NavegacaoAba />
    </NavigationContainer>
  );
};

export default App;
