import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { AppDispatch } from '../store';

export type AuthAction =
    | { type: 'SIGN_UP'}
    | { type: 'AUTH_STATUS_HAS_CHANGED', payload?: FirebaseAuthTypes.User}
    | { type: 'AUTH_ERROR', payload: string }

export const signIn = (email: string, password: string) => {
    return (dispatch: AppDispatch) => { 
        dispatch({ type: 'SIGN_UP'})
        auth().signInWithEmailAndPassword(
            email.trim(),
            password,
        ).then((userCredentials) => {
            dispatch({ type: 'AUTH_STATUS_HAS_CHANGED', payload:  userCredentials.user} as AuthAction)
        }).catch((error) => {
            dispatch({ type: 'AUTH_ERROR', payload: 'Error No se'})
        });
    }
}

export const updateAuthStatus = (user?: FirebaseAuthTypes.User): AuthAction => {
    return { 
        type: 'AUTH_STATUS_HAS_CHANGED', 
        payload: user
    } 
}