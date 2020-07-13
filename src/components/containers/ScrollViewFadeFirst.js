import React from "react";
import {ScrollView, StyleSheet, View} from "react-native";
import PropTypes from "prop-types";

/**
 * @param children
 * @param background {string}
 * @param style {object}
 * @returns {*}
 * @constructor
 */
function ScrollViewFadeFirst({children, element, height, style}) {
    const [opacity, setOpacity] = React.useState(1);
    const _handleScroll = (event) => {
        const offsetY = event.nativeEvent.contentOffset.y;
        const controlledOffset = offsetY < 0 ? 0 : offsetY;
        const smallerHeight = controlledOffset ? height * 0.7 : height;
        const calcOpacity =
            (((smallerHeight - (controlledOffset + 30)) * smallerHeight) / 100) *
            0.01;

        setOpacity(calcOpacity < 0.03 ? 0 : calcOpacity);
    };

    return (
        <ScrollView
            style={style}
            stickyHeaderIndices={[0]}
            scrollEventThrottle={2}
            onScroll={_handleScroll}
        >
            <View style={{opacity: opacity}}>
                <View style={[StyleSheet.absoluteFill, {height: height, zIndex: 10}]}>
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
    style: PropTypes.object,
};

export default ScrollViewFadeFirst;
