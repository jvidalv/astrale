import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import i18n from 'i18n-js';
import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import {
  Avatar,
  Subheading,
  Text,
  Title,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';

import SpaceSky from '../../components/decorations/space-sky';
import MainNav from '../../components/navs/main-nav';
import ShadowHeadline from '../../components/paper/shadow-headline';
import PlatformUtils from '../../utils/platform';

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function AstrologersScreen({ navigation }) {
  const { colors } = useTheme();
  const [showAdvice, setShowAdvice] = React.useState(true);
  const _handleCloseAdvice = () => setShowAdvice(false);
  const astrologist_colors = {
    Western: '#0f3e6a',
    Vedic: '#3d530d',
    Hellenistic: '#735b13',
    Oriental: '#62230d',
  };
  const dummy_astrologist = [
    {
      id: 1,
      name: 'Marisa',
      school: 'Hellenistic',
      years_exp: 9,
      stars: 4,
      reviews: 125,
      photo: require('./astrologers/marisa.jpg'),
    },
    {
      id: 2,
      name: 'Carter',
      school: 'Western',
      years_exp: 21,
      stars: 5,
      reviews: 120,
      photo: require('./astrologers/carter.jpg'),
    },
    {
      id: 3,
      name: 'Samanta',
      school: 'Oriental',
      years_exp: 12,
      stars: 5,
      reviews: 321,
      photo: require('./astrologers/samanta.jpg'),
    },

    {
      id: 4,
      name: 'Bianca',
      school: 'Vedic',
      years_exp: 45,
      stars: 4,
      reviews: 69,
      photo: require('./astrologers/bianca.jpg'),
    },
    {
      id: 5,
      name: 'George',
      school: 'Western',
      years_exp: 15,
      stars: 5,
      reviews: 198,
      photo: require('./astrologers/george.jpg'),
    },
    {
      id: 6,
      name: 'Meowi',
      school: 'Oriental',
      years_exp: 1,
      stars: 5,
      reviews: 7,
      photo: require('./astrologers/meowi.jpg'),
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SpaceSky />
      <View style={{ marginBottom: 10 }}>
        <MainNav style={{ top: 0 }} />
        <View style={styles.headerContainer}>
          <ShadowHeadline>{i18n.t('Astrologers')}</ShadowHeadline>
        </View>
      </View>
      <ScrollView>
        {showAdvice && (
          <View
            style={[
              styles.adviceContainer,
              { borderColor: colors.primary + 'E6' },
            ]}
          >
            <MaterialCommunityIcons
              onPress={_handleCloseAdvice}
              name="close"
              size={20}
              style={styles.adviceClose}
              color={colors.primary + 'E6'}
            />
            <Title style={{ textAlign: 'center' }}>
              {i18n.t('How it works')}
            </Title>
            <View style={{ marginTop: 10 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Avatar.Text
                  size={30}
                  label="1"
                  theme={{ colors: { primary: colors.primary + 'E6' } }}
                  labelStyle={{ fontSize: 22 }}
                />
                <Text style={{ marginLeft: 15, fontSize: 12 }}>
                  {i18n.t('Select an astrologer')}
                </Text>
              </View>
              <View
                style={[
                  styles.listDivider,
                  {
                    borderLeftColor: colors.accent + 'E6',
                  },
                ]}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Avatar.Text
                  size={30}
                  label="2"
                  theme={{ colors: { primary: colors.primary + 'E6' } }}
                  labelStyle={{ fontSize: 22 }}
                />
                <Text
                  style={{
                    marginLeft: 15,
                    fontSize: 12,
                  }}
                >
                  {i18n.t('Introduce your email and question')}
                </Text>
              </View>
              <View
                style={[
                  styles.listDivider,
                  {
                    borderLeftColor: colors.accent + 'E6',
                  },
                ]}
              />
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Avatar.Text
                  size={30}
                  label="3"
                  theme={{ colors: { primary: colors.primary + 'E6' } }}
                  labelStyle={{ fontSize: 22 }}
                />
                <Text
                  style={{
                    marginLeft: 15,
                    fontSize: 12,
                  }}
                >
                  {i18n.t('Wait ~24 hours for the response')}
                </Text>
              </View>
            </View>
          </View>
        )}
        <View style={styles.astrologistContainer}>
          {dummy_astrologist.map(
            ({ id, name, school, years_exp, stars, photo, reviews }, i) => (
              <React.Fragment key={id}>
                <TouchableRipple
                  onPress={() =>
                    navigation.navigate('Question', {
                      key: 'Profile',
                      astrologist: dummy_astrologist[i],
                    })
                  }
                  style={styles.astrologistCard}
                  underlayColor={colors.text + '33'}
                  borderless
                >
                  <>
                    <Image
                      style={styles.astrologistImage}
                      source={photo}
                      resizeMethod="resize"
                      resizeMode="cover"
                    />
                    <LinearGradient
                      colors={['transparent', 'rgba(0,0,0,0.8)']}
                      style={styles.astrologistGradient}
                    >
                      <Title theme={{ colors: { text: '#FFFFFF' } }}>
                        {name}
                      </Title>
                    </LinearGradient>
                    <Subheading
                      theme={{ colors: { text: '#FFFFFF' } }}
                      style={[
                        styles.astrologistSubheading,
                        { backgroundColor: astrologist_colors[school] },
                      ]}
                    >
                      {i18n.t(school, { word: i18n.t('Astrology') })}
                    </Subheading>
                    <View
                      style={[
                        styles.astrologistDetailsContainer,
                        { borderColor: astrologist_colors[school] },
                      ]}
                    >
                      <Text style={{ fontSize: 10 }}>
                        {years_exp} other years experience
                      </Text>
                      <View style={styles.astrologistStars}>
                        <MaterialCommunityIcons name="star" color="gold" />
                        <MaterialCommunityIcons name="star" color="gold" />
                        <MaterialCommunityIcons name="star" color="gold" />
                        <MaterialCommunityIcons name="star" color="gold" />
                        <MaterialCommunityIcons
                          name={stars === 5 ? 'star' : 'star-half'}
                          color="gold"
                        />
                        <Text style={styles.astrologistReview}>{reviews}</Text>
                      </View>
                    </View>
                  </>
                </TouchableRipple>
                {i + (1 % 2) === 0 ? (
                  <View style={{ width: '100%', height: 50 }} />
                ) : null}
              </React.Fragment>
            )
          )}
        </View>
      </ScrollView>
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
  headerHeadline: {
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 34,
  },
  adviceContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 25,
    padding: 20,
  },
  adviceClose: { position: 'absolute', top: 20, right: 20, zIndex: 2 },
  listDivider: {
    height: 10,
    borderLeftWidth: 1,
    marginLeft: 15,
  },
  astrologistContainer: {
    margin: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  astrologistCard: {
    borderRadius: PlatformUtils.isAndroid ? 0 : 25,
    width: '48%',
    marginTop: 8,
    marginBottom: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  astrologistSubheading: {
    paddingLeft: 10,
    marginTop: -3,
    fontSize: 12,
  },
  astrologistImage: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    height: 150,
    width: '100%',
  },
  astrologistGradient: {
    marginTop: -34,
    paddingLeft: 10,
  },
  astrologistDetailsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    marginTop: -3,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  astrologistStars: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 3,
  },
  astrologistReview: {
    fontSize: 9,
    height: 10,
    lineHeight: 11,
    marginLeft: 5,
  },
});

export default AstrologersScreen;
