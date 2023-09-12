import {useState} from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const Login = () => {
  const [email, setEmail] = useState(); 
  const [senha, setSenha] = useState();

  return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', paddingBottom: 16 }}>
        Login
      </Text>
      <TextInput label={'E-mail'} valeu={''} onChangeText={(text) => setEmail(text)} />
      <TextInput
        label={'Senha'}
        valeu={''}
        onChangeText={(text) => setSenha(text)}
        secureTextEntry={true}
      />
      <Button onPress={() => {}}>Entrar</Button>
    </View>;
};

export default Login;
