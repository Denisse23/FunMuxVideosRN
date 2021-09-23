import React from 'react';
import {StyleSheet} from 'react-native';
import { useDispatch } from 'react-redux';
import { StackScreenProps } from '@react-navigation/stack'
import { scale, verticalScale } from 'react-native-size-matters';
import { useForm, Controller } from "react-hook-form";

//Components
import { Layout } from '@ui-kitten/components';
import { 
    CustomInput, 
    FormContainer, 
    CustomButton, 
    CenterContentContainer,
    CustomText,
    FormErrorText
} from '../components';

//Screens
import { BaseScreen } from './';

// Resources
import { ButtonPaddingHorizontal } from '../resources/style'
import { 
    LOG_IN_TITLE,
    EMAIL_LABEL, 
    EMAIL_PLACEHOLDER,
    PASSWORD_LABEL,
    PASSWORD_PLACEHOLDER,
    SIGN_UP,
    LOG_IN,
    REQUIRED_FIELD_ERROR,
    PASSWORD_LENGTH_ERROR
} from '../resources/translations/translationKeyConstants';
import { EMAIL_PATTERN, PASSWORD_PATTERN } from '../constants/patterns';

//Navigation
import { AuthNavigatorStackParams } from '../navigation';

//Services
import { logIn } from '../services/redux/auth';
import { EMAIL_PATTERN_ERROR, PASSWORD_PATTERN_ERROR } from '../resources/translations/translationKeyConstants';

interface Props extends StackScreenProps<AuthNavigatorStackParams, 'LoginScreen'> { }

interface LogInFormInputs {
    email: string
    password: string
}

export const LogInScreen = ({ navigation }: Props) => {

    const dispatch = useDispatch()

    const { control, handleSubmit, formState: { errors } } = useForm<LogInFormInputs>();

    const onSubmit = (data: LogInFormInputs) => {
        dispatch( logIn(data.email, data.password) )
    }

    return (
        <BaseScreen>
           <CenterContentContainer>
               <CustomText 
                    category='h5'
                    textValue={LOG_IN_TITLE}
                    style={ styles.title }
                />
                <FormContainer>
                    <Controller
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: REQUIRED_FIELD_ERROR
                            },
                            pattern: {
                                value: EMAIL_PATTERN,
                                message: EMAIL_PATTERN_ERROR
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <CustomInput 
                                label={EMAIL_LABEL} 
                                placeholder={EMAIL_PLACEHOLDER}
                                autoCorrect={false}
                                autoCapitalize='none'
                                keyboardType='email-address'
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name='email'
                        defaultValue=''
                    />
                    {
                        errors.email && errors.email.message &&
                        <FormErrorText textValue={errors.email.message}/>
                    }
                    <Controller
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: REQUIRED_FIELD_ERROR
                            },
                            minLength: {
                                value: 6,
                                message: PASSWORD_LENGTH_ERROR
                            },
                            pattern: {
                                value: PASSWORD_PATTERN,
                                message: PASSWORD_PATTERN_ERROR
                            }
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <CustomInput    
                                label={PASSWORD_LABEL}
                                placeholder={PASSWORD_PLACEHOLDER}
                                autoCorrect={false}
                                autoCapitalize='none'
                                secureTextEntry
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value}
                            />
                        )}
                        name='password'
                        defaultValue=''
                    />
                    {
                        errors.password && errors.password.message &&
                        <FormErrorText textValue={errors.password.message}/>
                    }
                </FormContainer>
                    <Layout style={styles.buttonsContainer}>
                        <CustomButton
                            size='medium'
                            appearance='filled'
                            status='primary'
                            activeOpacity={0.8}
                            buttonText={LOG_IN}
                            paddingHorizontal={ButtonPaddingHorizontal.PADDING_LARGE}
                            onPress={ handleSubmit(onSubmit) }
                        />
                        <CustomButton
                            size='medium'
                            appearance='ghost'
                            status='basic'
                            activeOpacity={0.6}
                            buttonText={SIGN_UP}
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