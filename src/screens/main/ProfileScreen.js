import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Caption, Divider, Subheading, Switch, Title, useTheme} from "react-native-paper";
import {DefaultScrollView} from "../../components/containers";
import {useGlobals} from "../../contexts/Global";
import ShadowHeadline from "../../components/paper/ShadowHeadline";
import i18n from "i18n-js";
import {useIsDark} from "../../hooks/useTheme";
import {Backgrounds} from "../../svgs";
import useRate from "../../hooks/useRate";
import useShare from "../../hooks/useShare";
import {DateUtils} from "../../utils";
import Storer from "../../utils/Storer";
import {SESSION_KEY} from "../../constants/session";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function ProfileScreen({navigation}) {
    const [{session}, dispatch] = useGlobals();
    const {name, sign, birthDate, number, relationship, sex, days, daysRow} = session;
    const {colors} = useTheme();
    const {setRate} = useRate();
    const {setStartShare} = useShare('Proba', 'https://proba.com');

    const isDark = useIsDark();
    const _handleDarkThemeChange = () => {
        dispatch({
            'type': 'switchTheme',
            'theme': isDark ? 'light' : 'dark',
        })
    };
    const _handleLogOut = async () => {
        await Storer.delete(SESSION_KEY);
        dispatch({ type: 'setLogOut'});
        navigation.navigate('Name')
    };
    const _handleNotificationsChange = () => {
        //todo
    };
    const _handleRatePress = async () => setRate(true);
    const _handleSharePress = async () => setStartShare(true);

    return (
        <DefaultScrollView barStyle={useIsDark() ? 'light-content' : 'dark-content'}>
            <Backgrounds.Telescope color={colors.text} style={styles.telescope}/>
            <View style={styles.headerContainer}>
                <ShadowHeadline style={styles.headerHeadline}>
                    {name}
                </ShadowHeadline>
                <Subheading>
                    {i18n.t(sign)}
                </Subheading>
            </View>
            <Divider style={{marginTop: 25}}/>
            <View style={styles.detailsContainer}>
                <Button icon="cake-variant" style={{alignItems: 'flex-start'}}
                        labelStyle={styles.detailsLabel}
                        theme={{colors: {primary: colors.text}}}>
                    {DateUtils.toEuropean((new Date(birthDate)))}
                </Button>
                <Button icon="gender-transgender" style={{alignItems: 'flex-start'}}
                        labelStyle={styles.detailsLabel}
                        uppercase={false}
                        theme={{colors: {primary: colors.text}}}>
                    {i18n.t(sex)}
                </Button>
                <Button icon="heart-circle" style={{alignItems: 'flex-start'}}
                        labelStyle={styles.detailsLabel}
                        uppercase={false}
                        theme={{colors: {primary: colors.text}}}>
                    {i18n.t(relationship)}
                </Button>
                <Button icon="dice-6" style={{alignItems: 'flex-start'}}
                        labelStyle={styles.detailsLabel}
                        uppercase={false}
                        theme={{colors: {primary: colors.text}}}>
                    {number}
                </Button>
            </View>
            <Divider style={{marginTop: 25}}/>
            <View style={styles.featuredContainer}>
                <View style={styles.featuredView}>
                    <Title>{days}</Title>
                    <Caption>{i18n.t('Days visited')}</Caption>
                </View>
                <View style={styles.featuredView}>
                    <Title>{daysRow}</Title>
                    <Caption>{i18n.t('Consecutive days')}</Caption>
                </View>
            </View>
            <Divider/>
            <View style={styles.buttonsContainer}>
                <Button onPress={_handleSharePress} icon="account-multiple" style={{marginTop: 10}}
                        labelStyle={styles.buttonsLabel} uppercase={false}
                        contentStyle={{justifyContent: 'flex-start'}}
                >
                    {i18n.t('Share with your friends')}
                </Button>
                <Button onPress={_handleRatePress} icon="message-draw" style={{marginTop: 10}}
                        labelStyle={styles.buttonsLabel} uppercase={false}
                        contentStyle={{justifyContent: 'flex-start'}}>
                    {i18n.t('Rate the app')}
                </Button>
                {__DEV__ && (
                    <Button onPress={_handleLogOut} icon="restart" style={{marginTop: 10}}
                            labelStyle={styles.buttonsLabel} uppercase={false}
                            contentStyle={{justifyContent: 'flex-start'}}>
                        {i18n.t('Restart')}
                    </Button>
                )
                }
            </View>
            <Divider style={{marginTop: 25}}/>
            <View style={styles.optionsContainer}>
                <View style={styles.optionsOption}>
                    <Button icon="brightness-6" style={styles.optionsButton}
                            labelStyle={styles.optionsLabel} uppercase={false}
                            theme={{colors: {primary: colors.text}}}>
                        {i18n.t('Dark theme')}
                    </Button>
                    <Switch
                        onChange={_handleDarkThemeChange}
                        value={isDark}
                    />
                </View>
                <View style={styles.optionsOption}>
                    <Button icon="bell" style={styles.optionsButton}
                            labelStyle={styles.optionsLabel} uppercase={false}
                            theme={{colors: {primary: colors.text}}}>
                        {i18n.t('Notifications')}
                    </Button>
                    <Switch
                        onChange={_handleNotificationsChange}
                        value={isDark}
                    />
                </View>
            </View>
        </DefaultScrollView>
    );
}

const styles = StyleSheet.create({
    telescope: {
        zIndex: 0, position: 'absolute', top: 170, right: 20, opacity: 0.1
    },
    headerContainer: {
        alignItems: 'center', justifyContent: 'center', marginTop: 30, marginHorizontal: 20
    },
    headerHeadline: {
        fontWeight: 'bold', fontSize: 30
    },
    detailsContainer: {
        marginHorizontal: 20, justifyContent: 'flex-start', marginTop: 25
    },
    detailsLabel: {
        marginLeft: 23, fontSize: 18
    },
    featuredContainer: {
        flexDirection: 'row', alignItems: 'center'
    },
    featuredView: {
        alignItems: 'center', flex: 1, paddingVertical: 25
    },
    buttonsContainer: {
        marginHorizontal: 20, justifyContent: 'flex-start', marginTop: 25,
    },
    buttonsLabel: {
        marginLeft: 23, fontSize: 18
    },
    optionsContainer: {
        marginHorizontal: 20, justifyContent: 'flex-start', marginTop: 25, marginBottom: 25
    },
    optionsOption: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    optionsButton: {
        alignItems: 'flex-start', marginTop: 10
    },
    optionsLabel: {
        marginLeft: 23, fontSize: 18
    }
});

export default ProfileScreen;