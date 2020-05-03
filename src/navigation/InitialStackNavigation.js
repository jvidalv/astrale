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

const Stack = createStackNavigator();

/**
 * @returns {*}
 * @constructor
 */
function InitialStackNavigation() {
    return (
        <Stack.Navigator
            initialRouteName="Name"
            headerMode="screen"
        >
            <Stack.Screen name="Name" component={NameScreen} options={{headerShown: false}}/>
            <Stack.Screen name="BirthDate" component={BirthDateScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Sex" component={SexScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Relationship" component={RelationshipScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Number" component={NumberScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Palmistry" component={PalmistryPreScanScreen} options={{headerShown: false}}/>
            <Stack.Screen name="PalmistryScan" component={PalmistryScanScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Loading" component={LoadingScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default InitialStackNavigation;