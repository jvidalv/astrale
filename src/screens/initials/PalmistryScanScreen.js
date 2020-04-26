import React from "react";
import {Alert, StyleSheet, View} from "react-native";
import {Button, Headline, ProgressBar, Text, Title, useTheme, withTheme} from "react-native-paper";
import {DefaultView} from "../../components/containers";
import {Camera} from 'expo-camera';
import {Scanner} from "../../components/animations";
import ActivityIndicator from "react-native-paper/src/components/ActivityIndicator";
import sleep from "../../utils/Sleep";
import Aquarius from "../../svgs/Aquarius";
import Constellation from "../../svgs/Constellation";
import useScanner from "../../hooks/useScanner";
import PlatformUtils from "../../utils/Platform";
import i18n from "i18n-js";

/**
 * @param navigation
 * @returns {*}
 * @constructor
 */
function PalmistryScanScreen({navigation}) {
    const {colors} = useTheme();
    const [hand, setHand] = React.useState('left');
    const [scan, setScan] = React.useState(false);
    const [steps, setSteps] = React.useState(0);
    const [refCamera, setRefCamera] = React.useState();
    const [hasPermission, setHasPermission] = React.useState(null);
    const [handDetected, setHandDetected] = React.useState(false);
    const [pictureSize, setPictureSize] = React.useState(pictureSize);
    const {match} = useScanner(refCamera, scan);

    React.useEffect(() => {
        (
            async () => {
                const {status} = await Camera.requestPermissionsAsync();
                setHasPermission(status === 'granted');
            }
        )();
    }, []);

    React.useEffect(() => {
        if (match && scan) {
            setSteps(steps => steps + 1);
        }
        if (match !== handDetected) {
            setHandDetected(match);
        }
    }, [match])

    React.useEffect(() => {
        if (steps === 5) {
            setScan(false);
            setSteps(0);
            if (hand === 'left') {
                setHandDetected(false);
                setHand('right');
                Alert.alert(i18n.t('Now place your right hand in front of the camera'),
                    null,
                    [
                        {text: i18n.t('Ok'), onPress: () => sleep(2000).then(() => setScan(true))}
                    ]
                );
            } else {
                navigation.reset({
                    index: 0,
                    routes: [{name: 'Loading'}],
                });
            }
        }
    }, [steps])

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
        <DefaultView>
            <Aquarius width={80} height={80} style={styles.aquarius}/>
            <Constellation height={250} width={250} style={styles.constellation}/>
            <View style={styles.counterContainer}>
                <View style={styles.counterView}>
                    <Text style={styles.counterText}>5/5</Text>
                </View>
            </View>
            <View style={{flex: .2}}/>
            <View style={styles.textContainer}>
                <Headline style={styles.textHeadline}>{i18n.t('Palmistry')}</Headline>
                <Text
                    style={styles.textText}>{i18n.t('{name}, to receive your palmistry readings please follow the instructions on the screen', {name: 'Josep'})}</Text>
            </View>
            {
                !hasPermission ? <View
                    styles={styles.cameraContainer}><Text>{i18n.t('There\'s no permission to use the camera')}</Text></View> : (
                    <Camera pictureSize={pictureSize} onCameraReady={_handleCameraReady}
                            ref={ref => setRefCamera(ref)}
                            style={[styles.cameraContainer, {
                                borderColor: colors.accent,
                            }]} type={Camera.Constants.Type.back}>
                        <View style={styles.cameraView}>
                            {handDetected && scan ? <Scanner start={true} style={{
                                borderTopWidth: 3,
                                borderBottomWidth: 3,
                                borderColor: colors.accent,
                                opacity: .7
                            }}/> : handDetected === false &&
                                <View style={styles.cameraNoHand}>
                                    <Title>{i18n.t('No hand')}</Title>
                                </View>
                            }
                        </View>
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
                    routes: [{name: 'Loading'}],
                })}>Skip</Button>
            </View>
        </DefaultView>
    );
}

const styles = StyleSheet.create({
    progressContainer: {
        paddingVertical: 20,
        paddingHorizontal: 20,
        zIndex: 1,
    },
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
        flex: 1.8,
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
    inputStyle: {
        borderRadius: 5, textAlign: 'center',
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


export default withTheme(PalmistryScanScreen);