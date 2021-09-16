import React from 'react';
import {StyleSheet} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Layout } from '@ui-kitten/components';

type Pros = {
    children: JSX.Element | JSX.Element[]
}

const BaseScreen = ({ children }: Pros) => {
    const {top} = useSafeAreaInsets();

    return (
        <Layout style={{... styles.parentStyle , marginTop: top}}>
            {children}
        </Layout>
    )
}

const styles = StyleSheet.create({
    parentStyle: {
      flex: 1,
    },
    
});

export default BaseScreen;