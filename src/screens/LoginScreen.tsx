import * as React from 'react';
import {StyleSheet} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack'
import { scale, verticalScale } from 'react-native-size-matters';
import CustomInput from '../components/CustomInput';
import FormContainer from '../components/FormContainer';
import { useForm } from '../hooks/useForm';
import BaseScreen from './BaseScreen';
import { ButtonPaddingHorizontal } from '../resources/style'

import { 
    LOGIN_TITLE,
    EMAIL_LABEL, 
    EMAIL_PLACEHOLDER,
    PASSWORD_LABEL,
    PASSWORD_PLACEHOLDER,
    SIGN_UP,
    LOGIN
} from '../resources/translations/translationKeyConstants';
import CustomButton from '../components/CustomButton';
import CenterContentContainer from '../components/CenterContentContainer';
import { Layout } from '@ui-kitten/components';
import CustomText from '../components/CustomText';

interface Props extends StackScreenProps<any, any> { }

const LoginScreen = ({ navigation }: Props) => {

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    })

    return (
        <BaseScreen>
           <CenterContentContainer>
               <CustomText 
                    category='h5'
                    textValue={LOGIN_TITLE}
                    style={ styles.title }
                />
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
                    <Layout style={styles.buttonsContainer}>
                        <CustomButton
                            size='medium'
                            appearance='filled'
                            status='primary'
                            activeOpacity={0.8}
                            buttonText={LOGIN}
                            paddingHorizontal={ButtonPaddingHorizontal.PADDING_LARGE}
                            // style={ styles.loginButton }
                            onPress={ () => navigation.replace('SignUpScreen') }
                        />
                        <CustomButton
                            size='medium'
                            appearance='ghost'
                            status='basic'
                            activeOpacity={0.6}
                            buttonText={SIGN_UP}
                            // style={ styles.signUpButton }
                            onPress={ () => navigation.replace('SignUpScreen') }
                        />
                    </Layout>
            </CenterContentContainer>
        </BaseScreen>
    );
};

const styles = StyleSheet.create({
    title: {
        position: 'absolute',
        top: 0,
        marginTop: verticalScale(150),
        alignSelf: 'flex-start',
        marginLeft: scale(40)
    },
    forgotPasswordButton: {
        alignSelf: 'flex-end',
        marginRight: scale(40)
    },
    buttonsContainer: {
        position: 'absolute',
        flexDirection: 'column',
        bottom: 0,
        marginBottom: verticalScale(80),
    }
});


export default LoginScreen;
