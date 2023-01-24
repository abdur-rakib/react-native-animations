import {StyleSheet, View} from 'react-native';
import React from 'react';
import LoadingIndicator from './src/components/Home/LoadingIndicator';

const App = () => {
  return (
    <View style={styles.container}>
      <LoadingIndicator />
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
