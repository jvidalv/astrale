import React from "react";
import {StyleSheet} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/core";
import {useTheme} from "react-native-paper";
import PropTypes from "prop-types";
import DefaultScrollView from "../containers/DefaultScrollView";

/**
 * @param navigation
 * @param style {object}
 * @returns {*}
 * @constructor
 */
function Close({style, position}) {
    const navigation = useNavigation();
    const {colors} = useTheme();
    const _position = position === 'left' ? {left: 20} : {right: 20};
    return (
        <MaterialCommunityIcons
            onPress={() => navigation.goBack()}
            style={[styles.container, _position]}
            name="close"
            color={colors.text}
            size={30}/>
    )
}

Close.propTypes = {
    style: PropTypes.object,
    position: PropTypes.oneOf(['left', 'right']),
};

Close.defaultProps = {
    position: "left",
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute', top: 20, opacity: .5, zIndex: 10
    },
})

export default Close;