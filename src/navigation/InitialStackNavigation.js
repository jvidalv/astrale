import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Appbar} from 'react-native-paper';
import {Platform, StatusBar} from 'react-native';
import NameScreen from "../screens/initials/NameScreen";
import i18n from "i18n-js";
import BirthDateScreen from "../screens/initials/BirthDateScreen";

const Header = ({scene, previous, navigation}) => {
    const {options} = scene.descriptor;
    const title =
        options.headerTitle !== undefined
            ? options.headerTitle
            : options.title !== undefined
            ? options.title
            : scene.route.name;

    return (
        <Appbar.Header statusBarHeight={Platform.OS === 'ios' ? StatusBar.currentHeight : 0}>
            {
                previous ? (
                    <Appbar.BackAction
                        onPress={() => navigation.pop()}
                    />
                ) : (
                    <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()}/>
                )
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
    return (
        <Stack.Navigator
            headerMode="screen"
            screenOptions={{
                header: ({scene, previous, navigation}) => (
                    <Header scene={scene} previous={previous} navigation={navigation}/>
                ),
            }}
        >
            <Stack.Screen name="Name" component={NameScreen} options={{headerShown: false}}/>
            <Stack.Screen name="BirthDate" component={BirthDateScreen} options={{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default  InitialStackNavigation;