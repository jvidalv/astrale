import i18n from 'i18n-js';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Headline, Text } from 'react-native-paper';
import TouchableRipple from 'react-native-paper/src/components/TouchableRipple/index';

import { DefaultView } from '../../components/containers';
import SpaceSky from '../../components/decorations/space-sky';
import { useGlobals } from '../../contexts/global';
import Female from '../../svgs/Female';
import Leo from '../../svgs/Leo';
import Male from '../../svgs/Male';

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function SexScreen({ navigation }) {
  const [{ session }, dispatch] = useGlobals();
  const [sex, setSex] = React.useState('');
  const buttonDisabled = !sex;
  const _handleContinue = () => {
    dispatch({
      type: 'setSession',
      fields: { sex },
    });
    navigation.push('Relationship');
  };

  return (
    <DefaultView>
      <SpaceSky />
      <Leo width={60} height={60} style={styles.leo} />
      <View style={{ flex: 1 }} />
      <View style={styles.textContainer}>
        <Headline style={styles.textHeadline}>{i18n.t('Your gender')}</Headline>
        <Text style={styles.textText}>
          {i18n.t(
            '{name}, to give you accurate and personal information we need to know some info',
            { name: session.name }
          )}
        </Text>
      </View>
      <View style={styles.sexContainer}>
        <TouchableRipple
          onPress={() => setSex('Male')}
          rippleColor="rgba(0,0,0,0)"
        >
          <View>
            <Male style={{ opacity: sex === 'Male' ? 1 : 0.5 }} />
            <Text style={styles.sexText}>{i18n.t('Male')}</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple
          onPress={() => setSex('Female')}
          rippleColor="rgba(0,0,0,0)"
        >
          <View>
            <Female style={{ opacity: sex === 'Female' ? 1 : 0.5 }} />
            <Text style={styles.sexText}>{i18n.t('Female')}</Text>
          </View>
        </TouchableRipple>
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
  leo: {
    zIndex: 0,
    position: 'absolute',
    top: 20,
    right: 20,
    opacity: 0.2,
  },
  textContainer: {
    flex: 1,
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
    paddingVertical: 25,
    zIndex: 1,
  },
  sexContainer: {
    flex: 1,
    paddingHorizontal: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sexText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 35,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});

export default SexScreen;
