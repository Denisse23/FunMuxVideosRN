import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const { Navigator, Screen } = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Screen name='LoginScreen' component={LoginScreen}/>
      <Screen name='SignUpScreen' component={SignUpScreen}/>
    </Navigator>
  )
}