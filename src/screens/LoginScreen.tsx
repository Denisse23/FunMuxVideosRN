import React from 'react';
import {StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack'
import { scale, verticalScale } from 'react-native-size-matters';

//Components
import { Layout } from '@ui-kitten/components';
import { 
    CustomInput, 
    FormContainer, 
    CustomButton, 
    CenterContentContainer,
    CustomText
} from '../components';

//Screens
import { BaseScreen } from './';

//Hooks
import { useForm } from '../hooks/useForm';

// Resources
import { ButtonPaddingHorizontal } from '../resources/style'
import { 
    LOG_IN_TITLE,
    EMAIL_LABEL, 
    EMAIL_PLACEHOLDER,
    PASSWORD_LABEL,
    PASSWORD_PLACEHOLDER,
    SIGN_UP,
    LOG_IN
} from '../resources/translations/translationKeyConstants';

//Navigation
import { AuthNavigatorStackParams } from '../navigation';

//Services
import { logIn } from '../services/redux/auth';

interface Props extends StackScreenProps<AuthNavigatorStackParams, 'LoginScreen'> { }

export const LogInScreen = ({ navigation }: Props) => {

    const dispatch = useDispatch()

    const { email, password, onChange } = useForm({
        email: '',
        password: ''
    })

    return (
        <BaseScreen>
           <CenterContentContainer>
               <CustomText 
                    category='h5'
                    textValue={LOG_IN_TITLE}
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
                            buttonText={LOG_IN}
                            paddingHorizontal={ButtonPaddingHorizontal.PADDING_LARGE}
                            // style={ styles.loginButton }
                            onPress={() => dispatch (logIn(email, password)) }
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