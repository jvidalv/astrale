import React from "react";
import {KeyboardAvoidingView, Platform, SafeAreaView, StatusBar, StyleSheet, View} from "react-native";
import {withTheme} from 'react-native-paper';
import PropTypes from "prop-types";

/**
 * @param children
 * @param theme react-native-paper theme
 * @param background
 * @param barStyle
 * @param keyboardAvoidView
 * @param styleView
 * @returns {*}
 * @constructor
 */
function DefaultView({children, theme, background, barStyle, keyboardAvoidView, styleView}) {
    const {colors} = theme;
    return (
        <SafeAreaView style={{flex: 1}}>
            <StatusBar barStyle={barStyle} backgroundColor={background || colors.primary}/>
            <KeyboardAvoidingView style={{flex: 1}} behavior={Platform.OS === "ios" ? "padding" : null}
                                  enabled={keyboardAvoidView}>
                <View style={[styles.view, {backgroundColor: background || colors.background}, styleView]}>
                    {children}
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

DefaultView.propTypes = {
    background: PropTypes.string,
    barStyle: PropTypes.oneOf(['light-content', 'dark-content']),
    styleView: PropTypes.object
};

DefaultView.defaultProps = {
    barStyle: "light-content",
    keyboardAvoidView: true,
};

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
});

export default withTheme(DefaultView);