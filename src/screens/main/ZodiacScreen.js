import React from "react";
import {StyleSheet, View} from "react-native";
import {FAB, useTheme} from "react-native-paper";
import i18n from "i18n-js";
import DefaultScrollView from "../../components/containers/DefaultScrollView";
import {Sign} from "../../components/zodiac";
import ShadowHeadline from "../../components/paper/ShadowHeadline";
import SolarSystem from "../../svgs/SolarSystem";
import HoroscopeSigns, {HoroscopeDates} from "../../constants/zodiac_signs";
import {Backgrounds} from "../../svgs";
import {useIsDark} from "../../hooks/useTheme";
import * as Localization from "expo-localization";
import {useGlobals} from "../../contexts/Global";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function ZodiacScreen({navigation}) {
    const [{}, dispatch] = useGlobals();
    const {colors} = useTheme();
    const locales = ['es', 'en']
    const cut_locale = Localization.locale.substring(0, 2);
    const locale = locales.includes(cut_locale) ? cut_locale : 'en';
    const _handleSignPress = (sign) => {
        dispatch({
            type: 'setAndStoreSession',
            fields: {sign: sign}
        })
        navigation.pop();
    }

    return (
        <React.Fragment>
            <DefaultScrollView barStyle={useIsDark() ? 'light-content' : 'dark-content'}>
                <View style={styles.headerContainer}>
                    <SolarSystem sign="Aquarius" showTitle={false} width={80} height={80}/>
                    <ShadowHeadline style={styles.headerHeadline}>
                        {i18n.t('Zodiac signs')}
                    </ShadowHeadline>
                </View>
                <View style={styles.signsContainer}>
                    {
                        HoroscopeSigns.map((sign) => <Sign
                            key={sign}
                            showTitle={true}
                            sign={sign}
                            signHeight={80}
                            signWidth={90}
                            onPress={() => _handleSignPress(sign)}
                            style={{marginBottom: 10, padding: 3}}
                            styleTitle={{marginTop: 10}}
                            subtitle={HoroscopeDates[sign][locale]}
                        />)
                    }
                </View>
                <Backgrounds.ConstellationSimple
                    height={450} width={450}
                    color={colors.text} dotColor={colors.primary}
                    style={styles.constellation}/>
            </DefaultScrollView>
            <FAB
                style={styles.fab}
                small
                icon="arrow-left"
                label={i18n.t("Back")}
                onPress={() => navigation.pop()}
            />
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, marginVertical: 30
    },
    headerHeadline: {
        fontWeight: 'bold', fontSize: 30, lineHeight: 34, marginTop: 20
    },
    signsContainer: {
        zIndex: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 60,
        flex: 1
    },
    constellation: {
        position: 'absolute', bottom: 10, left: 10, opacity: .05, zIndex: 1
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})


export default ZodiacScreen;