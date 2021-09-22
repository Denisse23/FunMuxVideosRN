import { AuthAction } from './authActions';

export interface User {
    displayName: string
    email: string
}

export interface AuthState {
    status: 'checking' | 'authenticated' | 'unauthenticated';
    errorMessage: string;
    user: User| null;
}

const AuthInitialState: AuthState = {
    status: 'checking',
    errorMessage: '',
    user: null
}

const authReducer =  (state: AuthState = AuthInitialState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'SIGN_UP':
            return {
                ...state,
                status: 'checking',
                errorMessage: '',
                user: null
            }
        case 'AUTH_STATUS_HAS_CHANGED':
            return (action.payload ?
            {
                ...state,
                status: 'authenticated',
                errorMessage: '',
                user: {
                    displayName: action.payload.displayName || '',
                    email: action.payload.email || ''
                }
            } : 
            {
                ...state,
                status: 'unauthenticated',
                errorMessage: '',
                user: null
            })
        case 'AUTH_ERROR':
            return {
                ...state,
                status: 'unauthenticated',
                errorMessage: action.payload,
                user: null
            }
        default:
            return state
    }
}

export default authReducer