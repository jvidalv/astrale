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
import {Text, useTheme} from "react-native-paper";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

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

const BarLabel = (props) => {
    const {colors} = useTheme()
    console.log(props)
    return (
        <Text style={{fontSize: 10, lineHeight: 20, textAlign: 'center', color: "#FFFFFF"}}>
            {props.children}
        </Text>
    )
}

const Tab = createBottomTabNavigator();

function MainStackNavigation() {
    const [{session}] = useGlobals();
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="symbol"
                component={DailyStackNavigation}
            />

        </Tab.Navigator>
    );
}

export default MainStackNavigation;