import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MotiView} from 'moti';

const SIZE = 60;

const LoadingIndicator = () => {
  return (
    <View style={styles.container}>
      <MotiView
        style={styles.circle}
        from={{height: SIZE, width: SIZE, borderWidth: 0, shadowOpacity: 0.5}}
        animate={{
          height: SIZE + 20,
          width: SIZE + 20,
          borderRadius: (SIZE + 20) / 2,
          borderWidth: (SIZE + 20) / 10,
          shadowOpacity: 1,
        }}
        transition={{
          loop: true,
          // repeatReverse: false,
          type: 'timing',
          duration: 1000,
          // easing: Easing.out,
        }}
      />
    </View>
  );
};

export default LoadingIndicator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  circle: {
    height: SIZE,
    width: SIZE,
    borderWidth: SIZE / 10,
    borderColor: 'white',
    borderRadius: SIZE / 2,
    shadowColor: 'white',
    shadowOpacity: 1,
    shadowOffset: {height: 0, width: 0},
    shadowRadius: 10,
    backgroundColor: 'black',
  },
  toCircle: {
    height: SIZE,
    width: SIZE,
    borderWidth: SIZE / 10,
    borderColor: 'white',
    borderRadius: SIZE / 2,
  },
});
