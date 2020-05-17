import React from "react";
import DailyScreen from "../screens/main/DailyScreen";
import ZodiacScreen from "../screens/main/ZodiacScreen";
import CompatibilityScreen from "../screens/main/CompatibilityScreen";
import { createStackNavigator } from "@react-navigation/stack";
import PalmistryPreScanScreen from "../screens/initials/PalmistryPreScanScreen";
import PalmistryScanScreen from "../screens/initials/PalmistryScanScreen";
import { useGlobals } from "../contexts/Global";
import i18n from "i18n-js";
import { Text, useTheme } from "react-native-paper";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import { useIsDark } from "../hooks/useTheme";
import PlatformUtils from "../utils/Platform";
import AstrologersScreen from "../screens/main/AstrologersScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import AstrologerQuestionScreen from "../screens/main/AstrologerQuestionScreen";
import LearnStackNavigation from "./LearnStackNavigation";

const PalmistryStack = createStackNavigator();

/**
 * @returns {*}
 * @constructor
 */
function PalmistryStackNavigation() {
  return (
    <PalmistryStack.Navigator initialRouteName="Daily" headerMode="screen">
      <PalmistryStack.Screen
        name="Palmistry"
        initialParams={{ main: true }}
        component={PalmistryPreScanScreen}
        options={{ headerShown: false }}
      />
      <PalmistryStack.Screen
        name="PalmistryScan"
        initialParams={{ main: true }}
        component={PalmistryScanScreen}
        options={{ headerShown: false }}
      />
    </PalmistryStack.Navigator>
  );
}

const BarIcon = ({ focused, color, size, name }) => {
  const { colors } = useTheme();
  return (
    <MaterialCommunityIcons
      color={color}
      size={size}
      name={name}
      style={{ marginTop: 5 }}
    />
  );
};

const BarLabel = ({ focused, color, children }) => {
  const { colors } = useTheme();
  return (
    <Text
      style={{
        fontSize: 10,
        lineHeight: 20,
        textAlign: "center",
        color: color,
      }}
    >
      {children}
    </Text>
  );
};

const Sta = createStackNavigator();

const Tab = createBottomTabNavigator();

function BottomBarNavigation({ navigation }) {
  const [{ session }] = useGlobals();
  const { colors } = useTheme();
  const isIos = PlatformUtils.isIos;
  const _barStyle = useIsDark() ? "light-content" : "dark-content";

  return (
    <React.Fragment>
      <StatusBar
        barStyle={_barStyle}
        backgroundColor={colors.background}
        animated
      />
      <Tab.Navigator>
        <Tab.Screen
          name="symbol"
          component={DailyScreen}
          options={{
            tabBarIcon: (props) => (
              <BarIcon
                {...props}
                name={`zodiac-${session.sign.toLowerCase()}`}
              />
            ),
            tabBarLabel: (props) => (
              <BarLabel {...props} colo>
                {i18n.t(session.sign)}
              </BarLabel>
            ),
            title: i18n.t(session.sign),
          }}
        />
        <Tab.Screen
          name="Compatibility"
          component={CompatibilityScreen}
          options={{
            tabBarIcon: (props) => <BarIcon {...props} name="account-heart" />,
            tabBarLabel: (props) => (
              <BarLabel {...props}>{i18n.t("Compatibility2")}</BarLabel>
            ),
            title: i18n.t("Compatibility2"),
          }}
        />
        <Tab.Screen
          name="Learn"
          component={LearnStackNavigation}
          options={{
            tabBarIcon: (props) => (
              <BarIcon {...props} name="book-open-page-variant" />
            ),
            tabBarLabel: (props) => (
              <BarLabel {...props}>{i18n.t("Learn")}</BarLabel>
            ),
            title: i18n.t("Learn"),
          }}
        />
        <Tab.Screen
          name="Astrologists"
          component={AstrologersScreen}
          options={{
            tabBarIcon: (props) => (
              <BarIcon {...props} name="theme-light-dark" />
            ),
            tabBarLabel: (props) => (
              <BarLabel {...props}>{i18n.t("Astrologers")}</BarLabel>
            ),
            title: i18n.t("Astrologers"),
          }}
        />
      </Tab.Navigator>
    </React.Fragment>
  );
}

function MainStackNavigation({ navigation }) {
  const { colors } = useTheme();
  return (
    <Sta.Navigator screenOptions={{ headerShown: false }} mode="modal">
      <Sta.Screen name="Home" component={BottomBarNavigation} />
      <Sta.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          cardStyle: {
            backgroundColor: "transparent",
            marginTop: 50,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}
      />
      <Sta.Screen
        name="Signs"
        component={ZodiacScreen}
        options={{
          cardStyle: {
            backgroundColor: "transparent",
            marginTop: 50,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}
      />
      <Sta.Screen
        name="Question"
        component={AstrologerQuestionScreen}
        options={{
          cardStyle: {
            backgroundColor: "transparent",
            marginTop: 50,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}
      />
    </Sta.Navigator>
  );
}

export default MainStackNavigation;
