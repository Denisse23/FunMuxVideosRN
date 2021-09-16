import * as React from 'react';

import {StyleSheet} from 'react-native';
import {Text, Layout, Button, Input, Icon} from '@ui-kitten/components';

import { translate } from '../resources/translations';

const LoginScreen = () => {
    return (
        <Layout style={styles.parentStyle}>
            <Text>{translate('hello')}</Text>
        </Layout>
    );
};

const styles = StyleSheet.create({
    parentStyle: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    
  });
  
  export default LoginScreen;
