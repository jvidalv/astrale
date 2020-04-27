import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DailyScreen from "../screens/main/DailyScreen";
import ZodiacScreen from "../screens/main/ZodiacScreen";

const Tab = createMaterialBottomTabNavigator();

function MainStackNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            shifting={false}
        >
            <Tab.Screen
                name="symbol"
                component={ZodiacScreen}
                options={{
                    tabBarIcon: 'zodiac-aquarius',
                    tabBarColor: 'red',
                    title : 'Aquarius'
                }}
            />
            <Tab.Screen
                name="Horoscope"
                component={DailyScreen}
                options={{
                    tabBarIcon: 'calendar-text',
                    tabBarColor: 'orange',
                    title : 'Horoscope'
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
                name="Settings"
                component={DailyScreen}
                options={{
                    tabBarIcon: 'tune',
                    tabBarColor: 'green',
                    title : 'Settings',

                }}
            />
        </Tab.Navigator>
    );
}

export default MainStackNavigation;