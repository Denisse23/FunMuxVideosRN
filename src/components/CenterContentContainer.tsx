import React from 'react';
import { StyleSheet } from 'react-native';

//Components
import { Layout } from '@ui-kitten/components';

export const CenterContentContainer = ({ style, children } : any) => { 
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