import React from 'react';
import {Text, View} from 'react-native';
import {ActivityIndicator, Colors} from 'react-native-paper';

const SplashScreen = () => {
  return (
    <View style={{paddingVertical: 200}}>
      <ActivityIndicator size={100} animating={true} color={Colors.red800} />
    </View>
  );
};

export default SplashScreen;
