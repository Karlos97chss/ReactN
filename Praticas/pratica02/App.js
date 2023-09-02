import { View, StyleSheet } from 'react-native';
import Box from './components/Box';

//componente principal do app
const App = () => {
  return (
    <View style={[styles.container, styles.flexRowReverse, styles.justifyCenter, styles.alignCenter]}>
      <Box color="darkorange" size={50}></Box>
      <Box color="darkgreen" size={50}></Box>
      <Box color="grey" size={50}></Box>
      <Box color="darkblue" size={50}></Box>
      <Box color="black" size={50}></Box>
    </View>
  );
};

//estilo objeto StyleSheet

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    },
    
    flexColumn: {
      flexDirection: 'coloumn',
    },

    flexRow: {
      flexDirection: 'row',
    },

    flexColumnReverse: {
      flexDirection: 'column-reverse',
    },

    flexRowReverse: {
      flexDirection: 'row-reverse',
    },

    justifyStart: {
      justifyContent: 'flex-start',
    },

    justifyCenter: {
      justifyContent: 'center',
    },

    justifyEnd: {
      justifyContent: 'flex-end',
    },

    justifySpaceBetween: {
      justifyContent: 'space-between',
    },

    justifyAround: {
      justifyContent: 'space-around',
    },

    justifySpaceEvenly: {
      justifyContent: 'space-evenly',
    },

    alignStart: {
      alignItems: 'flex-start',
    },

    alignCenter: {
      alignitems: 'center',
    },

    alignEnd: {
      alignItems: 'flex-end',
    },

    alignStretch: {
      alignItems: 'stretch',
  },
});

export default App;
