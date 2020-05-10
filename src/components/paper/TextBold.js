import React from "react";
import {Text} from "react-native-paper";

/**
 * @param children
 * @param style {object}
 * @returns {*}
 * @constructor
 */
function TextBold({children, style}) {
    return (
        <Text style={[{fontFamily: 'poppins_bold'}, style]}>
            {children}
        </Text>
    )
}

export default TextBold;