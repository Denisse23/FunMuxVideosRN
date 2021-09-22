import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//Firebase
import firebase from '@react-native-firebase/app';
import firebaseConfig from './src/constants/firebaseConfig';

//Kitten
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import {default as theme} from './src/resources/theme/theme.json';

//Navigator
import { AuthNavigator } from './src/navigation';

// Store
import store from './src/services/redux/store';

const App = () => {

   // Initialize firebase instance
   firebase.initializeApp(firebaseConfig)

  return (
    <Provider store={store}>
        <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
          <SafeAreaProvider>
            <NavigationContainer>
              <AuthNavigator/>
            </NavigationContainer>
          </SafeAreaProvider>
        </ApplicationProvider>
    </Provider>
  )
}

export default App;
