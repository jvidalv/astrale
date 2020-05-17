import React from "react";
import {SafeAreaView, StyleSheet, View} from "react-native";
import {ActivityIndicator, Divider, ProgressBar, Subheading, Text, useTheme} from "react-native-paper";
import {Sign} from "../../components/zodiac";
import ShadowHeadline from "../../components/paper/ShadowHeadline";
import i18n from "i18n-js";
import useFetch from "../../hooks/useFetch";
import ShowFromTop from "../../components/animations/ShowFromTop";
import {useGlobals} from "../../contexts/Global";
import Storer from "../../utils/Storer";
import {SESSION_KEY} from "../../constants/session";
import registerForPushNotificationsAsync from "../../utils/Notifications";
import SpaceSky from "../../components/decorations/SpaceSky";
import TextBold from "../../components/paper/TextBold";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import MainNav from "../../components/navs/MainNav";
import ScrollViewFadeFirst from "../../components/containers/ScrollViewFadeFirst";
import months from "../../constants/months";
import * as Localization from "expo-localization";

/**
 * @param number {number}
 * @returns {*}
 * @constructor
 */
const LuckyNumber = ({number}) => {
    const {colors} = useTheme();
    return (
        <View style={[LuckyNumberStyles.circle, {backgroundColor: colors.accent}]}>
            <Text style={{fontSize: 16, marginTop: 3}}>{number}</Text>
        </View>
    )
}

