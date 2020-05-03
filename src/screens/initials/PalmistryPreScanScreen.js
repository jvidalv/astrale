import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Headline, Text, useTheme} from "react-native-paper";
import {DefaultView} from "../../components/containers";
import {Backgrounds} from "../../svgs";
import Aquarius from "../../svgs/Aquarius";
import Palmistry from "../../svgs/Palmistry";
import i18n from "i18n-js";
import {useIsDark} from "../../hooks/useTheme";

/**
 * @param navigation
 * @param route
 * @returns {*}
 * @constructor
 */
function PalmistryPreScanScreen({navigation, route}) {
    const {colors} = useTheme();
    const isMain = route.params?.main;
    return (
        <DefaultView barStyle={useIsDark() ? 'light-content' : 'dark-content'}>
            <Aquarius color={colors.text} width={80} height={80} style={styles.aquarius}/>
            <Backgrounds.Constellation height={250} width={250} style={styles.constellation}/>
            <View style={{flex: .5}}/>
            <View style={styles.textContainer}>
                <Headline style={styles.textHeadline}>{i18n.t('Palmistry')}</Headline>
                <Text
                    style={styles.textText}>{i18n.t('{name}, in order to offer you the reading of your lifelines we need to scan both hands', {name: 'Josep'})}</Text>
            </View>
            <View style={[styles.palmistryContainer, {borderColor: colors.text + '50'}]}>
                <Palmistry color={colors.text}/>
            </View>
            <View style={[styles.buttonContainer, {borderColor: colors.text + '50'}]}>
                <Button mode="contained" onPress={() => navigation.push('PalmistryScan')}>{i18n.t('Continue')}</Button>
                <View style={{flex: .1}}/>
                {!isMain && <Button onPress={() => navigation.reset({
                    index: 0,
                    routes: [{name: 'Loading'}],
                })}>{i18n.t('Skip')}</Button>}
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
    palmistryContainer: {
        alignSelf: 'center', zIndex: 1, borderWidth: 2, padding: 20, borderRadius: 50
    },
    buttonContainer: {
        flex: 1, paddingHorizontal: 20, paddingTop: 35, justifyContent: 'flex-end', marginBottom: 20
    }
})


export default PalmistryPreScanScreen;