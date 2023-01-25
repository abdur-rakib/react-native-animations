import {StyleSheet, View} from 'react-native';
import React from 'react';
import CallingAnimation from './src/components/CallingAnimation/CallingAnimation';

const App = () => {
  return (
    <View style={styles.container}>
      <CallingAnimation />
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
