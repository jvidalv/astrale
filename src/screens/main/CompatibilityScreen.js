import React from "react";
import {StyleSheet, View} from "react-native";
import {DefaultScrollView} from "../../components/containers";
import {Button, Paragraph, ProgressBar, Surface, Text, useTheme} from "react-native-paper";
import {Backgrounds} from "../../svgs";
import HoroscopeSigns from "../../constants/zodiac_signs";
import {Sign} from "../../components/zodiac";
import ShadowHeadline from "../../components/paper/ShadowHeadline";
import useMatch from "../../hooks/useMatch";
import {useIsDark} from "../../hooks/useTheme";
import i18n from "i18n-js";

/**
 * Progress bars from match
 * @param start {number|string}
 * @param name {string}
 * @param icon {string}
 * @returns {*}
 * @constructor
 */
const Bars = ({start, name, icon}) => {
    const {colors} = useTheme();
    return (
        <React.Fragment>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Button theme={{colors: {primary: colors.text}}} icon={icon}>{name}</Button>
                <Text>{start}%</Text>
            </View>
            <ProgressBar progress={start / 100} style={{borderRadius: 10, height: 5, marginBottom: 3}}/>
        </React.Fragment>
    )
};

/**
 * Content on both selected
 * @returns {*}
 * @constructor
 */
const MatchContent = () => {
    const matches = useMatch();

    return (
        <View style={styles.surfaceContainer}>
            <Surface style={styles.surfaceSurface}>
                <Paragraph style={styles.surfaceParagraph}>
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                    of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                    a Latin professor at Hampden-Sydney College in Virginia.
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                    of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                    a Latin professor at Hampden-Sydney College in Virginia.
                </Paragraph>
            </Surface>
            <View style={{marginVertical: 20}}>
                {
                    matches.map((props, index) => <Bars key={index} {...props}/>)
                }

            </View>
        </View>
    )
};

/**
 * Each sign on body
 * @param onPress
 * @returns {*}
 * @constructor
 */
const SignsContent = ({onPress}) => (
    <View style={styles.signsContainer}>
        {
            HoroscopeSigns.map((sign) => <Sign
                key={sign}
                showTitle={true}
                sign={sign}
                signHeight={100}
                signWidth={90}
                onPress={onPress}
                style={{marginBottom: 10, padding: 3}}
            />)
        }
    </View>
);

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function CompatibilityScreen({navigation}) {
    const {colors} = useTheme();
    const [selectedSigns, setSelectedSigns] = React.useState([])
    const _handleSignPress = (sign) => setSelectedSigns(selectedSigns => [...selectedSigns, sign])
    const _handleSignTopPress = () => setSelectedSigns([])

    return (
        <React.Fragment>
            <DefaultScrollView barStyle={useIsDark() ? 'light-content' : 'dark-content'}>
                <View style={styles.headerContainer}>
                    <ShadowHeadline style={styles.headerHeadline}>
                        {i18n.t('Compatibility')}
                    </ShadowHeadline>
                </View>
                <View style={styles.matchCirclesContainer}>
                    {
                        selectedSigns[0] ?
                            <Sign sign={selectedSigns[0]} onPress={_handleSignTopPress} showTitle={false}
                                  signHeight={100}
                                  signWidth={100}/> :
                            <View style={[styles.matchCircle, {
                                shadowColor: colors.shadow,
                                backgroundColor: colors.surface,
                                borderColor: colors.text,
                            }]}>
                                <Text style={{textAlign: 'center'}}>
                                    {i18n.t('Your sign')}
                                </Text>
                            </View>
                    }
                    <View style={{justifyContent: 'center', flex: .3, alignItems: 'center'}}><Text
                        style={{fontSize: 22}}>🔥</Text></View>
                    {
                        selectedSigns[1] ?
                            <Sign onPress={_handleSignTopPress} sign={selectedSigns[1]} showTitle={false}
                                  signHeight={100} signWidth={100}/> :
                            <View style={[styles.matchCircle, {
                                shadowColor: colors.shadow,
                                backgroundColor: colors.surface,
                                borderColor: colors.text,

                            }]}>
                                <Text style={{textAlign: 'center'}}>
                                    {i18n.t('Partner sign')}
                                </Text>
                            </View>
                    }
                </View>
                {
                    selectedSigns.length === 2 ? <MatchContent/> : <SignsContent onPress={_handleSignPress}/>
                }
                <Backgrounds.Constellation height={450} width={450} color={colors.text} dotColor={colors.primary}
                                           style={styles.constellation}/>
            </DefaultScrollView>

        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    constellation: {
        position: 'absolute', bottom: 10, left: 10, opacity: .05
    },
    stars: {
        position: 'absolute', top: 20, right: 10, opacity: .05
    },
    headerContainer: {
        alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, marginTop: 25
    },
    headerHeadline: {
        fontWeight: 'bold', fontSize: 30, lineHeight: 34,
    },
    matchCirclesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 30
    },
    matchCircle: {
        elevation: 10,
        shadowRadius: 7,
        shadowOpacity: .2,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        width: 100,
        height: 100,
        borderRadius: 50,
        borderStyle: 'dashed',
        padding: 5,
    },
    signsContainer: {
        zIndex: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
        flex: 1
    },
    surfaceContainer: {
        marginTop: 20, marginHorizontal: 20, elevation: 3
    },
    surfaceSurface: {
        padding: 20, borderRadius: 10
    },
    surfaceParagraph: {
        fontSize: 14, lineHeight: 22, letterSpacing: 1,
    },
})

export default CompatibilityScreen;