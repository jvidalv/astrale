import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar, withTheme, useTheme} from 'react-native-paper';
import {Platform, StatusBar} from 'react-native';
import NameScreen from "../screens/initials/NameScreen";
import i18n from "i18n-js";
import BirthDateScreen from "../screens/initials/BirthDateScreen";
import SexScreen from "../screens/initials/SexScreen";
import RelationshipScreen from "../screens/initials/RelationshipScreen";
import NumberScreen from "../screens/initials/NumberScreen";
import PalmistryScreen from "../screens/initials/PalmistryScreen";
import PalmistryScanScreen from "../screens/initials/PalmistryScanScreen";
import LoadingScreen from "../screens/initials/LoadingScreen";

const Header = ({scene, previous, navigation, colors}) => {
    const {options} = scene.descriptor;
    const title =
        options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
            ? options.title
            : scene.route.name;

    return (
        <Appbar.Header  theme={{colors : {surface: colors.background}}} statusBarHeight={Platform.OS === 'ios' ? StatusBar.currentHeight : 0}>
            {
                previous ? (
                    <Appbar.BackAction
                        icon="chev"
                        onPress={() => navigation.pop()}
                    />
                ) : null
            }
            <Appbar.Content
                title={title}
            />
        </Appbar.Header>
    );
};

const Stack = createStackNavigator();

/**
 * Login screen and password recovery
 * @returns {*}
 * @constructor
 */
function InitialStackNavigation() {
    const {colors} = useTheme();

    return (
        <Stack.Navigator
            initialRouteName="PalmistryScan"
            headerMode="screen"
            screenOptions={{
                header: ({scene, previous, navigation}) => (
                    <Header scene={scene} previous={previous} navigation={navigation} colors={colors}/>
                ),
            }}
        >
            <Stack.Screen name="Name" component={NameScreen} options={{headerShown: false}}/>
            <Stack.Screen name="BirthDate" component={BirthDateScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Sex" component={SexScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Relationship" component={RelationshipScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Number" component={NumberScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Palmistry" component={PalmistryScreen} options={{headerShown: false}}/>
            <Stack.Screen name="PalmistryScan" component={PalmistryScanScreen} options={{headerTitle: 'Palmistry', cardStyle : {backgroundColor: colors.background}}} />
            <Stack.Screen name="Loading" component={LoadingScreen} options={{headerShown: false}}/>

        </Stack.Navigator>
    )
}

export default withTheme(InitialStackNavigation);