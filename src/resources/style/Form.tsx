import { StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';

const Form = StyleSheet.create({
    keyboarView: {
        width: '100%',
    },
    input: {
        width: "100%",
        padding: moderateScale(12),
        borderRadius: moderateScale(10),
        paddingHorizontal: moderateScale(50)
    },
})

export { Form }