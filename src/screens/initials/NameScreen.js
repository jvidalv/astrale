import React from "react";
import {StyleSheet, TextInput, View} from "react-native";
import {Button, Headline, Text, TextInput as PaperTextInput, useTheme} from "react-native-paper";
import {DefaultView} from "../../components/containers";
import Logo from "../../svgs/Logo";
import {Backgrounds} from "../../svgs";
import Aquarius from "../../svgs/Aquarius";
import i18n from "i18n-js";
import {useGlobals} from "../../contexts/Global";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function NameScreen({navigation}) {
    const [{}, dispatch] = useGlobals();
    const [name, setName] = React.useState();
    const buttonDisabled = !name || name.length < 2;
    const _handleContinue = () => {
        dispatch({
            type : 'setSession',
            fields : {name : name}
        })
        navigation.push('BirthDate')
    }

    return (
        <DefaultView>
            <Aquarius width={80} height={80} style={styles.aquarius}/>
            <Backgrounds.Constellation height={250} width={250} style={styles.constellation}/>
            <View style={{flex: 1}}/>
            <View style={styles.textContainer}>
                <Headline style={styles.textHeadline}>{i18n.t('What\'s your name?')}</Headline>
                <Text
                    style={styles.textText}>{i18n.t("In order to give you accurate and personal information we need to know some info")}</Text>
            </View>
            <View style={styles.logoContainer}>
                <Logo width={70} height={70}/>
            </View>
            <View style={styles.inputContainer}>
                <PaperTextInput
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={styles.input}
                    underlineColor='#ffffff00'
                    render={props => <TextInput {...props} style={styles.inputCustom}/>}
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


export default NameScreen;