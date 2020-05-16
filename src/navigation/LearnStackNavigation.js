import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import NameScreen from "../screens/initials/NameScreen";
import BirthDateScreen from "../screens/initials/BirthDateScreen";
import SexScreen from "../screens/initials/SexScreen";
import RelationshipScreen from "../screens/initials/RelationshipScreen";
import NumberScreen from "../screens/initials/NumberScreen";
import PalmistryPreScanScreen from "../screens/initials/PalmistryPreScanScreen";
import PalmistryScanScreen from "../screens/initials/PalmistryScanScreen";
import LoadingScreen from "../screens/initials/LoadingScreen";
import LearnScreen from "../screens/main/LearnScreen";
import AboutZodiacScreen from "../screens/main/lean/AboutZodiacScreen";

const Stack = createStackNavigator();

/**
 * @returns {*}
 * @constructor
 */
function LearnStackNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="Learn"
            headerMode="screen"
        >
            <Stack.Screen name="Learn" component={LearnScreen} options={{headerShown: false}}/>
            <Stack.Screen name="AboutZodiac" component={AboutZodiacScreen}/>
        </Stack.Navigator>
    )
}

export default LearnStackNavigation;