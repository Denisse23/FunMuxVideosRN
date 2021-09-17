import React from 'react';
import { Button, ButtonProps} from '@ui-kitten/components';
import { Buttons, ButtonPaddingHorizontal } from '../resources/style'
import CustomText from './CustomText';

interface Props extends ButtonProps {
    buttonText?: string,
    paddingHorizontal?: ButtonPaddingHorizontal
}
  
const CustomButton = (props: Props) => {
    const { buttonText, paddingHorizontal, style} = props
    return (
        <Button
            {...props}
            style={{ 
                ...Buttons.commonPrimary,
                paddingHorizontal: paddingHorizontal || ButtonPaddingHorizontal.PADDING_SMALL,
                ...style as {}
            }}
        >
            {buttonText && <CustomText textValue={buttonText}/> }
        </Button>
    );
}

export default CustomButton;