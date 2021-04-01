import RNDateTimePicker from '@react-native-community/datetimepicker';
import i18n from 'i18n-js';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Headline, Surface, Text, useTheme } from 'react-native-paper';

import { DefaultView } from '../../components/containers';
import SpaceSky from '../../components/decorations/space-sky';
import Sign from '../../components/zodiac/sign';
import { useGlobals } from '../../contexts/global';
import { Backgrounds } from '../../svgs';
import Scorpio from '../../svgs/Scorpio';
import { DateUtils, Platform } from '../../utils';
import ZodiacCalculator from '../../utils/zodiac-calculator';

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function BirthDateScreen({ navigation }) {
  const [{ session }, dispatch] = useGlobals();
  const { colors } = useTheme();
  const [date, setDate] = React.useState(new Date(642449499000));
  const [sign, setSign] = React.useState(
    ZodiacCalculator(date.getDate(), date.getMonth() + 1)
  );
  const [show, setShow] = React.useState(true);
  React.useLayoutEffect(() => {
    setSign(ZodiacCalculator(date.getDate(), date.getMonth() + 1));
  }, [date]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    Platform.isAndroid && setShow(Platform.isIos);
    setDate(currentDate);
  };
  const showDatePicker = () => {
    setShow(true);
  };
  const _handleContinue = () => {
    dispatch({
      type: 'setSession',
      fields: { birthDate: date.getTime(), sign },
    });
    navigation.push('Sex');
  };

  return (
    <DefaultView>
      <SpaceSky />
      <Scorpio width={60} height={60} style={styles.scorpio} />
      <Backgrounds.ConstellationSimple
        color={colors.text}
        dotColor={colors.primary}
        height={200}
        width={200}
        style={styles.constellation}
      />
      <View style={{ flex: 1 }} />
      <View style={styles.textContainer}>
        <Headline style={styles.textHeadline}>
          {i18n.t('Your date of birth')}
        </Headline>
        <Text style={styles.textText}>
          {i18n.t(
            '{name}, to give you accurate and personal information we need to know some info',
            { name: session.name }
          )}
        </Text>
      </View>
      <View style={styles.logoContainer}>
        <Sign sign={sign} width={50} showTitle={false} height={50} />
      </View>
      <Surface style={styles.dateContainer}>
        {Platform.isAndroid && (
          <Button style={{ alignSelf: 'center' }} onPress={showDatePicker}>
            {i18n.t('Press to change')}
          </Button>
        )}
        {show && (
          <RNDateTimePicker
            value={date}
            display="spinner"
            onChange={onChange}
            on
            minimumDate={new Date(1930, 0, 0)}
            maximumDate={new Date(2010, 0, 0)}
            textColor="#ffffff"
          />
        )}
        {Platform.isAndroid && (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 40 }}>{DateUtils.toEuropean(date)}</Text>
          </View>
        )}
      </Surface>
      <View style={styles.buttonContainer}>
        <Button mode="contained" disabled={!date} onPress={_handleContinue}>
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
  scorpio: {
    zIndex: 0,
    position: 'absolute',
    top: 20,
    right: 20,
    opacity: 0.2,
  },
  textContainer: {
    flex: 1.2,
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
    flex: 1.2,
    alignSelf: 'center',
    paddingVertical: 25,
    zIndex: 1,
  },
  dateContainer: {
    flex: Platform.isIos ? 2 : 0,
    marginHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    ...(Platform.isIos ? { paddingTop: 0 } : {}),
  },
  buttonContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 35,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
});

export default BirthDateScreen;
