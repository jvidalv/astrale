import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import DailyHoroscope from "../screens/main/DailyHoroscope";

const Tab = createMaterialBottomTabNavigator();

function MainStackNavigation() {
    return (
        <Tab.Navigator
            initialRouteName="Feed"
            shifting={false}
        >
            <Tab.Screen
                name="symbol"
                component={DailyHoroscope}
                options={{
                    tabBarIcon: 'zodiac-aquarius',
                    tabBarColor: 'red',
                    title : 'Aquarius'
                }}
            />
            <Tab.Screen
                name="Horoscope"
                component={DailyHoroscope}
                options={{
                    tabBarIcon: 'calendar-text',
                    tabBarColor: 'orange',
                    title : 'Horoscope'
                 }}
            />
            <Tab.Screen
                name="Compatibility"
                component={DailyHoroscope}
                options={{
                    tabBarIcon: 'heart-multiple',
                    tabBarColor: 'brown',
                    title : 'Compatibility',

                }}
            />
            <Tab.Screen
                name="Palmistry"
                component={DailyHoroscope}
                options={{
                    tabBarIcon: 'hand',
                    tabBarColor: 'black',
                    title : 'Palmistry',

                }}
            />
            <Tab.Screen
                name="Settings"
                component={DailyHoroscope}
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