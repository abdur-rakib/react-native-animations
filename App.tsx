import {StyleSheet, View} from 'react-native';
import React from 'react';
import Home from './src/components/Home/Home';

const App = () => {
  // const handleChange = () => {
  //   console.log('Handle change function trigerred');
  // };
  // const handleChange2 = () => {
  //   console.log('added another handle change function');
  // };
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
