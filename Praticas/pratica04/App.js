import {useState} from 'react'
import { View } from 'react-native';
import Login from './screens/Logins';
import Home from './screens/Home';

const App = () => {
  const [logado, setLogado] = useState(false);

  const handleLogin = () => {
    setLogado(true);
  };

  const handleLogout = () => {
    setLogado(false);
  };

  return (
    <View style={{ flex: 1 }}>
      {logado ? (
        <Home onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </View>
  );
};

export default App;
