import * as React from 'react';
import {StyleSheet} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { scale } from 'react-native-size-matters';
import CustomInput from '../components/CustomInput';
import FormContainer from '../components/FormContainer';
import { useForm } from '../hooks/useForm';
import BaseScreen from './BaseScreen';

import { 
    EMAIL_LABEL, 
    EMAIL_PLACEHOLDER,
    PASSWORD_LABEL,
    PASSWORD_PLACEHOLDER,
    SIGN_UP 
} from '../resources/translations/translationKeyConstants';
import CustomButton from '../components/CustomButton';
import CenterContentContainer from '../components/CenterContentContainer';

interface Props extends StackScreenProps<any, any> { }

const LoginScreen = ({ navigation }: Props) => {

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    })

    return (
        <BaseScreen>
           <CenterContentContainer>
                <FormContainer>
                    <CustomInput 
                        label={EMAIL_LABEL} 
                        placeholder={EMAIL_PLACEHOLDER}
                        value={email}
                        autoCorrect={false}
                        autoCapitalize='none'
                        keyboardType='email-address'
                        onChangeText={(value) => onChange(value, 'email')}
                    />
                    <CustomInput    
                        label={PASSWORD_LABEL}
                        placeholder={PASSWORD_PLACEHOLDER}
                        value={password}
                        autoCorrect={false}
                        autoCapitalize='none'
                        secureTextEntry
                        onChangeText={(value) => onChange(value, 'password')}
                    />
                </FormContainer>
                <CustomButton
                    size='medium'
                    appearance='ghost'
                    status='primary'
                    activeOpacity={0.6}
                    buttonText={SIGN_UP}
                    style={ styles.signUpButton }
                    onPress={ () => navigation.replace('SignUpScreen') }
                />
            </CenterContentContainer>
        </BaseScreen>
    );
};

const styles = StyleSheet.create({
    signUpButton: {
        alignSelf: 'flex-end',
        marginRight: scale(40)
    },
    
});


export default LoginScreen;
