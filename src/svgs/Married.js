import PropTypes from 'prop-types';
import * as React from 'react';
import { useTheme } from 'react-native-paper';
import Svg, { Circle, Path } from 'react-native-svg';

function Married({ color, height, width, style }) {
  const { colors } = useTheme();

  return (
    <Svg height={height} width={width} viewBox="0 0 512 512" style={style}>
      <Circle
        cx={236.967}
        cy={236.967}
        r={236.967}
        fill={colors.primary + '50'}
      />
      <Path
        d="M362.409 45.446c0 51.115-85.141 90.88-85.141 90.88s-21.291-9.941-42.571-26.272c-20.532-15.725-42.571-38.626-42.571-64.608 0-24.553 19.548-44.794 44.235-45.43 17.147-.453 32.791 8.769 40.907 23.424C285.489 8.596 301.308-.467 318.153.027c24.685.609 44.256 20.821 44.256 45.419z"
        fill="#f92a08"
      />
      <Path
        d="M361.95 38.992c-3.207 17.418-23.101 32.814-42.8 44.073-25.943 14.828-57.877 14.81-83.815-.026-16.574-9.48-39.3-25.271-42.75-44.036 6.1-43.039 63.624-53.59 84.683-15.563 21.093-38.091 78.62-27.382 84.682 15.552z"
        fill="#f92a08"
      />
      <Path
        d="M267.305 482.053C155.743 558.752.03 479.899.03 341.339c0-94.261 76.405-170.667 170.667-170.667 46.965 0 89.504 18.976 120.363 49.664a153.49 153.49 0 00-48.117 36.821c-70.883-60.907-183.179-11.46-183.179 84.181 0 61.269 49.664 110.933 110.933 110.933 73.767 0 126.852-70.745 106.72-141.291.798 0 12.9-27.511 48.512-40.661 33.773 73.691 11.196 163.7-58.624 211.734z"
        fill="#ffe773"
      />
      <Path
        d="M512.03 358.406c0 126.859-144.667 197.54-244.725 123.648a171.866 171.866 0 0043.264-42.891c61.956 36.853 141.728-7.707 141.728-80.757 0-51.84-42.027-93.867-93.867-93.867-33.759 0-64.316 17.973-81.003 46.432h-.011v.011c-14.524 24.725-16.465 54.08-7.232 79.477a111.248 111.248 0 01-43.627 46.731c-45.793-76.403-16.82-177.157 64.501-216.853 100.938-49.385 220.972 23.819 220.972 138.069z"
        fill="#efd66c"
      />
    </Svg>
  );
}

Married.defaultProps = {
  height: 120,
  width: 120,
  color: 'white',
};

Married.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  style: PropTypes.object,
  color: PropTypes.string,
};

export default Married;
