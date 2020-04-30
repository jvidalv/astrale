import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Headline, Paragraph, Subheading, Surface, Title} from "react-native-paper";
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
            <Backgrounds.Stars style={styles.backgroundStars}/>
            <DefaultScrollView barStyle={ThemeUtils.isDark(theme) ? 'light-content' : 'dark-content'}>
                <View style={styles.headerContainer}>
                    <Zodiac.Aquarius width={80}/>
                    <Headline style={styles.headerHeadline}>
                        Aquarius
                    </Headline>
                    <Subheading>
                        Wednesday, 29 april, 2020
                    </Subheading>
                </View>
                <View style={styles.surfaceContainer}>
                    <Surface style={styles.surfaceSurface}>
                        <Button icon="heart" style={styles.surfaceButton}
                                labelStyle={styles.surfaceButtonLabel}>Love</Button>
                        <Paragraph style={styles.surfaceParagraph}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source
                        </Paragraph>
                    </Surface>
                </View>
                <View style={styles.surfaceContainer}>
                    <Surface style={styles.surfaceSurface}>
                        <Button icon="briefcase" style={styles.surfaceButton}
                                labelStyle={styles.surfaceButtonLabel}>Work</Button>
                        <Paragraph style={styles.surfaceParagraph}>
                            It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                            word in classical literature, discovered the undoubtable source
                        </Paragraph>
                    </Surface>
                </View>
                <View style={styles.surfaceContainer}>
                    <Surface style={styles.surfaceSurface}>
                        <Button icon="food-apple" style={styles.surfaceButton}
                                labelStyle={styles.surfaceButtonLabel}>Health</Button>
                        <Paragraph style={styles.surfaceParagraph}>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia.
                        </Paragraph>
                    </Surface>
                </View>
                <View style={styles.surfaceContainer}>
                    <Surface style={styles.surfaceSurface}>
                        <Button style={styles.surfaceButton}
                                labelStyle={styles.surfaceButtonLabel}>Today you
                            love</Button>
                        <View style={styles.bottomThreeContainer}>
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
                <View style={styles.surfaceContainer}>
                    <Surface style={styles.surfaceSurface}>
                        <Button style={styles.surfaceButton}
                                labelStyle={styles.surfaceButtonLabel}>Today you
                            hate</Button>
                        <View style={styles.bottomThreeContainer}>
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
                <View style={styles.surfaceContainer}>
                    <Surface style={styles.surfaceSurface}>
                        <Button style={styles.surfaceButton}
                                labelStyle={styles.surfaceButtonLabel}>Lucky numbers</Button>
                        <View style={styles.bottomThreeContainer}>
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
    backgroundStars: {
        zIndex: 0, position: 'absolute', top: 20, right: 20, opacity: 0.2
    },
    headerContainer: {
        alignItems: 'center', justifyContent: 'center', marginHorizontal: 20
    },
    headerHeadline: {
        fontWeight: 'bold', fontSize: 30
    },
    surfaceContainer: {
        marginTop: 20, marginHorizontal: 20
    },
    surfaceSurface: {
        padding: 20, borderRadius: 10
    },
    surfaceButton: {
        marginTop: -5, marginBottom: 10
    },
    surfaceButtonLabel: {
        fontSize: 20, fontWeight: 'bold', letterSpacing: 4
    },
    surfaceParagraph: {
        fontSize: 15, lineHeight: 22, letterSpacing: 1,
    },
    bottomThreeContainer: {
        flexDirection: 'row', justifyContent: 'space-around'
    },
})


export default DailyScreen;