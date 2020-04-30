import React from "react";
import {StyleSheet, View} from "react-native";
import {DefaultScrollView} from "../../components/containers";
import {Backgrounds} from "../../svgs";
import {useGlobals} from "../../contexts/Global";
import {ThemeUtils} from "../../utils";
import {Headline, Paragraph, Surface, Text, useTheme} from "react-native-paper";
import Constellation from "../../svgs/Constellation";
import HoroscopeSigns from "../../constants/zodiac_signs";
import {Sign} from "../../components/zodiac";

const MatchContent = () => (
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
    </View>
);

const SignsContent = ({onPress}) => (
    <View style={styles.signsContainer}>
        {
            HoroscopeSigns.map((sign) => <Sign showTitle={true} sign={sign} signHeight={90} signWidth={80}
                                               onPress={onPress} style={{marginBottom: 10}}/>)
        }
    </View>
);

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function CompatibilityScreen({navigation}) {
    const [{theme}] = useGlobals();
    const {colors} = useTheme();
    const [selectedSigns, setSelectedSigns] = React.useState([])
    const _handleSignPress = (sign) => setSelectedSigns(selectedSigns => [...selectedSigns, sign])
    const _handleSignTopPress = () => setSelectedSigns([])

    return (
        <React.Fragment>
        <DefaultScrollView barStyle={ThemeUtils.isDark(theme) ? 'light-content' : 'dark-content'}>
            <View style={styles.headerContainer}>
                <Headline style={styles.headerHeadline}>
                    Compatibility
                </Headline>
            </View>
            <View style={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                marginVertical: 30
            }}>
                {
                    selectedSigns[0] ?
                        <Sign sign={selectedSigns[0]} onPress={_handleSignTopPress} showTitle={false} signHeight={100}
                              signWidth={100}/> :
                        <View style={{backgroundColor: colors.surface, width: 100, height: 100, borderRadius: 50}}/>
                }
                <View style={{justifyContent: 'center', flex: .3, alignItems : 'center'}}><Text style={{fontSize: 22}}>🔥</Text></View>
                {
                    selectedSigns[1] ?
                        <Sign  onPress={_handleSignTopPress} sign={selectedSigns[1]} showTitle={false} signHeight={100} signWidth={100}/> :
                        <View style={{backgroundColor: colors.surface, width: 100, height: 100, borderRadius: 50}}/>
                }
            </View>
            {
                selectedSigns.length === 2 ? <MatchContent/> : <SignsContent onPress={_handleSignPress}/>
            }

        </DefaultScrollView>
    <Constellation height={250} width={250} style={styles.constellation}/>
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
        alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, marginTop: 20
    },
    headerHeadline: {
        fontWeight: 'bold', fontSize: 30
    },
    signsContainer: {
        zIndex: 2,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
        flex: 1
    },
    surfaceContainer: {
        marginTop: 20, marginHorizontal: 20
    },
    surfaceSurface: {
        padding: 20, borderRadius: 10
    },
    surfaceParagraph: {
        fontSize: 15, lineHeight: 22, letterSpacing: 1,
    },
})

export default CompatibilityScreen;