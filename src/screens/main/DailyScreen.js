import React from "react";
import {StyleSheet, View} from "react-native";
import {ActivityIndicator, Button, FAB, Paragraph, Subheading, Surface, Title, useTheme} from "react-native-paper";
import {DefaultScrollView} from "../../components/containers";
import {Backgrounds} from "../../svgs";
import {Sign} from "../../components/zodiac";
import ShadowHeadline from "../../components/paper/ShadowHeadline";
import {useIsDark} from "../../hooks/useTheme";
import i18n from "i18n-js";
import useFetch from "../../hooks/useFetch";
import ShowFromTop from "../../components/animations/ShowFromTop";
import {useGlobals} from "../../contexts/Global";
import Storer from "../../utils/Storer";
import {SESSION_KEY} from "../../constants/session";
import {DateUtils} from "../../utils";
import registerForPushNotificationsAsync from "../../utils/Notifications";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function DailyScreen({navigation}) {
    const [{session}, dispatch] = useGlobals();
    const [fabOpen, setFabOpen] = React.useState(false);
    const {data, loading, error, setLoading} = useFetch();
    const {colors} = useTheme();

    if (!session?.sign) {
        Storer.delete(SESSION_KEY).then(() => dispatch({type: 'setLogOut'}));
    }

    React.useEffect(() => {
        if (!session.notifications) {
            registerForPushNotificationsAsync().then((res) => {
                dispatch({
                    type: 'setAndStoreSession',
                    fields: {notifications: res}
                })
            })
        }
    }, [])

    React.useEffect(() => {
        if (!loading) {
            setLoading(true)
        }
    }, [session.sign])

    return (
        <React.Fragment>
            <DefaultScrollView barStyle={useIsDark() ? 'light-content' : 'dark-content'}>
                <Backgrounds.ConstellationSimple color={colors.text} dotColor={colors.primary}
                                                 style={styles.backgroundConstellation} width={500} height={500}/>
                <View style={styles.headerContainer}>
                    <Sign sign={session.sign} showTitle={false} signWidth={80} signHeight={80}/>
                    <ShadowHeadline style={styles.headerHeadline}>
                        {i18n.t(session.sign)}
                    </ShadowHeadline>
                    <Subheading>
                        {DateUtils.toEuropean((new Date()))}
                    </Subheading>
                </View>
                {
                    loading ? <ActivityIndicator size="large" style={{flex: 1, height: 400}}/>
                        : (
                            <ShowFromTop>
                                <View style={styles.surfaceContainer}>
                                    <Surface style={styles.surfaceSurface}>
                                        <Button icon="heart" style={styles.surfaceButton}
                                                labelStyle={styles.surfaceButtonLabel}>{i18n.t('Love')}</Button>
                                        <Paragraph style={styles.surfaceParagraph}>
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                            in a
                                            piece
                                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                            McClintock,
                                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                                            more
                                            obscure
                                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the
                                            cites of
                                            the
                                            word in classical literature, discovered the undoubtable source
                                        </Paragraph>
                                    </Surface>
                                </View>
                                <View style={styles.surfaceContainer}>
                                    <Surface style={styles.surfaceSurface}>
                                        <Button icon="briefcase" style={styles.surfaceButton}
                                                labelStyle={styles.surfaceButtonLabel}>{i18n.t('Work')}</Button>
                                        <Paragraph style={styles.surfaceParagraph}>
                                            It has roots in a piece
                                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                            McClintock,
                                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the
                                            more obscure
                                            Latin words, consectetur, from a Lorem Ipsum passage, and going through the
                                            cites of the
                                            word in classical literature, discovered the undoubtable source
                                        </Paragraph>
                                    </Surface>
                                </View>
                                <View style={styles.surfaceContainer}>
                                    <Surface style={styles.surfaceSurface}>
                                        <Button icon="food-apple" style={styles.surfaceButton}
                                                labelStyle={styles.surfaceButtonLabel}>{i18n.t('Health')}</Button>
                                        <Paragraph style={styles.surfaceParagraph}>
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots
                                            in a piece
                                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                            McClintock,
                                            a Latin professor at Hampden-Sydney College in Virginia.
                                        </Paragraph>
                                    </Surface>
                                </View>
                                <View style={styles.surfaceContainer}>
                                    <Surface style={styles.surfaceSurface}>
                                        <Button style={styles.surfaceButton}
                                                labelStyle={styles.surfaceButtonLabel}>{i18n.t('Today you love')}</Button>
                                        <View style={styles.bottomThreeContainer}>
                                            <Sign sign={'Scorpio'} signHeight={100}
                                                  styleTitle={{fontSize: 20, marginTop: 15}}/>
                                            <Sign sign={'Taurus'} signHeight={100}
                                                  styleTitle={{fontSize: 20, marginTop: 15}}/>
                                        </View>
                                    </Surface>
                                </View>
                                <View style={styles.surfaceContainer}>
                                    <Surface style={styles.surfaceSurface}>
                                        <Button style={styles.surfaceButton}
                                                labelStyle={styles.surfaceButtonLabel}>{i18n.t('Today you hate')}</Button>
                                        <View style={styles.bottomThreeContainer}>
                                            <Sign sign={'Libra'} signHeight={100}
                                                  styleTitle={{fontSize: 20, marginTop: 15}}/>
                                            <Sign sign={'Leo'} signHeight={100} styleTitle={{fontSize: 20, marginTop: 15}}/>
                                        </View>
                                    </Surface>
                                </View>
                                <View style={styles.surfaceContainer}>
                                    <Surface style={styles.surfaceSurface}>
                                        <Button style={styles.surfaceButton}
                                                labelStyle={styles.surfaceButtonLabel}>{i18n.t('Lucky numbers')}</Button>
                                        <View style={styles.bottomThreeContainer}>
                                            <View style={{alignItems: 'center'}}>
                                                <Title style={styles.luckyNumbersTitle}>25</Title>
                                            </View>
                                            <View style={{alignItems: 'center'}}>
                                                <Title style={styles.luckyNumbersTitle}>6</Title>
                                            </View>
                                            <View style={{alignItems: 'center'}}>
                                                <Title style={styles.luckyNumbersTitle}>32</Title>
                                            </View>
                                        </View>
                                    </Surface>
                                </View>
                                <View style={{height: 20}}/>
                            </ShowFromTop>
                        )
                }
            </DefaultScrollView>
            <FAB.Group
                open={fabOpen}
                icon={fabOpen ? 'arrow-up-circle' : 'plus-circle'}
                actions={[
                    {
                        style: {backgroundColor: colors.primary},
                        icon: 'share',
                        label: i18n.t('Share'),
                        onPress: () => setFabOpen(false)
                    },
                    {
                        icon: 'swap-horizontal',
                        label: i18n.t('Switch sign'),
                        onPress: () => navigation.navigate('Signs') | setFabOpen(false)
                    },
                ]}
                onStateChange={() => null}
                onPress={() => setFabOpen(fabOpen => !fabOpen)}
            />
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    backgroundConstellation: {
        zIndex: 1, position: 'absolute', top: 300, left: 20, opacity: .05
    },
    headerContainer: {
        alignItems: 'center', justifyContent: 'center', marginHorizontal: 20, marginVertical: 20
    },
    headerHeadline: {
        fontWeight: 'bold', fontSize: 30, lineHeight: 34, marginTop: 20
    },
    surfaceContainer: {
        marginTop: 20, marginHorizontal: 20
    },
    surfaceSurface: {
        padding: 20, borderRadius: 10, elevation: 3
    },
    surfaceButton: {
        marginTop: -5, marginBottom: 10
    },
    surfaceButtonLabel: {
        fontSize: 20, fontWeight: 'bold', letterSpacing: 4
    },
    surfaceParagraph: {
        fontSize: 14, lineHeight: 22, letterSpacing: 1,
    },
    bottomThreeContainer: {
        flexDirection: 'row', justifyContent: 'space-around'
    },
    luckyNumbersTitle: {
        fontSize: 26
    }
})


export default DailyScreen;