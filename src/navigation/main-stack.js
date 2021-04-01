import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { BlurView } from 'expo-blur';
import i18n from 'i18n-js';
import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { ActivityIndicator, Portal, Text, useTheme } from 'react-native-paper';

import { useGlobals } from '../contexts/global';
import { useIsDark } from '../hooks/use-theme';
import AstrologersScreen from '../screens/main/astrologers.screen';
import AstrologerQuestionScreen from '../screens/main/astrologuers-question.screen';
import CompatibilityScreen from '../screens/main/compatibility.screen';
import DailyScreen from '../screens/main/daily.screen';
import ProfileScreen from '../screens/main/profile.screen';
import ZodiacScreen from '../screens/main/zodiac.screen';
import LearnStackNavigation from './learn-stack';

const BarIcon = ({ color, size, name }) => {
  return (
    <MaterialCommunityIcons
      color={color}
      size={size}
      name={name}
      style={{ marginTop: 5 }}
    />
  );
};

const BarLabel = ({ color, children }) => {
  return (
    <Text
      style={{
        fontSize: 10,
        lineHeight: 20,
        textAlign: 'center',
        color,
      }}
    >
      {children}
    </Text>
  );
};

const Sta = createStackNavigator();

const Tab = createBottomTabNavigator();

function BottomBarNavigation() {
  const [{ session }] = useGlobals();
  const { colors } = useTheme();
  const _barStyle = useIsDark() ? 'light-content' : 'dark-content';

  return (
    <>
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
              <BarLabel {...props}>{i18n.t('Compatibility2')}</BarLabel>
            ),
            title: i18n.t('Compatibility2'),
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
              <BarLabel {...props}>{i18n.t('Learn')}</BarLabel>
            ),
            title: i18n.t('Learn'),
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
              <BarLabel {...props}>{i18n.t('Astrologers')}</BarLabel>
            ),
            title: i18n.t('Astrologers'),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

function MainStackNavigation() {
  const [{ showLoader }] = useGlobals();
  const { colors } = useTheme();
  return (
    <>
      <Sta.Navigator screenOptions={{ headerShown: false }} mode="modal">
        <Sta.Screen name="Home" component={BottomBarNavigation} />
        <Sta.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            cardStyle: {
              backgroundColor: 'transparent',
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
              backgroundColor: 'transparent',
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
              backgroundColor: 'transparent',
              marginTop: 100,
              borderTopLeftRadius: 30,
              borderTopRightRadius: 30,
            },
          }}
        />
      </Sta.Navigator>
      {showLoader && (
        <Portal>
          <BlurView
            intensity={70}
            style={[
              StyleSheet.absoluteFill,
              {
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 50,
              },
            ]}
          >
            <View
              style={{
                backgroundColor: colors.background,
                padding: 20,
                borderRadius: 15,
              }}
            >
              <ActivityIndicator size={50} />
            </View>
          </BlurView>
        </Portal>
      )}
    </>
  );
}

export default MainStackNavigation;
