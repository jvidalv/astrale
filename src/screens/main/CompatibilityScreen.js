import React from "react";
import { SafeAreaView, ScrollView, StyleSheet, View } from "react-native";
import {
  ActivityIndicator,
  Button,
  Divider,
  Paragraph,
  ProgressBar,
  Text,
  useTheme,
} from "react-native-paper";
import HoroscopeSigns from "../../constants/zodiac_signs";
import { Sign } from "../../components/zodiac";
import ShadowHeadline from "../../components/paper/ShadowHeadline";
import useMatch from "../../hooks/useMatch";
import i18n from "i18n-js";
import useFetch from "../../hooks/useFetch";
import ShowFromTop from "../../components/animations/ShowFromTop";
import SpaceSky from "../../components/decorations/SpaceSky";
import TextBold from "../../components/paper/TextBold";
import MainNav from "../../components/navs/MainNav";
import { AdMobInterstitial } from "expo-ads-admob";
import Ads from "../../credentials/admob";

/**
 * Progress bars from match
 * @param start {number|string}
 * @param name {string}
 * @param icon {string}
 * @returns {*}
 * @constructor
 */
const Bars = ({ start, name, icon }) => {
  const { colors } = useTheme();
  return (
    <React.Fragment>
      <View style={styles.mathProgressText}>
        <Button theme={{ colors: { primary: colors.text } }} icon={icon}>
          {i18n.t(name)}
        </Button>
        <Text>{start}%</Text>
      </View>
      <ProgressBar progress={start / 100} style={styles.matchProgressBar} />
    </React.Fragment>
  );
};

/**
 * Content on both selected
 * @returns {*}
 * @constructor
 */
const MatchContent = () => {
  const matches = useMatch();
  const { data, loading, error } = useFetch();

  return (
    <React.Fragment>
      <View style={styles.surfaceContainer}>
        {loading ? (
          <React.Fragment>
            <ActivityIndicator size="large" style={{ flex: 1, height: 300 }} />
            <View style={{ height: 500 }} />
          </React.Fragment>
        ) : (
          <ShowFromTop>
            <Paragraph>
              After viewing Capricorn compatibility with Aries, it is very hard
              to decide that which one of the two will come out as a winner from
              this relationship as both of them will feel awful most of the time
              when they are committed to each other, and they will only be
              relieved when they get separated.
            </Paragraph>
            <TextBold style={{ marginTop: 20, marginBottom: 10 }}>
              {i18n.t("Relationship")}
            </TextBold>
            <Paragraph>
              In a compatible relationship, Capricorn and Aquarius bring out the
              positive characteristics of each other. Capricorn is very careful
              and looks at life very realistically and logically. Aquarius, on
              the other hand, has an idealistic approach towards life.
              Initially, people do not see them as the couple that would click
              or get along, but once they start loving one another, they form a
              bond that never breaks."}
            </Paragraph>
            <View style={{ marginVertical: 20 }}>
              {matches.map((props, index) => (
                <Bars key={index} {...props} />
              ))}
            </View>
          </ShowFromTop>
        )}
      </View>
    </React.Fragment>
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
        showTitle={true}
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
  const _handleSignPress = (sign) => {
    setSelectedSigns((selectedSigns) => [...selectedSigns, sign]);
  };
  const _handleSignTopPress = () =>
    setSelectedSigns([]) || setCompDetailsShow(false);
  React.useEffect(() => {
    if (selectedSigns.length === 2) {
      (async () => {
        try {
          await AdMobInterstitial.setAdUnitID(Ads.compatibility);
          await AdMobInterstitial.requestAdAsync();
          await AdMobInterstitial.showAdAsync();
        } catch {
          //
        } finally {
          setCompDetailsShow(true);
          scRef.scrollTo({ y: 0 });
        }
      })();
    }
  }, [selectedSigns]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SpaceSky />
      <View style={{ marginBottom: 10 }}>
        <MainNav />
        <View style={styles.headerContainer}>
          <ShadowHeadline>{i18n.t("Compatibility")}</ShadowHeadline>
        </View>
      </View>
      <View style={styles.matchCirclesContainer}>
        {selectedSigns[0] ? (
          <Sign
            sign={selectedSigns[0]}
            onPress={_handleSignTopPress}
            showTitle={false}
            signHeight={100}
            signWidth={100}
          />
        ) : (
          <View
            style={[
              styles.matchCircle,
              {
                shadowColor: "#000000",
                backgroundColor: colors.surface,
                borderColor: colors.text,
              },
            ]}
          >
            <Text style={{ textAlign: "center", fontSize: 10 }}>
              {i18n.t("Your sign")}
            </Text>
          </View>
        )}
        <View style={styles.matchSeparator}>
          <Text style={{ fontSize: 22 }}>🔥</Text>
        </View>
        {selectedSigns[1] ? (
          <Sign
            onPress={_handleSignTopPress}
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
                shadowColor: "#000000",
                backgroundColor: colors.surface,
                borderColor: colors.text,
              },
            ]}
          >
            <Text style={{ textAlign: "center", fontSize: 10 }}>
              {i18n.t("Partner sign")}
            </Text>
          </View>
        )}
      </View>
      <Divider />
      <ScrollView ref={(scrollRef) => setScRef(scrollRef)}>
        <View style={{ height: 20 }} />
        {compDetailsShow ? (
          <MatchContent />
        ) : (
          <SignsContent onPress={_handleSignPress} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  matchCirclesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginVertical: 30,
  },
  matchCircle: {
    elevation: 10,
    shadowRadius: 7,
    shadowOpacity: 0.2,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    width: 100,
    height: 100,
    borderRadius: 50,
    borderStyle: "dashed",
    padding: 5,
  },
  signsContainer: {
    zIndex: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  matchProgressBar: {
    borderRadius: 10,
    height: 5,
    marginBottom: 3,
  },
  matchSeparator: {
    justifyContent: "center",
    flex: 0.3,
    alignItems: "center",
  },
});

export default CompatibilityScreen;
