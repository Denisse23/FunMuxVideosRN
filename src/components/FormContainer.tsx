import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    ScrollView,
} from 'react-native';

import { Form } from '../resources/style';


type Props = {
    children?: JSX.Element[] | JSX.Element
} 
  
const CustomForm = ({ children }: Props) => {
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
}

export default CustomForm;
    