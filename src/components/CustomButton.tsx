import React from 'react';
import { Button, ButtonProps, Text } from '@ui-kitten/components';
import { translate } from '../resources/translations';

interface Props extends ButtonProps {
    buttonText?: string
}
  
const CustomButton = (props: Props) => {
    const { buttonText } = props
    return (
        <Button
            {...props}
        >
            <Text>{ buttonText ? translate(buttonText) : "" }</Text>
        </Button>
    );
}

export default CustomButton;