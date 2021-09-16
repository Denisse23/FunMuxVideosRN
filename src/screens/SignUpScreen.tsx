import * as React from 'react';
import {StyleSheet} from 'react-native';
import { scale } from 'react-native-size-matters';
import { StackScreenProps } from '@react-navigation/stack'

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
    PASSWORD_PLACEHOLDER,
    RETURN_TO_LOGIN
} from '../resources/translations/translationKeyConstants';
import CenterContentContainer from '../components/CenterContentContainer';
import CustomButton from '../components/CustomButton';

interface Props extends StackScreenProps<any, any> { }

const SignUpScreen = ({ navigation }: Props) => {

    const { email, password, firstName, lastName, onChange } = useForm({
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    })

    return (
        <BaseScreen>
            <CenterContentContainer>
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
                <CustomButton
                    size='medium'
                    appearance='ghost'
                    status='primary'
                    activeOpacity={0.6}
                    buttonText={RETURN_TO_LOGIN}
                    style={ styles.returnToLoginButton}
                    onPress={ () => navigation.replace('LoginScreen') }
                />
            </CenterContentContainer>
        </BaseScreen>
    );
};

const styles = StyleSheet.create({
    returnToLoginButton: {
        alignSelf: 'flex-end',
        marginRight: scale(40)
    },
    
});


export default SignUpScreen;
