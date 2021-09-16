import React from 'react';
import {StyleSheet} from 'react-native';
import { Layout } from '@ui-kitten/components';

const CenterContentContainer = ({ children } : any) => {
    return (
        <Layout style={{... styles.centerContent}}>
            {children}
        </Layout>
    )
}

const styles = StyleSheet.create({
    centerContent: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    
});

export default CenterContentContainer;