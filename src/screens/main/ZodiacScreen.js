import React from "react";
import {StyleSheet, View} from "react-native";
import {Caption, Subheading, Text} from "react-native-paper";
import {DefaultView} from "../../components/containers";
import i18n from "i18n-js";
import {Zodiac} from "../../svgs";
import HoroscopeSigns from "../../constants/zodiac_signs";
import {Sign} from "../../components/zodiac";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function ZodiacScreen({navigation}) {
    return (
        <DefaultView>
            <View style={{flex: .2}}/>
            <View style={styles.textContainer}>
                <Subheading style={styles.textHeadline}>{i18n.t('Zodiac signs')}</Subheading>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10
            }}>
                <View style={{alignItems: 'center'}}>
                    <Zodiac.Aries height={70} style={{}}/>
                    <Text style={{marginTop: 3}}>Aries</Text>
                    <Caption style={{marginTop: -3}}>Mar 21 - Apr 19</Caption>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Zodiac.Taurus height={70}/>
                    <Text  style={{marginTop: 3}}>Taurus</Text>
                    <Caption style={{marginTop: -3}}>Mar 21 - Apr 19</Caption>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Zodiac.Gemini height={70}/>
                    <Text  style={{marginTop: 3}}>Gemini</Text>
                    <Caption style={{marginTop: -3}}>Mar 21 - Apr 19</Caption>
                </View>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10
            }}>
                <View style={{alignItems: 'center'}}>
                    <Zodiac.Cancer height={70}/>
                    <Text  style={{marginTop: 3}}>Cancer</Text>
                    <Caption style={{marginTop: -3}}>Mar 21 - Apr 19</Caption>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Zodiac.Leo height={70}/>
                    <Text  style={{marginTop: 3}}>Leo</Text>
                    <Caption style={{marginTop: -3}}>Mar 21 - Apr 19</Caption>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Zodiac.Virgo height={70}/>
                    <Text  style={{marginTop: 3}}>Virgo</Text>
                    <Caption style={{marginTop: -3}}>Mar 21 - Apr 19</Caption>
                </View>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10
            }}>

                <View style={{alignItems: 'center'}}>
                    <Zodiac.Libra height={70}/>
                    <Text  style={{marginTop: 3}}>Libra</Text>
                    <Caption style={{marginTop: -3}}>Mar 21 - Apr 19</Caption>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Zodiac.Scorpio height={70}/>
                    <Text  style={{marginTop: 3}}>Scorpio</Text>
                    <Caption style={{marginTop: -3}}>Mar 21 - Apr 19</Caption>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Zodiac.Sagittarius height={70}/>
                    <Text  style={{marginTop: 3}}>Sagittarius</Text>
                    <Caption style={{marginTop: -3}}>Mar 21 - Apr 19</Caption>
                </View>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 10
            }}>
                <View style={{alignItems: 'center'}}>
                    <Zodiac.Capricorn height={70}/>
                    <Text  style={{marginTop: 3}}>Capricorn</Text>
                    <Caption style={{marginTop: -3}}>Mar 21 - Apr 19</Caption>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Zodiac.Aquarius height={70}/>
                    <Text  style={{marginTop: 3}}>Aquarius</Text>
                    <Caption style={{marginTop: -3}}>Mar 21 - Apr 19</Caption>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Zodiac.Pisces height={70}/>
                    <Text  style={{marginTop: 3}}>Pisces</Text>
                    <Caption style={{marginTop: -3}}>Mar 21 - Apr 19</Caption>
                </View>
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
        flex: .5, alignSelf: 'center', paddingHorizontal: 10
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


export default ZodiacScreen;