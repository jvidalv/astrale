import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {Button, Headline, Text, TextInput as PaperTextInput} from "react-native-paper";
import {DefaultScrollView, DefaultView} from "../../components/containers";
import Logo from "../../svgs/Logo";
import Constellation from "../../svgs/Constellation";
import Aquarius from "../../svgs/Aquarius";
import i18n from "i18n-js";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function DailyScreen({navigation}) {
    return (
        <DefaultScrollView>
           <Text>Holaaa</Text>
        </DefaultScrollView>
    );
}

const styles = StyleSheet.create({
    constellation: {
        zIndex: 0, position: 'absolute', bottom: 20, left: 20, opacity: 0.1
    },
    aquarius: {
        zIndex: 0, position: 'absolute', top: 20, right: 20, opacity: 0.2
    },
    counterContainer: {
        position: 'absolute', top: 20, left: 20
    },
    counterView: {
        padding: 5, borderRadius: 5, backgroundColor: '#00000050'
    },
    counterText: {
        letterSpacing: 2
    },
    textContainer: {
        flex: 1, alignSelf: 'center', paddingHorizontal: 20
    },
    textHeadline: {
        textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold'
    },
    textText: {
        textAlign: 'center', paddingVertical: 5
    },
    logoContainer: {
        flex: 1, alignSelf: 'center', paddingVertical: 40, zIndex: 1
    },
    inputContainer: {
        flex: 1, paddingHorizontal: 20, opacity: 0.9
    },
    input: {
        borderRadius: 5, fontSize: 30, textAlign: 'center',
    },
    inputCustom: {
        textAlign: 'center',
        marginTop: 10,
        color: 'white',
        fontSize: 30
    },
    buttonContainer: {
        flex: 1, paddingHorizontal: 20, paddingTop: 35, justifyContent: 'flex-end', marginBottom: 20
    }
})


export default DailyScreen;