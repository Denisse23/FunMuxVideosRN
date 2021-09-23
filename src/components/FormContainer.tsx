import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';

//Resources
import { Form } from '../resources/style';


type Props = {
    children?: React.ReactNode | React.ReactNode[]
} 
  
export const FormContainer = ({ children }: Props) => {
    return (
        <KeyboardAvoidingView
            keyboardVerticalOffset={Platform.select({ios: 0, android: -50})}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={Form.keyboarView}
        >
            <ScrollView>
                {children}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};
    