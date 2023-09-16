import { View } from 'react-native';
import { Appbar } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const Home = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <Appbar.Header theme={{ colors: { primary: 'orange' } }}>
        <Appbar.Content title="Meu App" />
        <Appbar.Action
          onPress={() => props.onLogout()}
          icon={() => (
            <Ionicons name="ios-exit-outline" size={24} color="black" />
          )}
        />
      </Appbar.Header>
    </View>
  );
};

export default Home;

// site para ter os icones https://icons.expo.fyi/Index/Ionicons/ios-exit-outline

// site  Bootstrap https://callstack.github.io/react-native-paper/docs/components/ActivityIndicator
