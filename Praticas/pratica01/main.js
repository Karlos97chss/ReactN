import { View, StyleSheet } from 'react-native';
import Box from './components/Box';

//componente principal do app
const App = () => (
<View style={styles.container}>

<Box color="red" size={60}></Box>
<Box color="green" size={60}></Box>
<Box color="blue" size={60}></Box>

</View>
);

//estilo objeto StyleSheet

const styles= StyleSheet.create({
  container: {
  flex: 1,
  //flexColumn:{
  //flexDirection:'coloumn'
  //},
  flexRow:{
  flexDirection:'row'
  },
  
  backgroundColor: 'aliceblue',
  //flexDirection: 'coloumn',
  //flexDirection: 'row',
  //flexDirection: 'column-reverse',
  //flexDirection: 'flex-start',
  
  
  }
});
  
export default App;
