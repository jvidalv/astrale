import React from "react";
import PropTypes from "prop-types";
import {Zodiac} from "../../svgs";
import {Caption, Subheading, TouchableRipple} from "react-native-paper";
import i18n from "i18n-js";

const _signs = {
    Aquarius: Zodiac.Aquarius,
    Aries: Zodiac.Aries,
    Cancer: Zodiac.Cancer,
    Capricorn: Zodiac.Capricorn,
    Gemini: Zodiac.Gemini,
    Leo: Zodiac.Leo,
    Libra: Zodiac.Libra,
    Pisces: Zodiac.Pisces,
    Sagittarius: Zodiac.Sagittarius,
    Scorpio: Zodiac.Scorpio,
    Taurus: Zodiac.Taurus,
    Virgo: Zodiac.Virgo
}

/**
 * @param sign {string}
 * @param title {string}
 * @param showTitle {boolean}
 * @param subtitle {string}
 * @param onPress {function}
 * @param style {object}
 * @param signHeight {string|number}
 * @param signWidth {string|number}
 * @param styleTitle {object}
 * @param styleSubtitle {object}
 * @returns {*}
 * @constructor
 */
function Sign({sign, title, showTitle, subtitle, onPress, style, signHeight, signWidth, styleTitle, styleSubtitle}) {
    const ParsedSign = _signs[sign];
    console.log(title, sign)
    return (
        <TouchableRipple onPress={() => onPress(sign)} style={[{alignItems: 'center'}, style]}>
            <React.Fragment>
                <ParsedSign width={signHeight} height={signWidth}/>
                {showTitle && <Subheading style={styleTitle}>{title ?? i18n.t(sign)}</Subheading>}
                {subtitle && <Caption style={styleSubtitle}>{subtitle}</Caption>}
            </React.Fragment>
        </TouchableRipple>
    )
}

Sign.defaultProps = {
    height: 120,
    width: 120,
    showTitle: true,
};

Sign.propTypes = {
    sign: PropTypes.string.isRequired,
    title: PropTypes.string,
    showTitle: PropTypes.bool,
    subtitle: PropTypes.string,
    onPress: PropTypes.func,
    style: PropTypes.object,
    styleTitle : PropTypes.object,
    styleSubtitle : PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default Sign;