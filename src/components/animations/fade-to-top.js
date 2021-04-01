import PropTypes from 'prop-types';
import React from 'react';
import { Animated, Easing } from 'react-native';

/**
 * Fades a set of children to the top
 * @param children {Array<React.ReactElement>}
 * @param fadeToTop {boolean}
 * @param initialHeight {number}
 * @param finalHeight {number}
 * @returns {*}
 * @constructor
 */
function FadeToTop({ children, fadeToTop, initialHeight, finalHeight }) {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: fadeToTop ? 1 : 0,
      easing: Easing.ease,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, fadeToTop]);

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          opacity: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0],
          }),
          height: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [initialHeight, finalHeight],
          }),
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}

FadeToTop.defaultProps = {
  fadeToTop: false,
  initialHeight: 300,
  finalHeight: 80,
};

FadeToTop.propTypes = {
  fadeToTop: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FadeToTop;
