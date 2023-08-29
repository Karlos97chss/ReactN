import { View, StyleSheet } from 'react-native';
import Box from './components/Box';

//componente principal do app
const App = () => (
  <View style={styles.container}>
    <Box size={50} color="darkgreen" flex={1}></Box>
    <Box size={50} color="darkred" flex={1}></Box>
    <Box size={50} color="darkblue" flex={1}></Box>
    <Box size={50} color="black" flex={1}></Box>
    <Box size={50} color="green" flex={1}></Box>
    <Box size={50} color="red" flex={1}></Box>
    <Box flexDirection={'row'}></Box>
  </View>
);
//estilo objeto StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    backgroundColor: '#2dc',
    justifyContent: 'space-evenly'

  },
});

export default App;
