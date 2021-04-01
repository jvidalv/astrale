import i18n from 'i18n-js';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native';
import {
  Button,
  Divider,
  Paragraph,
  ProgressBar,
  Text,
  useTheme,
} from 'react-native-paper';

import ShowFromTop from '../../components/animations/show-from-top';
import SpaceSky from '../../components/decorations/space-sky';
import MainNav from '../../components/navs/main-nav';
import ShadowHeadline from '../../components/paper/shadow-headline';
import TextBold from '../../components/paper/text-bold';
import { Sign } from '../../components/zodiac';
import { stale } from '../../constants/stale';
import HoroscopeSigns from '../../constants/zodiac-signs';
import { Language } from '../../utils';

/**
 * Progress bars from match
 * @param start {number|string}
 * @param name {string}
 * @param icon {string}
 * @param end
 * @returns {*}
 * @constructor
 */
const Bars = ({ name, icon, end }) => {
  const { colors } = useTheme();
  return (
    <>
      <View style={styles.mathProgressText}>
        <Button theme={{ colors: { primary: colors.text } }} icon={icon}>
          {i18n.t(name)}
        </Button>
        <Text>{end}%</Text>
      </View>
      <ProgressBar progress={end / 100} style={styles.matchProgressBar} />
    </>
  );
};

/**
 * Content when both selected
 * @returns {*}
 * @constructor
 */
const MatchContent = ({ sign1, sign2 }) => {
  const dataIndex = stale.findIndex(
    (item) => item.sign1 === sign1 && item.sign2 === sign2
  );
  const data = stale[dataIndex !== -1 ? dataIndex : 0];
  const matches_data = [
    {
      name: 'Intimate',
      icon: 'account-multiple-plus-outline',
    },
    { name: 'Mindset', icon: 'thought-bubble' },
    { name: 'Feelings', icon: 'heart' },
    { name: 'Priorities', icon: 'priority-high' },
    { name: 'Interests', icon: 'sticker-emoji' },
    { name: 'Sport', icon: 'run' },
  ];

  return (
    <>
      <View style={styles.surfaceContainer}>
        <ShowFromTop>
          <TextBold style={{ marginBottom: 10 }}>
            {i18n.t(sign1)} & {i18n.t(sign2)}
          </TextBold>
          <Paragraph>{data.resume[Language.filteredLocale()]}</Paragraph>
          <TextBold style={{ marginTop: 20, marginBottom: 10 }}>
            {i18n.t('Relationship')}
          </TextBold>
          <Paragraph>{data.relationship[Language.filteredLocale()]}</Paragraph>
          <View style={{ marginVertical: 20 }}>
            {matches_data.map((props, index) => (
              <Bars
                key={index}
                end={data.percents[props.name.toLowerCase()]}
                {...props}
              />
            ))}
          </View>
        </ShowFromTop>
      </View>
    </>
  );
};

/**
 * Each sign on body
 * @param onPress {func}
 * @returns {*}
 * @constructor
 */
const SignsContent = ({ onPress }) => (
  <View style={styles.signsContainer}>
    {HoroscopeSigns.map((sign) => (
      <Sign
        key={sign}
        showTitle
        sign={sign}
        signHeight={100}
        signWidth={90}
        onPress={onPress}
        style={{ marginBottom: 10, padding: 3 }}
      />
    ))}
  </View>
);

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function CompatibilityScreen({ navigation }) {
  const { colors } = useTheme();
  const [scRef, setScRef] = React.useState();
  const [selectedSigns, setSelectedSigns] = React.useState([]);
  const [compDetailsShow, setCompDetailsShow] = React.useState(false);
  const handleSignPress = (sign) => {
    setSelectedSigns((selectedSigns) => [...selectedSigns, sign]);
  };
  const handleSignTopPress = () =>
    setSelectedSigns([]) || setCompDetailsShow(false);
  React.useEffect(() => {
    if (selectedSigns.length === 2) {
      setCompDetailsShow(true);
      scRef.scrollTo({ y: 0 });
    }
  }, [selectedSigns]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SpaceSky />
      <View style={{ marginBottom: 10 }}>
        <MainNav />
        <View style={styles.headerContainer}>
          <ShadowHeadline>{i18n.t('Compatibility')}</ShadowHeadline>
        </View>
      </View>
      <View style={styles.matchCirclesContainer}>
        {selectedSigns[0] ? (
          <Sign
            sign={selectedSigns[0]}
            onPress={handleSignTopPress}
            showTitle={false}
            signHeight={100}
            signWidth={100}
          />
        ) : (
          <View
            style={[
              styles.matchCircle,
              {
                shadowColor: '#000000',
                backgroundColor: colors.surface,
                borderColor: colors.text,
              },
            ]}
          >
            <Text style={{ textAlign: 'center', fontSize: 10 }}>
              {i18n.t('Your sign')}
            </Text>
          </View>
        )}
        <View style={styles.matchSeparator}>
          <Text style={{ fontSize: 22 }}>🔥</Text>
        </View>
        {selectedSigns[1] ? (
          <Sign
            onPress={handleSignTopPress}
            sign={selectedSigns[1]}
            showTitle={false}
            signHeight={100}
            signWidth={100}
          />
        ) : (
          <View
            style={[
              styles.matchCircle,
              {
                shadowColor: '#000000',
                backgroundColor: colors.surface,
                borderColor: colors.text,
              },
            ]}
          >
            <Text style={{ textAlign: 'center', fontSize: 10 }}>
              {i18n.t('Partner sign')}
            </Text>
          </View>
        )}
      </View>
      <Divider />
      <ScrollView ref={(scrollRef) => setScRef(scrollRef)}>
        <View style={{ height: 20 }} />
        {compDetailsShow ? (
          <MatchContent sign1={selectedSigns[0]} sign2={selectedSigns[1]} />
        ) : (
          <SignsContent onPress={handleSignPress} />
        )}
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
  matchCirclesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 30,
  },
  matchCircle: {
    elevation: 10,
    shadowRadius: 7,
    shadowOpacity: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderStyle: 'dashed',
    padding: 5,
  },
  signsContainer: {
    zIndex: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 20,
    flex: 1,
  },
  surfaceContainer: {
    marginHorizontal: 20,
    elevation: 3,
  },
  surfaceSurface: {
    padding: 20,
    borderRadius: 10,
  },
  surfaceParagraph: {
    fontSize: 14,
    lineHeight: 22,
    letterSpacing: 1,
  },
  mathProgressText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  matchProgressBar: {
    borderRadius: 10,
    height: 5,
    marginBottom: 3,
  },
  matchSeparator: {
    justifyContent: 'center',
    flex: 0.3,
    alignItems: 'center',
  },
});

export default CompatibilityScreen;
