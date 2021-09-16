import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//Kitten
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
//Theme
import {default as theme} from './src/resources/theme/theme.json';
import LoginScreen from './src/screens/LoginScreen';
import { AuthNavigator } from './src/navigation/AuthNavigator';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthNavigator/>
        </NavigationContainer>
      </SafeAreaProvider>
    </ApplicationProvider>
  )
}

export default App;
