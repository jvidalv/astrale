import React from "react";
import {Image, Keyboard, ScrollView, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import {Divider, Headline, Subheading, TextInput, Text, Button} from "react-native-paper";
import {useGlobals} from "../../contexts/Global";
import i18n from "i18n-js";
import {useIsDark} from "../../hooks/useTheme";
import {BlurView} from "expo-blur";
import PlatformUtils from "../../utils/Platform";
import Close from "../../components/navs/Close";
import AdMob from "../../components/admob/";
import {LinearGradient} from "expo-linear-gradient";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function AstrologerQuestionScreen({route, navigation}) {
    const [{session}, dispatch] = useGlobals();
    const astrologist = route.params.astrologist;
    const isDark = useIsDark();
    const isAndroid = PlatformUtils.isAndroid;
    console.log(astrologist)
    return (
        <BlurView style={[StyleSheet.absoluteFill, {flex: 1}]} tint={isDark ? 'dark' : 'light'}
                  intensity={isAndroid ? 150 : 100}>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <ScrollView style={{paddingBottom: 200}}>
                    <Close position="right"/>
                    <View style={{margin: 20, alignItems: 'center'}}>
                        <Headline>{astrologist.name}</Headline>
                        <Subheading>{i18n.t(astrologist.school, {word: i18n.t('Astrology')})}</Subheading>
                        <Image source={{uri: astrologist.photo}}
                               style={{width: 80, aspectRatio: 100 / 100, borderRadius: 100, marginTop: 10}}/>
                    </View>
                    <Divider/>
                    <View style={{margin: 20}}>
                        <Text>Questions</Text>
                        <View style={{height: 5}}/>
                        <TextInput
                            label={i18n.t('Your question')}
                            multiline={true}/>
                        <View style={{height: 5}}/>
                        <TextInput label={i18n.t('Your email')} />
                    </View>
                    <Divider/>
                    <View style={{minHeight: 1000, padding: 20}}>
                        <Button mode="contained" style={{borderRadius: 20}}>Send</Button>
                        <View style={[StyleSheet.absoluteFill, {backgroundColor: '#00000050', height: 1000, alignItems : 'center', paddingTop: 50}]}>
                            <AdMob.Simple />
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </BlurView>
    )
        ;
}

const styles = StyleSheet.create({});

export default AstrologerQuestionScreen;