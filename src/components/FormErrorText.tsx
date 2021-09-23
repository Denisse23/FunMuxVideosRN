import React from 'react';

//Components
import { CustomText, CustomTextProps } from './';

//Resources
import { Form } from '../resources/style'


export const FormErrorText = (props: CustomTextProps) => {
    return (
        <CustomText 
            {...props}
            style={Form.errorText}
            category='c1'
            status='danger'
        />
    );
};