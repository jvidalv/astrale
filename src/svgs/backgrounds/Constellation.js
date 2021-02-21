import PropTypes from 'prop-types';
import * as React from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';

function Constellation({ color, dotColor, height, width, style }) {
  return (
    <Svg height={height} width={width} viewBox="0 0 512 512" style={style}>
      <G fill={color}>
        <Path d="M171.39 37.269l102.524 164.723a7.718 7.718 0 01-2.475 10.633 7.714 7.714 0 01-10.633-2.475L157.551 44.253zM460.823 489.936a7.72 7.72 0 01-6.886-8.472l19.288-186.64c.438-4.242 4.231-7.332 8.472-6.886a7.72 7.72 0 016.886 8.472l-19.767 191.277zM445.962 500.589c-.724 0-1.46-.103-2.189-.319l-190.494-56.265a7.719 7.719 0 01-5.217-9.59c1.207-4.089 5.498-6.43 9.59-5.217l190.494 56.265a7.719 7.719 0 015.217 9.59 7.724 7.724 0 01-7.401 5.536zM466.97 282.6a7.726 7.726 0 01-2.138-.303L289.55 231.874a7.72 7.72 0 01-5.285-9.553 7.723 7.723 0 019.553-5.285L469.1 267.459a7.72 7.72 0 01-2.13 15.141zM242.71 423.864a7.722 7.722 0 01-7.621-9.013l30.556-180.107a7.72 7.72 0 0115.223 2.583l-30.556 180.107a7.723 7.723 0 01-7.602 6.43zM36.683 9.274l113.309 13.083-2.555 15.247L32.678 24.353z" />
      </G>
      <Circle cx={90.735} cy={112.896} fill={dotColor} r={7.72} />
      <Circle cx={168.51} cy={252.733} fill={dotColor} r={7.72} />
      <Circle cx={426.639} cy={85.992} fill={dotColor} r={7.72} />
      <Circle cx={333.616} cy={353.147} fill={dotColor} r={7.72} />
      <Circle cx={401.741} cy={418.038} fill={dotColor} r={7.72} />
      <Circle cx={393.976} cy={195.996} fill={dotColor} r={7.72} />
      <Circle cx={471.26} cy={151.807} fill={dotColor} r={7.72} />
      <Circle cx={136.487} cy={406.276} fill={dotColor} r={7.72} />
      <Circle cx={28.345} cy={16.087} fill={dotColor} r={16.087} />
      <Circle cx={158.459} cy={31.1} fill={dotColor} r={16.177} />
      <Circle cx={51.563} cy={432.033} fill={dotColor} r={14.252} />
      <Circle cx={80.067} cy={266.985} fill={dotColor} r={14.252} />
      <Circle cx={240.001} cy={432.033} fill={dotColor} r={18.951} />
      <Circle cx={459.171} cy={496.009} fill={dotColor} r={15.991} />
      <Circle cx={481.55} cy={280.474} fill={dotColor} r={18.192} />
      <Circle cx={319.813} cy={81.435} fill={dotColor} r={16.258} />
      <Circle cx={275.991} cy={219.94} fill={dotColor} r={19.284} />
      <Circle cx={410.308} cy={337.315} fill={dotColor} r={16.331} />
    </Svg>
  );
}

Constellation.defaultProps = {
  height: 120,
  width: 120,
  color: '#fbf1e2',
  dotColor: '#f4d8a5',
};

Constellation.propTypes = {
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  style: PropTypes.object,
  color: PropTypes.string,
};

export default Constellation;
