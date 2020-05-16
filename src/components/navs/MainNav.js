import React from "react";
import {StyleSheet, View, Dimensions} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/core";
import PlatformUtils from "../../utils/Platform";
import {useTheme} from "react-native-paper";
import PropTypes from "prop-types";
import Close from "./Close";

/**
 * @param navigation
 * @param children
 * @param style {object}
 * @returns {*}
 * @constructor
 */
function MainNav({children, style, leftButton}) {
    const navigation = useNavigation();
    const {colors} = useTheme();
    const isAndroid = PlatformUtils.isAndroid;
    return (
        <View style={[StyleSheet.absoluteFill, styles.container, {top: 15}, style]}>
            <View style={styles.content}>
                {leftButton}
                <MaterialCommunityIcons
                    onPress={() => navigation.navigate('Profile', {key: 'Profile'})}
                    name="account-circle-outline"
                    color={colors.text}
                    size={30}
                    style={{opacity: .5}}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        zIndex: 10,
        height: 50,
        marginHorizontal: 20,
        width: Dimensions.get('window').width - 30
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems : 'center',
        flexDirection: 'row'
    }
})

MainNav.propTypes = {
    style: PropTypes.object,
    leftButton: PropTypes.element
};

MainNav.defaultProps = {
    leftButton: <View style={{width: 1}}/>,
};



export default MainNav;