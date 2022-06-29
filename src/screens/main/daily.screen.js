import { MaterialCommunityIcons } from '@expo/vector-icons';
import i18n from 'i18n-js';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {
  Divider,
  ProgressBar,
  Subheading,
  Text,
  useTheme,
} from 'react-native-paper';

import ShowFromTop from '../../components/animations/show-from-top';
import ScrollViewFadeFirst from '../../components/containers/scroll-view-fade-first';
import SpaceSky from '../../components/decorations/space-sky';
import MainNav from '../../components/navs/main-nav';
import ShadowHeadline from '../../components/paper/shadow-headline';
import TextBold from '../../components/paper/text-bold';
import { Sign } from '../../components/zodiac';
import { daily } from '../../constants/daily';
import months from '../../constants/months';
import { SESSION_KEY } from '../../constants/session';
import { useGlobals } from '../../contexts/global';
import { Language } from '../../utils';
import Storer from '../../utils/storer';

/**
 * @param number {number}
 * @returns {*}
 * @constructor
 */
const LuckyNumber = ({ number }) => {
  const { colors } = useTheme();
  return (
    <View
      style={[LuckyNumberStyles.circle, { backgroundColor: colors.accent }]}
    >
      <Text style={{ fontSize: 16, marginTop: 3 }}>{number}</Text>
    </View>
  );
};

const LuckyNumberStyles = StyleSheet.create({
  circle: {
    borderRadius: 50,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

/**
 * @param text {text}
 * @param percent {number}
 * @param style {object}
 * @returns {*}
 * @constructor
 */
const ProgressItem = ({ text, percent, style }) => {
  const { colors } = useTheme();
  return (
    <View style={[{ flex: 1 }, style]}>
      <Text style={ProgressItemStyles.text}>{text}</Text>
      <ProgressBar style={ProgressItemStyles.bar} progress={percent / 100} />
      <Text theme={{ colors: { text: colors.primary } }}>{percent}%</Text>
    </View>
  );
};

const ProgressItemStyles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  bar: {
    marginVertical: 5,
    borderRadius: 5,
  },
});

/**
 * @param navigation {object}
 * @returns {*}
 * @constructor
 */
function DailyScreen({ navigation }) {
  const [{ session }, dispatch] = useGlobals();
  const { colors } = useTheme();
  const dataIndex = daily.findIndex(
    (item) =>
      item.day.split('-')[2].toString() === new Date().getDate().toString() &&
      item.sign === session.sign
  );
  const data = daily[dataIndex !== -1 ? dataIndex : 0];
  const d = new Date();

  React.useLayoutEffect(() => {
    if (!session?.sign) {
      Storer.delete(SESSION_KEY).then(() => dispatch({ type: 'setLogOut' }));
    }
  }, [dispatch, session?.sign]);

  const Header = (
    <View>
      <MainNav
        rightButton={
          <MaterialCommunityIcons
            onPress={() => navigation.navigate('Signs', { key: 'Sign' })}
            name="swap-horizontal"
            color={colors.text}
            size={30}
            style={{ opacity: 0.5 }}
          />
        }
      />
      <View style={[styles.headerContainer]}>
        <Sign
          sign={session.sign}
          showTitle={false}
          signWidth={70}
          signHeight={70}
        />
        <ShadowHeadline style={styles.headerHeadline}>
          {i18n.t(session.sign)}
        </ShadowHeadline>
        <Subheading>
          {i18n.t('date_daily', {
            day: d.getDate(),
            month: months[session.language][d.getMonth()],
            year: d.getFullYear(),
          })}
        </Subheading>
      </View>
      <Divider />
    </View>
  );

  return (
    <>
      <SpaceSky />
      <SafeAreaView>
        <ScrollViewFadeFirst element={Header} height={200}>
          <View style={{ height: 20 }} />
          <ShowFromTop>
            <View
              style={[
                styles.defaultContainer,
                {
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 10,
                },
              ]}
            >
              <TextBold style={styles.textTitles}>
                {i18n.t('Focus of the day')}:
              </TextBold>
              <TextBold
                style={{ fontSize: 16, marginLeft: 5, color: colors.primary }}
              >
                {i18n.t(data.contents.focus)}
              </TextBold>
            </View>
            <View
              style={[
                styles.defaultContainer,
                {
                  marginTop: 25,
                  marginBottom: 5,
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                },
              ]}
            >
              <ProgressItem
                text={i18n.t('Love')}
                percent={data.contents.percents.love}
              />
              <ProgressItem
                text={i18n.t('Career')}
                percent={data.contents.percents.work}
                style={{ marginHorizontal: 5 }}
              />
              <ProgressItem
                text={i18n.t('Health')}
                percent={data.contents.percents.health}
              />
            </View>
            <View style={[styles.defaultContainer]}>
              <View style={styles.horoscopeTodayContainer}>
                <TextBold style={styles.textTitles}>
                  {i18n.t('Your horoscope for today')}:
                </TextBold>
                <View style={styles.iconsHoroscopeToday}>
                  <MaterialCommunityIcons
                    name="heart"
                    size={16}
                    color={colors.text}
                    style={{ marginLeft: 5 }}
                  />
                  <MaterialCommunityIcons
                    name="briefcase"
                    size={16}
                    color={colors.text}
                    style={{ marginLeft: 5 }}
                  />
                  <MaterialCommunityIcons
                    name="food-apple"
                    size={16}
                    color={colors.text}
                    style={{ marginLeft: 5 }}
                  />
                </View>
              </View>
              <Text style={{ marginTop: 15 }}>
                {data.contents.text[Language.filteredLocale()]}
              </Text>
            </View>
            <View style={styles.defaultContainer}>
              <TextBold style={styles.textTitles}>
                {i18n.t('Today you love')}
              </TextBold>
            </View>
            <View
              style={[
                styles.loveContainer,
                {
                  borderColor: colors.text + '0D',
                },
              ]}
            >
              <View
                style={[
                  styles.heartLoveContainer,
                  {
                    backgroundColor: colors.text + '0D',
                  },
                ]}
              >
                <MaterialCommunityIcons
                  name="heart"
                  size={30}
                  color={colors.accent}
                />
              </View>
              <View style={[styles.loveSignsContainer]}>
                {data.contents.compatibility.map((sign, i) => (
                  <Sign
                    key={i}
                    sign={sign}
                    signHeight={40}
                    signWidth={50}
                    styleTitle={{ fontSize: 12 }}
                  />
                ))}
              </View>
            </View>
            <Divider style={{ marginTop: 20 }} />
            <View style={styles.defaultContainer}>
              <TextBold style={styles.textTitles}>
                {i18n.t('Lucky numbers')}
              </TextBold>
            </View>
            <View
              style={[
                styles.defaultContainer,
                {
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                },
              ]}
            >
              {data.contents.numbers.map((number, i) => (
                <LuckyNumber key={i} number={number} />
              ))}
            </View>
            <View style={{ paddingVertical: 10 }} />
          </ShowFromTop>
        </ScrollViewFadeFirst>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  backgroundConstellation: {
    zIndex: 1,
    position: 'absolute',
    top: 300,
    left: 20,
    opacity: 0.05,
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 20,
  },
  headerHeadline: {
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 34,
    marginTop: 20,
  },
  defaultContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  textTitles: {
    fontSize: 16,
  },
  horoscopeTodayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  iconsHoroscopeToday: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  loveContainer: {
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: 20,
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 10,
  },
  heartLoveContainer: {
    flex: 0.2,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loveSignsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flex: 1,
    marginTop: 10,
  },
});

export default DailyScreen;
