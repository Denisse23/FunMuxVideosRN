import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';

//Components
import { Layout } from '@ui-kitten/components';

type Props = {
    style?: StyleProp<ViewStyle>,
    children?: React.ReactNode | React.ReactNode[]
} 

export const CenterContentContainer = ({ style, children } : Props) => { 
    return (
        <Layout style={{
                ... styles.centerContent,
                ...style as {}
            }}>
            {children}
        </Layout>
    )
};

const styles = StyleSheet.create({
    centerContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    
});