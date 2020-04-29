import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Headline, Paragraph, Subheading, Surface, Text, Title} from "react-native-paper";
import {DefaultScrollView} from "../../components/containers";
import {Backgrounds, Zodiac} from "../../svgs";
import {useGlobals} from "../../contexts/Global";
import {ThemeUtils} from "../../utils";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function DailyScreen({navigation}) {
    const [{theme}] = useGlobals();
    return (
        <React.Fragment>
            <Backgrounds.Stars style={{zIndex: 5, position: 'absolute', top: 20, right: 20, opacity: 0.2}}/>
            <DefaultScrollView barStyle={ThemeUtils.isDark(theme) ? 'light-content' : 'dark-content'}>
                <View style={{alignItems: 'center', justifyContent: 'center', marginHorizontal: 20}}>
                    <Zodiac.Aquarius width={80}/>
                    <Headline style={{fontWeight: 'bold', fontSize: 30}}>
                        Aquarius
                    </Headline>
                    <Subheading>
                        Wednesday, 29 april, 2020
                    </Subheading>
                </View>
                <View style={{marginTop: 20, marginHorizontal: 20}}>
                    <Surface style={{padding: 20, borderRadius: 10}}>
                        <Button icon="heart" style={{marginTop: -5, marginBottom: 10}}
                                labelStyle={{fontSize: 20, fontWeight: 'bold', letterSpacing: 4}}>Love</Button>
                        <Paragraph style={{fontSize: 15, lineHeight: 22, letterSpacing: 1}}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source
                        </Paragraph>
                    </Surface>
                </View>
                <View style={{marginTop: 20, marginHorizontal: 20}}>
                    <Surface style={{padding: 20, borderRadius: 10}}>
                        <Button icon="briefcase" style={{marginTop: -5, marginBottom: 10}}
                                labelStyle={{fontSize: 20, fontWeight: 'bold', letterSpacing: 4}}>Work</Button>
                        <Paragraph style={{fontSize: 15, lineHeight: 22, letterSpacing: 1}}>
                            It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source
                        </Paragraph>
                    </Surface>
                </View>
                <View style={{marginTop: 20, marginHorizontal: 20}}>
                    <Surface style={{padding: 20, borderRadius: 10}}>
                        <Button icon="briefcase" style={{marginTop: -5, marginBottom: 10}}
                                labelStyle={{fontSize: 20, fontWeight: 'bold', letterSpacing: 4}}>Health</Button>
                        <Paragraph style={{fontSize: 15, lineHeight: 22, letterSpacing: 1}}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia.
                        </Paragraph>
                    </Surface>
                </View>
                <View style={{marginTop: 20, marginHorizontal: 20}}>
                    <Surface style={{padding: 20, borderRadius: 10}}>
                        <Button  style={{marginTop: -5, marginBottom: 10}}
                                labelStyle={{fontSize: 20, fontWeight: 'bold', letterSpacing: 4}}>Today you love</Button>
                        <View style={{flexDirection:'row', justifyContent : 'space-around'}}>
                            <View style={{alignItems: 'center'}}>
                                <Zodiac.Scorpio width={100}/>
                                <Title>Scorpio</Title>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Zodiac.Pisces width={100}/>
                                <Title>Piscis</Title>
                            </View>
                        </View>
                    </Surface>
                </View>
                <View style={{marginTop: 20, marginHorizontal: 20}}>
                    <Surface style={{padding: 20, borderRadius: 10}}>
                        <Button  style={{marginTop: -5, marginBottom: 10}}
                                 labelStyle={{fontSize: 20, fontWeight: 'bold', letterSpacing: 4}}>Today you hate</Button>
                        <View style={{flexDirection:'row', justifyContent : 'space-around'}}>
                            <View style={{alignItems: 'center'}}>
                                <Zodiac.Libra width={100}/>
                                <Title>Libra</Title>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Zodiac.Leo width={100}/>
                                <Title>Leo</Title>
                            </View>
                        </View>
                    </Surface>
                </View>
                <View style={{marginTop: 20, marginHorizontal: 20, marginBottom: 20}}>
                    <Surface style={{padding: 20, borderRadius: 10}}>
                        <Button  style={{marginTop: -5, marginBottom: 10}}
                                 labelStyle={{fontSize: 18, fontWeight: 'bold', letterSpacing: 3}}>Lucky numbers</Button>
                        <View style={{flexDirection:'row', justifyContent : 'space-around', marginTop: 5}}>
                            <View style={{alignItems: 'center'}}>
                                <Title style={{fontSize: 30}}>25</Title>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Title style={{fontSize: 30}}>6</Title>
                            </View>
                            <View style={{alignItems: 'center'}}>
                                <Title style={{fontSize: 30}}>32</Title>
                            </View>
                        </View>
                    </Surface>
                </View>
            </DefaultScrollView>
        </React.Fragment>

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