import PropTypes from 'prop-types';
import * as React from 'react';
import { useTheme } from 'react-native-paper';
import Svg, { Circle, Ellipse, G, Path } from 'react-native-svg';

function InLove({ color, height, width, style }) {
  const { colors } = useTheme();
  return (
    <Svg height={height} width={width} viewBox="0 0 512 512" style={style}>
      <Circle cx={256} cy={265.905} r={246.096} fill="#ffd93b" />
      <G fill="#f92a08">
        <Path d="M182.704 19.857c11.632 29.696-27.36 97.376-27.36 97.376S80.752 94.017 69.12 64.337c-6.272-16.032 1.68-34.224 17.712-40.496 12.96-5.072 27.328-.864 35.648 9.408-.88-13.2 6.768-26.016 19.728-31.088 16.08-6.304 34.224 1.664 40.496 17.696zM498.288 97.201c-17.12 35.888-112 58.08-112 58.08s-42.448-87.712-25.312-123.6c9.248-19.376 32.576-27.632 51.968-18.384 15.68 7.488 24.096 24.144 21.824 40.496 11.28-12.048 29.456-16.016 45.136-8.544 19.44 9.264 27.632 32.576 18.384 51.952z" />
      </G>
      <Path
        d="M250.432 230.737c-5.744 46.464-47.52 84.048-93.456 84.048-45.792 0-78.448-37.584-72.704-84.048 5.728-46.336 47.648-83.904 93.44-83.904 45.936 0 78.448 37.584 72.72 83.904z"
        fill="#fff"
      />
      <Circle cx={173.616} cy={196.161} r={34.672} fill="#3e4347" />
      <Ellipse
        transform="rotate(-134.999 185.728 183.985)"
        cx={185.728}
        cy={183.983}
        rx={10.736}
        ry={7.568}
        fill="#fff"
      />

      <Path
        d="M431.152 244.609c3.824 36.8-23.216 66.544-60.464 66.544-37.136 0-70.464-29.76-74.288-66.544-3.808-36.688 23.344-66.448 60.48-66.448 37.264 0 70.464 29.76 74.272 66.448z"
        fill="#fff"
      />
      <Circle cx={351.808} cy={224.481} r={34.672} fill="#3e4347" />
      <Ellipse
        transform="rotate(-134.999 363.912 212.265)"
        cx={363.91}
        cy={212.263}
        rx={10.736}
        ry={7.568}
        fill="#fff"
      />
      <Path
        d="M98.112 349.729c12.208 18.528 24.464 31.2 39.744 44.464 31.696 26.704 73.648 42.288 117.872 42.816 46.464-.64 86.96-16.352 118.416-42.832 15.104-13.104 27.76-26.288 39.744-44.448-8.88 19.536-19.152 36.192-33.872 50.816-34.96 34.272-74.096 50.72-123.744 51.84-51.104-1.168-89.984-18.256-124.272-51.856-14.816-14.72-25.104-31.52-33.888-50.8z"
        fill="#3e4347"
      />
    </Svg>
  );
}

InLove.defaultProps = {
  height: 120,
  width: 120,
  color: 'white',
};

InLove.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  style: PropTypes.object,
  color: PropTypes.string,
};

export default InLove;
