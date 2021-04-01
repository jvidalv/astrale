import PropTypes from 'prop-types';
import React from 'react';
import { Animated, Easing } from 'react-native';

/**
 * Fades a set of children to the top
 * @param children {Array<React.ReactElement>}
 * @param rotate {boolean}
 * @param style {object}
 * @returns {*}
 * @constructor
 */
function Rotation({ children, rotate, style }) {
  const spinAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(spinAnim, {
      toValue: rotate ? 1 : 0,
      easing: Easing.linear,
      duration: 250000,
      useNativeDriver: true,
    }).start();
  }, [rotate, spinAnim]);

  const spinInterpolate = spinAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '10000deg'],
  });

  return (
    <Animated.View
      style={[style, { transform: [{ rotate: spinInterpolate }] }]}
    >
      {children}
    </Animated.View>
  );
}

Rotation.defaultProps = {
  rotate: false,
};

Rotation.propTypes = {
  rotate: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  style: PropTypes.object,
};

export default Rotation;
