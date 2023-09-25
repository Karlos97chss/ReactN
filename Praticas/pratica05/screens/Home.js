import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center'}}>
      <Text>Tela Home</Text> 
      <Button title="Ir Perfil" onPress={() => navigation.navigate('Perfil')}/>
    </View>
  );
};

export default Home;
