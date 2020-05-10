import React from "react";
import {StyleSheet, View} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/core";
import PlatformUtils from "../../utils/Platform";
import {useTheme} from "react-native-paper";

/**
 * @param navigation
 * @param children
 * @param style {object}
 * @returns {*}
 * @constructor
 */
function MainNav({children, style}) {
    const navigation = useNavigation();
    const {colors} = useTheme();
    const isAndroid = PlatformUtils.isAndroid;
    return (
        <View style={[StyleSheet.absoluteFill, styles.container, style, {top: isAndroid ? 25 : 50}]}>
            <View style={styles.content}>
                <MaterialCommunityIcons
                    onPress={() => navigation.navigate('Signs', {key : 'Sign'})}
                    name="swap-horizontal"
                    color={colors.text}
                    size={30}
                    style={{opacity: .5}}
                />
                <MaterialCommunityIcons
                    onPress={() => navigation.navigate('Profile', {key: 'Profile'})}
                    name="tune"
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
        marginHorizontal: 20
    },
    content: {
        flex: 1,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
})

export default MainNav;