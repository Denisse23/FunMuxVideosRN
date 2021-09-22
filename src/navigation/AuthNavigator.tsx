import React, {useEffect} from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect, useDispatch } from 'react-redux';
import auth from '@react-native-firebase/auth';

//Components
import { Spinner } from '@ui-kitten/components';
import { CenterContentContainer } from '../components';

//Screens
import { 
    LogInScreen,
    SignUpScreen,
    HomeScreen,
    BaseScreen 
} from '../screens';

//Services
import { RootState } from '../services/redux/rootReducer';
import { updateAuthStatus, AuthState  } from '../services/redux/auth';

const { Navigator, Screen } = createStackNavigator();

export type AuthNavigatorStackParams = {
  LoginScreen: undefined
  SignUpScreen: undefined
}

interface Props {
  authState: AuthState
}

const AuthNavigatorComponent = ({ authState }: Props) => {

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
        <CenterContentContainer>
          <Spinner 
            status='primary'
            size='giant'
          />
        </CenterContentContainer>
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
            <Screen name='LogInScreen' component={LogInScreen}/>
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

export const AuthNavigator = connect(stateMapsToProps)(AuthNavigatorComponent)