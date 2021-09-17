import React from 'react';
import { Text, TextProps } from '@ui-kitten/components';
import { translate } from '../resources/translations';
  
interface Props extends TextProps{
    textValue: string
}

const CustomText = (props: Props) => {
    const { textValue } = props
    return (
        <Text
            {...props}
        >
            {translate(textValue)}
        </Text>
    );
}

export default CustomText;