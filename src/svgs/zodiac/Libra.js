import * as React from "react"
import Svg, {Circle, Path} from "react-native-svg"
import PropTypes from "prop-types";

function Libra({color, height, width, style}) {
    return (
        <Svg height={height} width={width} viewBox="0 0 512 512" style={style}>
            <Circle cx={256} cy={256} r={256} fill="#ffe047"/>
            <Path
                d="M511.939 260.814L401.794 150.669h-7.262L286.623 39.606c-7.238-8.887-18.266-14.564-30.623-14.564-21.812 0-39.494 17.682-39.494 39.494 0 15.28 8.683 28.523 21.378 35.091v51.043H110.206L48.865 295.8H33.427v17.228h5.243a67.589 67.589 0 00-.16 4.334c0 21.482 9.451 40.752 24.419 53.889L197.24 505.213A256.658 256.658 0 00256 512c139.775 0 253.371-112.024 255.939-251.186z"
                fill="#ffcf00"
            />
            <Path
                d="M330.098 317.362c0 39.597 32.099 71.696 71.696 71.696 39.596 0 71.696-32.099 71.696-71.696 0-1.838-.092-3.654-.228-5.458H330.326a72.473 72.473 0 00-.228 5.458z"
                fill="#ff633e"
            />
            <Path
                d="M473.489 317.362c0-1.838-.092-3.654-.228-5.458h-71.468v77.154c39.597 0 71.696-32.099 71.696-71.696z"
                fill="#ff3200"
            />
            <Path
                d="M470.348 312.863l-68.554-162.194H110.206L41.653 312.863H178.76l-61.43-145.341h277.34l-61.43 145.341h137.108zm-113.931-15.45l45.377-110.287 45.377 110.287h-90.754zm-291.588 0l45.377-110.287 45.377 110.287H64.829z"
                fill="#3a4de3"
            />
            <Path
                d="M470.348 312.863l-68.554-162.194H256v16.854h138.67l-61.43 145.341h137.108v-.001zm-68.554-125.737l45.377 110.287h-90.754l45.377-110.287z"
                fill="#283ee1"
                stroke="#bd9b7b"
                strokeMiterlimit={10}
            />
            <Path fill="#fff" d="M325.01 295.8h153.56v17.229H325.01z"/>
            <Path fill="#d9d9db" d="M401.79 295.8h76.78v17.228h-76.78z"/>
            <Path fill="#283ee1" d="M237.88 97.51h36.23v329.37h-36.23z"/>
            <Path fill="#1c2ede" d="M256 97.51h18.11v329.37H256z"/>
            <Circle cx={256} cy={64.53} r={39.494} fill="#fff"/>
            <Path fill="#ff633e" d="M162.43 426.14h187.14v41.488H162.43z"/>
            <Path fill="#ff3200" d="M256 426.14h93.57v41.488H256z"/>
            <Path
                d="M295.494 64.536c0-21.812-17.682-39.494-39.494-39.494v78.988c21.812-.001 39.494-17.683 39.494-39.494z"
                fill="#d9d9db"
            />
            <Path
                d="M38.51 317.362c0 39.597 32.099 71.696 71.696 71.696 39.596 0 71.696-32.099 71.696-71.696 0-1.838-.092-3.654-.228-5.458H38.738a72.473 72.473 0 00-.228 5.458z"
                fill="#ff633e"
            />
            <Path
                d="M181.902 317.362c0-1.838-.092-3.654-.228-5.458h-71.468v77.154c39.597 0 71.696-32.099 71.696-71.696z"
                fill="#ff3200"
            />
            <Path fill="#fff" d="M33.427 295.8h153.56v17.229H33.427z"/>
            <Path fill="#d9d9db" d="M110.21 295.8h76.78v17.228h-76.78z"/>
        </Svg>
    )
}

Libra.defaultProps = {
    height: 120,
    width: 120,
    color: '#FFFFFFFF'
};

Libra.propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    style: PropTypes.object,
    color: PropTypes.string
};

export default Libra
