import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DailyScreen from "../screens/main/DailyScreen";
import ZodiacScreen from "../screens/main/ZodiacScreen";
import ProfileScreen from "../screens/main/ProfileScreen";
import {useGlobals} from "../contexts/Global";

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
                    tabBarColor: 'red',
                    title : 'Aquarius'
                }}
            />
            <Tab.Screen
                name="Compatibility"
                component={DailyScreen}
                options={{
                    tabBarIcon: 'heart-multiple',
                    tabBarColor: 'brown',
                    title : 'Compatibility',

                }}
            />
            <Tab.Screen
                name="Palmistry"
                component={DailyScreen}
                options={{
                    tabBarIcon: 'hand',
                    tabBarColor: 'black',
                    title : 'Palmistry',

                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: 'tune',
                    tabBarColor: 'account-circle',
                    title : 'Profile',

                }}
            />
        </Tab.Navigator>
    );
}

export default MainStackNavigation;