import React, { useEffect, useState} from 'react';
//Kitten
import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
//Theme
import {default as theme} from './src/resources/theme/theme.json';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={{...eva.light, ...theme}}>
         <LoginScreen />
    </ApplicationProvider>
  )
}

export default App;
