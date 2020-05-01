import React from "react";
import {KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar} from "react-native";
import {useTheme} from 'react-native-paper';
import PropTypes from "prop-types";

/**
 * @param children
 * @param background
 * @param barStyle
 * @param keyboardAvoidView
 * @param styleScrollView {object}
 * @returns {*}
 * @constructor
 */
function DefaultScrollView({children, background, barStyle, keyboardAvoidView, styleScrollView}) {
    const {colors} = useTheme();
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle={barStyle} backgroundColor={background || colors.background} animated/>
            <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : null}
                                  enabled={keyboardAvoidView}>
                <ScrollView style={[{flex: 1}, {backgroundColor: background || colors.background}, styleScrollView]}>
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

DefaultScrollView.propTypes = {
    background: PropTypes.string,
    barStyle: PropTypes.oneOf(['light-content', 'dark-content']),
    styleScrollView: PropTypes.object
};

DefaultScrollView.defaultProps = {
    keyboardAvoidView: true,
    barStyle: "light-content"
};

export default DefaultScrollView;