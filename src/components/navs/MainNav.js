import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useTheme } from 'react-native-paper';

/**
 * @param children
 * @param style {object}
 * @param rightButton {React.ComponentElement}
 * @returns {*}
 * @constructor
 */
function MainNav({ children, style, rightButton }) {
  const navigation = useNavigation();
  const { colors } = useTheme();
  return (
    <View style={[StyleSheet.absoluteFill, styles.container, style]}>
      <View style={styles.content}>
        <MaterialCommunityIcons
          onPress={() => navigation.navigate('Profile', { key: 1 })}
          name="account-circle-outline"
          color={colors.text}
          size={30}
          style={{ opacity: 0.5 }}
        />
        {rightButton}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    zIndex: 10,
    height: 50,
    marginHorizontal: 20,
    width: Dimensions.get('window').width - 30,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

MainNav.propTypes = {
  style: PropTypes.object,
  rightButton: PropTypes.element,
};

MainNav.defaultProps = {
  rightButton: <View style={{ width: 1 }} />,
};

export default MainNav;
