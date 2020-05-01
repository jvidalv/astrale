import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DailyScreen from "../screens/main/DailyScreen";
import ZodiacScreen from "../screens/main/ZodiacScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import {useGlobals} from "../contexts/Global";
import CompatibilityScreen from "../screens/main/CompatibilityScreen";
import PalmistryScreen from "../screens/main/PalmistryScreen";

const Tab = createMaterialBottomTabNavigator();

function MainStackNavigation() {

    return (
        <Tab.Navigator
            initialRouteName="Feed"
            shifting={false}
        >
            <Tab.Screen
                name="symbol"
                component={DailyScreen}
                options={{
                    tabBarIcon: 'zodiac-aquarius',
                    title : 'Aquarius'
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
                name="Palmistry"
                component={PalmistryScreen}
                options={{
                    tabBarIcon: 'hand',
                    title : 'Palmistry',

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