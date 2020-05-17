import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import MainNav from "../../components/navs/MainNav";
import SpaceSky from "../../components/decorations/SpaceSky";
import ShadowHeadline from "../../components/paper/ShadowHeadline";
import i18n from "i18n-js";
import {
  Avatar,
  Subheading,
  Text,
  Title,
  TouchableRipple,
  useTheme,
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import PlatformUtils from "../../utils/Platform";

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
    Western: "#0f3e6a",
    Vedic: "#3d530d",
    Hellenistic: "#735b13",
    Oriental: "#62230d",
  };
  const dummy_astrologist = [
    {
      id: 1,
      name: "Marisa",
      school: "Western",
      years_exp: 9,
      stars: 4,
      reviews: 125,
      photo:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: 2,
      name: "Ahmed",
      school: "Hellenistic",
      years_exp: 21,
      stars: 5,
      reviews: 120,
      photo:
        "https://images.pexels.com/photos/1154059/pexels-photo-1154059.jpeg",
    },
    {
      id: 3,
      name: "Xian Ju",
      school: "Oriental",
      years_exp: 32,
      stars: 5,
      reviews: 321,
      photo: "https://c.stocksy.com/a/5i1000/z9/6577.jpg",
    },
    {
      id: 4,
      name: "Jordi",
      school: "Vedic",
      years_exp: 15,
      stars: 5,
      reviews: 198,
      photo: "https://pbs.twimg.com/media/DnPQUOLWwAEffF3.jpg",
    },
    {
      id: 5,
      name: "Chad",
      school: "Western",
      years_exp: 45,
      stars: 4,
      reviews: 69,
      photo:
        "https://static2.abc.es/media/estilo/2019/08/15/john-kiwE--620x349@abc.jpg",
    },
    {
      id: 6,
      name: "Luffy",
      school: "Oriental",
      years_exp: 21,
      stars: 5,
      reviews: 976,
      photo:
        "https://sites.google.com/site/heroespoderosos/_/rsrc/1397058950773/home/Estatua_de_cera_de_Luffy.png?height=330&width=400",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SpaceSky />
      <View style={{ marginBottom: 10 }}>
        <MainNav style={{ top: 0 }} />
        <View style={styles.headerContainer}>
          <ShadowHeadline>{i18n.t("Astrologers")}</ShadowHeadline>
        </View>
      </View>
      <ScrollView>
        {showAdvice && (
          <View
            style={[
              styles.adviceContainer,
              { borderColor: colors.primary + "E6" },
            ]}
          >
            <MaterialCommunityIcons
              onPress={_handleCloseAdvice}
              name="close"
              size={20}
              style={styles.adviceClose}
              color={colors.primary + "E6"}
            />
            <Title style={{ textAlign: "center" }}>
              {i18n.t("How it works")}
            </Title>
            <View style={{ marginTop: 10 }}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Avatar.Text
                  size={30}
                  label="1"
                  theme={{ colors: { primary: colors.primary + "E6" } }}
                  labelStyle={{ fontSize: 22 }}
                />
                <Text style={{ marginLeft: 15, fontSize: 12 }}>
                  {i18n.t("Select an astrologer")}
                </Text>
              </View>
              <View
                style={[
                  styles.listDivider,
                  {
                    borderLeftColor: colors.accent + "E6",
                  },
                ]}
              />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Avatar.Text
                  size={30}
                  label="2"
                  theme={{ colors: { primary: colors.primary + "E6" } }}
                  labelStyle={{ fontSize: 22 }}
                />
                <Text
                  style={{
                    marginLeft: 15,
                    fontSize: 12,
                  }}
                >
                  {i18n.t("Introduce your email and question")}
                </Text>
              </View>
              <View
                style={[
                  styles.listDivider,
                  {
                    borderLeftColor: colors.accent + "E6",
                  },
                ]}
              />
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Avatar.Text
                  size={30}
                  label="3"
                  theme={{ colors: { primary: colors.primary + "E6" } }}
                  labelStyle={{ fontSize: 22 }}
                />
                <Text
                  style={{
                    marginLeft: 15,
                    fontSize: 12,
                  }}
                >
                  {i18n.t("Wait ~24 hours for the response")}
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
                    navigation.navigate("Question", {
                      key: "Profile",
                      astrologist: dummy_astrologist[i],
                    })
                  }
                  style={styles.astrologistCard}
                  underlayColor={colors.text + "33"}
                  borderless={true}
                >
                  <React.Fragment>
                    <Image
                      style={styles.astrologistImage}
                      source={{ uri: photo }}
                    />
                    <LinearGradient
                      colors={["transparent", "rgba(0,0,0,0.8)"]}
                      style={styles.astrologistGradient}
                    >
                      <Title theme={{ colors: { text: "#FFFFFF" } }}>
                        {name}
                      </Title>
                    </LinearGradient>
                    <Subheading
                      theme={{ colors: { text: "#FFFFFF" } }}
                      style={[
                        styles.astrologistSubheading,
                        { backgroundColor: astrologist_colors[school] },
                      ]}
                    >
                      {i18n.t(school, { word: i18n.t("Astrology") })}
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
                          name={stars === 5 ? "star" : "star-half"}
                          color="gold"
                        />
                        <Text style={styles.astrologistReview}>{reviews}</Text>
                      </View>
                    </View>
                  </React.Fragment>
                </TouchableRipple>
                {i + (1 % 2) === 0 ? (
                  <View style={{ width: "100%", height: 50 }} />
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
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
    marginTop: 10,
  },
  headerHeadline: {
    fontWeight: "bold",
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
  adviceClose: { position: "absolute", top: 20, right: 20, zIndex: 2 },
  listDivider: {
    height: 10,
    borderLeftWidth: 1,
    marginLeft: 15,
  },
  astrologistContainer: {
    margin: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  astrologistCard: {
    borderRadius: PlatformUtils.isAndroid ? 0 : 25,
    width: "48%",
    marginTop: 8,
    marginBottom: 5,
    shadowColor: "#000",
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
    height: 150,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  astrologistGradient: {
    marginTop: -34,
    paddingLeft: 10,
  },
  astrologistDetailsContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderBottomWidth: 2,
    borderLeftWidth: 2,
    borderRightWidth: 2,
    marginTop: -3,
    borderBottomRightRadius: 25,
    borderBottomLeftRadius: 25,
  },
  astrologistStars: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
