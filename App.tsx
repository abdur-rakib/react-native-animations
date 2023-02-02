import {Button, SafeAreaView, StyleSheet, Text} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>App</Text>
      <Button
        title="Welcome"
        onPress={() => {
          console.log('pressed');
        }}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
