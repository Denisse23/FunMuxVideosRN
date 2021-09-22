import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { AppDispatch } from '../store';

export type AuthAction =
    | { type: 'SIGN_UP'}
    | { type: 'AUTH_STATUS_HAS_CHANGED', payload?: FirebaseAuthTypes.User}
    | { type: 'AUTH_ERROR', payload: string }
    | { type: 'LOGOUT' }

export const logIn = (email: string, password: string) => {
    return (dispatch: AppDispatch) => { 
        dispatch({ type: 'SIGN_UP'})
        auth().signInWithEmailAndPassword(
            email.trim(),
            password,
        ).then((userCredentials) => {
            dispatch({ type: 'AUTH_STATUS_HAS_CHANGED', payload:  userCredentials.user})
        }).catch((error) => {
            dispatch({ type: 'AUTH_ERROR', payload: error.code })
        })
    }
}

export const updateAuthStatus = (user?: FirebaseAuthTypes.User): AuthAction => {
    return { 
        type: 'AUTH_STATUS_HAS_CHANGED', 
        payload: user
    } 
}

export const logOut = () => {
    return (dispatch: AppDispatch) => { 
        dispatch({ type: 'LOGOUT'})
        auth().signOut()
        .then(() => {
            dispatch({ type: 'AUTH_STATUS_HAS_CHANGED'})
        }).catch((error) => {
            dispatch({ type: 'AUTH_ERROR', payload: error.code })
        })
    }
}