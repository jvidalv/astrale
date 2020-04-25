import React from "react";
import {Alert, StyleSheet, View} from "react-native";
import {ProgressBar, Text, Title, useTheme, withTheme, Button} from "react-native-paper";
import {DefaultView} from "../../components/containers";
import {Camera} from 'expo-camera';
import {Scanner} from "../../components/animations";
import ActivityIndicator from "react-native-paper/src/components/ActivityIndicator";
import useScanner from "../../hooks/useScanner";

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
    const [flash, setFlash] = React.useState('off')
    const {match} = useScanner(refCamera, scan);

    React.useEffect(() => {
        (
            async () => {
                const {status} = await Camera.requestPermissionsAsync();
                setHasPermission(status === 'granted');
            }
        )();
        Alert.alert('Lets start with the left hand')
    }, []);

    React.useEffect(() => {
        if (match) {
            setSteps(steps + 1);
        }
        if (match !== handDetected) {
            setHandDetected(match);
        }
    }, [match])

    React.useEffect(() => {
        if (steps === 5) {
            setScan(true);
            setSteps(0);
            if(hand === 'left'){
                setHandDetected(false);
                setHand('right');
                Alert.alert('Now place your right hand in front of the camera');
            } else {
                navigation.replace('Loading')
            }
        }
    }, [steps])


    const _handleCameraReady = () => {
        setScan(true);
        setFlash('torch')
    }

    if (hasPermission === null) {
        return <View/>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <DefaultView>
            <Camera onCameraReady={_handleCameraReady} /*flashMode={flash}*/ ref={ref => setRefCamera(ref)}
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} type={Camera.Constants.Type.back}>
                <View style={{
                    flex: 1,
                    borderWidth: 0,
                    borderColor: colors.accent,
                    width: '100%',
                    opacity: .8,
                    borderTopWidth: 10,
                    borderBottomWidth: 10,
                }}>
                    {handDetected && scan ? <Scanner start={true} style={{
                        borderTopWidth: 5,
                        borderBottomWidth: 5,
                        borderColor: colors.primary,
                        opacity: .7
                    }}/> : handDetected === false &&
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center',}}>
                            <Title>No hand</Title>
                        </View>
                    }
                </View>
                {/*<Button onPress={() => setFlash(true)}>Flash</Button>*/}
            </Camera>
            <View style={styles.progressContainer}>
                <View style={{
                    flexDirection: 'row',
                    width: 200,
                    alignSelf: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 10
                }}>
                    <Text style={{textAlign: 'center',}}>Progress</Text>
                    <ActivityIndicator color={colors.primary} style={{alignSelf: 'flex-end'}} size={15} animating={!!handDetected && scan}/>
                </View>

                <ProgressBar progress={steps * .20}
                             style={{
                                 borderRadius: 10,
                                 width: 200,
                                 height: 10,
                                 alignSelf: 'center'
                             }}/>
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
})


export default withTheme(PalmistryScanScreen);