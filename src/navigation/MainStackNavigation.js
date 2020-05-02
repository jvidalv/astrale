import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import DailyScreen from "../screens/main/DailyScreen";
import ZodiacScreen from "../screens/main/ZodiacScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import CompatibilityScreen from "../screens/main/CompatibilityScreen";
import PalmistryScreen from "../screens/main/PalmistryScreen";
import {createStackNavigator} from "@react-navigation/stack";

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

    return (
        <Tab.Navigator
            initialRouteName="Feed"
            shifting={false}
        >
            <Tab.Screen
                name="symbol"
                component={DailyStackNavigation}
                options={{
                    tabBarIcon: 'zodiac-aquarius',
                    title : 'Aquarius'
                }}
            />
            <Tab.Screen
                name="Palmistry"
                component={PalmistryScreen}
                options={{
                    tabBarIcon: 'hand',
                    title : 'Palmistry',

                }}
            />
            <Tab.Screen
                name="Compatibility"
                component={CompatibilityScreen}
                options={{
                    tabBarIcon: 'heart-multiple',
                    title : 'Compatibility',

                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: 'account-box',
                    title : 'Profile',
                }}
            />
        </Tab.Navigator>
    );
}

export default MainStackNavigation;