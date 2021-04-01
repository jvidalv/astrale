import PropTypes from 'prop-types';
import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

import { useIsDark } from '../../hooks/use-theme';

/**
 * @param style {object}
 * @returns {*}
 * @constructor
 */
function SpaceSky({ style }) {
  const isDark = useIsDark();
  const { width } = Dimensions.get('window');
  return (
    <View style={[styles.container, { opacity: isDark ? 0.8 : 0.3 }, style]}>
      <Image
        style={{
          height: 250,
          opacity: 0.3,
          width,
        }}
        resizeMethod="auto"
        source={require('./images/stars-background.gif')}
      />
      <Image
        style={{ height: 250, opacity: 0.2, marginTop: -50, width }}
        source={require('./images/stars-background.gif')}
      />
      <Image
        style={{ height: 250, opacity: 0.1, marginTop: -50, width }}
        source={require('./images/stars-background.gif')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -60,
    left: 0,
    right: 0,
  },
});

SpaceSky.PropsType = {
  style: PropTypes.object,
};

export default SpaceSky;
