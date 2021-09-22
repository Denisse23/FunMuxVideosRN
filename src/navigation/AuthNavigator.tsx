import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect, useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';
import { Spinner } from '@ui-kitten/components';
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import HomeScreen from '../screens/HomeScreen';
import { RootState } from '../services/redux/rootReducer';
import { updateAuthStatus } from '../services/redux/auth/authActions';
import BaseScreen from '../screens/BaseScreen';

const { Navigator, Screen } = createStackNavigator();

export type AuthNavigatorStackParams = {
  LoginScreen: undefined
  SignUpScreen: undefined
}

const AuthNavigator = ({authState}: any) => {

  const dispatch = useDispatch()

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
        user ? dispatch(updateAuthStatus(user)) : dispatch(updateAuthStatus())
    });
    return subscriber;
  }, []);

  if (authState.status === 'checking') {
    return (
      <BaseScreen>
          <Spinner 
            status='primary'
            size='medium'
          />
      </BaseScreen>
    )
  }

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >

      {
        (authState.status !== 'authenticated') ? (
          <>
            <Screen name='LoginScreen' component={LoginScreen}/>
            <Screen name='SignUpScreen' component={SignUpScreen}/>
          </>
        )
          : (

            <>
              <Screen name="HomeScreen" component={HomeScreen} />
            </>
          )
      }
     
    </Navigator>
  )
}


const stateMapsToProps = (state: RootState) => {
  return {
      authState: state.auth
  }
};

export default connect(stateMapsToProps)(AuthNavigator);