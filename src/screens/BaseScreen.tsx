import React from 'react';
import {StyleSheet} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

//Components
import { Layout } from '@ui-kitten/components';

type Pros = {
    children?: React.ReactNode | React.ReactNode[]
}

export const BaseScreen = ({ children }: Pros) => {
    const {top} = useSafeAreaInsets();

    return (
        <Layout style={{... styles.parentStyle , marginTop: top}}>
            {children}
        </Layout>
    )
};

const styles = StyleSheet.create({
    parentStyle: {
      flex: 1,
    },
    
});