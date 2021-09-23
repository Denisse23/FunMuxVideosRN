import { StyleSheet } from 'react-native';
import { moderateScale, verticalScale } from 'react-native-size-matters';

const Form = StyleSheet.create({
    keyboarView: {
        width: '100%'
    },
    input: {
        width: "100%",
        padding: moderateScale(12),
        borderRadius: moderateScale(10),
        paddingHorizontal: moderateScale(50)
    },
    errorText: {
        width: '100%',
        paddingTop: verticalScale(-5),
        paddingHorizontal: moderateScale(50)
    }
})

export { Form }