import PropTypes from 'prop-types';
import React from 'react';
import { Animated, Easing } from 'react-native';

/**
 * Fades a set of children to the top
 * @param children {Array<React.ReactElement>}
 * @param duration {number}
 * @returns {*}
 * @constructor
 */
function ShowFromTop({ children, duration }) {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  Animated.timing(fadeAnim, {
    toValue: 1,
    easing: Easing.linear,
    duration,
    useNativeDriver: true,
  }).start();

  return (
    <Animated.View
      style={[
        {
          flex: 1,
          opacity: fadeAnim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [-25, 0],
              }),
            },
          ],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
}

ShowFromTop.defaultProps = {
  duration: 250,
};
ShowFromTop.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default ShowFromTop;
