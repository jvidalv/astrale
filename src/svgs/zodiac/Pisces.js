import * as React from "react";
import Svg, {Circle, G, Path} from "react-native-svg";
import PropTypes from "prop-types";

function Pisces({color, height, width, style}) {
    return (
        <Svg height={height} width={width} viewBox="0 0 512 512" style={style}>
            <G fill="#bc4598">
                <Circle cx={32} cy={96} r={16}/>
                <Circle cx={272} cy={304} r={16}/>
                <Circle cx={416} cy={480} r={16}/>
                <Path
                    d="M80 32h16v16H80zM48 48h16v16H48zM216 176h16v16h-16zM344 264h16v16h-16zM152 232h16v16h-16zM464 400h16v16h-16zM448 432h16v16h-16z"/>
            </G>
            <Path
                d="M457.667 78.333C456 69.333 456 56 456 56H352l41 32c20-5 81 22 81 22s-14.667-22.667-16.333-31.667z"
                fill="#c378cb"
            />
            <Path d="M384 224s-6 41 4 72l28-32z" fill="#b267ba"/>
            <Path d="M311 179l-24-15s-13 45 9 108c0 0 8-24 40-32z" fill="#c378cb"/>
            <Path
                d="M476.61 328a231.663 231.663 0 01-39.43 72.91C416.1 427.23 398.49 440.89 368 456c-1.34-5.25-2.84-10.82-3.98-16.56a81.781 81.781 0 01-1.78-18.78c.59-15.54 7.42-31.26 29.76-44.66 0 0-41.72 6.47-59.49-31.4a78.386 78.386 0 01-5.88-18.7 134.694 134.694 0 01-1.63-33.57S416 360 464 328z"
                fill="#b267ba"
            />
            <Path
                d="M437.18 400.91C449.21 314.31 421.69 242.85 288 176c-16-8-56-24-56-24L213.91 26.98s10.5-1.05 21.6-1.91c5.6-.43 11.36-.8 15.99-.97 1.67-.07 3.19-.1 4.5-.1 128.13 0 232 103.87 232 232a231.025 231.025 0 01-50.82 144.91z"
                fill="#5f4bbc"
            />
            <Path
                d="M450.555 291.435c-5.637-47.909-24-75.71-37.316-92.455l12.522-9.96c23.1 29.043 36.031 60.993 40.684 100.545z"
                fill="#4c3aa3"
            />
            <Circle cx={296} cy={72} fill="#362684" r={16}/>
            <Path
                d="M364.5 129.5l-16.167 22.986c12.941 6.05 31.542 31.514 31.542 31.514l44.625-17.5c-20.489-24.2-60-37-60-37z"
                fill="#c378cb"
            />
            <Path
                d="M297.94 159.761l-3.88-15.522 28.785-7.2 20.255-33.752-14.528-36.316 14.856-5.942 16 40a8 8 0 01-.568 7.087l-24 40a8 8 0 01-4.92 3.645z"
                fill="#4c3aa3"
            />
            <Path
                d="M186.5 35L169 44s18.5 86.5 63 108l10-7.5c4.555-3.893 6.5-14.5-3.5-22.5-10.024-8.019-31.66-40.033-52-87z"
                fill="#705dc9"
            />
            <Path
                d="M260.28 97.38l-15.89 1.9-8.88-74.21c5.6-.43 11.36-.8 15.99-.97z"
                fill="#4c3aa3"
            />
            <Path
                d="M55.333 433.667C57 442.667 57 456 57 456h104l-41-32c-20 5-81-22-81-22s14.667 22.667 16.333 31.667z"
                fill="#c378cb"
            />
            <Path d="M129 288s6-41-4-72l-28 32z" fill="#b267ba"/>
            <Path d="M202 333l24 15s13-45-9-108c0 0-8 24-40 32z" fill="#c378cb"/>
            <Path
                d="M36.39 184a231.663 231.663 0 0139.43-72.91C96.9 84.77 114.51 71.11 145 56c1.34 5.25 2.84 10.82 3.98 16.56a81.781 81.781 0 011.78 18.78c-.59 15.54-7.42 31.26-29.76 44.66 0 0 41.72-6.47 59.49 31.4a78.386 78.386 0 015.88 18.7 134.694 134.694 0 011.63 33.57S97 152 49 184z"
                fill="#b267ba"
            />
            <Path
                d="M75.82 111.09C63.79 197.69 91.31 269.15 225 336c16 8 56 24 56 24l18.09 125.02s-10.5 1.05-21.6 1.91c-5.6.43-11.36.8-15.99.97-1.67.07-3.19.1-4.5.1-128.13 0-232-103.87-232-232a231.025 231.025 0 0150.82-144.91z"
                fill="#5f4bbc"
            />
            <Path
                d="M62.445 220.565c5.637 47.909 24 75.71 37.316 92.455l-12.522 9.96c-23.1-29.043-36.031-60.993-40.684-100.545z"
                fill="#4c3aa3"
            />
            <Circle cx={217} cy={440} fill="#362684" r={16}/>
            <Path
                d="M148.5 382.5l16.167-22.986C151.726 353.464 133.125 328 133.125 328L88.5 345.5c20.489 24.2 60 37 60 37z"
                fill="#c378cb"
            />
            <Path
                d="M215.06 352.239l3.88 15.522-28.785 7.2-20.255 33.752 14.527 36.316-14.856 5.942-16-40a8 8 0 01.568-7.087l24-40a8 8 0 014.92-3.645z"
                fill="#4c3aa3"
            />
            <Path
                d="M372.78 340.72l-4.89 15.23-35.38-11.35a78.386 78.386 0 01-5.88-18.7zM396.86 414.36l-32.84 25.08a81.781 81.781 0 01-1.78-18.78l24.9-19.02zM140.22 171.28l4.89-15.23 35.38 11.35a78.386 78.386 0 015.88 18.7zM116.14 97.64l32.84-25.08a81.781 81.781 0 011.78 18.78l-24.9 19.02z"
                fill="#a45bad"
            />
            <Path
                d="M326.5 477l17.5-9s-18.5-86.5-63-108l-10 7.5c-4.555 3.893-6.5 14.5 3.5 22.5 10.024 8.019 31.66 40.033 52 87z"
                fill="#705dc9"
            />
            <Path
                d="M252.72 414.62l15.89-1.9 8.88 74.21c-5.6.43-11.36.8-15.99.97z"
                fill="#4c3aa3"
            />
            <Path
                d="M384 96h16v16h-16zM112 296h16v16h-16zM113 400h16v16h-16z"
                fill="#5540b0"
            />
        </Svg>
    );
}

Pisces.defaultProps = {
    height: 120,
    width: 120,
    color: "#FFFFFFFF",
};

Pisces.propTypes = {
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    style: PropTypes.object,
    color: PropTypes.string,
};

export default Pisces;
