import * as React from 'react';

import CustomInput from '../components/CustomInput';
import FormContainer from '../components/FormContainer';
import { useForm } from '../hooks/useForm';
import BaseScreen from './BaseScreen';

import { 
    FIRST_NAME_LABEL,
    FIRST_NAME_PLACEHOLDER,
    LAST_NAME_LABEL,
    LAST_NAME_PLACEHOLDER,
    EMAIL_LABEL, 
    EMAIL_PLACEHOLDER,
    PASSWORD_LABEL,
    PASSWORD_PLACEHOLDER
} from '../resources/translations/translationKeyConstants';

const SignUpScreen = () => {

    const { email, password, firstName, lastName, onChange } = useForm({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    })

    return (
        <BaseScreen>
            <FormContainer>
                <CustomInput 
                    label={FIRST_NAME_LABEL} 
                    placeholder={FIRST_NAME_PLACEHOLDER}
                    value={firstName}
                    autoCorrect={false}
                    autoCapitalize='sentences'
                    onChangeText={(value) => onChange(value, 'firstName')}/>
                <CustomInput 
                    label={LAST_NAME_LABEL} 
                    placeholder={LAST_NAME_PLACEHOLDER}
                    value={lastName}
                    autoCorrect={false}
                    autoCapitalize="sentences"
                    onChangeText={(value) => onChange(value, 'lastName')}/>
                <CustomInput 
                    label={EMAIL_LABEL} 
                    placeholder={EMAIL_PLACEHOLDER}
                    value={email}
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onChangeText={(value) => onChange(value, 'email')}/>
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


export default SignUpScreen;
