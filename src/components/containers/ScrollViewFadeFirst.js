import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import PropTypes from "prop-types";

/**
 * @param children
 * @param background {string}
 * @returns {*}
 * @constructor
 */
function ScrollViewFadeFirst({children, element, height}) {
    const [opacity, setOpacity] = React.useState(1)
    const _handleScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const controlledOffset = offsetY < 0 ? 0 : offsetY;
        const smallerHeight = controlledOffset ? height * 0.7 : height;
        const calcOpacity = (((smallerHeight - (controlledOffset + 30)) * smallerHeight) / 100) * .01;

        setOpacity(calcOpacity < .03 ? 0 : calcOpacity)
    };

    return (
        <ScrollView stickyHeaderIndices={[0]} scrollEventThrottle={2} onScroll={_handleScroll}>
            <View style={{opacity: opacity}}>
                <View style={[StyleSheet.absoluteFill, {height: height}]}>
                    {element}
                </View>
                <View style={{height: height}}/>
            </View>
            {children}
        </ScrollView>
    );
}

ScrollViewFadeFirst.propTypes = {
    element: PropTypes.element.isRequired,
    height: PropTypes.number.isRequired,
};

export default ScrollViewFadeFirst;