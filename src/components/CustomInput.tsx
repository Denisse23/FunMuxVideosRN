import React from 'react';

//Components
import { Layout, Input, InputProps } from '@ui-kitten/components';

//Resources
import { Form } from '../resources/style'
import { translate } from '../resources/translations';
  
export const CustomInput = (props: InputProps ) => {
    const { placeholder, label } = props
    return (
        <Layout>
          <Input
            {...props}
            label={
              label ? 
              translate(label.toString())
              : undefined
            }
            placeholder={placeholder ? translate(placeholder) : ""}
            size='medium'
            style={Form.input}
          />
        </Layout>
    );
}
