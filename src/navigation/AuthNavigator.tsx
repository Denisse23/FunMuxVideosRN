import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';

const { Navigator, Screen } = createStackNavigator();

export const AuthNavigator = () => (
  <Navigator>
    <Screen name='LoginScreen' component={LoginScreen}/>
    <Screen name='SignUpScreen' component={SignUpScreen}/>
  </Navigator>
);