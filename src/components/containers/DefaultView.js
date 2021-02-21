import PropTypes from 'prop-types';
import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
  View,
} from 'react-native';
import { useTheme } from 'react-native-paper';

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
function DefaultView({
  children,
  background,
  barStyle,
  keyboardAvoidView,
  styleView,
}) {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar
        barStyle={barStyle}
        backgroundColor={background || colors.background}
        animated
      />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        enabled={keyboardAvoidView}
      >
        <View
          style={[
            { flex: 1 },
            { backgroundColor: background || colors.background },
            styleView,
          ]}
        >
          {children}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

DefaultView.propTypes = {
  background: PropTypes.string,
  barStyle: PropTypes.oneOf(['light-content', 'dark-content']),
  styleView: PropTypes.object,
};

DefaultView.defaultProps = {
  keyboardAvoidView: true,
  barStyle: 'light-content',
};

export default DefaultView;
