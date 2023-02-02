import {StyleSheet, View} from 'react-native';
import React from 'react';
import {MotiView} from 'moti';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import {useAnimatedGestureHandler} from 'react-native-reanimated';

const SIZE = 80;

const BoxAnimation = () => {
  const panGestureEvent =
    useAnimatedGestureHandler<PanGestureHandlerGestureEvent>({
      onStart: event => {
        console.log(event);
      },
      onActive: event => {
        console.log(event.translationX);
      },
      onEnd: event => {
        console.log(event);
      },
    });
  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <MotiView style={styles.boxContainer} />
      </PanGestureHandler>
    </View>
  );
};

export default BoxAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    height: SIZE,
    width: SIZE,
    backgroundColor: '#636ce0',
    margin: 20,
    borderRadius: 10,
  },
  textContainer: {
    backgroundColor: 'white',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  text: {},
});
