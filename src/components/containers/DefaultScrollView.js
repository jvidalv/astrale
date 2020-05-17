import React from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { useTheme } from "react-native-paper";
import PropTypes from "prop-types";
import PlatformUtils from "../../utils/Platform";

/**
 * @param children
 * @param background {string}
 * @param keyboardAvoidView {boolean}
 * @param styleScrollView {object}
 * @param hideStatusBarOnScroll {boolean}
 * @returns {*}
 * @constructor
 */
function DefaultScrollView({
  children,
  background,
  keyboardAvoidView,
  styleScrollView,
  onScrollCallback,
}) {
  const { colors } = useTheme();
  const isAndroid = PlatformUtils.isAndroid;
  const _onScroll = (event) =>
    onScrollCallback ? onScrollCallback(event) : null;
  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : null}
        enabled={keyboardAvoidView}
      >
        <ScrollView
          scrollEventThrottle={1}
          style={[
            {
              flex: 1,
              paddingVertical: isAndroid ? 0 : 40,
            },
            styleScrollView,
          ]}
          onScroll={_onScroll}
        >
          {children}
          <View style={{ height: isAndroid ? 25 : 50 }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

DefaultScrollView.propTypes = {
  background: PropTypes.string,
  styleScrollView: PropTypes.object,
  keyboardAvoidView: PropTypes.bool,
  onScrollCallback: PropTypes.func,
};

DefaultScrollView.defaultProps = {
  keyboardAvoidView: true,
};

export default DefaultScrollView;
