import { View, Text } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Titulo from '../components/Titulo';

const Splash = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MaterialCommunityIcons name="robot-happy-outline" size={100} color="black" />
      <Titulo>Meu App</Titulo>
      <ActivityIndicator size={'large'} />
    </View>
  );
};

export default Splash;
