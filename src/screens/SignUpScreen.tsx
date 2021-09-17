import * as React from 'react';
import {StyleSheet} from 'react-native';
import { scale, verticalScale } from 'react-native-size-matters';
import { StackScreenProps } from '@react-navigation/stack';

import CustomInput from '../components/CustomInput';
import FormContainer from '../components/FormContainer';
import { useForm } from '../hooks/useForm';
import BaseScreen from './BaseScreen';

import { 
    SIGN_UP_TITLE,
    FIRST_NAME_LABEL,
    FIRST_NAME_PLACEHOLDER,
    LAST_NAME_LABEL,
    LAST_NAME_PLACEHOLDER,
    EMAIL_LABEL, 
    EMAIL_PLACEHOLDER,
    PASSWORD_LABEL,
    PASSWORD_PLACEHOLDER,
    CONFIRM_PASSWORD_LABEL,
    RETURN_TO_LOGIN,
    SIGN_UP
} from '../resources/translations/translationKeyConstants';
import CenterContentContainer from '../components/CenterContentContainer';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';
import { ButtonPaddingHorizontal } from '../resources/style';

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
            <CenterContentContainer
                style={styles.formContainer}
            >
                <CustomText
                    category='h5'
                    textValue={SIGN_UP_TITLE}
                    style={ styles.title }
                />
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
                    <CustomInput    
                        label={CONFIRM_PASSWORD_LABEL}
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
                <CustomButton
                    size='medium'
                    appearance='filled'
                    status='primary'
                    activeOpacity={0.8}
                    buttonText={SIGN_UP}
                    paddingHorizontal={ButtonPaddingHorizontal.PADDING_LARGE}
                    style={ styles.signUpButton }
                    onPress={ () => navigation.replace('SignUpScreen') }
                />
            </CenterContentContainer>
        </BaseScreen>
    );
};

const styles = StyleSheet.create({
    formContainer:{
        marginTop: -verticalScale(40)
    },
    title: {
        position: 'absolute',
        top: 0,
        marginTop: verticalScale(100),
        alignSelf: 'flex-start',
        marginLeft: scale(40)
    },
    returnToLoginButton: {
        alignSelf: 'flex-end',
        marginRight: scale(30)
    },
    signUpButton: {
        position: 'absolute',
        flexDirection: 'column',
        bottom: 0,
        marginBottom: verticalScale(80),
    }
    
});


export default SignUpScreen;
