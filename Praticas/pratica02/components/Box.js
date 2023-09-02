import { View } from 'react-native';

//componente
const Box = (props) => {
  // estilo inline
  const boxStyle = {
    minHeight: props.size,
    minWidth: props.size,
    backgroundColor: props.color,
  };

  return (
    // código JSX
    <View style={boxStyle}></View>
  );
};

export default Box;
