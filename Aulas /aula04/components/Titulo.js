import { Text } from 'react-native';

const Titulo = (props) => {
  return (
    <Text
      style={{
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        paddingBottom: 16,
      }}>
      {props.children}
    </Text>
  );
};

export default Titulo;
