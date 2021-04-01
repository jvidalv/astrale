import PropTypes from 'prop-types';
import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';

import PlatformUtils from '../../utils/platform';

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
  const isAndroid = PlatformUtils.isAndroid;
  const onScroll = (event) =>
    onScrollCallback ? onScrollCallback(event) : null;

  return (
    <View style={{ flex: 1 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
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
          onScroll={onScroll}
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
