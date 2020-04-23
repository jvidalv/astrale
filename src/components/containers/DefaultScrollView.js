import React from "react";
import {KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar} from "react-native";
import {withTheme} from 'react-native-paper';
import PropTypes from "prop-types";

/**
 * @param children
 * @param theme react-native-paper theme
 * @param background
 * @param barStyle
 * @param keyboardAvoidView
 * @param styleScrollView {object}
 * @returns {*}
 * @constructor
 */
function DefaultScrollView({children, theme, background, barStyle, keyboardAvoidView, styleScrollView}) {
    const {colors} = theme;
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle={barStyle} backgroundColor={background || colors.primary}/>
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

export default withTheme(DefaultScrollView);