import React from 'react';

//Components
import { Text, TextProps } from '@ui-kitten/components';

//Resources
import { translate } from '../resources/translations';
  
export interface CustomTextProps extends TextProps{
    textValue: string
}

export const CustomText = (props: CustomTextProps) => {
    const { textValue } = props
    return (
        <Text
            {...props}
        >
            {translate(textValue)}
        </Text>
    );
};