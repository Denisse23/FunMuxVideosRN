import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

enum ButtonPaddingHorizontal{
    PADDING_SMALL = moderateScale(12),
    PADDING_MEDIUM = moderateScale(25),
    PADDING_LARGE = moderateScale(50)
}

const Buttons = StyleSheet.create({
    commonPrimary: {
        borderRadius: moderateScale(20),
        paddingHorizontal: ButtonPaddingHorizontal.PADDING_SMALL
    }
})

export { Buttons, ButtonPaddingHorizontal }