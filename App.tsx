import {StyleSheet, View, Text} from 'react-native';
import React from 'react';
import Home from './src/components/Home/Home';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
