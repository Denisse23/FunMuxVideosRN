import React from 'react';

//Components
import { Text, TextProps } from '@ui-kitten/components';

//Resources
import { translate } from '../resources/translations';
  
interface Props extends TextProps{
    textValue: string
}

export const CustomText = (props: Props) => {
    const { textValue } = props
    return (
        <Text
            {...props}
        >
            {translate(textValue)}
        </Text>
    );
};