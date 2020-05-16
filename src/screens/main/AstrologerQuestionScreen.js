import React from "react";
import {Image, Keyboard, ScrollView, StyleSheet, TouchableWithoutFeedback, View} from "react-native";
import {Button, Divider, Headline, Subheading, Text, TextInput, useTheme} from "react-native-paper";
import {useGlobals} from "../../contexts/Global";
import i18n from "i18n-js";
import {useIsDark} from "../../hooks/useTheme";
import {BlurView} from "expo-blur";
import PlatformUtils from "../../utils/Platform";
import Close from "../../components/navs/Close";

/**
 * @param route
 * @param navigation
 * @returns {*}
 * @constructor
 */
function AstrologerQuestionScreen({route, navigation}) {
    const [{session}, dispatch] = useGlobals();
    const {colors} = useTheme();
    const astrologist = route.params.astrologist;
    const isDark = useIsDark();
    const isAndroid = PlatformUtils.isAndroid;
    const _handleProceed = () => {

    }
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
                               style={styles.image}/>
                    </View>
                    <Divider/>
                    <View style={{margin: 20}}>
                        <View style={{height: 5}}/>
                        <TextInput
                            label={i18n.t('Your question')}
                            multiline={true}
                            style={{height: 150}}
                            maxLength={250}
                        />
                        <View style={{height: 5}}/>
                        <TextInput label={i18n.t('Your email')} keyboardType='email-address'/>
                    </View>
                    <View style={{marginHorizontal: 20, marginBottom: 20}}>
                        <Button onPress={_handleProceed} mode="contained" style={{borderRadius: 20}} icon="send">{i18n.t('Proceed')}</Button>
                        <Text style={styles.advice}>*{i18n.t('You\'ll need to see an ad before you can send the question')}</Text>
                    </View>
                    <Divider/>
                    <View>
                        <Text>@ADHERE</Text>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </BlurView>
    );
}

const styles = StyleSheet.create({
    image: {width: 80, aspectRatio: 100 / 100, borderRadius: 100, marginTop: 10},
    advice : {
        marginTop: 7,
        fontSize: 10,
        textAlign: 'center',
        opacity: .8
    }
});

export default AstrologerQuestionScreen;