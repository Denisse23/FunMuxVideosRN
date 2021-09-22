import React from 'react';

//Components
import { Button, ButtonProps} from '@ui-kitten/components';
import { CustomText } from './';

//Resources
import { Buttons, ButtonPaddingHorizontal } from '../resources/style'

interface Props extends ButtonProps {
    buttonText?: string,
    paddingHorizontal?: ButtonPaddingHorizontal
}
  
export const CustomButton = (props: Props) => {
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
};