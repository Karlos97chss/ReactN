import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const Home = () => {
  const data = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  const renderItem = ({ item }) => (
    <View>
      <Text>{item}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.appBar}>
        <Text style={styles.appBarTitle}>Home</Text>
      </View>
      <FlatList style={styles.listItem} data={data} renderItem={renderItem} />
      <Button title="Adicionar" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  appBar: {
    backgroundColor: 'blue',
    padding: 16,
    alignItems: 'center',
  },
  appBarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItem: {
    backgroundColor: 'white',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
});

export default Home;
