import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import DailyScreen from "../screens/main/DailyScreen";
import ZodiacScreen from "../screens/main/ZodiacScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import CompatibilityScreen from "../screens/main/CompatibilityScreen";
import PalmistryScreen from "../screens/main/PalmistryScreen";
import {createStackNavigator} from "@react-navigation/stack";
import PalmistryPreScanScreen from "../screens/initials/PalmistryPreScanScreen";
import PalmistryScanScreen from "../screens/initials/PalmistryScanScreen";
import {useGlobals} from "../contexts/Global";
import i18n from "i18n-js";

const PalmistryStack = createStackNavigator();

/**
 * @returns {*}
 * @constructor
 */
function PalmistryStackNavigation() {
    return (
        <PalmistryStack.Navigator
            initialRouteName="Daily"
            headerMode="screen"
        >
            <PalmistryStack.Screen name="Palmistry" initialParams={{main: true}} component={PalmistryPreScanScreen}
                                   options={{headerShown: false}}/>
            <PalmistryStack.Screen name="PalmistryScan" initialParams={{main: true}} component={PalmistryScanScreen}
                                   options={{headerShown: false}}/>
        </PalmistryStack.Navigator>
    )
}

const DailyStack = createStackNavigator();

/**
 * @returns {*}
 * @constructor
 */
function DailyStackNavigation() {
    return (
        <DailyStack.Navigator
            initialRouteName="Daily"
            headerMode="screen"
        >
            <DailyStack.Screen name="Daily" component={DailyScreen} options={{headerShown: false}}/>
            <DailyStack.Screen name="Signs" component={ZodiacScreen} options={{headerShown: false}}/>
        </DailyStack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

function MainStackNavigation() {
    const [{session}] = useGlobals();
    return (
        <Tab.Navigator
            shifting={false}
        >
            <Tab.Screen
                name="symbol"
                component={DailyStackNavigation}
                options={{
                    tabBarIcon: `zodiac-${session.sign.toLowerCase()}`,
                    title: i18n.t(session.sign)
                }}
            />
            <Tab.Screen
                name="Palmistry"
                component={session.palmistry ? PalmistryScreen : PalmistryStackNavigation}
                options={{
                    tabBarIcon: 'hand',
                    title: i18n.t('Palmistry')
                }}
            />
            <Tab.Screen
                name="Compatibility"
                component={CompatibilityScreen}
                options={{
                    tabBarIcon: 'heart-multiple',
                    title: i18n.t('Compatibility2'),

                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: 'account-box',
                    title: i18n.t('Profile'),

                }}
            />
        </Tab.Navigator>
    );
}

export default MainStackNavigation;