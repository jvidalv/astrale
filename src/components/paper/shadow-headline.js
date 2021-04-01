import React from 'react';
import { StyleSheet } from 'react-native';
import { Title } from 'react-native-paper';

/**
 * @param props
 * @returns {*}
 * @constructor
 */
function ShadowHeadline(props) {
  return (
    <Title {...props} style={[props.style, styles.shadow]}>
      {props.children}
    </Title>
  );
}

const styles = StyleSheet.create({
  shadow: {
    textShadowColor: '#0000003D',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
});

export default ShadowHeadline;
