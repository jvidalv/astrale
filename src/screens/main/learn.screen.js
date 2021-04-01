import { LinearGradient } from 'expo-linear-gradient';
import i18n from 'i18n-js';
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import {
  Button,
  Caption,
  Subheading,
  Surface,
  Text,
  Title,
  useTheme,
} from 'react-native-paper';

import ScrollViewFadeFirst from '../../components/containers/scroll-view-fade-first';
import SpaceSky from '../../components/decorations/space-sky';
import MainNav from '../../components/navs/main-nav';
import ShadowHeadline from '../../components/paper/shadow-headline';
import { useGlobals } from '../../contexts/global';
import Leo from '../../svgs/Leo';
import Constellation from '../../svgs/backgrounds/Constellation';
import ConstellationSimple from '../../svgs/backgrounds/ConstellationSimple';

const SubHeading = () => {
  const { colors } = useTheme();
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Title
        theme={{ colors: { text: colors.primary } }}
        style={{ textAlign: 'center' }}
      >
        {i18n.t('Astrology guides')}
      </Title>
      <View style={{ height: 10 }} />
      <Text style={{ textAlign: 'center' }}>{i18n.t('Learn paragraph')}</Text>
    </View>
  );
};

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function LearnScreen({ navigation }) {
  const dispatch = useGlobals()[1];
  const { colors } = useTheme();
  const handleViewLesson = async (lesson) => {
    try {
      dispatch({ type: 'toggleLoader' });
    } catch {
    } finally {
      dispatch({ type: 'toggleLoader' });
      navigation.navigate(lesson, { key: 1 });
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SpaceSky />
      <View style={{ marginBottom: 10 }}>
        <MainNav style={{ top: 0 }} />
        <View style={styles.headerContainer}>
          <ShadowHeadline>{i18n.t('Learn')}</ShadowHeadline>
        </View>
      </View>
      <ScrollViewFadeFirst element={<SubHeading />} height={140}>
        <Surface
          style={[
            styles.surfaceRight,
            { backgroundColor: 'transparent', marginTop: 10 },
          ]}
        >
          <View style={[StyleSheet.absoluteFill, { top: -25, opacity: 0.8 }]}>
            <Constellation
              color={colors.text + '3D'}
              dotColor={colors.accent}
              width={250}
              height={300}
            />
          </View>
          <LinearGradient
            colors={['transparent', '#4c4c4c' + 'E6', '#4c4c4c' + 'E6']}
            start={[0, 0]}
            end={[1, 0]}
            style={styles.gradientRight}
          >
            <View style={{ flex: 0.8 }} />
            <View style={{ flex: 1 }}>
              <Subheading
                theme={{ colors: { text: '#FFFFFF' } }}
                numberOfLines={1}
                style={{ fontWeight: 'bold' }}
              >
                {i18n.t('About the Zodiac')}
              </Subheading>
              <Caption theme={{ colors: { text: '#FFFFFF' } }}>
                {i18n.t('Older as mankind')}
              </Caption>
              <Caption
                theme={{ colors: { text: '#FFFFFF' } }}
                style={{ marginTop: -3 }}
              >
                {i18n.t('Bind to the sky')}
              </Caption>
              <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Button
                  mode="contained"
                  icon="lock-outline"
                  style={{ borderRadius: 25, marginTop: 5 }}
                  theme={{
                    colors: { primary: colors.backdrop, text: '#FFFFFF' },
                  }}
                  labelStyle={{ fontSize: 9, letterSpacing: 0 }}
                  onPress={() => handleViewLesson('AboutZodiac')}
                >
                  {i18n.t('Watch an ad to unblock')}
                </Button>
              </View>
            </View>
          </LinearGradient>
        </Surface>
        <View style={{ height: 20 }} />
        <Surface
          style={[
            styles.surfaceLeft,
            { backgroundColor: 'transparent', height: 140 },
          ]}
        >
          <View style={[StyleSheet.absoluteFill, { right: 150, opacity: 0.4 }]}>
            <ConstellationSimple
              color={colors.text + '3D'}
              dotColor={colors.primary}
              width={200}
              height={150}
            />
          </View>
          <LinearGradient
            colors={['#81411a', '#81411aE6', '#81411a3D', 'transparent']}
            start={[0, 0]}
            end={[1, 0]}
            style={styles.gradientLeft}
          >
            <View style={{ flex: 1 }}>
              <Subheading
                theme={{ colors: { text: '#FFFFFF' } }}
                numberOfLines={1}
                style={{ fontWeight: 'bold' }}
              >
                {i18n.t('The signs')}
              </Subheading>
              <Caption theme={{ colors: { text: '#FFFFFF' } }}>
                {i18n.t('The importance of when')}
              </Caption>
              <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Button
                  mode="contained"
                  icon="lock-outline"
                  style={{ borderRadius: 25 }}
                  theme={{
                    colors: { primary: colors.backdrop, text: '#FFFFFF' },
                  }}
                  labelStyle={{ fontSize: 9, letterSpacing: 0 }}
                  onPress={() => handleViewLesson('TheSigns')}
                >
                  {i18n.t('Watch an ad to unblock')}
                </Button>
              </View>
            </View>
            <View style={{ flex: 0.6 }} />
          </LinearGradient>
        </Surface>
        <View style={{ height: 20 }} />
        <Surface
          style={[
            styles.surfaceRight,
            { backgroundColor: 'transparent', height: 130 },
          ]}
        >
          <View style={[StyleSheet.absoluteFill, { top: -25, opacity: 0.3 }]}>
            <Leo color={colors.text} width={200} height={200} />
          </View>
          <LinearGradient
            colors={['transparent', '#13366f' + 'E6', '#13366f' + 'E6']}
            start={[0, 0]}
            end={[1, 0]}
            style={styles.gradientRight}
          >
            <View style={{ flex: 0.8 }} />
            <View style={{ flex: 1 }}>
              <Subheading
                theme={{ colors: { text: '#FFFFFF' } }}
                numberOfLines={1}
                style={{ fontWeight: 'bold' }}
              >
                {i18n.t('The elements')}
              </Subheading>
              <Caption theme={{ colors: { text: '#FFFFFF' } }}>
                {i18n.t('The pillars of life')}
              </Caption>
              <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Button
                  mode="contained"
                  icon="lock-outline"
                  style={{ borderRadius: 25, marginTop: 5 }}
                  theme={{ colors: { primary: colors.backdrop } }}
                  labelStyle={{ fontSize: 9, letterSpacing: 0 }}
                  onPress={() => handleViewLesson('TheElements')}
                >
                  {i18n.t('Watch an ad to unblock')}
                </Button>
              </View>
            </View>
          </LinearGradient>
        </Surface>
        <View style={{ height: 150 }} />
      </ScrollViewFadeFirst>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginTop: 10,
  },
  adviceContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 25,
    padding: 20,
  },
  adviceClose: { position: 'absolute', top: 20, right: 20, zIndex: 2 },
  surfaceRight: {
    elevation: 3,
    height: 160,
    flexDirection: 'row',

    borderRadius: 25,
    marginHorizontal: 20,
    overflow: 'hidden',
  },
  surfaceLeft: {
    elevation: 3,
    height: 160,
    flexDirection: 'row-reverse',
    borderRadius: 25,
    marginHorizontal: 20,
    overflow: 'hidden',
  },
  gradientRight: {
    padding: 15,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    flex: 1,
    flexDirection: 'row',
  },
  gradientLeft: {
    padding: 15,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
    flex: 1,
    flexDirection: 'row',
  },
});

export default LearnScreen;
