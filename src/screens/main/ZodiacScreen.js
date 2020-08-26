import React from "react";
import { StyleSheet, View } from "react-native";
import { useTheme } from "react-native-paper";
import i18n from "i18n-js";
import { Sign } from "../../components/zodiac";
import ShadowHeadline from "../../components/paper/ShadowHeadline";
import HoroscopeSigns, { HoroscopeDates } from "../../constants/zodiac_signs";
import { Backgrounds } from "../../svgs";
import * as Localization from "expo-localization";
import { useGlobals } from "../../contexts/Global";
import { BlurView } from "expo-blur";
import PlatformUtils from "../../utils/Platform";
import { useIsDark } from "../../hooks/useTheme";
import Close from "../../components/navs/Close";
import Storer from "../../utils/Storer";
import { SESSION_KEY } from "../../constants/session";
import Sleep from "../../utils/Sleep";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function ZodiacScreen({ navigation }) {
  const [{ session }, dispatch] = useGlobals();
  const { colors } = useTheme();
  const isAndroid = PlatformUtils.isAndroid;
  const isDark = useIsDark();
  const locales = ["es", "en"];
  const cut_locale = Localization.locale.substring(0, 2);
  const locale = locales.includes(cut_locale) ? cut_locale : "en";
  const _handleSignPress = async (sign) => {
    dispatch({
      type: "setSession",
      fields: { sign: sign },
    });
    await Storer.set(SESSION_KEY, { session, sign: sign });
    dispatch({ type: "toggleLoader" });
    await Sleep(300);
    dispatch({ type: "toggleLoader" });
    navigation.pop();
  };

  return (
    <BlurView
      style={[StyleSheet.absoluteFill]}
      tint={isDark ? "dark" : "light"}
      intensity={isAndroid ? 150 : 100}
    >
      <Close position="right" />
      <View style={styles.headerContainer}>
        <ShadowHeadline style={styles.headerHeadline}>
          {i18n.t("Zodiac signs")}
        </ShadowHeadline>
      </View>
      <View style={styles.signsContainer}>
        {HoroscopeSigns.map((sign) => (
          <Sign
            key={sign}
            showTitle={true}
            sign={sign}
            signHeight={65}
            signWidth={65}
            onPress={() => _handleSignPress(sign)}
            style={{ marginBottom: 7, padding: 3 }}
            styleTitle={{ marginTop: 5 }}
            subtitle={HoroscopeDates[sign][locale]}
          />
        ))}
      </View>
      <Backgrounds.ConstellationSimple
        height={450}
        width={450}
        color={colors.text}
        dotColor={colors.primary}
        style={styles.constellation}
      />
    </BlurView>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 0.2,
  },
  headerHeadline: {
    fontWeight: "bold",
    lineHeight: 34,
  },
  signsContainer: {
    zIndex: 5,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    flex: 1.5,
  },
  constellation: {
    position: "absolute",
    bottom: 10,
    left: 10,
    opacity: 0.05,
    zIndex: 1,
  },
});

export default ZodiacScreen;
