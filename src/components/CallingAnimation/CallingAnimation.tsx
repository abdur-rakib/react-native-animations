import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {MotiView} from 'moti';
import {Easing} from 'react-native-reanimated';

const {height, width} = Dimensions.get('window');

const CallingAnimation = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.callerView}>
        <Text style={styles.callerText}>Unknown is calling</Text>
      </View>
      {[...Array(3).keys()].map(index => {
        return (
          <MotiView
            key={index}
            style={[styles.imageContainer]}
            from={{opacity: 0.2, scale: 1}}
            animate={{opacity: 1, scale: 4}}
            transition={{
              loop: true,
              type: 'timing',
              duration: 500 * (index + 1),
              // delay: 400 * index,
              easing: Easing.out(Easing.ease),
              repeatReverse: false,
            }}>
            <Image
              style={styles.imageStyle}
              source={require('../../assets/telephone.png')}
              resizeMode="contain"
            />
          </MotiView>
        );
      })}
    </SafeAreaView>
  );
};

export default CallingAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  imageContainer: {
    ...StyleSheet.absoluteFillObject,
    height: 80,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2296f2',
    borderRadius: 50,
    top: height / 2 - 80 / 2,
    left: width / 2 - 80 / 2,
  },
  imageStyle: {
    height: 30,
    width: 30,
  },
  callerView: {
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  callerText: {
    fontSize: 40,
    color: '#2296f2',
  },
});