const LuckyNumberStyles = StyleSheet.create({
    circle: {
        borderRadius: 50,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
})


/**
 * @param text {text}
 * @param percent {number}
 * @param style {object}
 * @returns {*}
 * @constructor
 */
const ProgressItem = ({text, percent, style}) => {
    const {colors} = useTheme();
    return (
        <View style={[{flex: 1}, style]}>
            <Text style={ProgressItemStyles.text}>
                {text}
            </Text>
            <ProgressBar style={ProgressItemStyles.bar} progress={percent / 100} st/>
            <Text theme={{colors: {text: colors.primary}}}>
                {percent}%
            </Text>
        </View>
    )
}

const ProgressItemStyles = StyleSheet.create({
    text: {
        fontSize: 16
    },
    bar: {
        marginVertical: 5, borderRadius: 5
    }
})

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function DailyScreen({navigation}) {
    const [{session}, dispatch] = useGlobals();
    const {colors, fonts} = useTheme();
    const {data, loading, error, setLoading} = useFetch();
    const d = new Date();
    const l = Localization.locale.substr(0, 2);
    const RightButton = <MaterialCommunityIcons
        onPress={() => navigation.navigate('Signs', {key: 'Sign'})}
        name="swap-horizontal"
        color={colors.text}
        size={30}
        style={{opacity: .5}}
    />;
    const Header = (
        <SafeAreaView>
            <MainNav rightButton={RightButton}/>
            <View style={[styles.headerContainer]}>
                <Sign sign={session.sign} showTitle={false} signWidth={70} signHeight={70}/>
                <ShadowHeadline style={styles.headerHeadline}>
                    {i18n.t(session.sign)}
                </ShadowHeadline>
                <Subheading>
                    {i18n.t('date_daily', {day: d.getDate(), month: months[l][d.getMonth()], year: d.getFullYear()})}
                </Subheading>
            </View>
            <Divider/>
        </SafeAreaView>
    )

    if (!session?.sign) {
        Storer.delete(SESSION_KEY).then(() => dispatch({type: 'setLogOut'}));
    }

    React.useEffect(() => {
        if (!session.notifications) {
            !__DEV__ && registerForPushNotificationsAsync().then((res) => {
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
            <SpaceSky/>
            <SafeAreaView>
                <ScrollViewFadeFirst element={Header} height={200}>
                    <View style={{height: 20}}/>
                    {
                        loading ? <ActivityIndicator size="large" style={{flex: 1, height: 400}}/>
                            : (
                                <ShowFromTop>
                                    <View style={[styles.defaultContainer, {
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        marginTop: 10
                                    }]}>
                                        <TextBold style={styles.textTitles}>
                                            {i18n.t('Focus of the day')}:
                                        </TextBold>
                                        <TextBold style={{fontSize: 16, marginLeft: 5, color: colors.primary}}>
                                            {i18n.t('Finances')}
                                        </TextBold>
                                    </View>
                                    <View style={[styles.defaultContainer, {
                                        marginTop: 25,
                                        marginBottom: 5,
                                        flexDirection: 'row',
                                        justifyContent: 'space-around'
                                    }]}>
                                        <ProgressItem text={i18n.t('Love')} percent={50}/>
                                        <ProgressItem text={i18n.t('Career')} percent={25} style={{marginHorizontal: 5}}/>
                                        <ProgressItem text={i18n.t('Health')} percent={87}/>
                                    </View>
                                    <View style={[styles.defaultContainer]}>
                                        <View style={styles.horoscopeTodayContainer}>
                                            <TextBold style={styles.textTitles}>
                                                {i18n.t('Your horoscope for today')}:
                                            </TextBold>
                                            <View style={styles.iconsHoroscopeToday}>
                                                <MaterialCommunityIcons
                                                    name="heart"
                                                    size={16}
                                                    color={colors.text}
                                                    style={{marginLeft: 5}}
                                                />
                                                <MaterialCommunityIcons
                                                    name="briefcase"
                                                    size={16}
                                                    color={colors.text}
                                                    style={{marginLeft: 5}}/>
                                                <MaterialCommunityIcons
                                                    name="food-apple"
                                                    size={16}
                                                    color={colors.text}
                                                    style={{marginLeft: 5}}/>
                                            </View>

                                        </View>
                                        <Text style={{marginTop: 15}}>
                                            Estás en un tono receptivo a las críticas y aceptarás las bien intencionadas.
                                            Tendrás noticias de antiguos amigos de los que no sabes hace tiempo, te
                                            sorprenderás.
                                        </Text>
                                        <Text style={{marginTop: 5}}>
                                            Das los primeros pasos dentro de una nueva realidad, cargada de posibilidades.
                                            Dedica una parte de tu tiempo libre a relajarte, así se evita el estrés. </Text>
                                        <Text style={{marginTop: 5}}>
                                            Tienes ganas de hacer cambios a nivel profesional, te sientes sin futuro.
                                            Incurrirás
                                            en un gasto inesperado, la buena noticia es que podrás hacerle frente.
                                        </Text>
                                    </View>
                                    <View style={styles.defaultContainer}>
                                        <TextBold style={styles.textTitles}>{i18n.t('Today you love')}</TextBold>
                                    </View>
                                    <View style={[styles.loveContainer, {
                                        borderColor: colors.text + '0D',
                                    }]}>
                                        <View style={[styles.heartLoveContainer, {
                                            backgroundColor: colors.text + '0D',
                                        }]}>
                                            <MaterialCommunityIcons name="heart" size={30} color={colors.accent}/>
                                        </View>
                                        <View style={[styles.loveSignsContainer]}>
                                            <Sign sign={'Scorpio'} signHeight={40} signWidth={50}
                                                  styleTitle={{fontSize: 12}}/>
                                            <Sign sign={'Taurus'} signHeight={40}
                                                  style={{marginLeft: 20}}
                                                  styleTitle={{fontSize: 12}}/>
                                            <Sign sign={'Leo'} signHeight={40}
                                                  style={{marginLeft: 20}}
                                                  styleTitle={{fontSize: 12}}/>
                                        </View>
                                    </View>
                                    <Divider style={{marginTop: 20}}/>
                                    <View style={styles.defaultContainer}>
                                        <TextBold style={styles.textTitles}>{i18n.t('Lucky numbers')}</TextBold>
                                    </View>
                                    <View style={[styles.defaultContainer, {
                                        flexDirection: 'row',
                                        justifyContent: 'space-evenly',
                                    }]}>

                                        <LuckyNumber number={8}/>
                                        <LuckyNumber number={12}/>
                                        <LuckyNumber number={3}/>
                                    </View>
                                    <View style={{paddingVertical: 10}}/>
                                </ShowFromTop>
                            )
                    }
                </ScrollViewFadeFirst>
            </SafeAreaView>
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
    defaultContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    textTitles: {
        fontSize: 16
    },
    horoscopeTodayContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconsHoroscopeToday: {
        flexDirection: 'row', justifyContent: 'space-evenly'
    },
    loveContainer: {
        flexDirection: 'row',
        marginTop: 15,
        marginHorizontal: 20,
        justifyContent: 'space-between',
        borderWidth: 2,
        borderRadius: 10
    },
    heartLoveContainer: {
        flex: .2,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    loveSignsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        flex: 1,
        marginTop: 10
    }
})


export default DailyScreen;