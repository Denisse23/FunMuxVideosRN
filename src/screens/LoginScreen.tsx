import * as React from 'react';

import CustomInput from '../components/CustomInput';
import FormContainer from '../components/FormContainer';
import { useForm } from '../hooks/useForm';
import BaseScreen from './BaseScreen';

import { 
    EMAIL_LABEL, 
    EMAIL_PLACEHOLDER,
    PASSWORD_LABEL,
    PASSWORD_PLACEHOLDER
} from '../resources/translations/translationKeyConstants';

const LoginScreen = () => {

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    })

    return (
        <BaseScreen>
            <FormContainer>
                <CustomInput 
                    label={EMAIL_LABEL} 
                    placeholder={EMAIL_PLACEHOLDER}
                    value={email}
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onChangeText={(value) => onChange(value, 'email')}
                />
                <CustomInput    
                    label={PASSWORD_LABEL}
                    placeholder={PASSWORD_PLACEHOLDER}
                    value={password}
                    autoCorrect={false}
                    autoCapitalize="none"
                    secureTextEntry
                    onChangeText={(value) => onChange(value, 'password')}
                />
            </FormContainer>
        </BaseScreen>
    );
};


export default LoginScreen;
