import { View, Text, Button } from 'react-native';

const Perfil = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center'}}>
      <Text>Tela Perfil</Text>
      <Button title="Ir Home" onPress={() => navigation.navigate('Home')}/>
    </View>
  );
};

export default Perfil;
