import React from "react";
import {Platform} from "react-native";

const PlatformUtils = {
    isIos : Platform.OS === 'ios',
    isAndroid : Platform.OS === 'android',
}

export default PlatformUtils;