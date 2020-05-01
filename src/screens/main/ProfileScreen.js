import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Caption, Divider, Subheading, Switch, Title, useTheme} from "react-native-paper";
import {DefaultScrollView} from "../../components/containers";
import {useGlobals} from "../../contexts/Global";
import ShadowHeadline from "../../components/paper/ShadowHeadline";
import i18n from "i18n-js";
import {useIsDark} from "../../hooks/useTheme";
import {Backgrounds} from "../../svgs";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function ProfileScreen({navigation}) {
    const {colors} = useTheme();
    const [{theme}, dispatch] = useGlobals();
    const _handleDarkThemeChange = () => {
        dispatch({
            'type': 'switchTheme',
            'theme': theme === 'dark' ? 'light' : 'dark',
        })
    };
    const _handleNotificationsChange = () => {

    };
    return (
        <DefaultScrollView barStyle={useIsDark() ? 'light-content' : 'dark-content'}>
            <Backgrounds.Telescope color={colors.text} style={styles.telescope}/>
            <View style={styles.headerContainer}>
                <ShadowHeadline style={styles.headerHeadline}>
                    Josep
                </ShadowHeadline>
                <Subheading>
                    {i18n.t('Aquarius')}
                </Subheading>
            </View>
            <Divider style={{marginTop: 25}}/>
            <View style={styles.detailsContainer}>
                <Button icon="cake-variant" style={{alignItems: 'flex-start'}}
                        labelStyle={styles.detailsLabel}
                        theme={{colors: {primary: colors.text}}}>
                    03/02/1994
                </Button>
                <Button icon="gender-transgender" style={{alignItems: 'flex-start'}}
                        labelStyle={styles.detailsLabel}
                        uppercase={false}
                        theme={{colors: {primary: colors.text}}}>
                    {i18n.t('Male')}
                </Button>
                <Button icon="heart-circle" style={{alignItems: 'flex-start'}}
                        labelStyle={styles.detailsLabel}
                        uppercase={false}
                        theme={{colors: {primary: colors.text}}}>
                    {i18n.t('It\'s difficult')}
                </Button>
                <Button icon="dice-6" style={{alignItems: 'flex-start'}}
                        labelStyle={styles.detailsLabel}
                        uppercase={false}
                        theme={{colors: {primary: colors.text}}}>
                        25
                </Button>
            </View>
            <Divider style={{marginTop: 25}}/>
            <View style={styles.featuredContainer}>
                <View style={styles.featuredView}>
                    <Title>321</Title>
                    <Caption>{i18n.t('Days visited')}</Caption>
                </View>
                <View style={styles.featuredView}>
                    <Title>38</Title>
                    <Caption>{i18n.t('Consecutive days')}</Caption>
                </View>
            </View>
            <Divider/>
            <View style={styles.buttonsContainer}>
                <Button icon="account-multiple" style={{alignItems: 'flex-start', marginTop: 10}}
                        labelStyle={styles.buttonsLabel} uppercase={false}>
                    {i18n.t('Share with your friends')}
                </Button>
                <Button icon="message-draw" style={{alignItems: 'flex-start', marginTop: 10}}
                        labelStyle={styles.buttonsLabel} uppercase={false}>
                    {i18n.t('Rate the app')}
                </Button>
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
                        value={theme === 'dark'}
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
                        value={theme === 'dark'}
                    />
                </View>
            </View>
        </DefaultScrollView>
    );
}

const styles = StyleSheet.create({
    telescope : {
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
        marginHorizontal: 20, justifyContent: 'flex-start', marginTop: 25
    },
    buttonsLabel: {
        marginLeft: 23, fontSize: 18
    },
    optionsContainer : {
marginHorizontal: 20, justifyContent: 'flex-start', marginTop: 25, marginBottom: 25
    },
    optionsOption : {
flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    optionsButton : {
alignItems: 'flex-start', marginTop: 10
    },
    optionsLabel : {
        marginLeft: 23, fontSize: 18
    }
});

export default ProfileScreen;