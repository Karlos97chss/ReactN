import { View, StyleSheet, Text, TextInput, Button } from 'react-native';

const Login = () => {
  return ( 
    <View style={styles.container}>
      <Text style={styles.titulo}>Login</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
      <Button style={styles.botao} title="Entrar" color="black" />
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'seagreen',
    paddingHorizontal: 16,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 26,
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 24,
    color: 'white'
  },
  input: {
    lineHeight: 48,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
    marginBottom: 16,
  },
  botao: {
    borderRadius: 90,
  }

});
export default Login; 
