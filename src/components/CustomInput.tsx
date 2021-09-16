import React from 'react';
import { Layout, Input, InputProps } from '@ui-kitten/components';
import { Form } from '../resources/style'
import { translate } from '../resources/translations';
  
const CustomInput = (props: InputProps ) => {
    const { placeholder, label } = props
    return (
        <Layout>
          <Input
            {...props}
            label={label ? translate(label.toString()) : undefined}
            placeholder={placeholder ? translate(placeholder) : ""}
            style={Form.input}
          />
        </Layout>
    );
}

export default CustomInput;
