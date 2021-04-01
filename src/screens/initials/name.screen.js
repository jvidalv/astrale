import i18n from 'i18n-js';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Headline, Text, useTheme } from 'react-native-paper';

import { DefaultView } from '../../components/containers';
import SpaceSky from '../../components/decorations/space-sky';
import CustomInput from '../../components/paper/custom-input';
import { useGlobals } from '../../contexts/global';
import { Backgrounds } from '../../svgs';
import Aquarius from '../../svgs/Aquarius';

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function NameScreen({ navigation }) {
  const dispatch = useGlobals()[1];
  const [name, setName] = React.useState();
  const { colors } = useTheme();
  const buttonDisabled = !name || name.length < 2;
  const _handleContinue = () => {
    dispatch({
      type: 'setSession',
      fields: { name },
    });
    navigation.push('BirthDate');
  };

  return (
    <DefaultView>
      <SpaceSky />
      <Aquarius width={60} height={60} style={styles.aquarius} />
      <Backgrounds.Constellation
        color={colors.text}
        dotColor={colors.primary}
        height={180}
        width={180}
        style={styles.constellation}
      />
      <View style={{ flex: 0.5 }} />
      <View style={styles.textContainer}>
        <Headline style={styles.textHeadline}>
          {i18n.t("What's your name?")}
        </Headline>
        <Text style={styles.textText}>
          {i18n.t(
            'In order to give you accurate and personal information we need to know some info'
          )}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <CustomInput
          value={name}
          placeholder={i18n.t('Write here')}
          onChangeText={(text) => setName(text)}
          style={{ fontSize: 12 }}
          maxLength={20}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="contained"
          disabled={buttonDisabled}
          onPress={_handleContinue}
        >
          {i18n.t('Continue')}
        </Button>
      </View>
    </DefaultView>
  );
}

const styles = StyleSheet.create({
  constellation: {
    zIndex: 0,
    position: 'absolute',
    bottom: 20,
    left: 20,
    opacity: 0.1,
  },
  aquarius: {
    zIndex: 0,
    position: 'absolute',
    top: 20,
    right: 20,
    opacity: 0.2,
  },
  textContainer: {
    flex: 1.3,
    alignSelf: 'center',
    paddingHorizontal: 20,
  },
  textHeadline: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  textText: {
    textAlign: 'center',
    paddingVertical: 5,
  },
  logoContainer: {
    flex: 1,
    alignSelf: 'center',
    paddingVertical: 40,
    zIndex: 1,
  },
  inputContainer: {
    flex: 1,
    paddingHorizontal: 20,
    opacity: 0.9,
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 35,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});

export default NameScreen;
