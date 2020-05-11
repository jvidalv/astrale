import React from "react";
import {Alert, StyleSheet, TouchableOpacity, View, Image} from "react-native";
import {Button, Headline, ProgressBar, Text, useTheme} from "react-native-paper";
import {DefaultView} from "../../components/containers";
import {Camera} from 'expo-camera';
import ActivityIndicator from "react-native-paper/src/components/ActivityIndicator";
import {Backgrounds} from "../../svgs";
import PlatformUtils from "../../utils/Platform";
import i18n from "i18n-js";
import {useGlobals} from "../../contexts/Global";
import {useIsDark} from "../../hooks/useTheme";
import SpaceSky from "../../components/decorations/SpaceSky";
import Hand from "../../svgs/Hand";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function PalmistryScanScreen({navigation, route}) {
    // Screen is reused in main navigation
    const isMain = route.params?.main;
    const [{session}, dispatch] = useGlobals();
    const {colors} = useTheme();
    const [hand, setHand] = React.useState('left');
    const [photo, setPhoto] = React.useState();
    const [scan, setScan] = React.useState(false);
    const [steps, setSteps] = React.useState(0);
    const [refCamera, setRefCamera] = React.useState();
    const [hasPermission, setHasPermission] = React.useState(null);
    const [handDetected, setHandDetected] = React.useState(false);
    const [pictureSize, setPictureSize] = React.useState(pictureSize);

    React.useEffect(() => {
        (
            async () => {
                const {status} = await Camera.requestPermissionsAsync();
                setHasPermission(status === 'granted');
            }
        )();
    }, []);

    // React.useEffect(() => {
    //     if (match && scan) {
    //         setSteps(steps => steps + 1);
    //     }
    //     if (match !== handDetected) {
    //         setHandDetected(match);
    //     }
    // }, [match])

    // React.useEffect(() => {
    //     if (steps === 5) {
    //         setScan(false);
    //         setSteps(0);
    //         if (hand === 'left') {
    //             setHandDetected(false);
    //             setHand('right');
    //             Alert.alert(i18n.t('Now place your right hand in front of the camera'),
    //                 null,
    //                 [
    //                     {text: i18n.t('Ok'), onPress: () => Sleep(2000).then(() => setScan(true))}
    //                 ]
    //             );
    //         } else {
    //             Storer.set(SESSION_KEY, {...session, palmistry: true}).then(() => {
    //                 dispatch({
    //                     type: 'setSession',
    //                     fields: {palmistry: true}
    //                 })
    //                 !isMain && navigation.reset({
    //                     index: 0,
    //                     routes: [{name: 'Loading'}],
    //                 });
    //             })
    //         }
    //     }
    // }, [steps])
    const _handleTakePhoto = async () => {
        const base64 = awaitrefCamera.takePictureAsync({
            base64: true,
        }).then((response) => response.base64)
        .catch(() => false);
        refCamera.pausePreview();

    }

    const _handleCameraReady = () => {
        if (PlatformUtils.isAndroid) {
            //@todo
        } else {
            setPictureSize('1280x720')
        }

        Alert.alert(i18n.t('Lets start with the left hand'), null, [
            {
                text: i18n.t('Ok'),
                onPress: () => Alert.alert(i18n.t('Put the palm of your hand visible to the camera before you press ok'), i18n.t('Wait a couple of seconds while it detects your hand'), [
                    {text: i18n.t('Ok'), onPress: () => setScan(true)}
                ])
            }
        ])
    }

    return (
        <DefaultView barStyle={useIsDark() ? 'light-content' : 'dark-content'}>
            <SpaceSky/>
            <Backgrounds.Constellation color={colors.text} dotColor={colors.primary} height={250} width={250}
                                       style={styles.constellation}/>
            <View style={{flex: .2}}/>
            <View style={styles.textContainer}>
                <Headline style={styles.textHeadline}>{i18n.t('Palmistry')}</Headline>
            </View>
            {
                !hasPermission ? (
                        <View
                            style={styles.cameraContainer}>
                            <Text style={{color: colors.error}}>{i18n.t('There\'s no permission to use the camera')}</Text>
                        </View>)
                    : (
                        <Camera pictureSize={pictureSize} onCameraReady={_handleCameraReady}
                                ref={ref => setRefCamera(ref)}
                                style={[styles.cameraContainer, {
                                    borderColor: colors.accent,
                                }]} type={Camera.Constants.Type.back}>
                            <Hand height={400} width={420}/>
                            <TouchableOpacity onPress={_handleTakePhoto} style={{
                                height: 60,
                                width: 60,
                                backgroundColor: colors.accent + '70',
                                position: 'absolute',
                                bottom: -30,
                                borderRadius: 50,
                                borderColor: colors.text,
                                borderWidth: 5
                            }}/>
                        </Camera>
                    )
            }
            <View style={styles.progressContainer}>
                <View style={styles.progressBarContainer}>
                    <Text style={{textAlign: 'center',}}>{i18n.t('Progress')}</Text>
                    <ActivityIndicator color={colors.primary} style={{alignSelf: 'flex-end'}} size={15}
                                       animating={!!handDetected && scan}/>
                </View>
                <ProgressBar progress={steps * .20}
                             style={styles.progressBar}/>
                <Button onPress={() => navigation.reset({
                    index: 0,
                    routes: [{name: isMain ? 'Palmistry' : 'Loading'}],
                })}>{i18n.t(isMain ? 'Back' : 'Skip')}</Button>
            </View>
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    progressContainer: {
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    constellation: {
        zIndex: 0, position: 'absolute', bottom: 20, left: 20, opacity: 0.1
    },
    aquarius: {
        zIndex: 0, position: 'absolute', top: 20, right: 20, opacity: 0.2
    },
    textContainer: {
        flex: .5, alignSelf: 'center', paddingHorizontal: 20
    },
    textHeadline: {
        textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold'
    },
    textText: {
        textAlign: 'center', paddingVertical: 5
    },
    palmistryContainer: {
        alignSelf: 'center', zIndex: 1, borderWidth: 2, padding: 20, borderRadius: 50, borderColor: '#FFFFFF50'
    },
    cameraContainer: {
        flex: 2.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cameraView: {
        width: '70%',
        height: '80%',
        opacity: .8,
        borderWidth: 5,
        borderRadius: 20,
    },
    cameraNoHand: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    buttonContainer: {
        flex: 1, paddingHorizontal: 20, paddingTop: 35, justifyContent: 'flex-end', marginBottom: 20
    },
    progressBarContainer: {
        flexDirection: 'row',
        width: 200,
        alignSelf: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    progressBar: {
        borderRadius: 10,
        width: 200,
        height: 10,
        alignSelf: 'center',
        marginBottom: 10,
    }
})


export default PalmistryScanScreen;