import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {Button, Headline, Text, TextInput as PaperTextInput, useTheme} from "react-native-paper";
import {DefaultView} from "../../components/containers";
import {Backgrounds} from "../../svgs";
import Aquarius from "../../svgs/Aquarius";
import Dices from "../../svgs/Dices";
import i18n from "i18n-js";
import {useGlobals} from "../../contexts/Global";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function NumberScreen({navigation}) {
    const [{}, dispatch] = useGlobals();
    const {colors} = useTheme();
    const [number, setNumber] = React.useState();
    const buttonDisabled = !number;
    const _handleContinue = () => {
        dispatch({
            type: 'setSession',
            fields: {number: number}
        })
        navigation.push('Palmistry')
    };

    return (
        <DefaultView>
            <Aquarius width={80} height={80} style={styles.aquarius}/>
            <Backgrounds.Constellation color={colors.text} dotColor={colors.primary} height={250} width={250}
                                       style={styles.constellation}/>
            <View style={{flex: .3}}/>
            <View style={styles.textContainer}>
                <Headline style={styles.textHeadline}>{i18n.t('Your favorite number')}</Headline>
                <Text
                    style={styles.textText}>{i18n.t("{name}, to give you accurate and personal information we need to know some info", {name: 'Josep'})}</Text>
            </View>
            <View style={styles.logoContainer}>
                <Dices height={80}/>
            </View>
            <View style={styles.inputContainer}>
                <PaperTextInput
                    value={number}
                    onChangeText={(text) => setNumber(text)}
                    style={styles.inputStyle}
                    underlineColor='#ffffff00'
                    keyboardType="number-pad"
                    enablesReturnKeyAutomatically={true}
                    render={props => <TextInput {...props} style={styles.inputCustom} maxLength={5}/>}
                />
            </View>
            <View style={styles.buttonContainer}>
                <Button mode="contained" disabled={buttonDisabled}
                        onPress={_handleContinue}>{i18n.t('Continue')}</Button>
            </View>
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    constellation: {
        zIndex: 0, position: 'absolute', bottom: 20, left: 20, opacity: 0.1
    },
    aquarius: {
        zIndex: 0, position: 'absolute', top: 20, right: 20, opacity: 0.2
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
        flex: 1, alignSelf: 'center', paddingVertical: 25, zIndex: 1
    },
    inputContainer: {
        flex: 1, paddingHorizontal: 20, opacity: 0.9, zIndex: 2
    },
    inputStyle: {
        borderRadius: 5, textAlign: 'center',
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


export default NumberScreen;