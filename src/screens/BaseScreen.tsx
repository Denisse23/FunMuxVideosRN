import React from 'react';
import {StyleSheet} from 'react-native';
import { Layout } from '@ui-kitten/components';

type Pros = {
    children: JSX.Element | JSX.Element[]
}

const BaseScreen = ({ children }: Pros) => {
    return (
        <Layout style={styles.parentStyle}>
            {children}
        </Layout>
    )
}

const styles = StyleSheet.create({
    parentStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
});

export default BaseScreen;