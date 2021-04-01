import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { TextInput as PaperTextInput, useTheme } from 'react-native-paper';

import MainNav from '../navs/main-nav';

/**
 * @param props
 * @returns {*}
 * @constructor
 */
function CustomInput(props) {
  const { colors } = useTheme();
  const maxLength = props.keyboardType === 'number-pad' ? 5 : null;
  return (
    <PaperTextInput
      {...props}
      style={[styles.input, { backgroundColor: colors.text + '00' }]}
      render={(props) => (
        <TextInput
          {...props}
          style={[styles.inputCustom, props.customStyle]}
          maxLength={maxLength}
        />
      )}
    />
  );
}

const styles = StyleSheet.create({
  inputCustom: {
    textAlign: 'center',
    marginTop: 10,
    color: 'white',
    fontSize: 30,
  },
  input: {
    borderRadius: 5,
    fontSize: 30,
    textAlign: 'center',
    justifyContent: 'flex-end',
  },
});
MainNav.defaultProps = {
  customStyle: null,
};

export default CustomInput;
