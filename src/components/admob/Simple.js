import React from "react";
import {KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, View} from "react-native";
import {useTheme, Text, Button} from 'react-native-paper';
import PropTypes from "prop-types";
import PlatformUtils from "../../utils/Platform";
import {useScreens} from "../../contexts/Screens";
import ShowFromTop from "../animations/ShowFromTop";
import {BlurView} from "expo-blur";
import {useIsDark} from "../../hooks/useTheme";

/**
 * @param children
 * @returns {*}
 * @constructor
 */
function Simple({children, intensity}) {
    const {colors} = useTheme();
    const isDark = useIsDark() ? 'dark' : 'light'
    return (
        <BlurView style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 5}} intensity={intensity} tint={isDark}>
            <View style={{flex: 1, justifyContent: 'center', alignItems : 'center'}}>
                <Button mode="contained" style={{borderRadius: 20, width: 250}} icon="movie">Watch an ad</Button>
                <Button mode="contained" style={{borderRadius: 20, width: 250, marginTop: 20, borderWidth: 2, borderColor: colors.primary}} theme={{colors:{primary:colors.background + '50'}}}>Unlock forever</Button>
            </View>
        </BlurView>
    );
}

Simple.propTypes = {
    intensity : PropTypes.number
};

Simple.defaultProps = {
    intensity : 100
};

export default Simple;