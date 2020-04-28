import React from "react";
import {StyleSheet, View} from "react-native";
import {Button, Caption, Divider, Headline, Subheading, Title, useTheme, withTheme, Switch, Text} from "react-native-paper";
import {DefaultScrollView} from "../../components/containers";
import {Zodiac} from "../../svgs";
import {useGlobals} from "../../contexts/Global";


function ProfileScreen({navigation}) {
    const {colors} = useTheme()
    const [{theme}, dispatch] = useGlobals();
    const _handleDarkThemeChange = () => {
        dispatch({
            'type' : 'switchTheme',
             'theme' : theme === 'dark' ? 'light' : 'dark',
        })
    }

    return (
        <DefaultScrollView>
            <View style={{alignItems: 'center', justifyContent: 'center', marginTop: 20, marginHorizontal: 20}}>
                <Zodiac.Aquarius width={80}/>
                <Headline style={{fontWeight: 'bold', fontSize: 30}}>
                    Josep
                </Headline>
                <Subheading>
                    Aquarius
                </Subheading>
            </View>
            <Divider style={{marginTop: 25}}/>
            <View style={{marginHorizontal: 20, justifyContent: 'flex-start', marginTop: 25}}>

                <Button icon="cake-variant" style={{alignItems: 'flex-start'}} labelStyle={{marginLeft: 23, fontSize: 20}}
                        theme={{colors: {primary: colors.text}}}>
                    03/02/1994
                </Button>
                <Button icon="gender-transgender" style={{alignItems: 'flex-start'}} labelStyle={{marginLeft: 23, fontSize: 20}}
                        uppercase={false}
                        theme={{colors: {primary: colors.text}}}>
                    Male
                </Button>
                <Button icon="heart-circle" style={{alignItems: 'flex-start'}} labelStyle={{marginLeft: 23, fontSize: 20}}
                        uppercase={false}
                        theme={{colors: {primary: colors.text}}}>
                    Its complicated
                </Button>
            </View>
            <Divider style={{marginTop: 25}}/>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={{alignItems: 'center', flex: 1, paddingVertical: 25}}>
                    <Title>25</Title>
                    <Caption>Lucky number </Caption>
                </View>
                <View style={{alignItems: 'center', flex: 1, paddingVertical: 25}}>
                    <Title>Scorpio</Title>
                    <Caption>Best match</Caption>
                </View>
            </View>
            <Divider/>
            <View style={{marginHorizontal: 20, justifyContent: 'flex-start', marginTop: 25}}>
                <Button icon="star" style={{alignItems: 'flex-start'}} labelStyle={{marginLeft: 23, fontSize: 20}}
                        uppercase={false}>
                    Your favourite days
                </Button>
                <Button icon="account-multiple" style={{alignItems: 'flex-start', marginTop: 10,}}
                        labelStyle={{marginLeft: 23, fontSize: 20}} uppercase={false}>
                    Share to your friends
                </Button>
                <Button icon="settings" style={{alignItems: 'flex-start', marginTop: 10,}}
                        labelStyle={{marginLeft: 23, fontSize: 20}} uppercase={false}>
                    Options
                </Button>
            </View>
            <Divider style={{marginTop: 25}}/>
            <View style={{marginHorizontal: 20, justifyContent: 'flex-start', marginTop: 25, marginBottom: 25}}>
                <View style={{flexDirection : 'row',justifyContent : 'space-between', alignItems : 'center'}}>
                    <Button icon="brightness-6" style={{alignItems: 'flex-start', marginTop: 10,}}
                            labelStyle={{marginLeft: 23, fontSize: 22}} uppercase={false} theme={{colors: {primary: colors.text}}}>
                        Dark theme
                    </Button>
                    <Switch
                        onChange={_handleDarkThemeChange}
                        value={theme === 'dark'}
                    />
                </View>
            </View>
        </DefaultScrollView>
    );
}

const styles = StyleSheet.create({
    addressContainer: {
        padding: 10, alignItems: 'center', flexDirection: 'row', elevation: 2
    },
    sectionTitle: {
        paddingHorizontal: 5, marginBottom: 10
    },
    graphSurface: {
        marginTop: 10,
        elevation: 2,
        paddingHorizontal: 5,
        paddingVertical: 10
    }
});

export default withTheme(ProfileScreen);