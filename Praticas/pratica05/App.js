import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './routes/MainNavigator';
//import NavegacaoAba from './routes/NavegacaoAba'; @react-navigation/native
//import NavegacaoGaveta from './routes/NavegacaoGaveta';


const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
