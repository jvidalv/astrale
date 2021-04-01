import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import Constants from 'expo-constants';
import i18n from 'i18n-js';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Avatar,
  Button,
  Divider,
  Switch,
  Text,
  Title,
  useTheme,
} from 'react-native-paper';

import Close from '../../components/navs/close';
import { SESSION_KEY } from '../../constants/session';
import { useGlobals } from '../../contexts/global';
import useRate from '../../hooks/use-rate';
import useShare from '../../hooks/use-share';
import { useIsDark } from '../../hooks/use-theme';
import { Backgrounds } from '../../svgs';
import { DateUtils } from '../../utils';
import PlatformUtils from '../../utils/platform';
import Storer from '../../utils/storer';

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function ProfileScreen({ navigation }) {
  const [{ session }, dispatch] = useGlobals();
  const { name, sign, birthDate, number, relationship, sex } = session;
  const { colors } = useTheme();
  const { setRate } = useRate();
  const { setStartShare } = useShare(
    i18n.t(
      'Try Astrale, the most precise horoscopes app in this existential plain'
    ),
    'https://play.google.com/store/apps/details?id=josep.astrale'
  );
  const isDark = useIsDark();
  const isAndroid = PlatformUtils.isAndroid;
  const _handleDarkThemeChange = () => {
    dispatch({
      type: 'switchTheme',
      theme: isDark ? 'light' : 'dark',
    });
  };
  const _handleLogOut = async () => {
    await Storer.delete(SESSION_KEY);
    dispatch({ type: 'setLogOut' });
  };
  const _handleRatePress = async () => setRate(true);
  const _handleSharePress = async () => setStartShare(true);

  return (
    <BlurView
      style={[StyleSheet.absoluteFill]}
      tint={isDark ? 'dark' : 'light'}
      intensity={isAndroid ? 150 : 100}
    >
      <Backgrounds.Telescope color={colors.text} style={styles.telescope} />
      <Close position="right" />
      <View style={styles.headerContainer}>
        <Avatar.Text label={name.substring(0, 1)} />
        <View style={{ marginLeft: 25 }}>
          <Title>{i18n.t(sign)}</Title>
          <Title>{DateUtils.toEuropean(new Date(birthDate))}</Title>
        </View>
      </View>
      <Divider style={{ marginTop: 25 }} />
      <View style={styles.detailsContainer}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons
            name="gender-transgender"
            color={colors.text}
            size={18}
          />
          <Text style={{ marginLeft: 10 }}>{i18n.t(sex)} </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons
            name="heart-circle"
            color={colors.text}
            size={18}
          />
          <Text style={{ marginLeft: 10 }}>{i18n.t(relationship)} </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <MaterialCommunityIcons name="dice-6" color={colors.text} size={18} />
          <Text style={{ marginLeft: 10 }}>{number} </Text>
        </View>
      </View>
      <Divider style={{ marginTop: 15 }} />
      <View style={styles.buttonsContainer}>
        <Button
          onPress={_handleSharePress}
          icon="account-multiple"
          style={{ marginTop: 10 }}
          labelStyle={styles.buttonsLabel}
          uppercase={false}
          contentStyle={{ justifyContent: 'flex-start' }}
        >
          {i18n.t('Share with your friends')}
        </Button>
        <Button
          onPress={_handleRatePress}
          icon="message-draw"
          style={{ marginTop: 10 }}
          labelStyle={styles.buttonsLabel}
          uppercase={false}
          contentStyle={{ justifyContent: 'flex-start' }}
        >
          {i18n.t('Rate the app')}
        </Button>
        {__DEV__ && (
          <Button
            onPress={_handleLogOut}
            icon="restart"
            style={{ marginTop: 10 }}
            labelStyle={styles.buttonsLabel}
            uppercase={false}
            contentStyle={{ justifyContent: 'flex-start' }}
          >
            {i18n.t('Restart')}
          </Button>
        )}
      </View>
      <Divider style={{ marginTop: 10 }} />
      <View style={styles.optionsContainer}>
        <View style={styles.optionsOption}>
          <Button
            icon="brightness-6"
            style={styles.optionsButton}
            labelStyle={styles.optionsLabel}
            uppercase={false}
            theme={{ colors: { primary: colors.text } }}
          >
            {i18n.t('Dark theme')}
          </Button>
          <Switch onChange={_handleDarkThemeChange} value={isDark} />
        </View>
      </View>
      <Divider style={{ marginTop: 10 }} />
      <View
        style={[
          {
            position: 'absolute',
            bottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          },
        ]}
      >
        <Text>v{Constants.manifest.version}</Text>
      </View>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  telescope: {
    zIndex: 0,
    position: 'absolute',
    top: 50,
    right: 20,
    opacity: 0.1,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: 'row',
  },
  headerHeadline: {
    fontWeight: 'bold',
    fontSize: 30,
  },
  detailsContainer: {
    marginHorizontal: 20,
    justifyContent: 'space-between',
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  detailsLabel: {
    marginLeft: 23,
    fontSize: 18,
  },
  featuredContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  featuredView: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 25,
  },
  buttonsContainer: {
    marginHorizontal: 20,
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  buttonsLabel: {
    marginLeft: 23,
    fontSize: 18,
  },
  optionsContainer: {
    marginHorizontal: 20,
    justifyContent: 'flex-start',
    marginTop: 10,
    marginBottom: 10,
  },
  optionsOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionsButton: {
    alignItems: 'flex-start',
    marginTop: 10,
  },
  optionsLabel: {
    marginLeft: 23,
    fontSize: 18,
  },
});

export default ProfileScreen;
