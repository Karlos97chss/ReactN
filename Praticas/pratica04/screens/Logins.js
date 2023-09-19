import { useState } from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Login = (props) => {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const handleEntrar = () => {
    if (email === 'test@email.com' && senha === '123') {
      setErro(null);
      props.onLogin();
    }
    setErro('Usuario ou senha incorreta!');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 16 }}>
      <Text variant="displayMedium">Login</Text>
      <TextInput
        label={'E-mail'}
        value={email}
        mode="outlined"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        label={'Senha'}
        value={senha}
        mode="outlined"
        onChangeText={(text) => setSenha(text)}
        secureTextEntry={true}
        placeholderTextColor="orange"
      />
      <Button
        mode="contained"
        onPress={props.onLogin}
        theme={{ colors: { primary: 'black' } }}>
        Entrar
      </Button>
    </View>
  );
};

export default Login;
