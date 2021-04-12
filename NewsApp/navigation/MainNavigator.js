import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';

const MainStack = createStackNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="Home" component={HomeScreen} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;
